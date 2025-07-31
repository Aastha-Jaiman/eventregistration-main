"use client";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="block">
              <h1 className="text-base sm:text-xl font-bold text-gray-800 uppercase">
                Jaipur Catering Dealers Samiti Registered
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                27 Years of Excellence
              </p>
            </div>
          </div>


          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-8">
            <a
              href="/"
              className="relative px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/registration"
              className="relative px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
            >
              Registration
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/exhibition-layout"
              className="relative px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
            >
              Exhibition Layout
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/contact"
              className="relative px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            {/* <a
              href="/map"
              className="relative px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
            >
              Map
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
              <nav className="flex flex-col items-center space-y-4 py-4">
                <a
                  href="/"
                  className="relative px-4 py-2 text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="/registration"
                  className="relative px-4 py-2 text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  Registration
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="/exhibition-layout"
                  className="relative px-4 py-2 text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  Exhibition Layout
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="/contact"
                  className="relative px-4 py-2 text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                {/* <a
                  href="/map"
                  className="relative px-4 py-2 text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  Map
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a> */}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;