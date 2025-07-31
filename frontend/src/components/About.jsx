import React from "react";

const AboutSection = () => {
    return (
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#204060] mb-4">
                About Us
            </h2>

            <p className="text-[17px] text-gray-700 mb-2 text-justify">
                We are a passionate team committed to delivering high-quality solutions that make a real impact. Our goal is to bring innovation and excellence to every project, ensuring satisfaction and success for our clients.
            </p>


            <div className="text-gray-800 text-[17px] space-y-3 text-justify">
                {/* ✅ New Paragraph Added */}
                <p>
                    The 8th Caterers Expo is a one-stop destination for businesses and professionals operating in the Hotel, Restaurant, and Catering (HoReCa) industry. From equipment and technology providers to suppliers and service experts, this event unites every pillar of the hospitality ecosystem under one roof.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
