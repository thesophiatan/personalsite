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
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-text mb-4">Notes & Thoughts</h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto"></div>
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            Little musings I might share with friends over coffee. Nothing too formal - just thinking out loud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notes.map((note) => (
            <div 
              key={note.id}
              className="card group hover:border-primary/30 transition-colors border border-gray-100 bg-white/50 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-text-light">{note.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-text mb-4 group-hover:text-primary transition-colors">
                  {note.title}
                </h3>
                <p className="text-text-light mb-4">{note.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/notes"
            className="btn btn-secondary inline-flex items-center space-x-2"
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