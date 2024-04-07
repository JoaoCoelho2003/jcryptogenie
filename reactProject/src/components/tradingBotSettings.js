import React from 'react';

const TradingBotSettings = ({ botName, initialRisk, initialMedia, initialPrices }) => {
  const styles = {
    botContainer: {
      border: '1px solid #ccc',
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
    },
    sliderContainer: {
      marginBottom: '30px',
    },
    labelStyle: {
      fontSize: '18px',
      marginBottom: '5px',
    },
    sliderStyle: {
      width: '100%',
      height: '10px',
      borderRadius: '5px',
      appearance: 'none',
      background: '#f0f0f0',
      outline: 'none',
      opacity: '0.9',
      transition: 'opacity 0.2s, transform 0.2s',
      cursor: 'default', // Prevent slider interaction
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    sliderValueStyle: {
      display: 'block',
      textAlign: 'center',
      marginTop: '5px',
      fontSize: '14px',
      color: '#666',
    },
    button: {
      margin: '5px',
      padding: '10px 20px',
      borderRadius: '5px',
      background: '#fff',
      color: '#1e3a8a',
      border: '1px solid #1e3a8a',
      cursor: 'pointer',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'background 0.3s',
      outline: 'none',
      fontSize: '16px',
    },
    buttonHover: {
      background: '#1e3a8a',
      color: '#fff',
    },
  };

  const handleHover = (event) => {
    event.target.style.backgroundColor = styles.buttonHover.background;
    event.target.style.color = styles.buttonHover.color;
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = styles.button.background;
    event.target.style.color = styles.button.color;
  };

  return (
    <div style={styles.botContainer}>
      <h3>{botName}</h3>
      <div style={styles.sliderContainer}>
        <label htmlFor="risk" style={styles.labelStyle}>Risk Level</label>
        <input
          type="range"
          id="risk"
          min="0"
          max="100"
          value={initialRisk === 'Low' ? 0 : initialRisk === 'Medium' ? 50 : 100}
          disabled // Disable slider interaction
          style={styles.sliderStyle}
        />
        <span style={styles.sliderValueStyle}>{initialRisk}</span>
      </div>
      <div style={styles.sliderContainer}>
        <label htmlFor="media" style={styles.labelStyle}>Media Exposure</label>
        <input
          type="range"
          id="media"
          min="0"
          max="100"
          value={initialMedia}
          disabled // Disable slider interaction
          style={styles.sliderStyle}
        />
        <span style={styles.sliderValueStyle}>{initialMedia}%</span>
      </div>
      <div style={styles.sliderContainer}>
        <label htmlFor="prices" style={styles.labelStyle}>Price Sensitivity</label>
        <input
          type="range"
          id="prices"
          min="0"
          max="100"
          value={initialPrices}
          disabled // Disable slider interaction
          style={styles.sliderStyle}
        />
        <span style={styles.sliderValueStyle}>{initialPrices}%</span>
      </div>
      <div>
        <button
          type="button"
          className="text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800 transition-colors duration-300 ease-in-out"
          style={styles.button}
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          Copy Settings
        </button>
      </div>
    </div>
  );
};

export default TradingBotSettings;
