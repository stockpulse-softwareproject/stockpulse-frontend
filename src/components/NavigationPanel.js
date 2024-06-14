// src/components/NavigationPanel.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaCog, FaBoxOpen, FaShoppingCart, FaClipboardList, FaHandHoldingUsd, FaChartLine } from 'react-icons/fa'; // Import specific icons from react-icons
import './NavigationPanel.css';

const NavigationPanel = () => {
  return (
    <div className="navigation-panel">
      <div className="logo">STOCKPULSE</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">
              <FaTachometerAlt className="nav-icon" /> {/* Dashboard Icon */}
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/components">
              <FaCog className="nav-icon" /> {/* Components Icon */}
              <span>Components</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/low-stocks">
              <FaBoxOpen className="nav-icon" /> {/* Low Stocks Icon */}
              <span>Low Stocks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/purchases">
              <FaShoppingCart className="nav-icon" /> {/* Purchasing Icon */}
              <span>Purchasing</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/bom-ordering">
              <FaClipboardList className="nav-icon" /> {/* BoM Ordering Icon */}
              <span>BoM Ordering</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lending">
              <FaHandHoldingUsd className="nav-icon" /> {/* Lending Icon */}
              <span>Lending</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics">
              <FaChartLine className="nav-icon" /> {/* Analytics Icon */}
              <span>Analytics</span>
            </NavLink>
          </li>
          {/* Add other nav links here */}
        </ul>
      </nav>
      <div className="settings-help">
        <NavLink to="/settings">
          <FaCog className="nav-icon" /> {/* Settings Icon */}
          <span>Settings</span>
        </NavLink>
        <NavLink to="/help">Help Centre</NavLink>
      </div>
    </div>
  );
};

export default NavigationPanel;
