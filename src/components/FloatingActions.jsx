import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col gap-2.5 sm:gap-3 items-end">
      
      {/* WhatsApp Quick Action Button in Dark Mode */}
      <a
        href="https://wa.me/918449544040?text=Hello%20Hitesh%20Kumar%2C%20I%20would%20like%20to%20inquire%20about%20a%20service%20at%20Saini%20Jan%20Seva%20Kendra."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 sm:gap-2.5 bg-[#25D366] hover:bg-[#1ebd58] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 group border-2 border-slate-900 shadow-emerald-500/30"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <span className="hidden sm:inline font-extrabold text-sm pr-1">
          WhatsApp Us
        </span>
      </a>

      {/* Call Quick Action Button in Dark Mode */}
      <a
        href="tel:8449544040"
        aria-label="Call Now"
        className="flex items-center gap-2 sm:gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 group border-2 border-slate-900 shadow-blue-500/30"
        title="Call Directly"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse-subtle flex-shrink-0 text-amber-300" />
        <span className="hidden sm:inline font-extrabold text-sm pr-1">
          Call Now
        </span>
      </a>

    </div>
  );
}
