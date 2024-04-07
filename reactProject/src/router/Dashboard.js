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
  };

  return (
    <div style={containerStyle}>
      <Sidebar />
      <div style={contentStyle}>
        <CryptoGraph width={1600} height={600} />
        <MostProfit />
        <TradingBot /> {}
      </div>
    </div>
  );
};

export default Dashboard;
