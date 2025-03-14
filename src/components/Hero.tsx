import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // This would typically connect to your search API
    }
  };

  const handleFindScholarships = () => {
    window.location.href = '#scholarships';
  };

  const handleGetExpertHelp = () => {
    window.location.href = '#consulting';
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Find Your Perfect Scholarship
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Access thousands of scholarships worldwide and get expert guidance to make your academic dreams come true.
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-4 rounded-full border-2 border-transparent focus:border-white bg-white bg-opacity-20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                placeholder="Search scholarships by country, field, or degree..."
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-100 hover:text-white transition duration-200"
              >
                <Search className="h-6 w-6" />
              </button>
            </form>
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={handleFindScholarships}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-200"
              >
                Find Scholarships
              </button>
              <button
                onClick={handleGetExpertHelp}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition duration-200"
              >
                Get Expert Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;