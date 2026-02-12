
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-700 font-bold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">Direct Consultation for Your Business.</h3>
          <p className="text-slate-600 text-lg leading-relaxed mt-4">
            Connect with our office directly via phone or email for immediate assistance regarding your cost audit and management strategy needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col items-center text-center">
            <div className="bg-blue-100 p-6 rounded-3xl text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
              <Phone size={36} />
            </div>
            <h4 className="font-bold text-slate-900 text-2xl mb-2">Call Us</h4>
            <p className="text-slate-500 mb-6">Monday to Friday, 10am to 6pm</p>
            <a href="tel:09716719137" className="text-blue-700 text-2xl font-black hover:underline tracking-tight">
              097167 19137
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col items-center text-center">
            <div className="bg-blue-100 p-6 rounded-3xl text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
              <Mail size={36} />
            </div>
            <h4 className="font-bold text-slate-900 text-2xl mb-2">Email Us</h4>
            <p className="text-slate-500 mb-6">We respond within 24 hours</p>
            <a href="mailto:spbcoca@gmail.com" className="text-blue-700 text-2xl font-black hover:underline tracking-tight break-all">
              spbcoca@gmail.com
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col items-center text-center">
            <div className="bg-blue-100 p-6 rounded-3xl text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
              <MapPin size={36} />
            </div>
            <h4 className="font-bold text-slate-900 text-2xl mb-2">Visit Office</h4>
            <p className="text-slate-500 mb-6">Our Registered Office Address</p>
            <p className="text-slate-700 font-bold leading-relaxed">
              Aditya Mall, A 221 Rajhans Plaza, <br />
              Opp. Yes Bank, Indirapuram, <br />
              Ghaziabad, UP 201014
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="https://in.linkedin.com/in/cma-sunder-prakash-budkoti-69a14326" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-blue-50 text-blue-800 px-8 py-5 rounded-2xl font-bold hover:bg-blue-100 transition-all border border-blue-100 shadow-sm text-lg"
          >
            <Linkedin size={24} />
            <span>Founder's LinkedIn</span>
            <ArrowUpRight size={18} />
          </a>
          <a 
            href="https://in.linkedin.com/company/s-p-b-co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold hover:bg-black transition-all shadow-lg text-lg"
          >
            <Linkedin size={24} />
            <span>Firm's LinkedIn</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
