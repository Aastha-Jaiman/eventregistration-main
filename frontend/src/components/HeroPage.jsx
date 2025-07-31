'use client'

import React from "react";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import AboutSection from "./About";

export default function HeroPage() {
  return (
    <div className="relative mt-20">

      {/* Logo Row - No Opacity Section */}
      {/* <div className="absolute left-0 right-0 z-20 bg-white shadow-md px-6 py-4 opacity-90">
        <div className="flex justify-between items-center max-w-8xl mx-auto">
          <img
            src="/JCDS LOGO 27 YEARS.png"
            alt="Left Logo"
            className="h-24 object-contain"
          />
          <img
            src="/logo1.png"
            alt="Right Logo"
            className="h-24 object-contain"
          />
        </div>
      </div> */}


      <div
        className="min-h-screen w-full relative overflow-hidden pt-20 bg-fixed"
        style={{
          backgroundImage: "url('./hawamahal.jpg')",
          backgroundSize: "cover",
          // backgroundPosition: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >



        <div className="absolute inset-0 bg-white opacity-80"></div>

        {/* Main Content */}
        <div
          className="relative z-10 container mx-auto px-4 py-12"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >

          <div className="absolute inset-0"></div>
          <div className="relative z-10">
            {/* Main Banner Content */}
            <div className="text-center mb-12">
              {/* Badge */}
              <div className="flex w-full justify-center items-center space-x-6">
                <img
                  src="/JCDS LOGO 27 YEARS.png"
                  alt="Anupam Royals Logo"
                  className="h-40 w-auto object-contain"
                />
              </div>
              <div className="text-green-600 my-5 font-semibold text-3xl">
                is association with
              </div>
              {/* Anupam Royals Logo */}
              <div className="flex w-full justify-center items-center space-x-6">
                <img
                  src="/anupam.png"
                  alt="Anupam Royals Logo"
                  className="h-40 w-auto object-contain"
                />
              </div>
              <div className="text-green-600 my-5 font-semibold text-3xl">
                Presents
              </div>

              <div className="inline-flex items-center bg-[#1F0954]  text-white px-8 py-3 rounded-full mb-6 shadow-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                <span className="font-bold text-lg">
                  Largest HoReCa Exhibition of Rajasthan
                </span>
              </div>

              <div className="flex w-full justify-center items-center space-x-6">
                <img
                  src="/logo1.png"
                  alt="Anupam Royals Logo"
                  className="h-40 w-auto object-contain"
                />
              </div>

              {/* Main Title */}
              <div className="mb-8 flex justify-center">
                <img
                  src="/logo2.jpg"
                  alt="8th Caterers Expo 2025 Logo"
                  className="max-w-lg w-full h-auto object-contain"
                />
              </div>

              <AboutSection />
              {/* Powering Sponsors Section */}
              <div
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 mt-12 shadow-2xl max-w-6xl mx-auto"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-white opacity-70"></div>
                <div className="relative z-10">
                  {/* Powering Sponsors Section */}
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                      Powering Sponsors
                    </h3>
                    <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border-2 border-blue-200">
                        <img
                          src="/logo3.png"
                          alt="Powering Sponsor 1"
                          className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
                        />
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border-2 border-blue-200">
                        <img
                          src="/logo4.png"
                          alt="Powering Sponsor 2"
                          className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Partners Section */}
                  <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                      {/* Flareon Partner */}
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2 font-semibold">
                          Flareon Partner
                        </p>
                        <div className="bg-orange-50 p-4 rounded-xl shadow-md border border-orange-100">
                          <img
                            src="/powerman.png"
                            alt="Flareon Partner"
                            className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                          />
                        </div>
                      </div>
                      {/* Water Partner */}
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2 font-semibold">
                          Water Partner
                        </p>
                        <div className="bg-blue-50 p-4 rounded-xl shadow-md border border-blue-100">
                          <img
                            src="/logo5.png"
                            alt="Water Partner - Anupam Royals"
                            className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Stats Grid */}

            </div>

            {/* Event Details Section */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-2xl max-w-6xl mx-auto"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-white opacity-70"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Date & Venue */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">
                      Event Information
                    </h3>


                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-800 font-semibold text-xl mb-1">
                          Event Dates
                        </div>
                        <div className="text-blue-600 font-bold text-lg">
                          22nd, 23rd & 24th August 2025
                        </div>
                        <div className="text-gray-500">
                          Three days of innovation and networking
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-800 font-semibold text-xl mb-1">
                          Venue
                        </div>
                        <div className="text-teal-600 font-bold text-lg">
                          East Lawn, Central Lawn
                        </div>
                        <div className="text-teal-600 font-bold text-lg">
                          Entertainment Paradise
                        </div>
                        <div className="text-teal-600 font-bold text-lg">
                          Jawahar Circle, JLN Marg
                        </div>
                        <div className="text-gray-500">
                          Jaipur 302017, Rajasthan
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Images Placeholder */}

                </div>


              </div>
            </div>


            {/* President*/}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-6xl mx-auto my-10"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-white opacity-70 "></div>
              <div className="relative z-10 ">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Distinguished Personalities
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {/* First Person */}
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border-2 border-blue-200 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">MS</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Manoj Sewani</h4>
                      <p className="text-sm text-gray-600">(President)</p>
                      <p className="text-sm text-gray-600">+91 9876543211</p>
                    </div>
                  </div>

                  {/* Second Person */}
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl shadow-lg border-2 border-green-200 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">NP</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Niten Popli</h4>
                      <p className="text-sm text-gray-600">(Secretary)</p>
                      <p className="text-sm text-gray-600">+91 9876543211</p>

                    </div>
                  </div>

                  {/* Third Person */}
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg border-2 border-orange-200 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">DS</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Dinesh Sharma</h4>
                      <p className="text-sm text-gray-600">(Treasurer)</p>
                      <p className="text-sm text-gray-600">+91 9876543211</p>

                    </div>
                  </div>

                  {/* Fourth Person */}
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-2 py-6  rounded-2xl shadow-lg border-2 border-indigo-200 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">KR</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Keshav Singh Rathod</h4>
                      <p className="text-sm text-gray-600">(General Secretary)</p>
                      <p className="text-sm text-gray-600">+91 9876543211</p>

                    </div>
                  </div>

                  {/* Fifth Person */}
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50  px-2 py-6 rounded-2xl shadow-lg border-2 border-purple-200 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">JK</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Jitendra Khandelwal</h4>
                      <p className="text-sm text-gray-600">(Assistant Treasurer)</p>
                      <p className="text-sm text-gray-600">+91 9876543211</p>

                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>



            {/* Bottom Section with Contact Info */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-6xl mx-auto mt-10"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >


              <div className="absolute inset-0 bg-white opacity-70"></div>

              <div className="relative z-10">
                {/* Stats Section */}
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Exhibition Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      250+
                    </div>
                    <div className="text-gray-800 font-semibold">EXHIBITORS</div>
                    <div className="text-gray-600 text-sm">From India & Abroad</div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      70×55
                    </div>
                    <div className="text-gray-800 font-semibold">DISPLAY SIZE</div>
                    <div className="text-gray-600 text-sm">
                      Premium Exhibition Space
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">
                      3 DAYS
                    </div>
                    <div className="text-gray-800 font-semibold">EVENT</div>
                    <div className="text-gray-600 text-sm">Mega Exhibition</div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Text */}
                  <div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          Largest HoReCa Exhibition in Rajasthan
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          250+ Premium Exhibitors from India & Abroad
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-green-500 rounded-xl flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          Latest Catering Equipment & Technology
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          Live Demonstrations & Expert Workshops
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Contact/Organizer Info */}
                  <div className="text-center">
                    <div className="mb-6">
                      <img
                        src="/JCDS LOGO 27 YEARS.png"
                        alt="Organizer Logo"
                        className="h-20 w-auto mx-auto mb-4"
                      />
                      <h4 className="text-2xl font-bold text-gray-800">
                        Organizer
                      </h4>
                      <p className="text-gray-600">JCDS Event Management</p>
                    </div>

                    {/* Registration Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => window.location.href = '/registration'}
                        className="bg-gradient-to-r from-green-600 cursor-pointer to-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                      >
                        Register
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>




      </div>

    </div>
  );
}
