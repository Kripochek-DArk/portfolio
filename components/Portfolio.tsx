import React, { useState } from 'react';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'PROJECT PHOENIX',
    description: 'A scalable e-commerce solution with Next.js, featuring a robust backend, secure payment integration, and a seamless user experience. The architecture is designed for high traffic and easy scalability.',
    tags: ['Full-Stack', 'Next.js', 'E-commerce'],
    images: [
      'https://picsum.photos/seed/phoenix1/800/600',
      'https://picsum.photos/seed/phoenix2/800/600',
      'https://picsum.photos/seed/phoenix3/800/600'
    ]
  },
  {
    id: 2,
    title: 'QUANTUM ANALYTICS',
    description: 'A data visualization platform for complex datasets. Built with React and D3.js, it provides interactive charts and dashboards for real-time data analysis.',
    tags: ['Frontend', 'Data Viz', 'React'],
    images: [
      'https://picsum.photos/seed/quantum1/800/600',
      'https://picsum.photos/seed/quantum2/800/600'
    ]
  },
  {
    id: 3,
    title: 'PROJECT NEBULA',
    description: 'A cloud-native DevOps pipeline automation tool. It streamlines CI/CD processes, enabling faster deployments and improved developer workflows on AWS.',
    tags: ['DevOps', 'Cloud', 'CI/CD'],
    images: [
      'https://picsum.photos/seed/nebula1/800/600',
      'https://picsum.photos/seed/nebula2/800/600',
      'https://picsum.photos/seed/nebula3/800/600',
      'https://picsum.photos/seed/nebula4/800/600'
    ]
  }
];

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-6 group">
      <div className="overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Project image ${index + 1}`} className="w-full flex-shrink-0" />
          ))}
        </div>
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};


const PortfolioItem: React.FC<{ project: Project; isOpen: boolean; onToggle: () => void }> = ({ project, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button onClick={onToggle} className="w-full flex justify-between items-center py-6 text-left">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <div className="flex items-center space-x-2">
          {project.tags.map(tag => <span key={tag} className="hidden md:inline bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">{tag}</span>)}
          <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                 <button className="bg-black text-white px-5 py-2 rounded-full flex items-center space-x-3 group text-sm font-semibold hover:bg-gray-800 transition-colors">
                    <span>View Project</span>
                </button>
            </div>
            <ImageSlider images={project.images} />
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [openProjectId, setOpenProjectId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <section className="py-24">
        <div className="bg-[#FFFFFF99]/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-4">PORTFOLIO</h2>
                <p className="text-gray-600 mb-10">Explore my recent projects and discover how we can transform your vision into reality.</p>
            </div>
            <div>
                {projects.map(project => (
                    <PortfolioItem 
                        key={project.id} 
                        project={project} 
                        isOpen={openProjectId === project.id} 
                        onToggle={() => handleToggle(project.id)} 
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Portfolio;