import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './router/Dashboard';
import Marketplace from './router/Marketplace';
import Settings from './router/Settings';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <div className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
