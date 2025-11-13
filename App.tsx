
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import TechStack from './components/TechStack';
import ProblemSolving from './components/ProblemSolving';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F5F4F0] text-[#111111] min-h-screen font-sans relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-32 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-blue-300 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-orange-300 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-sky-300 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-amber-200 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-1000"></div>
      <div className="absolute bottom-20 right-1/2 translate-x-1/2 w-[400px] h-[400px] bg-cyan-200 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
      
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-48 pb-12">
            <Hero />
            <Stats />
          </div>
          <Services />
          <TechStack />
          <ProblemSolving />
          <About />
          <Portfolio />
        </main>
        <Footer />
      </div>

       <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default App;
