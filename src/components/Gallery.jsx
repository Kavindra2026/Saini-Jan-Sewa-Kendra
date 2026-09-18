import React from 'react';
import { GALLERY_PHOTOS } from '../data/galleryData';
import { ZoomIn, ShieldCheck, MapPin } from 'lucide-react';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section id="gallery" className="py-12 sm:py-24 bg-[#090d16] border-b border-slate-800/80 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
            Real Center Storefront
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-amber-300 via-yellow-100 to-white bg-clip-text text-transparent animate-shimmer heading-glow">
            Photo Gallery
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3.5">
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
            <div className="w-16 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg shadow-amber-500/30" />
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
          </div>
          <p className="text-slate-400 mt-2.5 sm:mt-3.5 text-xs sm:text-lg">
            <span className="sm:hidden">Authentic photos of Saini Jan Seva Kendra. Tap to view full resolution.</span>
            <span className="hidden sm:inline">Authentic photographs of Saini Jan Seva Kendra (Jaleelpur Mungra). Click on any image to view in full resolution.</span>
          </p>
        </div>

        {/* Gallery Grid in Dark Theme — 2 columns side-by-side on mobile, responsive on tablet/desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox && onOpenLightbox(index)}
              className="bg-slate-900/90 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-800 hover:border-blue-500/50 cursor-pointer group flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Image Box */}
              <div className="relative h-36 sm:h-64 bg-slate-950 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt || photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Category tag */}
                <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 bg-slate-950/85 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-extrabold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg shadow-md border border-white/10">
                  {photo.category}
                </div>

                {/* Zoom Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-600/90 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform border border-white/20">
                    <ZoomIn className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

              </div>

              {/* Caption Content */}
              <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-white text-xs sm:text-base group-hover:text-blue-400 transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1.5 line-clamp-1 sm:line-clamp-2 leading-tight sm:leading-relaxed font-normal sm:font-medium">
                    {photo.subtitle}
                  </p>
                </div>
                
                <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-xs">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold text-[9px] sm:text-xs">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Verified</span>
                  </span>
                  <span className="text-blue-400 font-bold group-hover:underline text-[9px] sm:text-xs flex items-center gap-0.5">
                    <span className="hidden sm:inline">View Fullscreen</span>
                    <span className="sm:hidden">Full ↗</span>
                    <span className="hidden sm:inline">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Banner */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Saini+Jan+Seva+Kendra/@29.0099281,78.2993049,17z/data=!4m6!3m5!1s0x390ba3002927289b:0x76a1186c3ca523bf!8m2!3d29.0099281!4d78.3018798!16s%2Fg%2F11zfrzm318?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Saini Jan Seva Kendra on Google Maps"
            className="inline-flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-900 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl border border-slate-800 hover:border-blue-500/40 shadow-xs font-medium transition-all group/banner cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-rose-500 group-hover/banner:scale-110 transition-transform flex-shrink-0" />
            <span>
              <span className="sm:hidden">Authentic storefront photos at <strong>Village Jaleelpur Mungra</strong>. <span className="text-blue-400 font-bold ml-1">Map ↗</span></span>
              <span className="hidden sm:inline">All photos displayed are of our actual service center at <strong>Village Jaleelpur Mungra, Mandi Dhanaura, District Amroha</strong>. <span className="text-blue-400 font-bold ml-1">View Location ↗</span></span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
