import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Fragments",
      description: "An ethical reflection game exploring complex moral decisions and their consequences.",
      category: "Game Design",
      tags: ["Ethics", "Reflection", "Interactive"],
    },
    {
      title: "Soil Scout",
      description: "A robot gardener designed to monitor and care for plants, making gardening more accessible.",
      category: "Robotics",
      tags: ["Accessibility", "Gardening", "IoT"],
    },
    {
      title: "Ingredient Insight",
      description: "A beauty ingredient checker helping users make informed choices about their skincare products.",
      category: "Web App",
      tags: ["Health", "Accessibility", "React"],
    },
    {
      title: "Whimsy Quest",
      description: "A party activity & zine maker for creating memorable group experiences.",
      category: "Creative Tool",
      tags: ["Community", "Design", "Interactive"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-text mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:border-primary/50 transition-colors">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-text">{project.title}</h3>
                  <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-text-light mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-text-light bg-background px-2 py-1 rounded">
                      {tag}
                    </span>
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

export default Projects; 