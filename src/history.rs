use serde::Deserialize;

const API_ENDPOINT: &'static str = "https://api-sandbox.uphold.com/v0/ticker/USD";

#[derive(Deserialize, Debug)]
pub struct ExchangeRate {
    pub ask: f64,
    pub bid: f64,
    pub currency: String,
    pub pair: String,
}

pub fn fetch_exchange_rates() -> Result<Vec<ExchangeRate>, reqwest::Error> {
    let client = reqwest::blocking::Client::new();
    let res = client
        .get("https://api-sandbox.uphold.com/v0/ticker/USD")
        .send()?;

    dbg!(res.text()).expect("");
    Ok(reqwest::blocking::get(API_ENDPOINT)?.json()?)
}