import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Cart from '../pages/Cart';
import Account from '../pages/Account';
import Login from '../pages/Login';
import AdminDashboard from '../pages/admin/Dashboard';
import DeliveryPanel from '../pages/delivery/Panel';
import ProtectedRoute from './ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route
          path="account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/*"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="delivery/*"
          element={
            <ProtectedRoute requiredRole="delivery">
              <DeliveryPanel />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}