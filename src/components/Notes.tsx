import React, { useState } from 'react';

const Notes: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const notes = [
    {
      id: 'empathy-in-design',
      date: 'April 10, 2024',
      title: 'Hey, thinking about empathy in design lately...',
      category: 'Design',
      content: `
        I've been working on this project and it got me thinking about how we design for people going through tough times. 

        Like, when someone's dealing with anxiety or chronic pain, the last thing they need is a stressful interface, right? 
        
        Been experimenting with design patterns that feel more like a gentle conversation than a form to fill out. 
        
        I don't have all the answers, but I'm enjoying the exploration. Will share more when I have something concrete!
      `
    },
    {
      id: 'morning-quiet',
      date: 'March 28, 2024',
      title: 'Morning quiet time has been saving me',
      category: 'Life',
      content: `
        So I've been trying this thing where I don't check my phone for the first hour after waking up.
        
        Instead, I make tea and just sit by the window with my dog for a bit. Sometimes I read, sometimes I just watch the sky change colors.
        
        It's amazing how much it's changed my day. Everything feels less urgent, more spacious.
        
        I used to jump right into work and emails, but this little bit of slowness actually makes me more focused later.
        
        Anyway, just a small change that's made a surprisingly big difference. Thought I'd share. ✨
      `
    },
    {
      id: 'code-feeling-like-poetry',
      date: 'March 15, 2024',
      title: 'When code feels like poetry',
      category: 'Code',
      content: `
        Had one of those magical coding sessions yesterday where everything just clicked.
        
        You know when you refactor something and suddenly the code feels light, elegant, almost like poetry? That's what happened.
        
        I spent hours wrestling with this function that was doing too much. Finally broke it down into these tiny, perfect little helper functions that each do exactly one thing.
        
        There's something so satisfying about it - like tidying up a messy drawer and finding exactly the right place for everything.
        
        Just wanted to share a little coding joy. These moments make all the frustrating debugging sessions worth it.
      `
    }
  ];

  // Get unique categories
  const uniqueCategories = new Set(notes.map(note => note.category));
  const categories = ['all', ...Array.from(uniqueCategories)];
  
  // Filter notes based on active filter
  const filteredNotes = activeFilter === 'all' 
    ? notes 
    : notes.filter(note => note.category === activeFilter);

  return (
    <section id="notes" className="pt-24 pb-20 bg-gradient-to-b from-primary/5 via-background to-background/95">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-12 left-1/3 w-28 h-28 bg-secondary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-twinkle"></div>
          
          <h2 className="text-5xl md:text-6xl font-serif text-text mb-6 relative z-10">Notes & Thoughts</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0 mx-auto"></div>
          <p className="text-xl text-text-light mt-6 mb-8 max-w-2xl mx-auto leading-relaxed relative z-10">
            Little musings I might share with friends over coffee. Nothing too formal - just thinking out loud.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white/70 border border-secondary/20 text-text-light hover:bg-white hover:border-primary/30'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-light italic">No notes in this category yet.</p>
            </div>
          )}

          {filteredNotes.map((note, index) => (
            <div 
              key={note.id} 
              className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-secondary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-text-light bg-white/80 px-3 py-1 rounded-full border border-secondary/10">{note.date}</span>
                  <span className="text-sm text-primary bg-white/80 px-3 py-1 rounded-full border border-primary/20">{note.category}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-text mb-4 group-hover:text-primary transition-colors">
                  {note.title}
                </h3>
                
                <div className="space-y-4">
                  {note.content.trim().split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-text-light leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes; 