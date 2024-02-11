import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import Events from '../components/events/Events';
import Wishlist from '../components/wishlist/Wishlist';
import Registration from '../pages/register/Register';
import About from '../components/About/about';

const IndexRoute = ({ authenticated, login }) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage login={login} />} />
      <Route path="/register" element={<Registration />} />
      {authenticated ? (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/event" element={<Events />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
        </>
      ) : (
        <Route
          path="/*"
          element={<Navigate to="/" replace />}
        />
      )}
    </Routes>
  );
};

export default IndexRoute;
