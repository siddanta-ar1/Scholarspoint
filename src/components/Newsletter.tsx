import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // In a real application, this would be an API endpoint
      // For now, we'll simulate sending an email using mailto
      const mailtoLink = `mailto:siddantasodari123@gmail.com?subject=New Newsletter Subscription&body=New subscription request from: ${email}`;
      window.location.href = mailtoLink;
      
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 text-white" />
          <h2 className="mt-4 text-3xl font-extrabold text-white">
            Stay Updated with Latest Opportunities
          </h2>
          <p className="mt-2 text-lg text-blue-100">
            Get weekly alerts about new scholarships matching your profile
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
            placeholder="Enter your email"
            disabled={status === 'submitting'}
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                status === 'submitting'
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'text-blue-600 bg-white hover:bg-blue-50'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white transition duration-200`}
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-center text-white bg-green-500 py-2 px-4 rounded-md mx-auto max-w-md">
            Thank you for subscribing!
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-white bg-red-500 py-2 px-4 rounded-md mx-auto max-w-md">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;