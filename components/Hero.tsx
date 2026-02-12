
import React from 'react';
import { ChevronRight, ShieldCheck, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[140px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100 rounded-full blur-[140px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-bold shadow-sm">
              <ShieldCheck size={18} />
              <span>Leading Practicing Cost Accountants since 2010</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Quality Driven <br />
              <span className="text-blue-800">Financial Insights.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Helping organizations achieve cost competency, productivity, and sustainable growth through 15 years of professional excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="w-full sm:w-auto flex items-center justify-center bg-blue-800 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-2xl shadow-blue-200 group text-lg"
              >
                Our Expertise
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="w-full sm:w-auto flex items-center justify-center bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all text-lg shadow-sm"
              >
                Our Legacy
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t-2 border-slate-100">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">15+</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">2010</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Established</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">Global</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Standards</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-8 border-white">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHrEHnHoXTXgQ/profile-displayphoto-crop_800_800/B56ZsrGCyCI0AI-/0/1765954564022?e=1772668800&v=beta&t=RApkb3h-I-v6AwwzsTaa20RkpvHdD9NznItJ1bYrT1E"
                alt="FCMA Sunder Prakash Budkoti"
                className="w-full h-auto object-cover min-h-[400px] bg-slate-200"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                 <h3 className="text-2xl font-bold">Sunder Prakash Budkoti</h3>
                 <p className="text-blue-100 font-bold text-xs uppercase tracking-widest mb-1">BCOM | MCOM | FCMA | Social Auditor</p>
                 <p className="text-blue-200 text-xs opacity-90 leading-tight">Managing Partner at S P B & Associates | Career Coach & Mentor</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="bg-green-50 p-2 rounded-lg text-green-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Cost Reduction</h4>
                  <p className="text-xs text-slate-500">Industry Optimized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
