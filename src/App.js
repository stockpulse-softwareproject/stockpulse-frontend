// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ComponentList from './components/ComponentList';
import NavigationPanel from './components/NavigationPanel';
import AddComponent from './components/AddComponent'; // Import the new AddComponent
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
            <Route path="/" element={< LoginPage/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/components" element={<ComponentList />} />
            <Route path="/register" element={<RegisterForm/>} /> {/* Register route */}
            <Route path="/add-component" element={<AddComponent />} /> {/* New route for AddComponent */}
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
