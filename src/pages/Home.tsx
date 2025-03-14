import React from 'react';
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Gateway to Scholarships Worldwide
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover opportunities, get expert guidance, and achieve your academic dreams with ScholarsPoints.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/scholarships"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center transition-colors"
              >
                Explore Scholarships <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consulting"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center transition-colors"
              >
                Get Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ScholarsPoints?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Scholarships</h3>
              <p className="text-gray-600">
                Access thousands of verified scholarships from prestigious institutions worldwide.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Get personalized consulting from experienced scholarship advisors.
              </p>
            </div>
            <div className="text-center p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resource Library</h3>
              <p className="text-gray-600">
                Access comprehensive guides, templates, and tips for successful applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Scholarship Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of students who have successfully secured scholarships through ScholarsPoints.
          </p>
          <Link
            to="/community"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold inline-flex items-center transition-colors"
          >
            Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;