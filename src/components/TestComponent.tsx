import React from 'react';

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-pastel-pink mb-6">
          Testing Tailwind Styles
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-pastel-lavender">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">Pastel Colors</h2>
            <p className="text-gray-700">
              This card uses our custom pastel lavender background.
            </p>
          </div>
          
          <div className="card bg-pastel-mint">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">Custom Components</h2>
            <button className="btn-primary mt-4">
              Test Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent; 