import React from 'react';

export default function Project() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden mt-[150px] flex flex-col md:flex-row items-center">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center p-4">
          <img
            src="/QuickBid.png" // ✅ Replace with your image path
            alt="QuickBid Project"
            className="w-full h-[300px] md:h-[300px] object-cover rounded-md"
          />
        </div>

        {/* Right Side - Project Details */}
        <div className="md:w-1/2 w-full p-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-black mb-2">QuickBid</h1>
          <h2 className="text-xl font-semibold text-black mb-3">
            E-Commerce Website with Bidding Feature
          </h2>
          <p className="text-gray-700 text-md leading-relaxed">
           QuickBid Is Online E-Commerce Website..It is New Idea in this Online shopping Era Where People can Share Their Products By Bidding...
           Its MERN Stack Project..
          </p>

          {/* Project Links */}
          <div className="mt-4 space-y-2">
            <a
              href="https://github.com/vardhgadade/QuickBid" // 🔗 Replace with your actual live project link
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:underline text-sm"
            >
              🔗 View Live Project
            </a>

            
          </div>
        </div>
      </div>
    </div>
  );
}
