import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're here to help with your scholarship journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@scholarspoints.com</p>
                  <p className="text-gray-600">support@scholarspoints.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600">
                    123 Education Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 2:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
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
                <label className="block text-gray-700 mb-2">Subject</label>
                <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select a subject</option>
                  <option value="scholarship">Scholarship Inquiry</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={6}
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What are your response times?</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer urgent consultations?</h3>
              <p className="text-gray-600">Yes, we offer priority consulting services for urgent scholarship deadlines.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How can I schedule a consultation?</h3>
              <p className="text-gray-600">You can schedule a consultation through our online booking system or by contacting us directly.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;