import React from 'react';
import { LeetCodeIcon, TerminalIcon, YandexIcon } from './Icons';

const platforms = [
  {
    icon: <LeetCodeIcon />,
    name: 'LeetCode',
    stat: '300+',
    description: 'Problems Solved',
  },
  {
    icon: <YandexIcon />,
    name: 'Yandex Contest',
    stat: '50+',
    description: 'Problems Solved',
  },
  {
    icon: <TerminalIcon />,
    name: 'OverTheWire',
    stat: '25+',
    description: 'Wargames Completed',
  }
];

const ProblemSolving: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-bold text-lg tracking-widest mb-2">PRACTICE & PROBLEM SOLVING</h2>
        <p className="text-gray-600 mb-10">Honing my skills on competitive programming and security challenge platforms to stay sharp and solve complex problems efficiently.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {platforms.map((platform, index) => (
          <div key={index} className="bg-[#FFFFFF99]/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8">
            <div className="flex items-center space-x-2 mb-4">
              {platform.icon}
              <span className="font-semibold">{platform.name}</span>
            </div>
            <p className="text-5xl font-bold mb-1">{platform.stat}</p>
            <p className="text-gray-500">{platform.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSolving;