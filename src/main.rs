use axum::{extract::ws::WebSocketUpgrade, response::Html, Router, routing::get};
use dioxus::prelude::*;
use tower_http::services::ServeDir;

use crate::history::fetch_exchange_rates;

mod history;

fn app() -> Element {
    let mut state = use_signal(|| fetch_exchange_rates().unwrap_or_default());
    use_future(move || async move {
        loop {
            if let Ok(rates) = fetch_exchange_rates() {
                state.set(rates);
            }
            tokio::time::sleep(std::time::Duration::from_millis(1)).await;
        }
    });

    rsx! {
        for exchange in state.iter() {
            div {
                class: "text-4xl",
                "{exchange.pair} - {exchange.bid}"
            }
        }
    }
}

#[tokio::main]
async fn main() {
    let addr: std::net::SocketAddr = ([127, 0, 0, 1], 3030).into();

    let view = dioxus_liveview::LiveViewPool::new();

    let app = Router::new()
        .nest_service("/public", ServeDir::new("public"))
        .route(
            "/",
            get(move || async move {
                Html(format!(
                    r#"
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Dioxus LiveView with axum</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <body> <div id="main"></div> </body>

                {glue}
            </html>
            "#,
                    glue = dioxus_liveview::interpreter_glue(&format!("ws://{addr}/ws"))
                ))
            }),
        )
        .route(
            "/ws",
            get(move |ws: WebSocketUpgrade| async move {
                ws.on_upgrade(move |socket| async move {
                    _ = view.launch(dioxus_liveview::axum_socket(socket), app).await;
                })
            }),
        );

    println!("Listening on https://{addr}");

    let listener = tokio::net::TcpListener::bind(&addr).await.unwrap();
    axum::serve(listener, app.into_make_service())
        .await
        .unwrap();
}