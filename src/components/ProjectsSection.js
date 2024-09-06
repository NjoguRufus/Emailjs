import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-lg mb-8">Here are some of the projects I've worked on.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Apply rounded-full class to the image to make it circular */}
            <img src="project-image1.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project Title 1</h3>
              <p className="text-gray-700">A brief description of the project.</p>
            </div>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
