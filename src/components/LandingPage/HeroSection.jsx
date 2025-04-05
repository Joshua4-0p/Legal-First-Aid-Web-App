import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/Scale-Balance-Of-Justice.png";
import image2 from "../../assets/Scale Balancing Image3-B.jpg";
import image3 from "../../assets/Scale balance of justice3.png";
import image4 from "../../assets/Scale Balancing Image3-A.jpg";
import { introParagraph } from "../../constants";

const HeroSection = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with transitions */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } blur-sm`}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold mb-6 tracking-wide">
          Empower Your
          <span className="block bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Legal Knowledge
          </span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 text-gray-200">
          Navigating the Cameroon Legal System Made Easy
        </p>

        <div className="mb-12">
          <Link
            to="/create-account"
            className="inline-block bg-gradient-to-r from-gray-700 to-black hover:from-gray-600 hover:to-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get Started
          </Link>
        </div>

        <div className="max-w-6xl mx-auto space-y-2 text-gray-200 tracking-widest">
          {introParagraph.map((item, index) => (
            <p key={index} className="text-base  sm:text-lg leading-relaxed">
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
