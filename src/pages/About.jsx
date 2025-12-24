import React from 'react';

const About = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">Get to know who I am and what I do</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-48 h-48 mx-auto rounded-full bg-gray-200 mb-6 overflow-hidden">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👤</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hi, I'm Your Name</h2>
              <p className="text-gray-600 mb-4">
                I'm a passionate developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies, I create
                seamless and efficient digital experiences.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in web development started X years ago, and since then, I've had the
                opportunity to work with various technologies and frameworks, always staying
                up-to-date with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'GraphQL'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
