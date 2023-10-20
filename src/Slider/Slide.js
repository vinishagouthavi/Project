import React, { useState, useEffect } from 'react';
import { slideData } from './Slidedata';
import "./Slide.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slideData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  function auto() {
    slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slideLength - 1 ? 0 : prevSlide + 1));
    }, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [autoScroll]);

  return (
    <div className="slider">
      {slideData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {index === currentSlide && (
              <div className="content">
                <h2>{slide.heading}</h2>
                <p>{slide.desc}</p>
                <hr />
                <button className="--btn --btn-primary">Get Started</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
