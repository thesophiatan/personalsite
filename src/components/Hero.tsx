import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/20 to-background pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-text mb-6">
          Hi, I'm Sophia Tan
        </h1>
        <p className="text-xl text-text-light mb-8">
          I design and build systems that feel good to use, focusing on accessibility and user experience.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link to="/#about" className="btn btn-secondary">
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 