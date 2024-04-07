import React from 'react';
import Sidebar from '../components/Sidebar';
import GridMarketplace from '../components/gridMarketplace'; // Assuming you have a component named GridMarketplace

const Marketplace = () => {
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
        <GridMarketplace />
      </div>
    </div>
  );
};

export default Marketplace;
