"use client";
import React, { useState } from "react";

const ROI = () => {
  const [missedCalls, setMissedCalls] = useState(20);
  const [dealValue, setDealValue] = useState(10000);
  const dealConversionRate = 0.015;
  const aiAssistantCost = 500;

  const additionalRevenue = Math.round(
    missedCalls * dealConversionRate * dealValue
  );

  const roi = Math.round(
    ((additionalRevenue - aiAssistantCost) / aiAssistantCost) * 100
  );

  return (
    <div className="py-20 bg-gray-50 border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Calculate Your Revenue Potential
          </h2>
          <p className="text-gray-600">
            See how much more you could earn by never missing a lead
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Your Current Numbers</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Average Monthly Missed Calls
                  </label>
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="20"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Average Deal Value
                  </label>
                  <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="$10,000"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-4">
                Your Potential with AI Assistant
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Additional Monthly Revenue</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${additionalRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ROI</span>
                  <span className="text-2xl font-bold text-green-600">
                    {roi.toLocaleString()}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROI;
