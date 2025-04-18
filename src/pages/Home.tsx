import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import NotesPreview from '../components/NotesPreview';

const Home: React.FC = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Projects />
      <NotesPreview />
    </div>
  );
};

export default Home; 