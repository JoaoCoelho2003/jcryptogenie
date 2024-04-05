use serde::Deserialize;

const API_ENDPOINT: &'static str = "https://api.uphold.com/v0/ticker/USD";

#[derive(Deserialize, Debug)]
pub struct ExchangeRate {
    #[serde(deserialize_with = "parse_f64")]
    pub ask: f64,
    #[serde(deserialize_with = "parse_f64")]
    pub bid: f64,
    pub currency: String,
    pub pair: String,
}

fn parse_f64<'de, D>(deserializer: D) -> Result<f64, D::Error>
    where
        D: serde::Deserializer<'de>,
{
    let s = String::deserialize(deserializer)?;
    Ok(s.parse().unwrap())
}

pub fn fetch_exchange_rates() -> anyhow::Result<Vec<ExchangeRate>> {
    let response = ureq::get(API_ENDPOINT).call()?;
    let body: String = response.into_string()?;

    Ok(serde_json::from_str(&body)?)
}