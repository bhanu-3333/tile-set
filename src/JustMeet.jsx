import React from 'react';

const JustMeet = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 gap-4">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="text-white text-6xl transform rotate-45"><img src="/bubble.png" alt="" /></div>
          ))}
        </div>
      </div>
      
      {/* Logo and mouse cursor */}
      <div className="absolute top-4 right-4 transform -rotate-12">
        <div className="text-white text-4xl"><img src="/bubble.png" alt="" /></div>
      </div>
      
      {/* Main content */}
      <div className="z-10 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-white text-6xl md:text-8xl font-mono tracking-widest mb-2">Just_Meet</h1>
        
        {/* Subtitle */}
        <p className="text-white text-xl md:text-2xl font-mono mb-12">collaborate and work with your friends...!!</p>
        
        {/* Characters and speech bubbles */}
        <div className="flex items-end justify-center w-full relative mb-8">
          {/* Left character */}
          <div className="relative mr-16">
            {/* Speech bubble */}
             
                        <img
                src="/w-msg.png" // Replace with your image path
                alt="Character"
                className="absolute top-10 right-40 w-[1000px] h-auto"
            />
                        
           
            
            {/* Blue character */}
            <div className="w-32 h-40">
              <div className="w-full h-32 bg-blue-500 rounded-t-full relative">
                {/* Face */}
                <div className="absolute top-4 left-0 w-full">
                  <div className="flex justify-center space-x-8">
                    <div className="w-4 h-6 bg-teal-500 rounded"></div>
                    <div className="w-4 h-6 bg-teal-500 rounded"></div>
                  </div>
                </div>
                <div className="absolute top-16 left-0 w-full flex justify-center">
                  <div className="w-10 h-3 bg-white rounded"></div>
                </div>
                
                {/* Hair */}
                <div className="absolute top-0 left-0 w-full h-16 bg-blue-600 rounded-t-full"></div>
                
                {/* Freckles */}
                <div className="absolute top-14 left-8 w-16 flex justify-between">
                  <div className="w-1 h-1 bg-orange-300 rounded-full"></div>
                  <div className="w-1 h-1 bg-orange-300 rounded-full"></div>
                  <div className="w-1 h-1 bg-orange-300 rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-8 bg-gray-300"></div>
              <div className="w-full h-8 flex">
                <div className="flex-1 bg-purple-500"></div>
                <div className="flex-1 bg-purple-500"></div>
              </div>
            </div>
          </div>
          
          {/* Connect button */}
          <div className="absolute top-0 bg-white px-4 py-2 font-mono text-xl border-4 border-black">
            CONNECT
          </div>
          
          {/* Right character */}
          <div className="relative ml-16">
            {/* Speech bubble */}
            <div className="absolute -top-24 -right-32">
              <div className="bg-white p-3 rounded border-4 border-black relative">
                <p className="font-mono text-sm whitespace-nowrap">HOW YOU DOING??</p>
                <p className="font-mono text-sm whitespace-nowrap">ITS HAPPY TO SEE HERE!!</p>
                <div className="absolute bottom-0 right-16 w-5 h-5 bg-white transform rotate-45 translate-y-2 border-r-4 border-b-4 border-black"></div>
              </div>
            </div>
            
            {/* Yellow character */}
            <div className="w-32 h-40">
              <div className="w-full h-32 bg-yellow-300 rounded-t-full relative">
                {/* Face */}
                <div className="absolute top-8 left-0 w-full">
                  <div className="flex justify-center space-x-8">
                    <div className="w-4 h-6 bg-blue-300 rounded"></div>
                    <div className="w-4 h-6 bg-blue-300 rounded"></div>
                  </div>
                </div>
                <div className="absolute top-20 left-0 w-full flex justify-center">
                  <div className="w-6 h-2 bg-pink-900 rounded"></div>
                </div>
                
                {/* Hair */}
                <div className="absolute -bottom-4 left-0 w-full h-24 bg-yellow-400"></div>
              </div>
              <div className="w-full h-8 bg-green-300"></div>
              <div className="w-full h-8 flex">
                <div className="flex-1 bg-pink-500"></div>
                <div className="flex-1 bg-pink-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustMeet;