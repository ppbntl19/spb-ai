
import React from 'react';
import { Landmark, ArrowUp, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-16 border-b border-slate-800 pb-16">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <Landmark className="h-10 w-10 text-blue-500" />
              <div>
                <h1 className="text-2xl font-black tracking-tight leading-none text-white uppercase">
                  S.P.B. & CO.
                </h1>
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-500 mt-1">Cost & Management Accountants</p>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
              Rendering quality professional services since 2010. Leading the way in cost reduction, productivity improvement, and statutory compliance.
            </p>
            <div className="flex space-x-4">
               <a href="https://in.linkedin.com/company/s-p-b-co" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-all">
                  <Linkedin size={20} />
               </a>
               <a href="mailto:spbcoca@gmail.com" className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-all">
                  <Mail size={20} />
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs">Firm Navigation</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" onClick={(e) => handleScroll(e, '#')} className="hover:text-blue-500 transition-colors">Home Portal</a></li>
              <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-blue-500 transition-colors">Our Legacy</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-blue-500 transition-colors">Service Pillars</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-blue-500 transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="https://icmai.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">ICMAI Official</a></li>
              <li><a href="https://mca.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">MCA Services</a></li>
              <li><a href="https://gst.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">GST Compliance</a></li>
              <li><a href="https://trai.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">TRAI Portal</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} S.P.B. & Co. Practicing Cost Accountants.
            <span className="block sm:inline sm:ml-2">Principal Partner: FCMA Sunder Prakash Budkoti.</span>
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 p-4 rounded-2xl hover:bg-blue-500 transition-all group shadow-xl shadow-blue-900/20"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="text-white group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
