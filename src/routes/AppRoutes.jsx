import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../pages/Hero';
import Home from '../pages/Home';
import Layouts from '../layout/Layouts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layouts />}>
        <Route index element={<Hero />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
