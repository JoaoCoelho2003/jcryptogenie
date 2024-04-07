import React from 'react';
import { Sidebar as sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ position: 'relative' }}>
      <sidebar style={{ position: 'absolute', top: '0', bottom: '0', left: '0', width: '200px' }}>
        <div style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Added Link wrapper */}
            <h2>Crypto Genie</h2>
          </Link>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem component={<Link to="/" />}> Dashboard</MenuItem> {/* Updated Link */}
          <MenuItem component={<Link to="/marketplace" />}> Marketplace</MenuItem>
          <MenuItem component={<Link to="/settings" />}> Settings</MenuItem>
        </Menu>
      </sidebar>
      <div style={{ position: 'absolute', bottom: '0', left: '200px', width: '2px', backgroundColor: '#ddd', top: '0' }}></div> {/* Vertical line */}
    </div>
  );
};

export default Sidebar;
