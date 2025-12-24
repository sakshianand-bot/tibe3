import React from 'react';

const Resume = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Resume</h1>
          <p className="text-xl text-gray-600">My professional experience and skills</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Job Title</h3>
                <p className="text-blue-600 font-medium">Company Name • 2020 - Present</p>
                <p className="text-gray-600 mt-2">
                  Brief description of your role and responsibilities. Highlight key achievements and technologies used.
                </p>
              </div>
              {/* Add more experience items as needed */}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Education</h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Degree Name</h3>
              <p className="text-blue-600 font-medium">University Name • Graduation Year</p>
              <p className="text-gray-600 mt-2">
                Brief description of your degree and any relevant coursework or achievements.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML5', 'CSS3',
                'Tailwind CSS', 'Git', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'
              ].map((skill) => (
                <div key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a
              href="/resume.pdf" // Replace with your actual resume PDF
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
