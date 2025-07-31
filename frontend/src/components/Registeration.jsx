"use client";
import React, { useState, useCallback } from "react";
import {
  User,
  Building,
  MapPin,
  Phone,
  Mail,
  Users,
  Check,
  Hash,
  UserCheck,
  Briefcase,
  Settings,
} from "lucide-react";
import { registerUser } from "../services/userServices";

const Registration = ({
  setCurrentView,
  setRegistrationId,
  setRegistrations,
  setShowPopup,
  registrations,
  showPopup,
  registrationNumber,
  preSelectedRole = null,
}) => {
  const [currentStep, setCurrentStep] = useState(preSelectedRole ? "form" : "roleSelection");
  const [formData, setFormData] = useState({
    fullName: "",
    firmName: "",
    firmAddress: "",
    city: "",
    phone: "",
    email: "",
    role: preSelectedRole || "",
    stallNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [regNumber, setRegNumber] = useState("");
  const [errorregNumber, setErrorRegNumber] = useState("");



  const roleOptions = [
    {
      id: "visitor",
      title: "Visitor",
      description: "Visit the exhibition and explore latest catering equipment",
      icon: UserCheck,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      id: "exhibitor",
      title: "Exhibitor",
      description: "Exhibitor representative with stall management access",
      icon: Briefcase,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      id: "organizer",
      title: "Organiser",
      description: "Event management and coordination access",
      icon: Settings,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
  ];

  const handleRoleSelection = useCallback((selectedRole) => {
    setFormData(prev => ({
      ...prev,
      role: selectedRole,
    }));
    setCurrentStep("form");
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (
      !formData.fullName ||
      !formData.firmName ||
      !formData.city ||
      !formData.phone
    ) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (formData.role === "exhibitor" && !formData.stallNumber) {
      setError("Stall number is required for exhibitor role");
      setLoading(false);
      return;
    }

    const userData = {
      fullname: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.firmName,
      companyAddress: formData.firmAddress,
      city: formData.city,
      role: formData.role,
      stallNumber:
        formData.role === "exhibitor" ? formData.stallNumber : undefined,
    };

    console.log("Submitting user data:", userData);

    try {
      const response = await registerUser(userData);
      setRegistrationId(response.registrationNumber);
      setRegNumber(response.user.registrationNumber);
      console.log("response.user.registrationNumber", response.user.registrationNumber)
      console.log("registered user", response);
      setShowPopup(true);
    } catch (err) {
      setError(err?.response?.data?.message || "");
      setErrorRegNumber(err?.response?.data?.registrationNumber || "");
    } finally {
      setLoading(false);
    }
  }, [formData, registrations.length, setRegistrations, setShowPopup]);

  const handleClosePopup = useCallback(() => {
    setFormData({
      fullName: "",
      firmName: "",
      firmAddress: "",
      city: "",
      phone: "",
      email: "",
      role: preSelectedRole || "",
      stallNumber: "",
    })
    setShowPopup(false);
  }, [setShowPopup]);

  const handleChangeRole = useCallback(() => {
    setCurrentStep("roleSelection");
  }, []);

  // Success Popup Component - moved outside to prevent re-creation
  if (showPopup) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-teal-600 w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Registration Successful!
          </h2>
          <div className="">
            <span className="text-green-600">Registration Number :</span>
            <p className="text-green-600">
              {regNumber || "Not available"}
            </p>

          </div>


          <p className="text-sm text-gray-500 mb-6">
            A confirmation email has been sent to your registered email address.
          </p>
          <button
            onClick={handleClosePopup}
            className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Role Selection Step
  if (currentStep === "roleSelection") {
    return (
      <div className="min-h-screen py-20 bg-gradient-to-br from-teal-400 via-emerald-400 to-green-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
              JCDS Catering Expo 2025
            </h1>
            <p className="text-gray-600 mt-2">Register Yourself</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roleOptions.map((role) => {
              const IconComponent = role.icon;
              return (
                <div
                  key={role.id}
                  onClick={() => handleRoleSelection(role.id)}
                  className={` bg-gradient-to-br ${role.bgColor} p-4 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-gray-200 group`}
                >
                  <div className={`bg-gradient-to-r ${role.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {role.title}
                  </h3>

                  {/* <p className="text-gray-600 text-sm leading-relaxed"> */}
                  <p className="flex items-center justify-between mb-2 leading-relaxed">
                    {role.description}
                  </p>
                  <div className="mt-4">
                    <span className={`bg-gradient-to-r ${role.color} text-white px-4 py-2 rounded-lg text-sm font-medium group-hover:shadow-lg transition-all`}>
                      Select {role.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Registration Form Step
  return (
    <div className="min-h-screen py-20 md:py-30 bg-gradient-to-br from-teal-400 via-emerald-400 to-green-400 flex items-center justify-center px-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-2xl p-6 md:p-10 transition-all duration-300">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-10">
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Users className="text-white w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent mb-2">
            JCDS Catering Expo 2025
          </h1>
          <div className="space-y-2">
            <p className="text-gray-600 text-sm md:text-base">
              Register as <span className="font-semibold text-teal-700">{roleOptions.find(r => r.id === formData.role)?.title}</span>
            </p>
            {!preSelectedRole && (
              <button
                onClick={handleChangeRole}
                className="inline-flex items-center text-teal-600 text-sm hover:text-teal-700 transition-colors group"
              >
                <span className="group-hover:underline">Change Role</span>
              </button>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-600 text-center text-sm">{error}</p>
            {regNumber && (
              <p className="text-red-600 text-center text-sm">
                Registration Number: {regNumber}
              </p>
            )}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Two Column Layout for larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-teal-500" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-teal-500" />
                <input
                  type="text"
                  name="firmName"
                  placeholder="Enter company name"
                  value={formData.firmName}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Company Address */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Address
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-teal-500" />
                <input
                  type="text"
                  name="firmAddress"
                  placeholder="Enter company address"
                  value={formData.firmAddress}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white"

                />
              </div>
            </div>


            {/* City */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-teal-500" />
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-teal-500" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white"
                  required
                />
              </div>
            </div>
          </div>

          {/* Email - Full Width */}
          <div className="relative group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-teal-500" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white"
              />
            </div>
          </div>

          {/* Stall Number - Conditional */}
          {formData.role === "exhibitor" && (
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stall Number
              </label>
              <div className="relative">
                <Hash className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-teal-500" />
                <input
                  type="text"
                  name="stallNumber"
                  placeholder="Enter stall number"
                  value={formData.stallNumber}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white"
                  required
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-teal-700 hover:to-emerald-700 focus:ring-4 focus:ring-teal-500/20 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Registering...
                </div>
              ) : (
                "Complete Registration"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
