import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/LoginForm.jsx';
import SignUp from './pages/SignUpForm.jsx';

// Import fonts
import '@fontsource/lobster-two';
import '@fontsource/playfair-display';
import '@fontsource/nunito';
import '@fontsource/gloria-hallelujah';
import './App.css';
import './styles/profile.css';

// Profile pages
import ProfileLayout from './pages/profile/ProfileLayout';
import ProfileOverview from './pages/profile/ProfileOverview';
import Orders from './pages/profile/Orders';
import OrderDetails from './pages/profile/OrderDetails';
import PaymentMethods from './pages/profile/PaymentMethods';
import Wishlist from './pages/profile/Wishlist';
import Addresses from './pages/profile/Addresses';
import Settings from './pages/profile/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Temporary home page */}
        <Route 
          path="/" 
          element={
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <h1>E-Commerce Platform</h1>
              <p>Welcome! The landing page is being built by your teammate.</p>
              <a href="/profile" style={{ color: '#E85D04', fontSize: '1.2rem', fontWeight: 'bold' }}>
                Go to Profile Section →
              </a>
            </div>
          } 
        />
        {/* Login and Signup routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Profile routes */}
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfileOverview />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderId" element={<OrderDetails />} />
          <Route path="payment-methods" element={<PaymentMethods />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* 404 - Redirect to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

