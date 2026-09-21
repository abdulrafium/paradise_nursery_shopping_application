import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  const handleNavigateHome = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-root">
      {showProductList ? (
        <ProductList onNavigateHome={handleNavigateHome} />
      ) : (
        <div className="landing-page">
          <div className="landing-overlay"></div>

          <header className="hero-content">
            <div className="brand-badge">
              <span>🌿</span> Pure Nature, Pure Living
            </div>
            <h1 className="company-title">Paradise Nursery</h1>
            <p className="hero-tagline">
              Elevate your home and office with our vibrant, hand-nurtured houseplants.
              Experience cleaner air, calmer days, and enduring botanical elegance.
            </p>
            <button
              id="get-started-btn"
              className="btn-get-started"
              onClick={handleGetStarted}
            >
              <span>Get Started</span>
              <span className="btn-icon">→</span>
            </button>
          </header>

          <main className="about-us-wrapper">
            <AboutUs />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
