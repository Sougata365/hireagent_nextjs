import { CheckCircle, TrendingUp, Users } from "lucide-react";
import React from "react";

const WithWithout = () => {
  return (
    <>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Without vs. With AI Assistant
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-gray-500">
                Without AI Assistant
              </h3>
              <ul className="space-y-4">
                {[
                  "Miss leads while with clients or sleeping",
                  "Manually schedule and reschedule viewings",
                  "Waste time on unqualified leads",
                  "Limited to working hours only",
                  "Risk losing leads to faster-responding agents",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-500">
                    <span className="w-5 h-5 mr-3 flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-blue-50 rounded-lg border-2 border-blue-600">
              <h3 className="text-xl font-semibold mb-6 text-blue-900">
                With AI Assistant
              </h3>
              <ul className="space-y-4">
                {[
                  "Never miss a lead - 24/7 instant response",
                  "Automated scheduling synced to your calendar",
                  "Smart lead qualification before your involvement",
                  "Work around the clock automatically",
                  "Always first to respond to new leads",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-blue-900">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-b ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-gray-600">
                <strong>73 agents</strong> signed up in the last 24 hours
              </span>
            </div>
            <div className="flex items-center gap-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <span className="text-gray-600">
                <strong>Limited spots available</strong> for your area
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithWithout;
