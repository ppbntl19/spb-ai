
import React from 'react';
import { 
  ShieldCheck, 
  BarChart4, 
  Settings, 
  FileText, 
  Wallet, 
  Calculator, 
  Microscope,
  Database,
  Briefcase,
  ChevronRight
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Audit & Assurance",
      icon: <ShieldCheck className="text-blue-600" size={32} />,
      items: ["Statutory Audit", "Tax Audit", "Stock Audit", "Concurrent Audit", "Internal Audit", "GST Audit", "Management Audit"]
    },
    {
      title: "Costing Services",
      icon: <Calculator className="text-blue-600" size={32} />,
      items: ["Cost Audit", "CAS4 Certification", "Cost Records Maintenance", "Costing System Design", "Price Fixation Support"]
    },
    {
      title: "Management Consultancy",
      icon: <BarChart4 className="text-blue-600" size={32} />,
      items: ["Internal Control", "Strategy Development", "Operational Improvement", "Marketing Strategy", "System Analysis"]
    },
    {
      title: "Financial Services",
      icon: <Wallet className="text-blue-600" size={32} />,
      items: ["Finance Planning", "Project Financing", "M&A", "Valuations", "Corporate Restructuring", "Investment Planning"]
    },
    {
      title: "Taxation & Compliance",
      icon: <FileText className="text-blue-600" size={32} />,
      items: ["GST Advisory", "Direct Tax Advisory", "Customs Act Special Audit", "GST Compliance", "Refund Certification"]
    },
    {
      title: "Project Consultancy",
      icon: <Briefcase className="text-blue-600" size={32} />,
      items: ["Viable Project Identification", "Project Profiles/Reports", "Finance Arranging (NBFC)", "Foreign Collaborations"]
    },
    {
      title: "BPO Services",
      icon: <Database className="text-blue-600" size={32} />,
      items: ["Payroll Outsourcing", "Accounting/Bookkeeping", "Data Entry Outsourcing", "Transaction Outsourcing"]
    },
    {
      title: "Regulatory & TRAI",
      icon: <Settings className="text-blue-600" size={32} />,
      items: ["TRAI Reporting", "ROC Services", "Legal Representation", "Metering & Billing Audit", "Accounting Separation System"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-700 font-bold tracking-wider uppercase text-sm mb-3">Professional Expertise</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6">Comprehensive Financial & Management Solutions</h3>
          <p className="text-slate-600 text-xl">
            We render quality professional services aimed at cost reduction and productivity enhancement across all industrial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((cat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {cat.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{cat.title}</h4>
              <ul className="space-y-3">
                {cat.items.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-500 font-medium">
                    <ChevronRight size={14} className="mr-2 text-blue-600" />
                    {item}
                  </li>
                ))}
                {cat.items.length > 5 && (
                  <li className="text-xs font-bold text-blue-700 pt-2 cursor-pointer hover:underline">
                    + {cat.items.length - 5} more services
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 space-y-6">
            <h4 className="text-3xl font-bold">Why Choose SPB & Co?</h4>
            <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
              We track emerging client needs and gather market intelligence to deliver value beyond expectations. Our work helps you gain access to international markets with cost-competency.
            </p>
            <div className="flex justify-center flex-wrap gap-8 pt-6">
               <div className="flex flex-col items-center">
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-xs uppercase font-bold text-blue-300">Compliance</div>
               </div>
               <div className="flex flex-col items-center">
                  <div className="text-3xl font-black">Domestic</div>
                  <div className="text-xs uppercase font-bold text-blue-300">& Int'l Markets</div>
               </div>
               <div className="flex flex-col items-center">
                  <div className="text-3xl font-black">Specialized</div>
                  <div className="text-xs uppercase font-bold text-blue-300">Dedication</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
