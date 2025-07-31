import Image from "next/image";

const ThankYouPage = () => {
  return (
    <>
      <div className=" bg-white mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Left Column - JCDS Logo with Orange Strips */}
          <div className="relative bg-white flex items-center justify-center p-4 md:p-0">
            {/* Orange Decorative Strips */}
            <div className="absolute left-0 top-0 w-16 h-full bg-orange-400 md:w-32"></div>
            <div className="absolute left-16 top-0 w-16 h-full bg-orange-300 md:left-32 md:w-32"></div>
            <div className="absolute left-32 top-0 w-16 h-full bg-orange-400 md:left-64 md:w-32"></div>
            <div className="absolute left-48 top-0 w-16 h-full bg-orange-300 md:left-96 md:w-32"></div>
            <div className="absolute left-64 top-0 w-16 h-full bg-orange-400 md:left-128 md:w-32"></div>

            {/* JCDS Hexagonal Badge - Centered */}
            <div className="relative z-10 text-center">
              <div className="w-full  relative mb-4 md:w-120 md:h-120 md:mb-6">
                <img src="/JCDS LOGO 27 YEARS.png" alt="Large JCDS Hexagonal Badge" />
               
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="bg-gray-50 flex flex-col justify-center p-4 md:p-12">
            {/* Header */}
            <div className="mb-6 md:mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
                GET IN TOUCH
              </h1>
              <div className="w-12 h-1 bg-orange-500 md:w-16"></div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-12">
              <div className="flex flex-col md:flex-row">
                <span className="font-semibold text-gray-800 w-full md:w-40">
                  Company Name :
                </span>
                <span className="text-gray-700">
                  Jaipur Catering Dealers Samiti
                </span>
              </div>

              <div className="flex flex-col md:flex-row">
                <span className="font-semibold text-gray-800 w-full md:w-40">
                  Email Address :
                </span>
                <span className="text-gray-700">
                  jaipurcateringdealerssamiti@gmail.com
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 mb-1 md:mb-2">
                  Social Media :
                </span>
                <a
                  href="https://www.instagram.com/jaipur_catering_association"
                  className="text-blue-600 hover:underline break-all"
                >
                  https://www.instagram.com/jaipur_catering_association
                </a>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="text-center">
              <div className="bg-black text-white p-2 md:p-4 rounded-lg inline-block">
                <div className="text-sm md:text-lg font-bold mb-2 md:mb-4">
                  SCAN ME
                </div>
                <div className="w-32 h-32 md:w-50 md:h-50 bg-white rounded flex items-center justify-center">
                  <div className="relative w-32 h-32 md:w-50 md:h-50">
                    <Image
                      src="/image.png"
                      alt="QR Code for contact information"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
