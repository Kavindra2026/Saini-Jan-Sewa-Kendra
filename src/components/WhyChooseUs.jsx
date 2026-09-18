import React from 'react';
import { PhoneCall, FileText, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const steps = [
    {
      step: '01',
      icon: PhoneCall,
      title: 'Contact Us or Visit Store',
      shortTitle: 'Contact or Visit Shop',
      desc: 'Reach out via direct Call, WhatsApp, or drop by our center at Village Jaleelpur Mungra with your requirements.',
      shortDesc: 'Call, WhatsApp, or visit our shop with your documents.',
      gradient: 'from-blue-600 to-indigo-600',
      iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      glow: 'shadow-blue-500/30'
    },
    {
      step: '02',
      icon: FileText,
      title: 'Document Check & Online Filing',
      shortTitle: 'Document Check & Filing',
      desc: 'Provide your details. Hitesh Kumar carefully verifies and files your application on authorized government portals.',
      shortDesc: 'Hitesh Kumar verifies & files your form on govt portals.',
      gradient: 'from-amber-500 to-orange-500',
      iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      glow: 'shadow-amber-500/30'
    },
    {
      step: '03',
      icon: CheckCircle2,
      title: 'Instant Receipt & Digital Copies',
      shortTitle: 'Instant Receipt & Copies',
      desc: 'Get immediate official application acknowledgment receipts, digital card printouts, or durable heat-sealed lamination.',
      shortDesc: 'Get official acknowledgment slip, prints, or lamination.',
      gradient: 'from-emerald-600 to-teal-600',
      iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      glow: 'shadow-emerald-500/30'
    }
  ];

  return (
    <section className="py-8 sm:py-20 bg-[#0b0f19] border-b border-slate-800/80 relative overflow-hidden">
      {/* Ambient glow orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
            Simple & Transparent Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-amber-300 via-yellow-100 to-white bg-clip-text text-transparent animate-shimmer heading-glow">
            Get Your Work Done in 3 Simple Steps
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
            <div className="w-16 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg shadow-amber-500/30" />
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
          </div>
          <p className="text-slate-400 text-xs sm:text-base mt-2.5 sm:mt-3">
            <span className="sm:hidden">Zero hassle, complete transparency & precision on every application.</span>
            <span className="hidden sm:inline">Zero hassle, complete transparency, and guaranteed precision on every application.</span>
          </p>
        </div>

        {/* 3 Step Cards in Dark Theme — side-by-side on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[3.5rem] left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 bg-gradient-to-r from-blue-600/50 via-amber-500/50 to-emerald-600/50 z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative bg-slate-900/90 rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-800 hover:border-amber-500/30 hover:shadow-2xl transition-all text-center flex flex-col items-center group hover:-translate-y-2 z-10 ${
                  index === 2 ? 'col-span-2 md:col-span-1 max-w-sm sm:max-w-none mx-auto w-full' : ''
                }`}
              >
                {/* Step badge with gradient */}
                <div className={`w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-tr ${item.gradient} text-white font-extrabold text-xs sm:text-lg flex items-center justify-center mb-2 sm:mb-5 shadow-lg ${item.glow} group-hover:scale-110 transition-transform`}>
                  {item.step}
                </div>

                <div className={`p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border mb-2 sm:mb-4 shadow-xs ${item.iconColor}`}>
                  <Icon className="w-4 h-4 sm:w-7 sm:h-7" />
                </div>

                <h3 className="text-xs sm:text-lg font-extrabold text-white mb-1 sm:mb-2 leading-tight">
                  <span className="sm:hidden">{item.shortTitle}</span>
                  <span className="hidden sm:inline">{item.title}</span>
                </h3>
                
                <p className="text-[11px] sm:text-sm text-slate-400 leading-snug sm:leading-relaxed font-normal">
                  <span className="sm:hidden">{item.shortDesc}</span>
                  <span className="hidden sm:inline">{item.desc}</span>
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
