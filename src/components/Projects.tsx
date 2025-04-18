import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Fragments",
      description: "A gentle journaling companion that helps users reflect on their experiences and emotions through nonviolent communication principles, creating a safe space for personal growth and self-understanding.",
      category: "Journaling & Communication",
      tags: ["Nonviolent Communication", "Reflection", "Personal Growth", "Gentle Design"],
      status: "current",
      features: [
        "Nonviolent communication prompts",
        "Emotional awareness exercises",
        "Gentle reflection tools",
        "Personal growth tracking"
      ]
    },
    {
      title: "Ingredient Insight",
      description: "A beauty product search engine that helps users make informed, gentle choices about their skincare products through clear ingredient analysis and mindful recommendations.",
      category: "Health & Wellness",
      tags: ["Mindful Consumption", "Health", "Accessibility", "Transparency"],
      status: "current",
      features: [
        "Clear ingredient analysis",
        "Mindful product recommendations",
        "Personal skincare shelf",
        "Gentle alternative suggestions"
      ]
    },
    {
      title: "Whimsy Quest",
      description: "A shared memory-making app for social gatherings that creates meaningful connections through gentle, non-pressured interactions and thoughtful memory preservation.",
      category: "Social & Connection",
      tags: ["Gentle Socializing", "Memory", "Connection", "Nonviolent Communication"],
      status: "planned",
      features: [
        "Non-pressured sharing",
        "Thoughtful memory preservation",
        "Gentle connection building",
        "Respectful interaction design"
      ]
    },
    {
      title: "Heartlog",
      description: "A friendship tracker that helps maintain meaningful connections through gentle check-ins, thoughtful reminders, and mindful relationship nurturing.",
      category: "Relationships & Connection",
      tags: ["Friendship", "Connection", "Mindfulness", "Gentle Reminders"],
      status: "planned",
      features: [
        "Gentle check-in prompts",
        "Thoughtful relationship tracking",
        "Mindful connection reminders",
        "Respectful privacy controls"
      ]
    },
    {
      title: "Wanderleaf",
      description: "A gentle nature companion that encourages mindful observation and appreciation of the natural world through ethical, non-invasive exploration.",
      category: "Nature & Mindfulness",
      tags: ["Nature", "Mindfulness", "Ethical", "Observation"],
      status: "planned",
      features: [
        "Mindful observation prompts",
        "Ethical nature appreciation",
        "Gentle learning approach",
        "Respectful sharing options"
      ]
    },
    {
      title: "Soil Scout",
      description: "A garden companion that helps users understand and nurture their outdoor spaces through gentle observation and mindful plant care.",
      category: "Gardening & Care",
      tags: ["Gardening", "Care", "Observation", "Mindfulness"],
      status: "planned",
      features: [
        "Gentle garden assessment",
        "Mindful plant care suggestions",
        "Observation-based guidance",
        "Respectful nature interaction"
      ]
    },
    {
      title: "Style Coach",
      description: "A gentle style companion that helps users explore their personal expression through mindful choices and self-acceptance.",
      category: "Personal Expression",
      tags: ["Self-Expression", "Mindfulness", "Personal Style", "Gentle Guidance"],
      status: "planned",
      features: [
        "Gentle style suggestions",
        "Mindful self-expression",
        "Personal comfort focus",
        "Respectful guidance"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-green-500/10 text-green-500';
      case 'planned':
        return 'bg-blue-500/10 text-blue-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-text mb-6">Projects</h2>
          <p className="text-xl text-text-light/80 mb-6">Gentle tools for mindful living and meaningful connections</p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif text-text group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className={`text-sm ${getStatusColor(project.status)} px-3 py-1 rounded-full`}>
                      {project.status === 'current' ? 'In Progress' : 'Planned'}
                    </span>
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-text-light/90 mb-6 leading-relaxed">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-text mb-3 flex items-center">
                    <span className="w-4 h-4 mr-2 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                    </span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-sm text-text-light/80 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:rounded-full before:bg-primary/30 before:transform before:-translate-y-1/2"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs text-text-light/70 bg-background/50 px-3 py-1 rounded-full border border-text-light/10 hover:border-primary/30 hover:text-primary transition-colors duration-300"
                    >
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