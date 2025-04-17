import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Image section - shown first on mobile */}
        <div className="relative mb-12 md:mb-0 md:order-2">
          <div className="w-full aspect-square max-w-md mx-auto">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/sophiaheadshot.png" 
                alt="Sophia Tan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full -z-10"></div>
        </div>

        {/* Content section - shown second on mobile */}
        <div className="space-y-6 md:order-1">
          <p className="text-text-light text-lg">
            I'm a multi-faceted creator and software engineer-in-training with a background in project and operations strategy. My journey in tech is driven by a deontological approach to ethics, focusing on creating systems that respect individual autonomy and uphold moral principles.
          </p>
          <p className="text-text-light text-lg">
            My work spans across tech, game design, fashion, and chronic illness advocacy, always with a focus on making systems that feel good to use and serve real human needs while maintaining ethical integrity.
          </p>
          
          <h3 className="text-2xl font-serif text-text mb-4">Interests & Values</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="card bg-background">
              <h4 className="font-medium text-text mb-2">Technical</h4>
              <ul className="text-text-light space-y-1">
                <li>• Robotics & AI</li>
                <li>• Game Design</li>
                <li>• Wearable Tech</li>
                <li>• Accessible Design</li>
              </ul>
            </div>
            <div className="card bg-background">
              <h4 className="font-medium text-text mb-2">Personal</h4>
              <ul className="text-text-light space-y-1">
                <li>• Gardening</li>
                <li>• Buddhist Practice</li>
                <li>• Chronic Illness Advocacy</li>
                <li>• Community Building</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-serif text-text mb-4">Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-background p-6">
              <h4 className="font-medium text-text mb-2">Operations & Strategy</h4>
              <p className="text-text-light">Experience in project management and operations strategy, focusing on creating efficient, human-centered systems that align with ethical principles.</p>
            </div>
            <div className="card bg-background p-6">
              <h4 className="font-medium text-text mb-2">Software Engineering</h4>
              <p className="text-text-light">Currently training in software development, with a focus on building accessible and empathetic solutions that respect user autonomy.</p>
            </div>
            <div className="card bg-background p-6">
              <h4 className="font-medium text-text mb-2">Creative Projects</h4>
              <p className="text-text-light">Passionate about game design, wearable tech, and creating tools that bring people together while maintaining ethical integrity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 