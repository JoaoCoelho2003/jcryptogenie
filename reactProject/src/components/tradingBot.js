import React, { useState, useEffect } from 'react';

const TradingBot = () => {
  const [balance, setBalance] = useState(1000);
  const [previousPrices, setPreviousPrices] = useState({});
  const [prices, setPrices] = useState({});
  const [stocks, setStocks] = useState({ bitcoin: 0, ethereum: 0, litecoin: 0, dogecoin: 0, ripple: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      fetchPrices();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    makeDecision();
  }, [prices, previousPrices]); // Include previousPrices in the dependencies array

  const fetchPrices = async () => {
    try {
      const response = await fetch('https://api.uphold.com/v0/ticker/USD', {
        headers: {
          'Origin': 'http://localhost:3000',
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
      const data = await response.json();
      setPreviousPrices(prices);
      setPrices(data);
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };
  
  

  const makeDecision = () => {
    Object.entries(prices).forEach(([coin, price]) => {
      const previousPrice = previousPrices[coin];
      if (previousPrice) {
        const priceDifference = price - previousPrice;
        if (priceDifference > 0) {
          const amountToSell = stocks[coin];
          if (amountToSell > 0) {
            setBalance(prevBalance => prevBalance + (amountToSell * price));
            setStocks(prevStocks => ({ ...prevStocks, [coin]: 0 }));
          }
        } else if (priceDifference < 0) {
          const amountToBuy = balance / price; // Calculate the amount to buy based on the current balance
          if (amountToBuy > 0) {
            setBalance(prevBalance => prevBalance - (amountToBuy * price));
            setStocks(prevStocks => ({ ...prevStocks, [coin]: prevStocks[coin] + amountToBuy }));
          }
        }
      }
    });
  };

  return (
    <div>
      <div>Balance: ${balance}</div>
      <div>
        {Object.entries(stocks).map(([coin, stock]) => (
          <div key={coin}>
            {coin}: {stock}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingBot;
