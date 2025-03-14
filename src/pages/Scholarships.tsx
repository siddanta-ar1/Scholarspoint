import React, { useState } from 'react';
import { Search, Filter, GraduationCap, Globe, Calendar, DollarSign } from 'lucide-react';

const scholarships = [
  {
    id: 1,
    title: 'Global Excellence Scholarship',
    university: 'Harvard University',
    amount: '$50,000',
    deadline: '2024-06-30',
    country: 'United States',
    level: 'Graduate',
    field: 'All Fields',
    description: 'Full scholarship covering tuition and living expenses for outstanding international students.',
  },
  {
    id: 2,
    title: 'Engineering Innovation Grant',
    university: 'MIT',
    amount: '$40,000',
    deadline: '2024-07-15',
    country: 'United States',
    level: 'Undergraduate',
    field: 'Engineering',
    description: 'Merit-based scholarship for innovative engineering students.',
  },
  {
    id: 3,
    title: 'Future Leaders Scholarship',
    university: 'Oxford University',
    amount: '£35,000',
    deadline: '2024-08-01',
    country: 'United Kingdom',
    level: 'PhD',
    field: 'Business, Leadership',
    description: 'Scholarship for future business and community leaders.',
  },
  // Add more scholarships as needed
];

const Scholarships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const filteredScholarships = scholarships.filter(scholarship => {
    return (
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLevel === '' || scholarship.level === selectedLevel) &&
      (selectedCountry === '' || scholarship.country === selectedCountry)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Available Scholarships</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search scholarships..."
                className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="PhD">PhD</option>
            </select>
            <select
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">All Countries</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        {/* Scholarships List */}
        <div className="grid grid-cols-1 gap-6">
          {filteredScholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{scholarship.title}</h2>
                  <p className="text-gray-600 mb-4">{scholarship.university}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">{scholarship.amount}</p>
                  <p className="text-sm text-gray-500">per year</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{scholarship.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{scholarship.level}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{scholarship.country}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">Deadline: {scholarship.deadline}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{scholarship.field}</span>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scholarships;