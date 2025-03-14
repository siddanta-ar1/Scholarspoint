import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Write a Winning Scholarship Essay',
    excerpt: 'Learn the key strategies and tips for crafting an essay that stands out to scholarship committees.',
    author: 'Dr. Sarah Chen',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Application Tips',
    image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Top Scholarships for International Students in 2024',
    excerpt: 'A comprehensive guide to the most prestigious international scholarships available this year.',
    author: 'Michael Rodriguez',
    date: '2024-03-10',
    readTime: '10 min read',
    category: 'Scholarship Guide',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    title: 'Mastering the Scholarship Interview',
    excerpt: 'Expert tips on how to prepare for and ace your scholarship interview.',
    author: 'Emily Thompson',
    date: '2024-03-05',
    readTime: '12 min read',
    category: 'Interview Prep',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    title: 'Building a Strong Academic Profile',
    excerpt: 'Learn how to develop an academic profile that attracts scholarship opportunities.',
    author: 'James Wilson',
    date: '2024-03-01',
    readTime: '15 min read',
    category: 'Academic Success',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const categories = [
  'All Categories',
  'Application Tips',
  'Scholarship Guide',
  'Interview Prep',
  'Academic Success',
  'Student Life',
  'Success Stories'
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Resources</h1>
          <p className="text-xl text-gray-600">Expert insights and guides for your scholarship journey</p>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto space-x-4 mb-8 pb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Featured post"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Featured Article</div>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                Complete Guide to Scholarship Applications in 2024
              </h2>
              <p className="mt-4 text-gray-600">
                Everything you need to know about finding, applying for, and winning scholarships in 2024. From preparation to submission, we cover all the essential steps.
              </p>
              <div className="mt-4 flex items-center text-gray-500 text-sm">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">Dr. Sarah Chen</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">Mar 20, 2024</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>20 min read</span>
              </div>
              <button className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-blue-600 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6">Subscribe to our newsletter for the latest scholarship tips and opportunities</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-lg focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;