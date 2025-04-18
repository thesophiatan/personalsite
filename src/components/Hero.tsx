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
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/20 via-secondary/10 to-background pt-16 relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] py-20 w-full">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden w-full h-full">
          <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl opacity-60"></div>
          <div className="absolute -bottom-12 -right-16 w-72 h-72 rounded-full bg-accent/30 blur-3xl opacity-60"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-secondary/30 blur-3xl opacity-60"></div>
          
          {/* Sweet decorative elements */}
          <div className="absolute bottom-32 right-24 w-4 h-4 rounded-full bg-primary/80"></div>
          <div className="absolute top-1/3 left-24 w-3 h-3 rounded-full bg-accent/80"></div>
          <div className="absolute top-40 right-1/4 w-2 h-2 rounded-full bg-secondary/80"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-text mb-8 leading-tight">
            Creating <span className="text-primary">gentle</span> digital spaces that feel <span className="text-accent">human</span>
          </h1>
          <p className="text-xl lg:text-2xl text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Hi! I'm a developer and designer focused on building technology that connects rather than distracts, creating experiences that feel natural and intuitive.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              See My Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white/90 text-text border border-secondary/30 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 