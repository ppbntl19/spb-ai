
import React from 'react';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    "Quality & Integrity",
    "Excellence & Objectivity",
    "Transparency",
    "Result Oriented",
    "High Ethical Standards",
    "Regular Updates"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-blue-700 font-bold tracking-wider uppercase text-sm">Introduction</h2>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Rendering Quality Professional Services to Global Markets.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                <strong>S.P.B. & Co</strong> is a leading firm of Practicing Cost and Management Accountants founded by <strong>FCMA Sunder Prakash Budkoti in 2010</strong>. We believe in helping our clients increase productivity & efficiency to provide access to both domestic and international markets.
              </p>
              <div className="space-y-2 pt-4">
                <p className="text-slate-700 font-semibold border-l-4 border-blue-600 pl-4 py-1">
                  Managing Partner at S P B & Associates, Cost Accountants
                </p>
                <p className="text-slate-600 text-sm italic">
                  Qualified Independent Director | Social Auditor | Executive Recruiter | Career Coach, Guide and Mentor
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg mt-1"><Target size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Our Mission</h4>
                  <p className="text-slate-600">To contribute towards society by providing professional services in accordance with the highest standards of integrity, specialization & dedication.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg mt-1"><Eye size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Our Vision</h4>
                  <p className="text-slate-600">Working closely alongside our clients to understand their needs and to deliver value above and beyond expectations, contributing to their success.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-center space-x-2 text-slate-700 font-semibold">
                  <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-700 rounded-[3rem] transform rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500 -z-10 opacity-10"></div>
              <div className="bg-slate-50 rounded-[3rem] p-10 shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-lg bg-slate-200">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D5603AQHrEHnHoXTXgQ/profile-displayphoto-crop_800_800/B56ZsrGCyCI0AI-/0/1765954564022?e=1772668800&v=beta&t=RApkb3h-I-v6AwwzsTaa20RkpvHdD9NznItJ1bYrT1E" 
                      alt="Sunder Prakash Budkoti" 
                      className="w-full h-full object-cover scale-110" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400";
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-black text-slate-900">Sunder Prakash Budkoti</h4>
                    <p className="text-blue-700 font-bold uppercase tracking-widest text-xs">BCOM | MCOM | FCMA | Managing Partner</p>
                  </div>
                  <p className="text-slate-600 italic text-lg leading-relaxed">
                    "Our focus is not limited to providing statutory compliances; we intend to suggest valuable advice for achieving cost competency and process improvements based on groundwork."
                  </p>
                  <div className="pt-4 border-t border-slate-200 w-full flex justify-center space-x-8">
                     <div className="text-center">
                        <p className="text-2xl font-bold text-slate-900">15+</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Years Exp</p>
                     </div>
                     <div className="text-center">
                        <p className="text-2xl font-bold text-slate-900">FCMA</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Designation</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
