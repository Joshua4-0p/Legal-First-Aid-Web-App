import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { FAQs } from "../../constants";
import React from "react";

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState(Array(FAQs.length).fill(false));
  /*You can either do; import {useState} from 'react' and just use it your code or 
 you can just use it directly like this: do const [dropdownOpen, setDropdownOpen] = React.useState(false)*/
  const handleDropdown = (index) => {
    setOpenIndexes((prev) => {
      const newOpenIndexes = [...prev];//take into consideration the previous state of the index that was opened
      newOpenIndexes[index] = !newOpenIndexes[index];
      return newOpenIndexes;
    });
  };
  return (
    <div className="relative border-b mt-15 border-neutral-900/80">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          {/* above styling means that on small screen(sm) text size is 5xl on large(lg) text-size of 6xl with margin-top of 10 */}
          Frequently asked questions{" "}
          <span className="bg-gradient-to-r  from-neutral-800 to-neutral-500 text-transparent bg-clip-text">
            by users
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 items-center justify-center bg-neutral-200 w-[75%] mx-[10%] shadow-2xl rounded-md mb-6 ">
        <div className="my-5 mx-2 p-3 flex lg:w-3/4 flex-col justify-center items-center">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="w-full shadow-2xl rounded-md bg-white mb-6 p-6"
            >
              <div className="flex mx-6 items-center justify-center w-10 h-10 bg-black text-white rounded-full">
                <div className="flex">{faq.icon}</div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className=" w-full text-xl sm:text-xl lg:text-2xl mt-3 mb-3 ">
                  {faq.text}
                </h3>
                <button
                  onClick={() => {
                    handleDropdown(index);
                  }}
                  className="focus:outline-none"
                >
                  {openIndexes[index] ? <ChevronDown /> : <ChevronUp />}
                </button>
              </div>
              {openIndexes[index] && (
                <p className="text-neutral-600 text-md p-2">
                  {faq.description}
                </p>
              )}
            </div>
          ))}
          {/* <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl mt-3 mb-6 ">
              What is Legal First Aid?
            </h3>
            <p className="text-md p-2 mb-10 text-neutral-600">
              Legal First Aid is a platform that provides legal information to
              individuals who are not familiar with the legal system. It is a
              platform that provides legal information to individuals who are
              not familiar with the legal system.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
