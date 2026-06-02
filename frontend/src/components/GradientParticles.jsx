import React from 'react';

const GradientParticles = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at top, rgba(255, 255, 255, 0.25), transparent 40%)'
          }}
        />
      </div>
    </div>
  );
};

export default GradientParticles;
