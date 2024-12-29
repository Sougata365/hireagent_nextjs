"use client";
import { ArrowDown, Award, CheckCircle, Play } from "lucide-react";
import React, { useState } from "react";

const AssistantHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">
                #1 Rated Real Estate AI Assistant
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Turn Missed Calls into Closed Deals{" "}
              <span className="text-blue-600">While You Sleep</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your AI assistant handles unlimited calls, schedules viewings, and
              qualifies leads 24/7 - so you never miss a potential sale.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <a
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                href="#try-assistant"
              >
                Try AI Assistant for free
                <ArrowDown className="w-5 h-5 ml-2" />
              </a>
              <button
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Watch 2-Min Demo
                <Play className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Setup in 5 minutes
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-96 bg-white rounded-lg shadow-xl p-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-4">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-2">
                  Live Demo
                </div>
                <h3 className="font-semibold">See It In Action</h3>
              </div>

              {isLoading && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              )}

              <div
                className={`rounded-lg overflow-hidden ${
                  isLoading ? "hidden" : "block"
                }`}
              >
                <video
                  className="w-full h-auto"
                  controls
                  onLoadedData={handleVideoLoad}
                  onError={() => setIsLoading(false)}
                >
                  <source src="/dummy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 transition focus:outline-none"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600">
                Watch the Demo
              </h2>
              <p className="text-blue-500">
                Explore the interactive demo by watching this video.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-blue-50 to-blue-100">
              {isLoading && (
                <div className="aspect-video animate-pulse bg-blue-200/50 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-blue-500 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              )}

              <video
                className={`aspect-video w-full object-cover ${
                  isLoading ? "hidden" : "block"
                }`}
                controls
                onLoadedData={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              >
                <source src="/dummy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssistantHero;
