import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/20 to-background pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-text mb-6">
          Designing systems that feel good to use
        </h1>
        <p className="text-xl text-text-light mb-8">
          Building the future one gentle project at a time
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/projects" className="btn-primary bg-primary hover:bg-primary/90 text-white">
            View Projects
          </Link>
          <Link to="/contact" className="btn-primary bg-secondary hover:bg-secondary/90 text-text">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 