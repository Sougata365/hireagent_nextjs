"use client";
import React, { useState } from "react";
import { ArrowRight, Calendar, Play } from "lucide-react";
import { ScheduleMeetingModal } from "./sections/SheduleMeetingModal";

const LandingPage = () => {
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
  console.log(isScheduleModalOpen, "raju");

  const upcomingCard = {
    "Skills Evaluator AI": [
      "Conduct interviews",
      "Analyze skills",
      "Share detailed results",
      "Track performance",
      "Integrate with Google Sheets",
      "Automated assessment",
    ],
    "Smart Receptionist AI": [
      "Handle inquiries",
      "Book appointments",
      "Send follow-ups",
      "Forward calls",
      "Manage calendar",
      "Personalized communication",
    ],
    "Realty Scheduler AI": [
      "Manage appointments",
      "Send follow-ups",
      "Extract user details",
      "Track scheduling",
      "Integrate with calendars",
      "Communication management",
    ],
    "SolarSync Scheduler AI": [
      "Schedule site visits",
      "Send follow-ups",
      "Provide product info",
      "Organize user information",
      "Calendar integration",
      "Efficient booking",
    ],
    "PlaySchool Scheduler AI": [
      "Handle inquiries",
      "Book appointments",
      "Manage scheduling",
      "Parent communication",
      "Follow-up management",
      "Easy booking",
    ],
    "Hospital Scheduler AI": [
      "Book appointments",
      "Send follow-ups",
      "Provide general info",
      "Patient communication",
      "Calendar management",
      "Efficient scheduling",
    ],
    "Education Scheduler AI": [
      "Schedule demo classes",
      "Manage follow-ups",
      "Student communication",
      "Class scheduling",
      "Engagement tracking",
      "Smooth coordination",
    ],
    "CarLead Qualifier AI": [
      "Qualify leads",
      "Schedule appointments",
      "Answer FAQs",
      "Escalate complex issues",
      "Lead management",
      "Automated follow-ups",
    ],
    "CarSales Recommender AI": [
      "Schedule appointments",
      "Real-time recommendations",
      "Manage lead collection",
      "Car matching",
      "Inquiry handling",
      "Preference-based suggestions",
    ],
    "HR Scheduler AI": [
      "Schedule interviews",
      "Send reminders",
      "Organize candidate data",
      "Interview coordination",
      "Communication tracking",
      "Candidate management",
    ],
    "Interview Insights AI": [
      "Conduct interviews",
      "Analyze responses",
      "Generate detailed reports",
      "Automated assessment",
      "Insights generation",
      "Decision support",
    ],
  };

  const existingCard = {
    "Property Finder AI": [
      "Search properties",
      "Book appointments",
      "Filter preferences",
      "Tailored recommendations",
      "CRM integration",
      "Efficient scheduling",
    ],
  };

  const handleScheduleMeeting = () => {
    setScheduleModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M0 0 L1200 0 L1200 600 L0 600 Z" fill="#f8fafc" />
            <circle
              cx="1100"
              cy="100"
              r="300"
              fill="url(#gradient1)"
              opacity="0.1"
            />
            <circle
              cx="100"
              cy="500"
              r="400"
              fill="url(#gradient2)"
              opacity="0.1"
            />
            <path
              d="M600 100 Q 800 300 600 500 T 600 700"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              opacity="0.2"
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient
                id="gradient3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                AI Bots
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover our collection of intelligent AI assistants designed to
              streamline your operations and enhance customer experience with
              cutting-edge technology.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => (window.location.href = "/pricing")}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl"
              >
                <span className="relative z-10 flex items-center font-medium">
                  Get Started{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={handleScheduleMeeting}
                className="group px-8 py-4 bg-white text-gray-900 rounded-xl border-2 border-gray-200 
                      hover:border-indigo-600 transition-colors"
              >
                <span className="flex items-center font-medium">
                  Schedule Demo <Calendar className="ml-2 w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-20 text-center">
            Available{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Now
            </span>
          </h2>
          {Object.entries(existingCard).map(([name, features]) => (
            <div key={name} className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600" />
                <div className="bg-white rounded-r-3xl p-12 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-4">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        {name}
                      </h3>
                      <div className="space-y-4">
                        <button
                          onClick={() => (window.location.href = "/pricing")}
                          className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl 
                                    flex items-center justify-center group"
                        >
                          Subscribe{" "}
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                          onClick={handleScheduleMeeting}
                          className="w-full py-3 bg-gray-50 text-gray-900 rounded-xl hover:bg-gray-100 
                                    transition-colors flex items-center justify-center"
                        >
                          Schedule Demo <Calendar className="ml-2 w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href =
                              "/assistants?isModalTrue=true#try-assistant")
                          }
                          className="w-full py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 
                                    transition-colors flex items-center justify-center"
                        >
                          Try Now <Play className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="col-span-8">
                      <div className="grid grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors"
                          >
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform" />
                              <p className="font-medium text-gray-900">
                                {feature}
                              </p>
                            </div>
                            <p className="text-gray-500 ml-5">
                              Streamline your workflow with automated{" "}
                              {feature.toLowerCase()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-20 text-center">
            Coming{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Soon
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(upcomingCard).map(([name, features]) => (
              <div key={name} className="relative group">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl 
                              transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"
                />
                <div className="relative bg-white rounded-2xl p-8 border border-gray-200">
                  <div className="absolute top-4 right-4 w-20 h-20">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full opacity-10"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient1)"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        d="M30 50 L45 65 L70 35"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {name}
                  </h3>
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        <p className="text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={() => (window.location.href = "/pricing")}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl 
                                flex items-center justify-center group"
                    >
                      Subscribe{" "}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      onClick={handleScheduleMeeting}
                      className="w-full py-3 bg-gray-50 text-gray-900 rounded-xl hover:bg-gray-100 
                                transition-colors flex items-center justify-center"
                    >
                      Schedule Demo <Calendar className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isScheduleModalOpen && (
        <ScheduleMeetingModal
          isOpen={"schedule"}
          onClose={() => setScheduleModalOpen(false)}
          bot={existingCard}
          mode="schedule"
        />
      )}
    </div>
  );
};

export default LandingPage;
