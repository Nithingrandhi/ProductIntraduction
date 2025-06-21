'use client';
import { useState } from 'react';
import Hero from './components/Hero';
import './page.css';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main>
      <nav className="navbar">
        <h1 className="logo">SMART</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>

          <li
            className="nav-item"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            Products
            {showMenu && (
              <div className="mega-menu">
                <div className="menu-column">
                  <a href="#ar-glass">AR Glass</a>
                </div>
              </div>
            )}
          </li>
          <li>Buy</li>
        </ul>
      </nav>
      <Hero />
    </main>
  );
}
