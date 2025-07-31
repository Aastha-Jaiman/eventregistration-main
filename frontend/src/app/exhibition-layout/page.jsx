"use client";
import React, { useState } from "react";
import { ArrowLeft, Download, ZoomIn } from "lucide-react";
import Header from "@/components/Header";

const layoutImages = [
  { src: "./layout1.png", label: "Exhibition Layout 1" },
  { src: "./layout.jpg", label: "Exhibition Layout 2" },
];

const ExhibitionLayout = ({ onBack }) => {
  // Use array of states, one for each image
  const [zoomedIndexes, setZoomedIndexes] = useState([false, false]);

  const toggleZoom = (idx) => {
    setZoomedIndexes((states) =>
      states.map((z, i) => (i === idx ? !z : z))
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Header />
      <div className="bg-white mt-20 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {onBack && (
                <button
                  onClick={onBack}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
              )}
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Exhibition Layout
              </h1>
            </div>

            {/* No controls here; controls on each image card */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
        {layoutImages.map((img, idx) => (
          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            key={img.src}
          >
            {/* Layout Image Container */}
            <div className="relative group">
              <div
                className={`overflow-auto ${zoomedIndexes[idx] ? "cursor-zoom-out" : "cursor-zoom-in"}`}
                onClick={() => toggleZoom(idx)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className={`w-full h-auto transition-all duration-300 ${
                    zoomedIndexes[idx] ? "scale-150 md:scale-200" : "scale-100"
                  }`}
                  style={{
                    transformOrigin: "center center",
                    minHeight: "400px",
                    maxHeight: zoomedIndexes[idx] ? "none" : "80vh",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Per-image controls (top-right, for convenience) */}
              <div className="absolute top-4 right-4 flex space-x-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleZoom(idx);
                  }}
                  className="p-2 rounded-lg bg-white/70 hover:bg-gray-100 transition-colors shadow"
                  title="Toggle Zoom"
                >
                  <ZoomIn className="w-5 h-5 text-gray-600" />
                </button>
                <a
                  href={img.src}
                  download={`exhibition-layout-${idx + 1}.jpg`}
                  className="p-2 rounded-lg bg-white/70 hover:bg-gray-100 transition-colors shadow"
                  title="Download Layout"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-5 h-5 text-gray-600" />
                </a>
              </div>

              {/* Zoom Indicator */}
              {zoomedIndexes[idx] && (
                <div className="absolute top-16 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-10">
                  Click to zoom out
                </div>
              )}
            </div>

            {/* Footer Info */}
            <div className="p-6 bg-gray-50 border-t">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <p className="text-sm text-gray-600">
                  {img.label} – JCDS Catering Expo 2025
                </p>
                <p className="text-xs text-gray-500">
                  Click image to zoom • Right-click to save
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionLayout;
