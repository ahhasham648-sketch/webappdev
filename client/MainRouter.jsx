import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './src/about';
import Contact from './src/contact';
import Education from './src/education';
import Project from './src/project';
import Layout from './components/Layout';

const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
