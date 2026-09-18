import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/galleryData';

export default function LightboxModal({ activeIndex, onClose, onNavigate }) {
  if (activeIndex === null || activeIndex === undefined) return null;

  const photo = GALLERY_PHOTOS[activeIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % GALLERY_PHOTOS.length);
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, onClose, onNavigate]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fadeIn"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-white">
        <div className="bg-black/60 px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-white/10">
          Photo {activeIndex + 1} of {GALLERY_PHOTOS.length}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close viewer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors z-10 border border-white/20"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex + 1) % GALLERY_PHOTOS.length);
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors z-10 border border-white/20"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Caption */}
      <div 
        className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 flex items-center justify-center">
          <img
            src={photo.src}
            alt={photo.title}
            className="max-h-[68vh] max-w-full object-contain mx-auto"
          />
        </div>

        <div className="mt-4 text-center text-white px-4 max-w-2xl">
          <p className="text-lg font-bold text-blue-400">
            {photo.title}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {photo.description}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {photo.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
