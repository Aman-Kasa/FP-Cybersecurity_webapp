import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Stay Safe Online – Learn Cybersecurity the Smart Way!</h1>
          <p>Unlock your full potential with our Interactive lessons, real-world simulations, and fun quizzes to keep your data safe. Safeguard your growth and resilience in the digital age.</p>
          <div className="cta-buttons">
            <button className="btn-primary">GET STARTED</button>
            <button className="btn-secondary">TALK WITH US</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Explore Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Interactive lessons</h3>
            <p>Learn about phishing, password security, malware, and more with easy-to-understand modules.</p>
          </div>
          <div className="feature-card">
            <h3>Real-World Simulations</h3>
            <p>Test yourself with fake phishing emails and security challenges.</p>
          </div>
          <div className="feature-card">
            <h3>Quizzes & Gamification</h3>
            <p>Earn badges and rewards by answering cybersecurity questions.</p>
          </div>
          <div className="feature-card">
            <h3>User Progress Tracking</h3>
            <p>Monitor your learning journey with a personalized dashboard.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h2>2+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="stat-item">
          <h2>900+</h2>
          <p>Satisfied customers</p>
        </div>
        <div className="stat-item">
          <h2>99%</h2>
          <p>Cybersecurity guarantee</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-card">
          <p>"This platform helped me identify phishing emails before they could harm my business. The interactive quizzes made learning fun and engaging"</p>
          <div className="testimonial-author">
            <h4>Alberto Flores</h4>
            <p>IT Director</p>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="signup">
        <h2>Join 10,000+ users in securing their digital lives today!</h2>
        <button className="btn-primary">SIGN UP</button>
        <p>Already have an account? <a href="/login">login</a></p>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-brand">CyberShield</div>
        <nav className="footer-links">
          <a href="/about">About Us</a>
          <a href="/faqs">FAQs</a>
          <a href="/teams">Teams</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <p className="copyright">© 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;