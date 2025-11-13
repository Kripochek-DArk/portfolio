
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24">
       <div className="bg-[#FFFFFF99]/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter mb-6">
                BUILDING ROBUST & EFFICIENT APPLICATIONS
            </h2>
            <div className="space-y-4 text-gray-700">
                <p>
                    Hey, I'm Alex, a software engineer passionate about creating visually compelling and user-friendly digital experiences.
                </p>
                <p>
                    With a keen eye for system architecture and a deep understanding of modern development practices, I design and build software that not only functions flawlessly but also scales effectively. Whether it's architecting a new system from the ground up or optimizing an existing digital product for peak performance, I blend strategy, creativity, and technical expertise to bring ideas to life. Let's collaborate and build something extraordinary.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
