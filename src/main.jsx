import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import {AboutUs, Budaya, Home, Kuliner, Wisata} from './pages/indexpages.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budaya" element={<Budaya />} />
          <Route path="/kuliner" element={<Kuliner />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
