
import React, { useState } from 'react';
import { Menu, X, Landmark } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href === '#' ? 'body' : href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Landmark className={`h-8 w-8 ${isScrolled ? 'text-blue-800' : 'text-blue-700'}`} />
            <div>
              <h1 className={`text-xl font-bold tracking-tight leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-800'}`}>
                S.P.B. & CO.
              </h1>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500">Cost & Management Accountants</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-semibold transition-colors hover:text-blue-700 ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-900 transition-all shadow-lg shadow-blue-200"
            >
              Get Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-b border-slate-200 absolute top-full left-0 w-full animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-4 rounded-md text-lg font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50 border-b border-slate-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="block w-full text-center bg-blue-800 text-white py-4 rounded-xl font-bold shadow-lg"
              >
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
