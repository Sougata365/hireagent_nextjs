"use client";
import { Shield, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Assistant from "../components/Assistant";

const TryAssistant = () => {
  const searchParams = useSearchParams();
  const isModalTrue = searchParams.get("isModalTrue");

  const [showModal, setShowModal] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [showAssistant, setShowAssistant] = useState(false);

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("authToken");
    setAuthToken(storedAuthToken);
  }, []);

  useEffect(() => {
    if (isModalTrue) {
      setShowModal(true);
    }
  }, [isModalTrue]);

  const highlights = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Enterprise-grade security",
    },
    { icon: <Sparkles className="w-5 h-5" />, text: "99.9% Uptime" },
    { icon: <Trophy className="w-5 h-5" />, text: "Award-winning support" },
  ];

  return (
    <div>
      <>
        <div
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-16 pb-24 relative overflow-hidden"
          id="try-assistant"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-block bg-blue-500/30 px-4 py-2 rounded-full mb-4">
                    <span className="text-blue-100 font-medium">
                      AI-Powered Assistant
                    </span>
                  </div>
                  <h1 className="text-5xl font-bold mb-6">
                    Meet Your AI Companion
                  </h1>
                  <p className="text-xl text-blue-100 mb-6">
                    Experience intelligent conversations, task automation, and
                    24/7 support with our advanced AI assistant
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold">0.1s</div>
                    <div className="text-blue-100 text-sm">Response Time</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold">99%</div>
                    <div className="text-blue-100 text-sm">Accuracy Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-blue-100 text-sm">Availability</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold">∞</div>
                    <div className="text-blue-100 text-sm">Use Cases</div>
                  </div>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Try Assistant Now
                </button>

                <div className="flex flex-wrap gap-4">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                    >
                      <span>{item.icon}</span>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/bot.png"
                  alt="AI Assistant"
                  className="animate-bounce animate-infinite"
                />
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-xl w-full p-8 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Your Real Estate AI Assistant
                  </h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  I'm your AI-powered real estate assistant, ready to help you
                  with:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🔍",
                      title: "Property Search",
                      desc: "Find your perfect home based on your preferences",
                    },
                    {
                      icon: "💰",
                      title: "Price Analysis",
                      desc: "Get instant property valuations and market insights",
                    },
                    {
                      icon: "📊",
                      title: "Market Trends",
                      desc: "Access real-time market data and trends",
                    },
                    {
                      icon: "📝",
                      title: "Listing Assistant",
                      desc: "Help create compelling property descriptions",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t">
                  {!authToken ? (
                    <Link
                      href={"/login"}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Try Our AI Assistant</span>
                      <span className="text-xl">→</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setShowAssistant(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Try Our AI Assistant</span>
                      <span className="text-xl">→</span>
                    </button>
                  )}
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Available 24/7 to help with your real estate needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
      {showAssistant && <Assistant />}
    </div>
  );
};

export default TryAssistant;
