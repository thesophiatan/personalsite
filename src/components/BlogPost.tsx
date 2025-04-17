import React from 'react';
import { useParams } from 'react-router-dom';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
}

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  
  // This would typically come from an API or CMS
  const post: BlogPost = {
    title: "Chronic Illness and Design",
    content: `
      <p>In the world of technology and design, accessibility is often treated as an afterthought. But for those living with chronic illnesses, accessible design isn't just a nice-to-have—it's essential for daily life.</p>
      
      <h2>The Challenge</h2>
      <p>Chronic illnesses present unique challenges that traditional design approaches often fail to address. From fatigue management to cognitive load, the needs of this community require thoughtful consideration at every step of the design process.</p>
      
      <h2>Designing with Empathy</h2>
      <p>True accessibility means going beyond compliance with standards. It means understanding the lived experience of users and designing solutions that work for them, not against them.</p>
      
      <h2>Practical Solutions</h2>
      <p>Some key considerations for designing with chronic illness in mind:</p>
      <ul>
        <li>Flexible interaction patterns that accommodate varying energy levels</li>
        <li>Clear, consistent navigation that reduces cognitive load</li>
        <li>Customizable interfaces that allow users to adapt to their needs</li>
        <li>Thoughtful use of color and contrast to reduce eye strain</li>
      </ul>
      
      <h2>Moving Forward</h2>
      <p>As designers and developers, we have a responsibility to create technology that serves everyone. By considering the needs of those with chronic illnesses, we can create more inclusive, empathetic solutions that benefit all users.</p>
    `,
    date: "March 15, 2024",
    category: "Accessibility",
    author: "Sophia Tan",
    readTime: "5 min read"
  };

  return (
    <article className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm text-primary bg-primary-light px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-text-light">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-text mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-text-light">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-serif text-text mb-6">Share this post</h2>
          <div className="flex space-x-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 