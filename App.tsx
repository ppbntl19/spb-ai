
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
      
      {/* AI Assistant for modern engagement */}
      <GeminiAssistant />
    </div>
  );
};

export default App;
