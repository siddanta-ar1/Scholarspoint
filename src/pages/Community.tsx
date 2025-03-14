import React from 'react';
import { MessageSquare, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const discussions = [
  {
    id: 1,
    title: 'Tips for Fulbright Scholarship Application',
    author: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    replies: 23,
    views: 156,
    category: 'Application Tips'
  },
  {
    id: 2,
    title: 'Rhodes Scholarship Interview Experience',
    author: 'Michael Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    replies: 45,
    views: 289,
    category: 'Interview Experience'
  },
  {
    id: 3,
    title: 'Study in Germany: DAAD Scholarship Guide',
    author: 'Emily Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    replies: 34,
    views: 201,
    category: 'Country Guide'
  }
];

const successStories = [
  {
    id: 1,
    name: 'John Smith',
    scholarship: 'Fulbright Scholarship',
    university: 'Harvard University',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    story: 'Successfully secured a full scholarship for my Masters in Public Policy.'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    scholarship: 'Gates Cambridge',
    university: 'University of Cambridge',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    story: 'Achieved my dream of studying Computer Science at Cambridge.'
  }
];

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ScholarsPoints Community</h1>
          <p className="text-xl text-gray-600">Connect, share, and learn from fellow scholarship seekers</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
            <p className="text-gray-600">Community Members</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">5,000+</h3>
            <p className="text-gray-600">Discussions</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">1,000+</h3>
            <p className="text-gray-600">Success Stories</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Resources Shared</p>
          </div>
        </div>

        {/* Latest Discussions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Latest Discussions</h2>
            <button className="text-blue-600 hover:text-blue-700 flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="space-y-6">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start">
                  <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">By {discussion.author}</span>
                      <span className="mr-4">{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {discussion.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.name}</h3>
                    <p className="text-blue-600 mb-2">{story.scholarship}</p>
                    <p className="text-gray-600 mb-4">{story.university}</p>
                    <p className="text-gray-700">{story.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Community CTA */}
        <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Join Our Community</h2>
          <p className="text-blue-100 mb-6">
            Connect with fellow scholarship seekers, share experiences, and get valuable advice
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;