import React from 'react';

interface ProjectsProps {
  isStandalone?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isStandalone = false }) => {
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
        return 'bg-white border border-primary text-primary';
      case 'planned':
        return 'bg-white border border-secondary text-secondary';
      default:
        return 'bg-white border border-accent text-accent';
    }
  };

  // Determine the className based on whether this is a standalone page or embedded in the home page
  const sectionClassName = isStandalone
    ? "pt-20 pb-24 bg-gradient-to-b from-primary/5 via-background to-background/95" // For standalone page
    : "-mt-20 pt-40 pb-24 bg-gradient-to-b from-background via-background to-background/95"; // For home page

  return (
    <section id="projects" className={sectionClassName}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative">
          <div className="absolute -top-12 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 left-1/4 w-28 h-28 bg-accent/10 rounded-full blur-xl"></div>
          
          <h2 className="text-5xl md:text-6xl font-serif text-text mb-6 relative z-10">Projects</h2>
          <p className="text-xl text-text-light mb-6 max-w-2xl mx-auto leading-relaxed relative z-10">
            Gentle tools for mindful living and meaningful connections
          </p>
          <div className="w-40 h-1 bg-gradient-to-r from-accent/0 via-primary to-secondary/0 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-white/60 rounded-3xl p-1 border border-primary/10 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="p-8 relative overflow-hidden rounded-2xl">
                <div className={`absolute -top-6 -right-6 w-16 h-16 ${index % 3 === 0 ? 'bg-primary/10' : index % 3 === 1 ? 'bg-secondary/10' : 'bg-accent/10'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <h3 className="text-2xl font-serif text-text group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-sm ${getStatusColor(project.status)} px-3 py-1 rounded-full`}>
                      {project.status === 'current' ? 'In Progress' : 'Planned'}
                    </span>
                    <span className="text-sm text-text-light bg-white/80 px-3 py-1 rounded-full border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-text-light mb-6 leading-relaxed">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-text mb-3 flex items-center">
                    <span className="w-4 h-4 mr-2 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                    </span>
                    Key Features
                  </h4>
                  <ul className="space-y-2 pl-6">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-text-light relative"
                      >
                        <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs text-text-light bg-white/80 px-3 py-1 rounded-full border border-secondary/20 hover:border-primary/40 hover:text-primary transition-colors duration-300"
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