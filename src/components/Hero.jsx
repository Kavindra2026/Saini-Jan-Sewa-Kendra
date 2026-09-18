import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, CheckCircle2, Clock, Award, Sparkles, Navigation, ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenLightbox }) {
  const mapsUrl = "https://www.google.com/maps/place/Saini+Jan+Seva+Kendra/@29.0099281,78.2993049,17z/data=!4m6!3m5!1s0x390ba3002927289b:0x76a1186c3ca523bf!8m2!3d29.0099281!4d78.3018798!16s%2Fg%2F11zfrzm318?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="home" className="relative overflow-hidden bg-[#090d16] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/80">
      
      {/* High-End Dark Ambient Mesh Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Modern Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-bold shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping flex-shrink-0" />
              <span className="sm:hidden">Online & Citizen Digital Services</span>
              <span className="hidden sm:inline">All Types of Online & Citizen Digital Services</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Saini Jan Seva Kendra
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent leading-snug">
                All Online & Public Citizen Services at One Single Stop
              </p>
              <p className="text-[11px] sm:text-sm font-semibold text-slate-400">
                <span className="sm:hidden">आपकी सभी जनसेवा सुविधाएँ एक ही स्थान पर</span>
                <span className="hidden sm:inline">सैनी जन सेवा केंद्र • आपकी सभी ऑनलाइन एवं जनसेवा सुविधाएँ एक ही स्थान पर</span>
              </p>
            </div>

            {/* Shop Photo on Mobile (Full photo showing board, counter & storefront) */}
            <div className="sm:hidden pt-2 pb-1">
              <div className="relative mx-auto max-w-xs">
                <div className="p-1.5 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-emerald-400 shadow-xl shadow-blue-500/20">
                  <div 
                    onClick={() => onOpenLightbox && onOpenLightbox(0)}
                    className="relative rounded-xl overflow-hidden bg-slate-950 cursor-pointer group"
                  >
                    <img
                      src="/images/saini-jan-seva-kendra-shop.jpg"
                      alt="Saini Jan Seva Kendra - Storefront & Counter"
                      className="w-full h-auto max-h-[440px] object-contain rounded-lg"
                      loading="eager"
                    />

                    {/* Real Photo Tag */}
                    <div className="absolute top-2.5 left-2.5 bg-slate-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1 border border-white/20 shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Real Shop Photo</span>
                    </div>

                    {/* Live Status Pill */}
                    <div className="absolute top-2.5 right-2.5 bg-slate-900/90 backdrop-blur-md py-0.5 px-2 rounded-full shadow-md border border-emerald-500/40 flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Open 7am - 9pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description (Hidden on mobile phones as requested, visible on tablet & desktop) */}
            <p className="hidden sm:block text-slate-400 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Located at <strong className="text-slate-200 font-semibold">Village Jaleelpur Mungra, Mandi Dhanaura, District Amroha (U.P.)</strong>. 
              We provide fast, secure, and hassle-free assistance for Aadhaar, PAN cards, Income/Caste/Domicile certificates, pensions, electricity bills, railway ticketing, and all government portal applications.
            </p>

            {/* Information Badges — side-by-side on mobile, row on tablet/desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-nowrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs w-full sm:w-auto">
              <span className="inline-flex items-center justify-center gap-1 bg-slate-900/90 text-slate-300 px-2 py-1.5 sm:px-2.5 rounded-xl border border-slate-800 shadow-xs font-medium">
                <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="truncate"><span className="hidden sm:inline">Proprietor: </span><strong className="text-white font-bold">Hitesh Kumar</strong></span>
              </span>
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white px-2 py-1.5 sm:px-2.5 rounded-xl border border-slate-800 hover:border-rose-500/50 shadow-xs font-medium transition-all group cursor-pointer"
                title="View Saini Jan Seva Kendra on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-rose-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="truncate">Jaleelpur Mungra<span className="hidden sm:inline">, Dhanaura</span></span>
                <span className="text-[10px] text-blue-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0">↗</span>
              </a>
              <span className="col-span-2 sm:col-auto inline-flex items-center justify-center gap-1 bg-slate-900/90 text-slate-300 px-2.5 py-1.5 rounded-xl border border-slate-800 shadow-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-400 font-bold">Open: 7:00 AM – 9:00 PM</span>
              </span>
            </div>

            {/* Modern Call to Action Buttons */}
            <div className="pt-2 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4">
              {/* Call Button */}
              <a
                href="tel:8449544040"
                className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-xs sm:text-base shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-blue-400/30 hover:shadow-glow-blue"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 flex-shrink-0" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918449544040?text=Hello%20Hitesh%20Kumar%2C%20I%20need%20information%20about%20a%20service%20at%20Saini%20Jan%20Seva%20Kendra."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1ebd58] text-white font-bold text-xs sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-glow-emerald"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>

              {/* Google Maps Button */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 sm:col-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-xs sm:text-base border border-slate-700 hover:border-blue-400 shadow-xs transition-all group"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 flex-shrink-0" />
                <span>View on Map</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>

            {/* Quick Benefits Row */}
            <div className="pt-2 grid grid-cols-3 gap-1.5 sm:gap-2.5 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-[11px] sm:text-sm text-slate-300 bg-slate-900/80 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                <span className="leading-tight">100% Secure</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-[11px] sm:text-sm text-slate-300 bg-slate-900/80 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                <span className="leading-tight">Govt. Rates</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-[11px] sm:text-sm text-slate-300 bg-slate-900/80 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                <span className="leading-tight">Fast Receipts</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Shop Photo (Hidden on mobile phones because it moved above description) */}
          <div className="hidden sm:block lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Neon Glow Frame */}
              <div className="p-1.5 sm:p-2 rounded-3xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-emerald-400 shadow-2xl shadow-blue-500/20">
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox(0)}
                  className="relative rounded-2xl overflow-hidden bg-slate-950 cursor-pointer group"
                >
                  <img
                    src="/images/saini-jan-seva-kendra-shop.jpg"
                    alt="Saini Jan Seva Kendra - Storefront & Counter"
                    className="w-full h-auto max-h-[480px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Real Photo Tag */}
                  <div className="absolute top-3.5 left-3.5 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 border border-white/20 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Real Shop Photo</span>
                  </div>

                  {/* Zoom indicator */}
                  <div className="absolute top-3.5 right-3.5 bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium border border-white/10">
                    <span>Click to Zoom 🔍</span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-extrabold text-base sm:text-lg leading-tight text-white drop-shadow">
                      Saini Jan Seva Kendra
                    </p>
                    <div className="text-xs text-slate-300 mt-1 flex items-center justify-between">
                      <span className="font-semibold text-amber-400">Hitesh Kumar</span>
                      <span className="text-white font-bold bg-blue-600/80 px-2 py-0.5 rounded-lg border border-white/20">📞 8449544040</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 font-extrabold text-lg border border-emerald-500/30">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">Verified Citizen Center</p>
                  <p className="text-[11px] text-slate-400 font-medium">Trusted by hundreds of local families</p>
                </div>
              </div>

              {/* Live Status Pill */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-slate-900/95 backdrop-blur-md py-1.5 px-4 rounded-full shadow-xl border border-emerald-500/40 flex items-center gap-2 text-xs font-bold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400">Open Right Now</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
