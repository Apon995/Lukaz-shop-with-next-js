"use client";
import React from 'react';
import Image from 'next/image'



const Card: React.FC = () => {
  return(
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
        {/* Main Card Container */}
        <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer overflow-visible">
          
          {/* Image Container - Allows overflow for 3D effect */}
          <div className="relative h-48 sm:h-56 md:h-64 flex items-center justify-center pt-2 pb-8 overflow-visible">
            <div className="relative">
              <Image width={100} height={100}
                src="/shoe.png"
                alt="Premium Sneaker"
                className="w-74 h-54 sm:w-80 sm:h-56 md:w-96 md:h-64 object-contain transform transition-all duration-700 ease-out
                        group-hover:-translate-y-24 group-hover:scale-115 group-hover:rotate-2
                        filter drop-shadow-lg group-hover:drop-shadow-2xl relative z-20"
                style={{
                  transformOrigin: 'center bottom',
                  filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.25))'
                }}
              />

              
              {/* Floating shadow effect */}
              <div className="absolute inset-0 w-56 h-40 sm:w-64 sm:h-44 md:w-72 md:h-48 bg-gradient-to-b from-transparent via-transparent to-black opacity-15 
                            rounded-full blur-xl transform transition-all duration-700 ease-out
                            group-hover:scale-80 group-hover:opacity-25 group-hover:translate-y-6 z-10"></div>
            </div>
          </div>
          
          {/* Card Content */}
          <div className="px-6 pb-6 transform transition-all duration-700 ease-out group-hover:translate-y-2">
            
            {/* Product Header */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 
                           transition-all duration-300 group-hover:text-[#47b083] group-hover:translate-x-1">
                Jordan Retro High
              </h3>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
              Iconic basketball heritage meets modern street style. Premium leather and classic design.
            </p>
            
            {/* Price and Rating Row */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center space-x-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-800 
                               transition-all duration-300 group-hover:text-[#47b083] group-hover:scale-105">
                  $149.99
                </span>
                <span className="text-sm text-[#47b083] line-through">$199.99</span>
              </div>
              
              <div className="flex items-center space-x-1">
                
              </div>
            </div>
            
            {/* Action Button */}
            <button className="w-full bg-gray-900 text-white py-3 sm:py-4 px-6 rounded-2xl font-semibold text-sm sm:text-base
                             transition-all duration-300 hover:bg-[#47b083] transform hover:scale-105 active:scale-95 
                             group-hover:bg-[#47b083] group-hover:shadow-lg">
              Add to Cart
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-purple-100 
                        rounded-full opacity-50 transform transition-all duration-700 ease-out
                        group-hover:scale-150 group-hover:opacity-30 group-hover:rotate-45 z-0"></div>
          
          <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-tr from-yellow-100 to-orange-100 
                        rounded-full opacity-40 transform transition-all duration-700 ease-out
                        group-hover:scale-125 group-hover:opacity-20 group-hover:-rotate-45 z-0"></div>
        </div>
        
      </div>
    </div>
  )
 
};

export default Card;