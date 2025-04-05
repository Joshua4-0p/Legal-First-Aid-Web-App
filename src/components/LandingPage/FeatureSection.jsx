import { features } from "../../constants";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-900/70 min-h-[800px]">
      <div className="text-center">
        <span className="bg-black text-white rounded-full h-6 text-2xl font-semibold px-3 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 text-neutral-900 tracking-wide">
          {/* above styling means that on small screen(sm) text size is 5xl on large(lg) text-size of 6xl with margin-top of 10 */}
          Know your rights{" "}
          <span className="bg-gradient-to-r from-neutral-500 to-blue-900 text-transparent bg-clip-text">
            as a citizen
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 justify-center space-x-6">
        {features.map((features, index) => (
          <div
            key={index}
            className=" w-full md:w-3/4 sm:w-3/4 lg:w-1/4 p-6 bg-white shadow-2xl rounded-lg mb-6 transition transform ease-in-out hover:scale-105"
          >
            <div className="flex mx-6 items-center justify-center w-16 h-16 bg-black text-white rounded-full">
              <div className="flex"></div>
              {features.icon}
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl mt-3 mb-6 ">
              {features.text}
            </h3>
            <p className="text-md p-2 mb-15 text-neutral-600">
              {features.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
