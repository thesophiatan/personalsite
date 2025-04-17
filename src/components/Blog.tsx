import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: "chronic-illness-and-design",
      title: "Chronic Illness and Design",
      excerpt: "Exploring how design thinking can create more accessible and empathetic solutions for people with chronic illnesses...",
      date: "March 15, 2024",
      category: "Accessibility",
    },
    {
      id: "building-with-empathy",
      title: "Building with Empathy",
      excerpt: "Reflections on creating technology that serves real human needs and considers emotional impact...",
      date: "February 28, 2024",
      category: "Design",
    },
    {
      id: "learning-in-public",
      title: "Learning in Public",
      excerpt: "My journey as a beginner developer and the value of sharing the learning process...",
      date: "February 10, 2024",
      category: "Development",
    },
    {
      id: "mindful-systems",
      title: "Mindful Systems",
      excerpt: "How Buddhist principles influence my approach to system design and problem-solving...",
      date: "January 25, 2024",
      category: "Reflection",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-text mb-4">Blog</h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="card group hover:border-primary/30 transition-colors border border-gray-100 bg-white/50 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-primary bg-primary-light px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-text-light">{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-text mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-light mb-4">{post.excerpt}</p>
                <span className="text-primary group-hover:text-primary/70 transition-colors">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 