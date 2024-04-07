import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { FaCalendarAlt, FaTimesCircle } from 'react-icons/fa';

const CryptoGraph = ({ width, height }) => {
  const [data, setData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('bitcoin');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetchData(selectedCoin);
  }, [selectedCoin]);

  useEffect(() => {
    if (data.length === 0) return;

    const ctx = document.getElementById('crypto-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(entry => new Date(entry[0]).toLocaleDateString()),
        datasets: [{
          label: `${selectedCoin.toUpperCase()} Price (USD)`,
          data: data.map(entry => entry[1]),
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            min: startDate ? new Date(startDate) : undefined,
            max: endDate ? new Date(endDate) : undefined
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [data, selectedCoin, startDate, endDate]);

  const fetchData = async (coin) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=365`);
      const jsonData = await response.json();
      setData(jsonData.prices);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleResetStartDate = () => {
    setStartDate('');
  };

  const handleResetEndDate = () => {
    setEndDate('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingTop: '20px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <button onClick={handleResetStartDate} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '5px', borderRadius: '5px' }}>
            <FaTimesCircle />
          </button>
          <input type="date" value={startDate} onChange={handleStartDateChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <button onClick={handleResetEndDate} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '5px', borderRadius: '5px' }}>
            <FaTimesCircle />
          </button>
          <input type="date" value={endDate} onChange={handleEndDateChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
        </div>
        <select value={selectedCoin} onChange={handleCoinChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px', outline: 'none' }}>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="litecoin">Litecoin</option>
          <option value="dogecoin">Dogecoin</option>
          <option value="ripple">Ripple</option>
        </select>
      </div>
      <canvas id="crypto-chart" width={width} height={height}></canvas>
    </div>
  );
};

export default CryptoGraph;
