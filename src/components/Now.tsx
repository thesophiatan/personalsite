import React from 'react';

const Now: React.FC = () => {
  return (
    <section id="now" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-text mb-4">What I'm Doing Now</h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto"></div>
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            Inspired by Derek Sivers' <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70">/now</a> page movement, this is what I'm currently focused on.
          </p>
        </div>

        <div className="space-y-8">
          <div className="card bg-white/50 backdrop-blur-sm p-8 border border-gray-100">
            <h3 className="text-2xl font-serif text-text mb-4">Current Focus</h3>
            <ul className="space-y-4 text-text-light">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Deepening my understanding of React and TypeScript through building this website</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Exploring robotics and AI concepts, inspired by Dr. Brainard from Flubber</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Developing tools for chronic illness management and accessibility</span>
              </li>
            </ul>
          </div>

          <div className="card bg-white/50 backdrop-blur-sm p-8 border border-gray-100">
            <h3 className="text-2xl font-serif text-text mb-4">Learning</h3>
            <ul className="space-y-4 text-text-light">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Advanced React patterns and best practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Robotics fundamentals and Arduino programming</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Accessibility standards and inclusive design principles</span>
              </li>
            </ul>
          </div>

          <div className="card bg-white/50 backdrop-blur-sm p-8 border border-gray-100">
            <h3 className="text-2xl font-serif text-text mb-4">Reading & Watching</h3>
            <ul className="space-y-4 text-text-light">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Books on Buddhist philosophy and mindfulness</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Documentaries about AI and robotics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tech talks about accessibility and inclusive design</span>
              </li>
            </ul>
          </div>

          <div className="card bg-white/50 backdrop-blur-sm p-8 border border-gray-100">
            <h3 className="text-2xl font-serif text-text mb-4">Creating</h3>
            <ul className="space-y-4 text-text-light">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>This personal website as a space for reflection and sharing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Small games and interactive experiences that explore ethical questions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tools and resources for the chronic illness community</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-text-light">
          <p>Last updated: March 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Now; 