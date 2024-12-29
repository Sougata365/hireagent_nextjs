"use client";
import React, { useState, useEffect } from "react";

const Check = () => (
  <svg
    className="h-5 w-5 text-blue-600 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const PricingCards = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("free");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          "https://configstaging.trainright.fit/api/plans/getAllPlans"
        );
        const result = await response.json();
        setPlans(result.data.sort((a, b) => a.price - b.price));
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="h-[80vh] bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your needs. Upgrade or downgrade at
            any time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const isFreePlan = plan.id === "free";

            return (
              <div
                key={plan._id}
                className={`relative rounded-2xl bg-white transition-all duration-300 transform hover:scale-105 ${
                  isSelected
                    ? "ring-4 ring-blue-500 shadow-xl"
                    : "ring-1 ring-gray-200 shadow-lg hover:shadow-xl"
                } ${isFreePlan ? "ring-4 ring-blue-500" : ""}`}
              >
                {isFreePlan && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                      Default Plan
                    </span>
                  </div>
                )}

                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-5xl font-extrabold text-blue-600">
                      ${plan.price}
                    </span>
                    <span className="ml-2 text-gray-500 text-lg">/month</span>
                  </div>

                  <ul className="space-y-4 text-left mb-8">
                    <li className="flex items-start">
                      <Check />
                      <span className="text-gray-700">
                        <span className="font-semibold">{plan.credits}</span>{" "}
                        credits included
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check />
                      <span className="text-gray-700">
                        <span className="font-semibold">
                          {plan.callDuration}
                        </span>{" "}
                        minutes call duration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check />
                      <span className="text-gray-700">
                        <span className="font-semibold">
                          {plan.creditsUsedPerMin}
                        </span>{" "}
                        credits per minute
                      </span>
                    </li>
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full rounded-xl py-4 px-6 font-semibold text-lg transition-all duration-200 ${
                      isSelected
                        ? "bg-blue-700 hover:bg-blue-800 text-white shadow-lg"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                    }`}
                    disabled={plan.id === "Free Tier" ? true : false}
                  >
                    {isSelected ? "Selected Plan" : "Select Plan"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
