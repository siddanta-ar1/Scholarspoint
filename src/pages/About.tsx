import React from 'react';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Former scholarship advisor with 15+ years of experience in international education.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Consulting',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Specialized in scholarship applications for top universities worldwide.',
  },
  {
    name: 'Dr. Emily Thompson',
    role: 'Academic Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'PhD in Education Policy, expert in international academic programs.',
  },
  {
    name: 'James Wilson',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Manages our scholarship database and digital infrastructure.',
  },
  {
    name: 'Priya Patel',
    role: 'Senior Consultant',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Specializes in graduate school admissions and research scholarships.',
  },
  {
    name: 'David Kim',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Leads our outreach and community engagement initiatives.',
  },
  {
    name: 'Lisa Anderson',
    role: 'Content Strategist',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Creates educational content and scholarship guides.',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Regional Director - MENA',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Expertise in Middle Eastern and North African scholarship programs.',
  },
  {
    name: 'Maria Garcia',
    role: 'Student Success Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Supports students throughout their scholarship journey.',
  },
  {
    name: 'Thomas Lee',
    role: 'Research Analyst',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Identifies and validates new scholarship opportunities.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About ScholarsPoints</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2020, ScholarsPoints has emerged as a leading platform connecting ambitious students with global scholarship opportunities. Our mission is to make quality education accessible to talented individuals worldwide by simplifying the scholarship discovery and application process.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a team of experienced education professionals, we've helped over 10,000 students secure scholarships worth more than $50 million across 100+ countries. Our comprehensive approach combines technology with personalized guidance to ensure each student reaches their academic potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
                <p className="text-gray-600">Students Assisted</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">$50M+</h3>
                <p className="text-gray-600">Scholarships Secured</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-600">Countries Reached</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Excellence</h3>
              <p className="text-gray-700">We strive for excellence in every aspect of our service, ensuring the highest quality guidance and support for our students.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Integrity</h3>
              <p className="text-gray-700">We maintain the highest standards of honesty and transparency in all our interactions with students and institutions.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Innovation</h3>
              <p className="text-gray-700">We continuously innovate our platform and services to better serve the evolving needs of our global student community.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;