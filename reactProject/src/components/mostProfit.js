import React, { useState, useEffect } from 'react';

const MostProfit = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [timePeriod, setTimePeriod] = useState('day');

  useEffect(() => {
    fetchCryptoData(timePeriod);
  }, [timePeriod]);

  const fetchCryptoData = async (timePeriod) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
      const data = await response.json();
      setCryptoData(data);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
  };

  const changeTimePeriod = (period) => {
    setTimePeriod(period);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Top 10 Most Increased Cryptocurrencies</h1>
      <ul style={styles.cryptoList}>
        {cryptoData.map((crypto, index) => (
          <li key={crypto.id} style={styles.cryptoItem}>
            <span style={styles.cryptoRank}>{index + 1}.</span>
            <span style={styles.cryptoName}>{crypto.name}</span>
            <span style={styles.cryptoPrice}>${crypto.current_price.toFixed(2)}</span>
            <span style={crypto.price_change_percentage_24h > 0 ? styles.cryptoIncrease : styles.cryptoDecrease}>
              {crypto.price_change_percentage_24h > 0 ? `+${crypto.price_change_percentage_24h.toFixed(2)}%` : `${crypto.price_change_percentage_24h.toFixed(2)}%`}
            </span>
          </li>
        ))}
      </ul>
      <div style={styles.buttonContainer}>
        <button style={styles.timePeriodButton} onClick={() => changeTimePeriod('day')}>Last Day</button>
        <button style={styles.timePeriodButton} onClick={() => changeTimePeriod('week')}>Last Week</button>
        <button style={styles.timePeriodButton} onClick={() => changeTimePeriod('month')}>Last Month</button>
        <button style={styles.timePeriodButton} onClick={() => changeTimePeriod('year')}>Last Year</button>
      </div>
    </div>
  );
};

export default MostProfit;

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  cryptoList: {
    listStyleType: 'none',
    padding: 0,
  },
  cryptoItem: {
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cryptoRank: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  cryptoName: {
    flexGrow: 1,
    marginRight: '10px',
  },
  cryptoPrice: {
    marginRight: '10px',
  },
  cryptoIncrease: {
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
    backgroundColor: '#e6ffe6',
    color: '#009900',
  },
  cryptoDecrease: {
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
    backgroundColor: '#ffe6e6',
    color: '#ff3300',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  timePeriodButton: {
    margin: '0 5px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    outline: 'none', // Remove button outline
    boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.1)', // Add box shadow for depth effect
    transition: 'transform 0.3s ease', // Add transition for hover effect
  },
  timePeriodButtonHover: {
    transform: 'scale(1.1)', // Scale button on hover
  },
};
