import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#f0fdf4" }}>
      <header>
        <nav>
          <Link to="/" className="logo">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            AgriNova
          </Link>
          
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
            <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>Dashboard</Link>
          </div>
          
          <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">AgriNova</h3>
              <p className="text-gray-400">
                Empowering farmers with data-driven insights for a sustainable
                and profitable future.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <Link to="/" className="hover:text-green-400 transition">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/dashboard" className="hover:text-green-400 transition">
                    Dashboard
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="hover:text-green-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-green-400 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Services</h3>
              <ul>
                <li className="mb-2">
                  <Link to="/crop-recommend" className="hover:text-green-400 transition">
                    Crop Recommendation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/plant-disease" className="hover:text-green-400 transition">
                    Plant Disease Detection
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/weather-forecast" className="hover:text-green-400 transition">
                    Weather Forecast
                  </Link>
                </li>
                <li>
                  <Link to="/market-prices" className="hover:text-green-400 transition">
                    Market Prices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <p className="text-gray-400">Email: contact@agrinova.com</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
            <p>&copy; 2025 AgriNova. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;