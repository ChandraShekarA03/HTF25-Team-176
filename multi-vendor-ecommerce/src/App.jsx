import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './styles/profile.css';

// Import pages
import Landing from './pages/landing';
import Cart from './pages/cart';
import ProfileLayout from './pages/profile/ProfileLayout';
import ProfileOverview from './pages/profile/ProfileOverview';
import Orders from './pages/profile/Orders';
import OrderDetails from './pages/profile/OrderDetails';
import PaymentMethods from './pages/profile/PaymentMethods';
import Wishlist from './pages/profile/Wishlist';
import Addresses from './pages/profile/Addresses';
import Settings from './pages/profile/Settings';

function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route 
          path="/profile" 
          element={isAuthenticated ? <ProfileLayout /> : <Navigate to="/" />}
        >
          <Route index element={<ProfileOverview />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderId" element={<OrderDetails />} />
          <Route path="payment-methods" element={<PaymentMethods />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
