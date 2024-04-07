import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import SettingsMenu from '../components/settings';

const Settings = () => {
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const updateContentWidth = () => {
      const sidebarWidth = 200;
      const contentMargin = 20;
      const availableWidth = window.innerWidth - sidebarWidth - contentMargin;
      setContentWidth(availableWidth);
    };

    window.addEventListener('resize', updateContentWidth);
    updateContentWidth();

    return () => {
      window.removeEventListener('resize', updateContentWidth);
    };
  }, []);

  const containerStyle = {
    display: 'flex',
  };

  const sidebarWidth = 200; // Width of the Sidebar
  const contentMargin = 20; // Margin between Sidebar and SettingsMenu

  const sidebarStyle = {
    width: `${sidebarWidth}px`,
  };

  const contentStyle = {
    marginLeft: `${sidebarWidth + contentMargin}px`,
    width: `${contentWidth}px`,
  };

  return (
    <div style={containerStyle}>
      <Sidebar style={sidebarStyle} />
      <div style={contentStyle}>
        <SettingsMenu />
      </div>
    </div>
  );
};

export default Settings;
