import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif text-primary">
              Sophia Tan
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/about" className="text-text hover:text-primary transition-colors">About</Link>
            <Link to="/projects" className="text-text hover:text-primary transition-colors">Projects</Link>
            <Link to="/now" className="text-text hover:text-primary transition-colors">Now</Link>
            <Link to="/blog" className="text-text hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="text-text hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 