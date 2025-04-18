import React from 'react';

const Now: React.FC = () => {
  return (
    <section id="now" className="py-24 bg-gradient-to-b from-accent/10 via-background to-background/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-accent/20 rounded-full blur-xl animate-twinkle"></div>
          
          <h2 className="text-5xl font-serif text-text mb-6 animate-float relative z-10">What I'm Up To</h2>
          <div className="w-40 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto"></div>
          <p className="text-xl text-text-light mt-6 max-w-2xl mx-auto leading-relaxed relative z-10">
            Inspired by Derek Sivers' <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors duration-300 underline decoration-2 decoration-secondary/30 hover:decoration-secondary">/now</a> page movement, here's what's new in my life.
          </p>
        </div>

        <div className="space-y-8">
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="p-8 relative overflow-hidden rounded-2xl">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Life Updates</h3>
              <ul className="space-y-5 text-text-light">
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>I've been really enjoying my morning routine - starting the day with a cup of tea and some quiet time before diving into work</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>Recently got into indoor plants and have been learning how to care for them - my peace lily is thriving!</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>Been taking more walks in nature and finding it really helps clear my mind</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="p-8 relative overflow-hidden rounded-2xl">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Projects & Work</h3>
              <ul className="space-y-5 text-text-light">
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-accent/30 flex items-center justify-center mt-1 group-hover:bg-accent/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/90 animate-pulse"></span>
                  </span>
                  <span>Working on this personal website - it's been fun learning new design patterns and making it feel more like "me"</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-accent/30 flex items-center justify-center mt-1 group-hover:bg-accent/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/90 animate-pulse"></span>
                  </span>
                  <span>Experimenting with creating some small tools to help with daily reflection and mindfulness</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-accent/30 flex items-center justify-center mt-1 group-hover:bg-accent/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/90 animate-pulse"></span>
                  </span>
                  <span>Learning more about accessibility and how to make digital experiences more inclusive</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="p-8 relative overflow-hidden rounded-2xl">
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">What I'm Enjoying</h3>
              <ul className="space-y-5 text-text-light">
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-secondary/30 flex items-center justify-center mt-1 group-hover:bg-secondary/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/90 animate-pulse"></span>
                  </span>
                  <span>Reading more fiction lately - currently enjoying some cozy mystery novels</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-secondary/30 flex items-center justify-center mt-1 group-hover:bg-secondary/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/90 animate-pulse"></span>
                  </span>
                  <span>Been trying out new tea blends and learning about different brewing methods</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-secondary/30 flex items-center justify-center mt-1 group-hover:bg-secondary/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/90 animate-pulse"></span>
                  </span>
                  <span>Listening to more instrumental music while working - it helps me focus</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <div className="p-8 relative overflow-hidden rounded-2xl">
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Looking Forward To</h3>
              <ul className="space-y-5 text-text-light">
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>Planning a small garden for the spring - thinking about growing some herbs and flowers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>Working on some new creative projects that combine my love for technology and gentle experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>Taking more time to connect with friends and family, both online and in person</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-text-light/80 italic">
          <p>Last updated: March 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Now; 