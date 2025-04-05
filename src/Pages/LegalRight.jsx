import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import image1 from "../assets/Scale-Balance-Of-Justice.png";
import image2 from "../assets/Scale Balancing Image3-B.jpg";
import image3 from "../assets/Scale balance of justice3.png";
import image4 from "../assets/Scale Balancing Image3-A.jpg";
import { legalCategories } from "../constants";

const LegalRight = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openCategories, setOpenCategories] = useState({});

  // Rotate background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const toggleCategory = (index) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with rotating blurred background */}
      <section className="relative h-96 flex items-center justify-center bg-black text-white">
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
          <div className="container mx-auto text-center mt-30 relative z-10">
            <h1 className="text-5xl font-bold mb-6">
              Your Legal Rights
            </h1>
            <p className="text-2xl text-neutral-300 max-w-2xl mx-auto">
              Empowering Citizens Through Legal Knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-black">
          Legal Documentation for Citizens
        </h2>
        <div className="space-y-6">
          {legalCategories.map((category, index) => (
            <div key={index} className="border border-black rounded-lg">
              <button
                className="w-full flex justify-between items-center bg-black text-white px-4 py-3 rounded-t-lg focus:outline-none"
                onClick={() => toggleCategory(index)}
              >
                <span className="text-xl font-semibold">{category.title}</span>
                {openCategories[index] ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openCategories[index] && (
                <div className="px-6 py-4 bg-white text-black">
                  <p className="font-medium mb-2">{category.summary}</p>
                  <div className="mb-4">
                    <h3 className="font-bold mb-1">Key Points:</h3>
                    <ul className="list-disc ml-5">
                      {category.content.map((item, idx) => (
                        <li key={idx} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Legal References:</h3>
                    <ul className="list-disc ml-5">
                      {category.legalReferences.map((ref, idx) => (
                        <li key={idx}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalRight;
