// src/App.jsx
import React from 'react';
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import ProductSection from "./components/ProductSection/ProductSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
