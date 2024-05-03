import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AboutUs, Budaya, Home, Kuliner, Wisata} from './pages/indexpages.js'
import Header from './components/Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budaya" element={<Budaya />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
