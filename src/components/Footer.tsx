import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ScholarsPoints</h3>
            <p className="text-gray-400">
              Your trusted partner in finding and securing scholarships worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/scholarships" className="text-gray-400 hover:text-white">Scholarships</Link></li>
              <li><Link to="/consulting" className="text-gray-400 hover:text-white">Consulting</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/community" className="text-gray-400 hover:text-white">Community</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Guides</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Templates</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ScholarsPoints. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;