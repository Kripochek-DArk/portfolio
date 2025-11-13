
import React from 'react';

const servicesData = [
  {
    title: "BACKEND DEVELOPMENT",
    description: "Robust and scalable server-side applications and APIs.",
  },
  {
    title: "FRONTEND DEVELOPMENT",
    description: "Intuitive and engaging user experiences tailored for your audience.",
  },
  {
    title: "CLOUD & DEVOPS",
    description: "Pixel-perfect designs optimized for all modern devices.",
  },
  {
    title: "DATABASE ARCHITECTURE",
    description: "Efficient and secure data models to power applications.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
