import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {currentPage !== 'home' && <Navigation onNavigate={handleNavigate} currentPage={currentPage} />}
      {renderPage()}
      {currentPage !== 'home' && (
        <footer className="bg-slate-950 py-8 px-6 border-t border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-400">
              © 2025 Your Name. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
