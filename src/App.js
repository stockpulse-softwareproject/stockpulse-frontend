import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ComponentList from './components/ComponentList';
import NavigationPanel from './components/NavigationPanel';
import AddComponent from './components/AddComponent';
import Purchases from './components/Purchases'; // Import Purchases
import AddPurchase from './components/AddPurchase'; // Import AddPurchase
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginPage from './components/loginpage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationPanel />
        <div className="content">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/components" element={<ComponentList />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/add-component" element={<AddComponent />} />
            <Route path="/purchases" element={<Purchases />} /> {/* New route for Purchases */}
            <Route path="/add-purchase" element={<AddPurchase />} /> {/* New route for AddPurchase */}
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
