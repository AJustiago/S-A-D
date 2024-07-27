import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './components/404/notFound';
import Dashboard from './components/dashboard/dashboard';
import SignIn from './components/sign-in/signIn';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;