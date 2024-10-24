import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComponentList from './components/ComponentList';
import AddComponent from './components/AddComponent';
import RegisterForm from './components/RegisterForm';
import LoginPage from './components/loginpage';
import Dashboard from './components/Dashboard';
import NotificationPanel from './components/NotificationPanel';
import Layout from './components/Layout';
import LowStocks from './components/LowStocks';
import Purchases from './components/Purchases';
import AddPurchase from './components/AddPurchase';
import LendComponentsPage from './components/LendComponentsPage';
import BoMOrdering from './components/BoMOrdering';
import Settings from './components/Settings';
import HelpCenter from './components/HelpCenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentRequestPage from './components/ComponentRequestPage';
import BoMOrdersPage from './components/BoMOrdersPage';

const App = () => {

  const [isNotificationPanelVisible, setNotificationPanelVisible] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes that do not require the NavigationPanel */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterForm />} />
        

          {/* Routes that require the NavigationPanel */}
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/components"
            element={
              <Layout>
                <ComponentList />
              </Layout>
            }
          />
          <Route
            path="/lowstocks"
            element={
              <Layout>
                <LowStocks />
              </Layout>
            }
          />
          <Route
            path="/add-component"
            element={
              <Layout>
                <AddComponent />
              </Layout>
            }
          />
          <Route
            path="/purchases"
            element={
              <Layout>
                <Purchases />
              </Layout>
            }
          />
          <Route
            path="/add-purchase"
            element={
              <Layout>
                <AddPurchase />
              </Layout>
            }
          />
           <Route
            path="/bom-ordering"
            element={
              <Layout>
                <BoMOrdering />
              </Layout>
            }
          />
          <Route
            path="/lending"
            element={
              <Layout>
                <LendComponentsPage />
              </Layout>
            }
          />
          <Route
            path="/settings"
            element={
              <Layout>
                <Settings />
              </Layout>
            }
          />
          <Route
            path="/help"
            element={
              <Layout>
                <HelpCenter />
              </Layout>
            }
          />
          <Route
            path="/componentRequest"
            element={
              <Layout>
                <ComponentRequestPage />
              </Layout>
            }
          />
           <Route
            path="/bomorderslist"
            element={
              <Layout>
                <BoMOrdersPage />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
