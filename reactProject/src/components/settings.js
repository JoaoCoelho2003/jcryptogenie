import React, { useState } from 'react';

const Settings = () => {
  const [risk, setRisk] = useState('Medium');
  const [media, setMedia] = useState(50);
  const [prices, setPrices] = useState(50);

  const handleRiskChange = (event) => {
    const value = parseInt(event.target.value);
    let riskLevel;
    if (value <= 33) {
      riskLevel = 'Low';
    } else if (value <= 66) {
      riskLevel = 'Medium';
    } else {
      riskLevel = 'High';
    }
    setRisk(riskLevel);
  };

  const handleMediaChange = (event) => {
    setMedia(parseInt(event.target.value));
  };

  const handlePricesChange = (event) => {
    setPrices(parseInt(event.target.value));
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Settings</h2>
      <div style={sliderContainerStyle}>
        <label htmlFor="risk" style={labelStyle}>Risk Level</label>
        <input
          type="range"
          id="risk"
          min="0"
          max="100"
          value={risk === 'Low' ? 0 : risk === 'Medium' ? 50 : 100}
          onChange={handleRiskChange}
          style={sliderStyle}
        />
        <span style={sliderValueStyle}>{risk}</span>
      </div>
      <div style={sliderContainerStyle}>
        <label htmlFor="media" style={labelStyle}>Media Exposure</label>
        <input
          type="range"
          id="media"
          min="0"
          max="100"
          value={media}
          onChange={handleMediaChange}
          style={sliderStyle}
        />
        <span style={sliderValueStyle}>{media}%</span>
      </div>
      <div style={sliderContainerStyle}>
        <label htmlFor="prices" style={labelStyle}>Price Sensitivity</label>
        <input
          type="range"
          id="prices"
          min="0"
          max="100"
          value={prices}
          onChange={handlePricesChange}
          style={sliderStyle}
        />
        <span style={sliderValueStyle}>{prices}%</span>
      </div>
    </div>
  );
};

export default Settings;

const containerStyle = {
  flex: '1',
  padding: '20px',
};

const headerStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const sliderContainerStyle = {
  marginBottom: '30px',
};

const labelStyle = {
  fontSize: '18px',
  marginBottom: '5px',
};

const sliderStyle = {
  width: '100%',
  height: '10px',
  borderRadius: '5px',
  appearance: 'none',
  background: '#f0f0f0',
  outline: 'none',
  opacity: '0.9',
  transition: 'opacity 0.2s, transform 0.2s',
  cursor: 'pointer',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};

const sliderValueStyle = {
  display: 'block',
  textAlign: 'center',
  marginTop: '5px',
  fontSize: '14px',
  color: '#666',
};
