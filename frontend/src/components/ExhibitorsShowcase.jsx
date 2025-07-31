"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ExhibitorsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Featured exhibitors with logos (main sponsors)
  const featuredExhibitors = [
    { name: "Anupam Royale", category: "Premium Partner", featured: true },
    { name: "Naman Desi Ghee", category: "Food Partner", featured: true },
    {
      name: "Choice Tableware & Catering Deco",
      category: "Tableware Partner",
      featured: true,
    },
    { name: "Amoris Aqua", category: "Water Partner", featured: true },
  ];

  // All other exhibitors
  const allExhibitors = [
    "HnH Hotelwares",
    "Sunrise Gift World",
    "Venus Industries",
    "Baba Decor",
    "Umberto Ceramics",
    "Craft N Creation",
    "Imperia",
    "Rajdhani",
    "Skyra",
    "Nizam & Sons",
    "R.S. Tiwari",
    "Veer Hotelware",
    "Gupta Hotelware",
    "Nitesh Pareek",
    "Avis Visiontech (Hyundai)",
    "Jainko Apparels",
    "Disposable Mart",
    "Ultima",
    "SGS Handloom",
    "Petals",
    "Raja Arts",
    "Gift Mart",
    "Shiva Industries",
    "Gaurav & CO.",
    "Orient Crockery",
    "Kapsun Cooler",
    "Neelkanth Hotelwares",
    "Kitchen Affair",
    "Namo Enterprises",
    "Nidhi Creation",
    "Janki Fashions",
    "Chandra Crockery",
    "Lakada Ji",
    "Stone Boutique",
    "S.A.Enterprises",
    "Micromap Electronics",
    "Mansi Melamine",
    "Sajawat Sales",
    "Golden Crown",
    "Electrosonic Technology",
    "ONZE",
    "Chemfox",
    "Gehalot Industries",
    "Bina Enterprises",
    "Uday Plastic",
    "Mala's",
    "Dicasa Furniture",
    "Mukesh Exhibition Company",
    "Babulal Ashok Kumar Jain",
    "Goldice Masale",
    "Classic Signage",
    "Amoris Aqua pvt ltd",
    "Mahima Marketing",
    "Royal Appliances",
    "Catering Junction",
    "Tiger Masale",
    "Harahjeen Handicrafts",
    "Seven Haven Decor",
    "Mahadev Industries",
    "Chitransh Decor",
  ];

  // Filter exhibitors based on search
  const filteredExhibitors = allExhibitors.filter((exhibitor) =>
    exhibitor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-white  min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Proud Exhibitors
            </span>
          </h1>
        </motion.div>

        {/* All Exhibitors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">All Exhibitors</h2>
            <div className="text-sm text-green-600 bg-gray-100 px-4 py-2 rounded-full">
              {filteredExhibitors.length} Companies
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredExhibitors.map((exhibitor, index) => (
              <motion.div
                key={exhibitor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                      {exhibitor.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors duration-200 truncate">
                      {exhibitor}
                    </h3>
                    <p className="text-xs text-green-400 mt-1">Exhibitor</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredExhibitors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.087-2.33.824-.426 1.707-.834 2.647-1.207a4.002 4.002 0 016.88 0c.94.373 1.823.781 2.647 1.207M2 12a10 10 0 1120 0 10 10 0 01-20 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">
                No exhibitors found matching your search.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ExhibitorsShowcase;
