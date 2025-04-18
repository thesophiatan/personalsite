import React, { useState, useEffect } from 'react';

const Now: React.FC = () => {
  // Get current date in a nice format
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric', 
    year: 'numeric'
  });
  
  // Create wave animation effect
  const [waveOffset, setWaveOffset] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveOffset(prev => (prev + 1) % 100);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="now" className="py-24 bg-gradient-to-b from-accent/10 via-background to-background/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-accent/20 rounded-full blur-xl animate-twinkle"></div>
          
          {/* Wave decoration inspired by Bella Le's design */}
          <div className="absolute bottom-0 left-0 right-0 h-12 opacity-30" style={{ 
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23${encodeURIComponent('#').slice(1)}9AC5D9'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: '1200px 100%',
            backgroundPosition: `${waveOffset}% bottom`,
            backgroundRepeat: 'repeat-x'
          }}></div>
          
          <h2 className="text-5xl font-serif text-text mb-6 animate-float relative z-10">✨ What I'm Up To ✨</h2>
          
          {/* Decorative polaroid-inspired element */}
          <div className="w-56 h-64 bg-white shadow-md rotate-3 mx-auto mb-10 p-2 relative">
            <div className="h-40 bg-primary/10 mb-3 flex items-center justify-center">
              <span className="font-serif text-4xl text-primary opacity-40">Now</span>
            </div>
            <p className="text-md text-text-light mb-1 font-medium">Right this minute</p>
            <p className="text-xs text-text-light/60 italic">{formattedDate}</p>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent/10 rounded-full"></div>
          </div>
          
          <p className="text-xl text-text-light mt-8 max-w-2xl mx-auto leading-relaxed relative z-10">
            If we were catching up over coffee, here's what I'd tell you about my life lately.
            <br/>
            <span className="text-sm">(Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors duration-300 underline decoration-2 decoration-secondary/30 hover:decoration-secondary">Derek Sivers' /now page</a>)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:rotate-1">
            <div className="p-8 relative overflow-hidden rounded-2xl">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Cute side decorative element */}
              <div className="absolute -left-1 top-1/3 h-full">
                <div className="w-2 h-12 bg-primary/30 rounded-full"></div>
                <div className="w-2 h-8 bg-secondary/30 rounded-full mt-2"></div>
                <div className="w-2 h-6 bg-accent/30 rounded-full mt-2"></div>
              </div>
              
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300 pl-4">Life Lately 🌱</h3>
              <ul className="space-y-5 text-text-light">
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>My morning walks with my dog have become the highlight of my day. We've been exploring different paths and neighborhoods, and there's something so peaceful about those quiet morning moments together.</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>I've been alternating between local cafes as my workspaces. There's this one spot with the perfect window seat that gets just the right amount of sunlight in the afternoons. The barista knows my usual order now!</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-400">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>I've been enjoying the rhythm of quiet mornings and occasional lively evenings with friends. Finding that balance between solitude and connection feels like a small victory.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:rotate-1">
            <div className="p-8 relative overflow-hidden rounded-2xl">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Cute side decorative element */}
              <div className="absolute -right-1 top-1/3 h-full">
                <div className="w-2 h-12 bg-accent/30 rounded-full ml-auto"></div>
                <div className="w-2 h-8 bg-primary/30 rounded-full mt-2 ml-auto"></div>
                <div className="w-2 h-6 bg-secondary/30 rounded-full mt-2 ml-auto"></div>
              </div>
              
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300 pl-4">Work & Projects 💻</h3>
              <ul className="space-y-5 text-text-light">
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                  <span className="w-5 h-5 mr-3 rounded-full bg-accent/30 flex items-center justify-center mt-1 group-hover:bg-accent/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/90 animate-pulse"></span>
                  </span>
                  <span>Focusing deeply on making technology feel more human. I'm working on designs that prioritize gentle interactions — interfaces that respect people's attention and emotions rather than demanding them.</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                  <span className="w-5 h-5 mr-3 rounded-full bg-accent/30 flex items-center justify-center mt-1 group-hover:bg-accent/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/90 animate-pulse"></span>
                  </span>
                  <span>Building "Fragments" — my journaling companion that helps people reflect on their experiences through nonviolent communication principles. It's becoming a space for personal growth that doesn't feel overwhelming.</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-400">
                  <span className="w-5 h-5 mr-3 rounded-full bg-accent/30 flex items-center justify-center mt-1 group-hover:bg-accent/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/90 animate-pulse"></span>
                  </span>
                  <span>Learning more about accessibility and inclusive design. Working to ensure my projects don't leave anyone behind, regardless of their abilities or circumstances.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:-rotate-1">
            <div className="p-8 relative overflow-hidden rounded-2xl">
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Cute side decorative element */}
              <div className="absolute -left-1 top-1/3 h-full">
                <div className="w-2 h-12 bg-secondary/30 rounded-full"></div>
                <div className="w-2 h-8 bg-accent/30 rounded-full mt-2"></div>
                <div className="w-2 h-6 bg-primary/30 rounded-full mt-2"></div>
              </div>
              
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300 pl-4">Current Obsessions ☕</h3>
              <ul className="space-y-5 text-text-light">
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                  <span className="w-5 h-5 mr-3 rounded-full bg-secondary/30 flex items-center justify-center mt-1 group-hover:bg-secondary/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/90 animate-pulse"></span>
                  </span>
                  <span>My tea and coffee collection is getting slightly out of hand. I've been particularly drawn to subtle, complex flavors lately — a Japanese sencha in the morning and a medium-roast Ethiopian pour-over in the afternoon.</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                  <span className="w-5 h-5 mr-3 rounded-full bg-secondary/30 flex items-center justify-center mt-1 group-hover:bg-secondary/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/90 animate-pulse"></span>
                  </span>
                  <span>Trying to improve my cooking skills but it's been a journey of both triumphs and disasters. Made a surprisingly decent risotto last week, but let's not talk about the bread attempt that could have been used as a doorstop.</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-400">
                  <span className="w-5 h-5 mr-3 rounded-full bg-secondary/30 flex items-center justify-center mt-1 group-hover:bg-secondary/40 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/90 animate-pulse"></span>
                  </span>
                  <span>Been drawn to ambient soundscapes and nature recordings while working. There's something about the gentle backdrop of rainfall or soft piano that helps me focus and stay centered throughout the day.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:-rotate-1">
            <div className="p-8 relative overflow-hidden rounded-2xl">
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Cute side decorative element */}
              <div className="absolute -right-1 top-1/3 h-full">
                <div className="w-2 h-12 bg-primary/30 rounded-full ml-auto"></div>
                <div className="w-2 h-8 bg-secondary/30 rounded-full mt-2 ml-auto"></div>
                <div className="w-2 h-6 bg-accent/30 rounded-full mt-2 ml-auto"></div>
              </div>
              
              <h3 className="text-2xl font-serif text-text mb-6 group-hover:text-primary transition-colors duration-300 pl-4">On The Horizon 🔮</h3>
              <ul className="space-y-5 text-text-light">
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>Looking forward to exploring more cafes with outdoor seating. I want to find those hidden gems where you can sit quietly with a good book, your dog nearby, and just watch the world go by for a while.</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>Planning some thoughtful updates to this website. I want it to feel even more like a natural extension of myself — something that captures the gentleness and attention to detail that I value in both design and life.</span>
                </li>
                <li className="flex items-start group-hover:translate-x-1 transition-transform duration-400">
                  <span className="w-5 h-5 mr-3 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  </span>
                  <span>Making space for more deep, meaningful conversations. I've realized how much I value those moments of real connection — when you can sit with someone in comfortable silence or discuss big ideas without rushing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cute footer element with sticker-like feel */}
        <div className="mt-16 flex justify-center">
          <div className="backdrop-blur-sm bg-white/40 py-3 px-6 rounded-full inline-block mx-auto border border-primary/10 transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-sm hover:shadow-md">
            <p className="text-text-light flex items-center">
              <span className="w-3 h-3 bg-primary/60 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm">Last updated: {formattedDate}</span>
            </p>
          </div>
          
          <div className="absolute -mt-8 -ml-16 transform rotate-12">
            <div className="w-16 h-16 bg-accent/5 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-xs text-accent/60 font-serif">
                now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Now; 