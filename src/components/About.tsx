import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary/5 via-background to-background/95">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-12 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 left-1/4 w-28 h-28 bg-accent/20 rounded-full blur-2xl"></div>
          
          <h2 className="text-6xl font-serif text-text mb-8 text-center relative z-10">
            About Me
          </h2>
          <p className="text-2xl text-text-light mb-12 text-center max-w-3xl mx-auto leading-relaxed relative z-10">
            Hey! I'm Sophia. I write code, drink too much tea, and try to make things that feel good to use.
          </p>
          <div className="w-40 h-1 bg-gradient-to-r from-accent/0 via-primary to-secondary/0 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What I Do */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20 hover:border-primary/40">
            <h3 className="text-2xl font-serif text-text mb-5 flex items-center">
              <span className="h-3 w-3 rounded-full bg-primary mr-3"></span>
              What I Do
            </h3>
            <ul className="space-y-3">
              {[
                "Design and build websites with a focus on accessibility",
                "Specialize in React and TypeScript development",
                "Create digital experiences that feel natural and intuitive",
                "Study psychology to better understand how people interact with technology"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary inline-block mr-2.5 text-xs">●</span>
                  <span className="text-text-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Background */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-secondary/20 hover:border-secondary/40">
            <h3 className="text-2xl font-serif text-text mb-5 flex items-center">
              <span className="h-3 w-3 rounded-full bg-secondary mr-3"></span>
              Background
            </h3>
            <ul className="space-y-3">
              {[
                "Mixed heritage: Chinese and Portuguese ancestry",
                "Grew up speaking English and Cantonese at home",
                "Currently learning French for fun and future travels",
                "Connecting with my heritage through cooking traditional recipes"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary inline-block mr-2.5 text-xs">●</span>
                  <span className="text-text-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Everyday Life */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-accent/20 hover:border-accent/40">
            <h3 className="text-2xl font-serif text-text mb-5 flex items-center">
              <span className="h-3 w-3 rounded-full bg-accent mr-3"></span>
              Everyday Life
            </h3>
            <ul className="space-y-3">
              {[
                "Morning walks with my dog before starting work",
                "Too many cups of tea and coffee throughout the day",
                "Finding new cafés to work from or just relax in",
                "Cooking experiments (with varying degrees of success)",
                "Quiet evenings reading or watching feel-good shows"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent inline-block mr-2.5 text-xs">●</span>
                  <span className="text-text-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* My Nature */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20 hover:border-primary/40">
            <h3 className="text-2xl font-serif text-text mb-5 flex items-center">
              <span className="h-3 w-3 rounded-full bg-primary mr-3"></span>
              My Nature
            </h3>
            <ul className="space-y-3">
              {[
                "Enjoy both quiet moments and lively atmospheres",
                "Value comfortable silence and deep understanding",
                "Thoughtful listener who appreciates meaningful conversations",
                "Curious about people and their stories",
                "Balance between planning and spontaneity"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary inline-block mr-2.5 text-xs">●</span>
                  <span className="text-text-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-secondary/20 hover:border-secondary/40 md:col-span-2">
            <h3 className="text-2xl font-serif text-text mb-5 flex items-center">
              <span className="h-3 w-3 rounded-full bg-secondary mr-3"></span>
              Interests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {[
                  "Growing collection of teas and coffees from around the world",
                  "Finding new cafés with the perfect ambiance",
                  "House plants (still learning how to keep them alive)",
                  "Human-centered design and accessibility principles"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary inline-block mr-2.5 text-xs">●</span>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  "Psychology and understanding how people interact with technology",
                  "Languages and how they shape our thinking",
                  "Travel photography that captures everyday moments",
                  "Creating spaces that feel both comforting and inspiring"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary inline-block mr-2.5 text-xs">●</span>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Aspirations */}
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-accent/20 hover:border-accent/40 md:col-span-2">
            <h3 className="text-2xl font-serif text-text mb-5 flex items-center">
              <span className="h-3 w-3 rounded-full bg-accent mr-3"></span>
              Aspirations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {[
                  "Creating technology that feels more human and less mechanical",
                  "Building websites that are truly accessible for everyone",
                  "Learning to cook dishes from my mixed heritage",
                  "Visiting Portugal to connect with part of my ancestry"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent inline-block mr-2.5 text-xs">●</span>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  "Finding balance between technology and living in the moment",
                  "Becoming fluent in French (and eventually Mandarin)",
                  "Creating a home that feels both peaceful and inspiring",
                  "Designing digital spaces that bring joy to people's lives"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent inline-block mr-2.5 text-xs">●</span>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 