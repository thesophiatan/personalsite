import React from 'react';
import { Link } from 'react-router-dom';

const NotesPreview: React.FC = () => {
  const notes = [
    {
      id: "empathy-in-design",
      title: "Hey, thinking about empathy in design lately...",
      excerpt: "I've been working on this project and it got me thinking about how we design for people going through tough times...",
      date: "April 10, 2024",
    },
    {
      id: "morning-quiet",
      title: "Morning quiet time has been saving me",
      excerpt: "So I've been trying this thing where I don't check my phone for the first hour after waking up...",
      date: "March 28, 2024",
    },
  ];

  return (
    <section className="-mt-10 pt-32 pb-20 bg-gradient-to-b from-background via-background/98 to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-12 left-1/3 w-28 h-28 bg-secondary/10 rounded-full blur-xl animate-pulse"></div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4 relative z-10">Notes & Thoughts</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0 mx-auto"></div>
          <p className="text-text-light mt-4 max-w-2xl mx-auto relative z-10">
            Little musings I might share with friends over coffee. Nothing too formal - just thinking out loud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notes.map((note) => (
            <div 
              key={note.id}
              className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-secondary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-1"
            >
              <div className="p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-text-light bg-white/60 px-3 py-1 rounded-full border border-secondary/10">{note.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-text mb-4 group-hover:text-primary transition-colors">
                  {note.title}
                </h3>
                <p className="text-text-light mb-4 relative z-10">{note.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/notes"
            className="px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:shadow-md hover:translate-y-[-2px] hover:bg-primary/90 inline-flex items-center space-x-2"
          >
            <span>View all notes</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotesPreview; 