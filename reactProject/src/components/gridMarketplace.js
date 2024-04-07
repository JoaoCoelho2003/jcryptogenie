import React from 'react';
import TradingBotSettings from './tradingBotSettings'; // Assuming the component file is in the same directory

const GridMarketplace = () => {
  // Define an array of bot settings
  const bots = [
    { id: 1, name: 'Bot 1', risk: 'Low', media: 30, prices: 70 },
    { id: 2, name: 'Bot 2', risk: 'Medium', media: 50, prices: 50 },
    { id: 3, name: 'Bot 3', risk: 'High', media: 70, prices: 30 },
    { id: 4, name: 'Bot 4', risk: 'Low', media: 40, prices: 60 },
    { id: 5, name: 'Bot 5', risk: 'Medium', media: 60, prices: 40 },
    { id: 6, name: 'Bot 6', risk: 'High', media: 80, prices: 20 },
    { id: 7, name: 'Bot 7', risk: 'Low', media: 35, prices: 65 },
    { id: 8, name: 'Bot 8', risk: 'Medium', media: 55, prices: 45 },
    { id: 9, name: 'Bot 9', risk: 'High', media: 75, prices: 25 },
    { id: 10, name: 'Bot 10', risk: 'Low', media: 45, prices: 55 },
    { id: 11, name: 'Bot 11', risk: 'Medium', media: 65, prices: 35 },
    { id: 12, name: 'Bot 12', risk: 'High', media: 85, prices: 15 },
  ];

  // Create a grid layout with CSS Grid
  const styles = {
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // Adjust columns as needed
      gap: '20px',
      padding: '20px',
    },
  };

  return (
    <div style={styles.gridContainer}>
      {/* Map over the array of bot settings and render TradingBotSettings components */}
      {bots.map((bot) => (
        <TradingBotSettings
          key={bot.id}
          botName={bot.name}
          initialRisk={bot.risk}
          initialMedia={bot.media}
          initialPrices={bot.prices}
        />
      ))}
    </div>
  );
};

export default GridMarketplace;
