import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, FileCheck } from 'lucide-react';

export default function TrustStats() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: '100% Authorized & Secure',
      desc: 'All applications are processed securely through certified state & central government portals.',
      iconColor: 'text-blue-400',
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      borderColor: 'hover:border-blue-500/50'
    },
    {
      icon: Zap,
      title: 'Fast & Error-Free Execution',
      desc: 'Immediate document checking, error-free form submissions, and instant proof receipts.',
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      borderColor: 'hover:border-amber-500/50'
    },
    {
      icon: FileCheck,
      title: 'Complete 25+ Civic Services',
      desc: 'From Aadhaar & certificates to pensions, utility payments, and digital printing.',
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      borderColor: 'hover:border-emerald-500/50'
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Local Guidance',
      desc: 'Patient, friendly assistance for senior citizens, farmers, and students with all documentation.',
      iconColor: 'text-indigo-400',
      iconBg: 'bg-indigo-500/10 border-indigo-500/20',
      borderColor: 'hover:border-indigo-500/50'
    }
  ];

  return (
    <section className="hidden sm:block bg-[#0b0f19] py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`flex items-start gap-4 p-5 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${item.borderColor}`}
              >
                <div className={`p-3.5 rounded-2xl border flex-shrink-0 ${item.iconBg}`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-sm sm:text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
