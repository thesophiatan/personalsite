import React from 'react';

const Notes: React.FC = () => {
  const notes = [
    {
      id: 'empathy-in-design',
      date: 'April 10, 2024',
      title: 'Hey, thinking about empathy in design lately...',
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
      content: `
        Had one of those magical coding sessions yesterday where everything just clicked.
        
        You know when you refactor something and suddenly the code feels light, elegant, almost like poetry? That's what happened.
        
        I spent hours wrestling with this function that was doing too much. Finally broke it down into these tiny, perfect little helper functions that each do exactly one thing.
        
        There's something so satisfying about it - like tidying up a messy drawer and finding exactly the right place for everything.
        
        Just wanted to share a little coding joy. These moments make all the frustrating debugging sessions worth it.
      `
    }
  ];

  return (
    <section id="notes" className="py-24 bg-gradient-to-b from-accent/10 via-background to-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-title">Notes & Thoughts</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full"></div>
          <p className="section-subtitle">
            Little musings I might share with friends over coffee. Nothing too formal - just thinking out loud.
          </p>
        </div>

        <div className="space-y-16">
          {notes.map((note) => (
            <div key={note.id} className="card group">
              <h3 className="text-2xl font-serif text-text mb-2 group-hover:text-primary transition-colors duration-300">
                {note.title}
              </h3>
              <p className="text-sm text-text-light mb-6">
                {note.date}
              </p>
              <div className="space-y-4">
                {note.content.trim().split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-text-light">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes; 