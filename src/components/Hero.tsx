import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax effect on scroll - only apply when hero section is visible
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Only update parallax when section is visible or slightly above viewport
        if (rect.bottom > -300) {
          setOffsetY(window.scrollY);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/20 via-secondary/10 to-background pt-16 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div 
          className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl z-0"
          style={{ transform: `translateY(${Math.min(offsetY * 0.3, 100)}px)` }}
        ></div>
        <div 
          className="absolute -bottom-4 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-xl z-0"
          style={{ transform: `translateY(${Math.max(-offsetY * 0.2, -80)}px)` }}
        ></div>
        
        <h1 
          className="text-5xl md:text-7xl font-serif text-text mb-6 relative z-10"
          style={{ transform: `translateY(${Math.max(-offsetY * 0.1, -40)}px)` }}
        >
          Hi, I'm Sophia Tan
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ transform: `translateY(${Math.max(-offsetY * 0.05, -20)}px)` }}
        >
          I design and build systems that feel good to use, focusing on accessibility and user experience.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          style={{ transform: `translateY(${Math.max(-offsetY * 0.02, -10)}px)` }}
        >
          <Link to="/projects" className="btn-primary px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:shadow-md hover:translate-y-[-2px]">
            View Projects
          </Link>
          <Link to="/#about" className="btn-secondary px-8 py-3 rounded-full bg-white/70 backdrop-blur-sm border border-primary/30 text-text font-medium transition-all hover:shadow-md hover:translate-y-[-2px] hover:bg-white/90">
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 