import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <span className="about-badge">🌱 Our Botanical Story</span>
        <h2 className="about-us-title">Welcome to Paradise Nursery</h2>
        <p className="about-us-tagline">Where Green Dreams Take Root & Living Spaces Flourish</p>
      </div>

      <div className="about-us-content">
        <p className="about-us-description">
          At <strong>Paradise Nursery</strong>, we believe that bringing nature into your living
          spaces does more than decorate a room—it transforms your atmosphere, purifies your air,
          and elevates your daily well-being. Founded by a dedicated collective of horticulturists,
          landscape designers, and plant enthusiasts, our mission is to make green living effortless,
          accessible, and joyful for everyone.
        </p>

        <div className="about-features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌿</div>
            <h3>Air-Purifying Wonders</h3>
            <p>
              Hand-picked foliage tested to eliminate indoor toxins, enrich oxygen levels, and create
              a naturally refreshing sanctuary in your home or office.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌸</div>
            <h3>Aromatic & Soothing</h3>
            <p>
              Fragrant herbal and floral varieties cultivated to induce calmness, relieve daily stress,
              and fill your rooms with pure, organic scents.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🪴</div>
            <h3>Resilient & Low Maintenance</h3>
            <p>
              Carefully acclimated succulents and hardy house varieties designed to thrive with minimal
              fuss—ideal for beginners and busy plant parents.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Sustainably Grown</h3>
            <p>
              Cultivated using organic soil blends, eco-conscious water management, and biodegradable
              packaging materials to protect our planet.
            </p>
          </div>
        </div>

        <div className="about-quote-box">
          <p className="about-quote">
            "To plant a garden is to believe in tomorrow. Let Paradise Nursery guide your journey into a
            greener, brighter, and healthier life."
          </p>
          <span className="quote-author">— The Paradise Nursery Botanical Team</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
