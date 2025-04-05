import React from "react";
import { testimonials } from "../../constants";

const Testimonials = () => {
  return (
    <div className="relative mt-15 border-neutral-700">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wider mb-5">
          What people{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-blue-900">
            {/* bg-clip-text: it place the background color to be the color of the text instead */}
            are saying
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((items, index) => (
          <div
            key={index}
            className="w-full sm:w-3/4 lg:w-1/4 px-4 py-2  bg-neutral-100 rounded-md shadow-2xl m-2"
          >
            <div className="text-md bg-neutral rounded-md p-6 border-2 border-neutral-800">
              <p>{items.text}</p>
            </div>
            <div className="flex mt-8 items-start">
              <img
                src={items.image}
                alt={items.user}
                className="w-20 h-20 rounded-full mr-6 border border-neutral-600"
              />
              <div>
                <h1>{items.user}</h1>
                <span className="text-sm font-normal italic text-neutral-600">
                  {items.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
