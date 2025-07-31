import Image from "next/image";

const OurTeams = () => {
  return (
    <div className="min-h-7xl bg-orange-400 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-8 underline">
            OUR TEAMS
          </h1>
        </div>

        {/* Three Team Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Registration Team */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/home1.png"
                alt="Registration Team at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">
                Registration Team
              </h3>
            </div>
          </div>

          {/* Hospitality Team */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/home2.png"
                alt="Hospitality Team assisting visitors"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">
                Hospitality Team
              </h3>
            </div>
          </div>

          {/* Security Team */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/home3.png"
                alt="Security Team members"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Security Team</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
