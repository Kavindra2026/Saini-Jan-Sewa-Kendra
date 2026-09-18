import React from 'react';
import { ShieldCheck, MapPin, Phone, MessageCircle, Clock, ArrowUp, Navigation } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exactMapsPlaceUrl = "https://www.google.com/maps/place/Saini+Jan+Seva+Kendra/@29.0099281,78.2993049,17z/data=!4m6!3m5!1s0x390ba3002927289b:0x76a1186c3ca523bf!8m2!3d29.0099281!4d78.3018798?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-[#050811] text-slate-300 relative border-t border-slate-800">
      
      {/* Modern Gradient Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Center Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center p-2.5 shadow-lg border border-blue-400/20 flex-shrink-0">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">
                  Saini Jan Seva Kendra
                </h2>
                <p className="text-xs text-blue-400 font-semibold">
                  सैनी जन सेवा केंद्र • CSC Digital Citizen Center
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Serving the residents of Village Jaleelpur Mungra, Mandi Dhanaura, and District Amroha with fast, reliable, and transparent digital government services and online applications.
            </p>

            <div className="pt-1 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">Proprietor:</span>
                <span className="text-white font-semibold">Hitesh Kumar</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Open: 7:00 AM – 9:00 PM (Daily)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols on mobile, 1 col on desktop) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2.5">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-1 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 py-1">
                  <span className="text-blue-500">›</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 py-1">
                  <span className="text-blue-500">›</span> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 py-1">
                  <span className="text-blue-500">›</span> Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 py-1">
                  <span className="text-blue-500">›</span> Photo Gallery
                </a>
              </li>
              <li className="col-span-2 lg:col-span-1">
                <a href="#contact" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 py-1">
                  <span className="text-blue-500">›</span> Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Services (3 columns) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2.5">
              Popular Services
            </h3>
            <div className="grid grid-cols-3 gap-x-2.5 gap-y-1 text-[11px] sm:text-xs text-slate-400">
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Aadhaar Card</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Scholarship Form</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• PAN Card</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Ration Card</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Income Cert.</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Caste Cert.</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Domicile Cert.</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Old Age Pension</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Widow Pension</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Electricity Bill</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Railway Ticket</a>
              <a href="#services" className="hover:text-white transition-colors truncate py-1 inline-block">• Xerox Copies</a>
            </div>
            <a 
              href="#services" 
              className="inline-block pt-1 text-xs text-blue-400 hover:text-blue-300 font-bold py-1"
            >
              Browse All 25 Services →
            </a>
          </div>

          {/* Col 4: Contact & Address (Side-by-side on mobile) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2.5">
              Contact Us
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
                <a
                  href={exactMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View location on Google Maps"
                  className="flex items-start gap-2 text-slate-300 hover:text-blue-400 transition-colors group/addr cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-rose-400 group-hover/addr:scale-110 flex-shrink-0 mt-0.5 transition-transform" />
                  <span className="leading-snug">
                    Village Jaleelpur Mungra, Mandi Dhanaura, District Amroha, Uttar Pradesh
                  </span>
                </a>

                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <a href="tel:8449544040" className="block text-white hover:text-blue-400 font-bold">
                      8449544040
                    </a>
                    <a href="tel:8193043042" className="block text-white hover:text-blue-400 font-bold">
                      8193043042
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons side-by-side */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href="https://wa.me/918449544040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#1ebd58] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow flex-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:8449544040"
                  className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow flex-1"
                >
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>Call Now</span>
                </a>
                <a
                  href={exactMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1 border border-slate-800 flex-1"
                >
                  <Navigation className="w-3 h-3 text-rose-400" />
                  <span>Map</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Required Exact Copyright Text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-slate-400 font-bold text-center sm:text-left text-xs sm:text-sm">
            © 2026 सैनी जन सेवा केंद्र. सर्वाधिकार सुरक्षित। (Saini Jan Seva Kendra)
          </p>

          <div className="flex items-center gap-4">
            <a
              href={exactMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white font-medium transition-colors"
            >
              Village Jaleelpur Mungra • Mandi Dhanaura • Amroha
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors shadow-sm border border-slate-800"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
