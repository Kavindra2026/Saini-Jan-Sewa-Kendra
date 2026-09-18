import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const sections = ['home', 'about', 'services', 'gallery', 'contact'];
          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 120 && rect.bottom >= 120) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Our Services', href: '#services', id: 'services' },
    { name: 'Photo Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Announcement & Quick Contact Bar (Dark Theme) */}
      <div className="bg-[#070a11] text-slate-300 py-1.5 px-4 sm:px-6 lg:px-8 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="truncate font-medium text-[11px] sm:text-xs">
              <span className="text-amber-400 font-bold">Open Daily 7am-9pm</span>
              <span className="hidden md:inline"> • Village Jaleelpur Mungra, Mandi Dhanaura, Amroha (U.P)</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 font-semibold text-[11px] sm:text-xs">
            <span className="text-slate-400 text-[11px] hidden sm:inline">Direct Helpline:</span>
            <a 
              href="tel:8449544040" 
              className="flex items-center gap-1 text-amber-400 hover:text-white px-2 py-1 sm:px-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-colors min-h-[32px]"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>8449544040</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href="tel:8193043042" 
              className="flex items-center gap-1 text-amber-400 hover:text-white px-2 py-1 sm:px-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-colors min-h-[32px]"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>8193043042</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Glassmorphism Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#090d16]/95 backdrop-blur-xl shadow-2xl shadow-black/80 py-2.5 sm:py-3 border-b border-slate-800' 
          : 'bg-[#090d16]/90 backdrop-blur-md py-3 sm:py-4 border-b border-slate-800/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          
          {/* Modern Logo & Branding */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:shadow-glow-blue transition-all border border-blue-400/30 flex-shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base md:text-lg text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors whitespace-nowrap">
                  Saini Jan Seva Kendra
                </span>
                <span className="hidden 2xl:inline-block text-[10px] U.Prcase font-extrabold bg-blue-500/10 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-md">
                  CSC Verified
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">
                <span className="sm:hidden">Digital Citizen & Online Public Services</span>
                <span className="hidden sm:inline">Digital Citizen & Online Public Service Center</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links + Action CTAs (Controlled gap after Contact) */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            
            {/* Navigation Links */}
            <nav className="flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3 xl:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Action CTAs: WhatsApp & Call Now */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918449544040?text=Hello%20Hitesh%20Kumar%2C%20I%20would%20like%20to%20inquire%20about%20a%20service%20at%20Saini%20Jan%20Seva%20Kendra."
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 inline-flex items-center justify-center gap-1.5 xl:gap-2 px-3.5 xl:px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd58] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20 active:scale-95 whitespace-nowrap flex-shrink-0"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>

              {/* Call Button */}
              <a
                href="tel:8449544040"
                className="h-10 inline-flex items-center justify-center gap-1.5 xl:gap-2 px-3.5 xl:px-4.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all transform active:scale-95 border border-blue-400/30 hover:shadow-glow-blue whitespace-nowrap flex-shrink-0"
                title="Call Directly"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

          {/* Mobile Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:8449544040"
              className="p-2.5 rounded-xl bg-slate-900 text-blue-400 border border-slate-800"
              title="Call Directly"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#0d1322] border-b border-slate-800 shadow-2xl px-4 pt-3 pb-6 animate-fadeIn">
            <div className="space-y-1 pb-3 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                    activeSection === link.id
                      ? 'bg-blue-600 text-white font-bold shadow-md'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-4 grid grid-cols-2 gap-3">
              <a
                href="tel:8449544040"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918449544040?text=Hello%20Hitesh%20Kumar%2C%20I%20would%20like%20to%20inquire%20about%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd58] text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1 text-center">
              <a
                href="https://www.google.com/maps/place/Saini+Jan+Seva+Kendra/@29.0099281,78.2993049,17z/data=!4m6!3m5!1s0x390ba3002927289b:0x76a1186c3ca523bf!8m2!3d29.0099281!4d78.3018798!16s%2Fg%2F11zfrzm318?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                📍 Village Jaleelpur Mungra, Mandi Dhanaura, Amroha ↗
              </a>
              <p className="text-emerald-400 font-semibold">⏰ Open: 7:00 AM to 9:00 PM Daily</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
