import { Calendar, MessageCircle, Phone } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything You Need to Automate Your Real Estate Business
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
            <Phone className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Lead Response</h3>
            <p className="text-gray-600">
              Never miss an inquiry. Instant response to property questions, any
              time of day.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
            <Calendar className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automated Scheduling</h3>
            <p className="text-gray-600">
              Let buyers book viewings directly into your calendar without your
              intervention.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
            <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lead Qualification</h3>
            <p className="text-gray-600">
              Pre-qualify leads by asking the right questions before they reach
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
