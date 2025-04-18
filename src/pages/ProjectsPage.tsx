import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24"> {/* Add padding-top to accommodate the fixed navbar */}
      <Projects isStandalone={true} />
    </div>
  );
};

export default ProjectsPage; 