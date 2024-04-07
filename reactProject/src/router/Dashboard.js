import React from 'react';
import CryptoGraph from '../components/CryptoGraph';
import Sidebar from '../components/Sidebar';
import MostProfit from '../components/mostProfit';
import TradingBot from '../components/tradingBot';

const Dashboard = () => {
  const containerStyle = {
    display: 'flex',
  };

  const sidebarWidth = 200;
  const contentMargin = 20;

  const contentStyle = {
    marginLeft: `${sidebarWidth + contentMargin}px`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    marginTop: '20px', // Add margin top for space between TradingBot and top of the screen
  };

  return (
    <div style={containerStyle}>
      <Sidebar />
      <div style={contentStyle}>
        <TradingBot />
        <CryptoGraph width={1600} height={600} />
        <MostProfit />
      </div>
    </div>
  );
};

export default Dashboard;
