'use client'; 
import { useState } from 'react';
import '../hero.css';
export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/img1.png', '/img2.png', '/img3.png'];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className="hero" id="ar-glass">
      <div className="hero-content">
        <div className="image-wrapper">

            <button className="left-scroll-arrow" onClick={goToPrevious}>
            ‹
          </button>
          <img
            src={images[currentIndex]}
            alt="SMART AR Glasses"
            className="hero-image"
          />

          <button className="right-scroll-arrow" onClick={goToNext}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
