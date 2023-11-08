// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-off-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-black text-4xl font-bold mb-4">Welcome to Your Platform</h1>
      <p className="text-charcoal-gray text-lg">Your source for trusted business insights.</p>
      <button className="mt-8 text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300 gradient-bg">
        Learn More
      </button>
    </div>
  );
};

export default Home;
