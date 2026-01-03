import React from 'react';
import TiltCard from '../components/TiltCard';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application built with React and Node.js that solves a specific problem.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://via.placeholder.com/600x400?text=Project+One',
    link: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A responsive website with modern UI/UX design principles and smooth animations.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: 'https://via.placeholder.com/600x400?text=Project+Two',
    link: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile-first application with offline capabilities and push notifications.',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: 'https://via.placeholder.com/600x400?text=Project+Three',
    link: '#'
  },
];

const Projects = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">Some of my recent work and projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <TiltCard key={project.id} className="h-full">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
