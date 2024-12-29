import React from "react";

const Stats = () => {
  return (
    <div className="border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600">85%</div>
            <div className="text-gray-600 mt-2">Lead Response Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600 mt-2">Availability</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">45%</div>
            <div className="text-gray-600 mt-2">More Showings Booked</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">3hrs</div>
            <div className="text-gray-600 mt-2">Saved Daily</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
