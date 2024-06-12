// AddComponent.js
import React from 'react';
import './AddComponent.css'; // Import the CSS file for styling

const AddComponent = () => {
  return (
    <div className="add-component-container">
      <div className="sidebar">
        <div className="branding">
          <h1>STOCKPULSE</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/components" className="active">Component List</a></li>
            <li><a href="/low-stocks">Low Stocks</a></li>
            <li><a href="/purchasing">Purchasing</a></li>
            <li><a href="/bom-ordering">BoM Ordering</a></li>
            <li><a href="/landing">Landing</a></li>
            <li><a href="/analytics">Analytics</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/help-centre">Help Centre</a></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header>
          <h2>Add <span className="highlight">Components</span></h2>
          <div className="search-bar">
            <input type="text" placeholder="Search here" />
          </div>
          <div className="consulting">
            <span>Excel Tech Consulting</span>
          </div>
        </header>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label>Component Type :</label>
              <select>
                <option>Resistor</option>
                <option>Capacitor</option>
                <option>Inductor</option>
                <option>Transistor</option>
              </select>
            </div>
            <div className="form-group">
              <label>Manufacture Part No :</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Value :</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Voltage Rating :</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Datasheets :</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Footprint :</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Approval :</label>
              <input type="checkbox" />
            </div>
            <div className="form-buttons">
              <button type="submit" className="add-button">ADD</button>
              <button type="button" className="cancel-button">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComponent;
