
import React from 'react';
import { ArrowRightIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <div className="text-left">
      <p className="mb-4 text-gray-600">Hey, I'm Alex,</p>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
        A SOFTWARE ENGINEER & FULL-STACK DEVELOPER
      </h1>
      <p className="mt-6 text-gray-600 max-w-lg">
        Transforming complex problems into elegant, high-performance software solutions that are scalable, secure, and user-friendly.
      </p>
      <button className="mt-8 bg-black text-white px-6 py-3 rounded-full flex items-center space-x-3 group text-sm font-semibold hover:bg-gray-800 transition-colors">
        <span>CONTACT ME</span>
        <div className="transform transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRightIcon />
        </div>
      </button>
    </div>
  );
};

export default Hero;
