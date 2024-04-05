use serde::Deserialize;

const API_ENDPOINT: &'static str = "https://api.uphold.com/v0/ticker/USD";

#[derive(Deserialize, Debug)]
pub struct ExchangeRate {
    pub ask: String,
    pub bid: String,
    pub currency: String,
    pub pair: String,
}

pub fn fetch_exchange_rates() -> anyhow::Result<Vec<ExchangeRate>> {
    let response = ureq::get(API_ENDPOINT).call()?;
    let body: String = response.into_string()?;

    Ok(serde_json::from_str(&body)?)
}