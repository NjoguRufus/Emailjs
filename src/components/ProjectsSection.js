// src/components/ProjectSection.js
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: 'project-image1.jpg',
    title: 'Project Title 1',
    description: 'A brief description of the project.',
  },
  {
    image: 'project-image2.jpg',
    title: 'Project Title 2',
    description: 'A brief description of the project.',
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
