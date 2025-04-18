import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-accent/10 via-background to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-title">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full"></div>
          <p className="section-subtitle">
            Hi there! I'm a developer who believes technology should feel good to use. I spend my days writing code, exploring cafes with my dog, and trying (sometimes failing) to perfect my coffee brewing technique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work */}
          <div className="card group">
            <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Build accessible, human-centered websites and applications</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Focus on creating experiences that feel natural to use</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Combine my psychology background with technical skills</span>
              </li>
            </ul>
          </div>

          {/* Background */}
          <div className="card group">
            <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Background</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Mixed heritage: Chinese, Cambodian, Vietnamese, and Thai</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Studied Psychology and Chinese in college</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Self-taught programmer with a love for frontend</span>
              </li>
            </ul>
          </div>

          {/* Everyday */}
          <div className="card group">
            <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Everyday Life</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Coffee shop explorer with my dog as co-pilot</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Serious tea and coffee enthusiast (probably too serious)</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Attempting to cook dishes from my heritage (with mixed results)</span>
              </li>
            </ul>
          </div>

          {/* My Nature */}
          <div className="card group">
            <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">My Nature</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Enjoy both busy cafes and quiet reading nooks</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Value comfortable silence over small talk any day</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Find meaning in connecting deeply with a few people</span>
              </li>
            </ul>
          </div>

          {/* Interests */}
          <div className="card group">
            <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Interests</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Where psychology and technology intersect</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Designs that consider how humans actually behave</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Language learning (currently: improving my Japanese)</span>
              </li>
            </ul>
          </div>

          {/* Aspirations */}
          <div className="card group">
            <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Aspirations</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Create digital spaces that feel genuinely welcoming</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Connect more deeply with my cultural roots</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 mr-3 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span>Eventually master cooking at least one family recipe properly</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 