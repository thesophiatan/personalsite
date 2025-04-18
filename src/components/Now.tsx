import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Now: React.FC = () => {
  // Get current date in a nice format
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric', 
    year: 'numeric'
  });
  
  // For projects carousel
  const [activeProject, setActiveProject] = useState(0);
  const projects = [
    {
      title: "Fragments",
      description: "Journaling companion using nonviolent communication principles",
      status: "In progress"
    },
    {
      title: "This Website",
      description: "A digital space that feels like me",
      status: "Evolving"
    },
    {
      title: "Accessibility Research",
      description: "Making digital experiences inclusive for everyone",
      status: "Ongoing"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);
  
  return (
    <section id="now" className="py-16 bg-gradient-to-b from-primary/5 via-background to-background/95">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple intro with picture */}
        <div className="mb-6 backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 shadow-sm">
          <div className="p-6 rounded-2xl relative overflow-hidden">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/50 shadow-sm">
                <img 
                  src="/images/sophiaheadshot.png" 
                  alt="Sophia Tan" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Sophia+Tan';
                  }}
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-serif text-text">Sophia Tan <span className="text-sm font-normal text-primary ml-2 px-2 py-0.5 rounded-full bg-primary/10">she/her</span></h2>
                <p className="text-text-light/80 text-sm mt-1">Last updated: {formattedDate}</p>
                <a 
                  href="mailto:hello@example.com?subject=Question for Sophia" 
                  className="mt-3 inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors duration-300"
                >
                  Ask me a question
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Thoughts Section (renamed from Notes) */}
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 shadow-sm">
            <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary/40 rounded-full"></div>
                  <h3 className="text-xl font-serif text-text">Thoughts</h3>
                </div>
                <Link to="/notes" className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 flex items-center">
                  See all thoughts
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              <blockquote className="pl-4 border-l-2 border-primary/30 italic text-text-light/90">
                How do we create technology that respects people's attention and emotions? I'm fascinated by digital spaces that feel gentle and human.
              </blockquote>
              
              <div className="mt-8 flex justify-end">
                <div className="flex gap-3">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-300">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="mailto:hello@example.com" className="text-text-light hover:text-primary transition-colors duration-300">
                    <span className="sr-only">Email</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Life Updates Section - NEW */}
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 shadow-sm">
            <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-8 bg-secondary/40 rounded-full"></div>
                <h3 className="text-xl font-serif text-text">Life Updates</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-3 h-3 rounded-full bg-secondary/50 flex-shrink-0 mt-1.5"></span>
                  <div>
                    <p className="text-text font-medium">In the middle of moving</p>
                    <p className="text-text-light/80 text-sm">Boxes everywhere, but excited for the new space!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="w-3 h-3 rounded-full bg-secondary/50 flex-shrink-0 mt-1.5"></span>
                  <div>
                    <p className="text-text font-medium">Learning to code</p>
                    <p className="text-text-light/80 text-sm">Taking it step by step, currently focused on web development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="w-3 h-3 rounded-full bg-secondary/50 flex-shrink-0 mt-1.5"></span>
                  <div>
                    <p className="text-text font-medium">Adopted a new plant</p>
                    <p className="text-text-light/80 text-sm">A fiddle leaf fig that I'm trying very hard not to kill</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Projects Section */}
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 shadow-sm">
            <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/10 rounded-full opacity-30"></div>
              
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary/40 rounded-full"></div>
                  <h3 className="text-xl font-serif text-text">Projects</h3>
                </div>
                <Link to="/projects" className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 flex items-center">
                  See all projects
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              <div className="relative min-h-[100px]">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeProject === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-text">{project.title}</h4>
                        <p className="text-text-light/80 mt-1">{project.description}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs text-primary bg-primary/10 whitespace-nowrap ml-4">
                        {project.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      activeProject === index ? 'bg-primary' : 'bg-primary/30'
                    }`}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Current Focus Areas with Reading - Removed excited about section from here */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 shadow-sm">
              <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden h-full flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-8 bg-secondary/40 rounded-full"></div>
                  <h3 className="text-xl font-serif text-text">I'm reading...</h3>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="p-3 bg-white/30 rounded-xl">
                    <p className="text-text font-medium">Braiding Sweetgrass</p>
                    <p className="text-text-light/70 text-sm">Robin Wall Kimmerer</p>
                  </div>
                  
                  <div className="p-3 bg-white/30 rounded-xl">
                    <p className="text-text font-medium">Design for Real Life</p>
                    <p className="text-text-light/70 text-sm">Eric Meyer & Sara Wachter-Boettcher</p>
                  </div>
                </div>
                
                <a 
                  href="mailto:hello@example.com?subject=Book Recommendation" 
                  className="mt-6 px-5 py-2 bg-primary/10 text-primary rounded-full text-sm text-center hover:bg-primary/20 transition-colors duration-300"
                >
                  Book recommendations?
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-text-light/60 text-xs mt-10">
          <p>Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors duration-300 underline decoration-1">the /now page movement</a></p>
        </div>
      </div>
    </section>
  );
};

export default Now; 