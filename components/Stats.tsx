
import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-8">
        <img src="https://picsum.photos/seed/portfolio/200/200" alt="Alex Doe" className="w-full h-full object-cover" />
      </div>
      <div className="w-full max-w-xs space-y-6">
        <div className="flex justify-between items-end border-b border-gray-300 pb-2">
          <span className="text-5xl font-bold">8+</span>
          <span className="text-gray-600">Years Experience</span>
        </div>
        <div className="flex justify-between items-end border-b border-gray-300 pb-2">
          <span className="text-5xl font-bold">50+</span>
          <span className="text-gray-600">Projects Delivered</span>
        </div>
        <div className="flex justify-between items-end border-b border-gray-300 pb-2">
          <span className="text-5xl font-bold">*99%</span>
          <span className="text-gray-600">Client Satisfaction</span>
        </div>
        <div className="flex justify-between items-end border-b border-gray-300 pb-2">
          <span className="text-5xl font-bold">20</span>
          <span className="text-gray-600">Clients worldwide</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
