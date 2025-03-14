import React from 'react';
import { BookOpen, Download, Video, FileText } from 'lucide-react';

const resources = [
  {
    category: "Guides & Templates",
    items: [
      {
        title: "SOP Writing Guide",
        description: "Learn how to write a compelling Statement of Purpose",
        icon: FileText,
        link: "#"
      },
      {
        title: "Resume Template",
        description: "ATS-friendly resume template for scholarship applications",
        icon: Download,
        link: "#"
      },
      {
        title: "Interview Preparation",
        description: "Common scholarship interview questions and answers",
        icon: Video,
        link: "#"
      }
    ]
  },
  {
    category: "Video Tutorials",
    items: [
      {
        title: "Scholarship Application Process",
        description: "Step-by-step guide to applying for scholarships",
        duration: "15 mins",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Writing a Winning SOP",
        description: "Tips and tricks for crafting your statement",
        duration: "20 mins",
        thumbnail: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

const Resources = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Resource Center</h1>
          <p className="mt-4 text-xl text-gray-600">Everything you need to succeed in your scholarship journey</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Guides & Templates</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {resources[0].items.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                  <span className="mt-4 inline-flex items-center text-blue-600">
                    Download Now
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Video Tutorials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {resources[1].items.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
                  <p className="mt-2 text-gray-600">{video.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-500">{video.duration}</span>
                    <button className="flex items-center text-blue-600">
                      Watch Now
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Need More Help?</h2>
          <p className="mt-4 text-center text-gray-600">
            Our expert consultants are here to guide you through your scholarship journey
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;