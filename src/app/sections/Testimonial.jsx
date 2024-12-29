import { Star } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <blockquote className="text-2xl font-medium text-gray-900 mb-8">
            "This AI assistant has transformed my business. I'm booking more
            viewings while sleeping than I used to during work hours."
          </blockquote>
          <div className="font-medium text-gray-900">Sarah Johnson</div>
          <div className="text-gray-600">Top Performing Agent, RE/MAX</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
