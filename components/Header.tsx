
import React from 'react';
import { MenuIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="font-bold tracking-widest text-sm">ALEX DOE</span>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:bg-gray-800 transition-colors">
            <span>MENU</span>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
