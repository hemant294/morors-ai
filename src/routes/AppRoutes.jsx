import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../pages/Hero';
import Home from '../pages/Home';
import Layouts from '../layout/Layouts';
import CarInfo from '../pages/CarInfo';
import CompanyInfo from '../pages/CompanyInfo';
import AgentInfo from '../pages/AgentInfo';
import About from '../pages/About';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import HelpingFandQ from '../pages/HelpingFandQ';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layouts />}>
        <Route index element={<Hero />} />
        <Route path='/home' element={<Home />} />
        <Route path='/carInfo' element={<CarInfo />} />
        <Route path='/companyInfo' element={<CompanyInfo />} />
        <Route path='/companyInfo/agentList' element={<CompanyInfo />} />
        <Route path='/agentInfo' element={<AgentInfo />} />
        <Route path='/about' element={<About />} />
        <Route path='/policy' element={<PrivacyPolicy />} />
        <Route path='/help' element={<HelpingFandQ />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
