import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Header from './components/Header';
import About from './pages/About';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import ShowOrders from './pages/ShowOrders';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/showorders" element={<ShowOrders />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
