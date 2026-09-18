import React from 'react';
import { User, MapPin, Phone, CheckCircle, Award, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function About({ onOpenLightbox }) {
  const points = [
    'Aadhaar, PAN Card, Ration Card & Voter ID Card applications and updates',
    'Official State Income, Caste, Domicile, Birth & Death Certificate registrations',
    'Old Age, Widow & Divyang (Disability) monthly social pension assistance',
    'U.PL Electricity bill payments, IRCTC train tickets & vehicle/crop insurance',
    'High-resolution photocopy, Xerox, lamination, and color/B&W digital printouts',
    'Respectful and dedicated guidance for rural residents, farmers, and students'
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#090d16] relative border-b border-slate-800/80 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold text-amber-400 U.Prcase tracking-wider bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
            About Our Center
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-amber-300 via-yellow-100 to-white bg-clip-text text-transparent animate-shimmer heading-glow">
            Welcome to Saini Jan Seva Kendra
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3.5">
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
            <div className="w-16 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg shadow-amber-500/30" />
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
          </div>
          <p className="text-slate-400 mt-3 sm:mt-4 text-xs sm:text-lg">
            <span className="sm:hidden">Trusted & transparent online civic services for residents of Village Jaleelpur Mungra and surrounding areas.</span>
            <span className="hidden sm:inline">Delivering trusted, transparent, and seamless online civic services to the residents of Village Jaleelpur Mungra, Mandi Dhanaura, and surrounding villages.</span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">

          {/* Left Visual: Shop Board & Proprietor Card */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(1)}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-slate-950 cursor-pointer group hover:border-blue-500/50 transition-all"
            >
              <img
                src="/images/shop-board.jpg"
                alt="Saini Jan Seva Kendra Services Signboard"
                className="w-full h-52 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 bg-blue-600 text-white font-extrabold text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 rounded-lg shadow-md">
                Official Signboard
              </div>

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Storefront Details
                </span>
                <p className="text-sm sm:text-lg font-extrabold drop-shadow text-white">
                  Hitesh Kumar | Saini Jan Seva Kendra
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                  Mob: 8449544040, 8193043042
                </p>
              </div>
            </div>

            {/* Proprietor Card in Dark Theme */}
            <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-900/90 text-white shadow-xl border border-slate-800 flex items-start gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0 shadow-md">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-white text-sm sm:text-base">
                    Hitesh Kumar
                  </h4>
                  <span className="text-[10px] sm:text-[11px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-400/30 font-semibold">
                    Proprietor
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Saini Jan Seva Kendra, Village Jaleelpur Mungra
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1.5 text-xs">
                  <a href="tel:8449544040" className="text-amber-400 font-bold hover:text-white flex items-center gap-1 bg-slate-800/90 px-2.5 py-1 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-colors">
                    <Phone className="w-3 h-3 text-amber-400" />
                    8449544040
                  </a>
                  <a href="tel:8193043042" className="text-amber-400 font-bold hover:text-white flex items-center gap-1 bg-slate-800/90 px-2.5 py-1 rounded-xl border border-slate-700 hover:border-amber-400/50 transition-colors">
                    <Phone className="w-3 h-3 text-amber-400" />
                    8193043042
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="text-slate-300 leading-relaxed">
              <p className="text-xs sm:text-base text-slate-300 sm:text-slate-200 leading-relaxed font-normal">
                <strong className="text-white font-bold">Saini Jan Seva Kendra</strong> provides fast, reliable, and convenient doorstep access to essential government schemes, online certificates, pensions, and digital citizen services at official standard rates.
              </p>
            </div>

            {/* Checklist of services in Dark Theme */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <h4 className="font-extrabold text-white text-xs sm:text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Key Services & Center Capabilities:</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-slate-300 bg-slate-900/80 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-800 shadow-xs hover:border-blue-500/40 transition-colors">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium leading-tight sm:leading-normal">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 sm:pt-3 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="#services"
                className="px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-1.5 sm:gap-2 border border-blue-400/30 hover:shadow-glow-blue text-center"
              >
                <span>Browse Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                className="px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 hover:border-blue-400 transition-all text-center flex items-center justify-center"
              >
                Find Our Location
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
