import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer2 = () => {
  const currentDate = new Date();
  const timeStamp = currentDate.getFullYear();
  return (
    <div className="bg-gray-900 py-8 mt-5 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Legal First Aid</h2>
            <p className="mb-4">
              Your trusted partner to know you rights as a citizen. Always by
              your side to handle your problem{" "}
            </p>
          </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <div className="flex flex-col mt-4 space-y-2">
            <Link to="/home">Home</Link>
            <Link to="#">Legal Rights</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-4">
            <FaFacebookF
              size={24}
              className="text-blue-500 hover:text-blue-600"
            />
            <FaInstagram
              size={24}
              className="text-pink-500 hover:text-pink-600"
            />
            <FaTwitter
              size={24}
              className="text-blue-400 hover:text-blue-500"
            />
            <FaLinkedinIn
              size={24}
              className="text-red-500 hover:text-red-600"
            />
          </div>
          <form className="flex items-center justify-center mt-8">
            <input type="text" placeholder="Your Email Address" className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"/>
            <button type="submit" className="bg-neutral-600 hover:bg-black text-white px-4 py-2 rounded-r-lg border border-neutral-600">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex justify-between mt-8 border-t border-gray-700 pt-4">
        <p>@ {timeStamp} Legal First Aid. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms Of Services</Link>
              </div>
              </div>
      </div>
    </div>
  );
};

export default Footer2;
