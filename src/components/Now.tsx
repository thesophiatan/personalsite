import React from 'react';

const Now: React.FC = () => {
  return (
    <section id="now" className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-text mb-6">What I'm Up To</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto"></div>
          <p className="text-xl text-text-light/80 mt-6 max-w-2xl mx-auto">
            Inspired by Derek Sivers' <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors duration-300">/now</a> page movement, here's what's new in my life.
          </p>
        </div>

        <div className="space-y-8">
          <div className="card group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
            <div className="p-8">
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Life Updates</h3>
              <ul className="space-y-4 text-text-light/90">
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>I've been really enjoying my morning routine - starting the day with a cup of tea and some quiet time before diving into work</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Recently got into indoor plants and have been learning how to care for them - my peace lily is thriving!</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Been taking more walks in nature and finding it really helps clear my mind</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
            <div className="p-8">
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Projects & Work</h3>
              <ul className="space-y-4 text-text-light/90">
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Working on this personal website - it's been fun learning new design patterns and making it feel more like "me"</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Experimenting with creating some small tools to help with daily reflection and mindfulness</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Learning more about accessibility and how to make digital experiences more inclusive</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
            <div className="p-8">
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">What I'm Enjoying</h3>
              <ul className="space-y-4 text-text-light/90">
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Reading more fiction lately - currently enjoying some cozy mystery novels</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Been trying out new tea blends and learning about different brewing methods</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Listening to more instrumental music while working - it helps me focus</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
            <div className="p-8">
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300">Looking Forward To</h3>
              <ul className="space-y-4 text-text-light/90">
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Planning a small garden for the spring - thinking about growing some herbs and flowers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Working on some new creative projects that combine my love for technology and gentle experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  <span>Taking more time to connect with friends and family, both online and in person</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-text-light/80">
          <p>Last updated: March 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Now; 