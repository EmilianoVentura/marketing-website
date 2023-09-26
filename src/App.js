import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Nav from './components/molecules/Nav';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/molecules/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
