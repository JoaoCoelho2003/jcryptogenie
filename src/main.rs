mod history;

fn main() {
    let rates = history::fetch_exchange_rates();
    rates.iter().for_each(|rate| println!("{:?}", rate));
}
