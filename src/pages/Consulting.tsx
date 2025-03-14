import React from 'react';
import { Clock, CheckCircle, Calendar, Mail } from 'lucide-react';

const services = [
  {
    title: 'Application Review & Strategy',
    price: '$199',
    duration: '2 hours',
    description: 'Comprehensive review of your scholarship application with personalized feedback and strategy.',
    features: [
      'Document review (CV, SOP, Essays)',
      'Personalized feedback report',
      'Application strategy session',
      'Follow-up support'
    ]
  },
  {
    title: 'Interview Preparation',
    price: '$149',
    duration: '1.5 hours',
    description: 'Mock interview session with detailed feedback and preparation strategies.',
    features: [
      'Mock interview session',
      'Common questions review',
      'Body language coaching',
      'Follow-up feedback report'
    ]
  },
  {
    title: 'SOP & Essay Writing Support',
    price: '$249',
    duration: '3 hours',
    description: 'Guidance and feedback on your Statement of Purpose and scholarship essays.',
    features: [
      'Content planning session',
      'Multiple draft reviews',
      'Writing style guidance',
      'Final polish review'
    ]
  },
  {
    title: 'Complete Application Package',
    price: '$499',
    duration: 'Full Support',
    description: 'End-to-end support for your scholarship application process.',
    features: [
      'All services included',
      'Priority support',
      'Extended support duration',
      'Direct mentor access'
    ]
  }
];

const Consulting = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Consulting Services</h1>
          <p className="text-xl text-gray-600">Expert guidance to maximize your scholarship success</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{service.duration}</span>
                  <span className="mx-4 text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Schedule a Free Initial Consultation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Service Type</label>
              <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>{service.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Tell us about your scholarship goals..."
              ></textarea>
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Consultation
          </button>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Have questions? Contact us directly:</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:contact@scholarspoints.com" className="flex items-center text-blue-600 hover:text-blue-700">
              <Mail className="h-5 w-5 mr-2" />
              contact@scholarspoints.com
            </a>
            <span className="flex items-center text-blue-600">
              <Calendar className="h-5 w-5 mr-2" />
              Available Mon-Fri, 9AM-6PM EST
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;