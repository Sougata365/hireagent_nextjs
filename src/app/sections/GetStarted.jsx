import Link from "next/link";
import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Automate Your Real Estate Business?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of successful real estate agents who have transformed
          their business with AI assistance.
        </p>
        <Link href={"/login"}>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold">
            Start Your Free Trial
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
