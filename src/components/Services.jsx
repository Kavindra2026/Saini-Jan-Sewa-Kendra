import React, { useState, useMemo } from 'react';
import { 
  SERVICE_CATEGORIES, 
  SERVICES_DATA 
} from '../data/servicesData';
import { 
  Fingerprint, 
  CreditCard, 
  ShoppingBag, 
  FileCheck2, 
  FileBadge2, 
  Home, 
  Baby, 
  FileText, 
  Vote, 
  HardHat, 
  ShieldPlus, 
  Users, 
  HeartHandshake, 
  Accessibility, 
  GraduationCap, 
  Train, 
  Zap, 
  Bike, 
  Wheat, 
  FileSpreadsheet, 
  Globe, 
  Copy, 
  Files, 
  Layers, 
  Printer, 
  Search, 
  MessageCircle, 
  Phone, 
  FileCheck, 
  Check, 
  ChevronDown, 
  Info 
} from 'lucide-react';

const iconMap = {
  Fingerprint,
  CreditCard,
  ShoppingBag,
  FileCheck2,
  FileBadge2,
  Home,
  Baby,
  FileText,
  Vote,
  HardHat,
  ShieldPlus,
  Users,
  HeartHandshake,
  Accessibility,
  GraduationCap,
  Train,
  Zap,
  Bike,
  Wheat,
  FileSpreadsheet,
  Globe,
  Copy,
  Files,
  Layers,
  Printer
};

const categoryTheme = {
  certificates: {
    accent: 'bg-gradient-to-r from-sky-400 to-blue-500',
    iconBg: 'bg-sky-500/15 text-sky-400 border border-sky-500/30 group-hover:bg-sky-500 group-hover:text-white',
    badge: 'bg-sky-500/15 text-sky-300 border-sky-500/30'
  },
  identity: {
    accent: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-500/15 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30'
  },
  pension_scholarship: {
    accent: 'bg-gradient-to-r from-amber-400 to-rose-500',
    iconBg: 'bg-amber-500/15 text-amber-400 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-white',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30'
  },
  bills_insurance: {
    accent: 'bg-gradient-to-r from-emerald-400 to-teal-500',
    iconBg: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
  },
  printing_forms: {
    accent: 'bg-gradient-to-r from-indigo-500 to-violet-500',
    iconBg: 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 group-hover:bg-indigo-600 group-hover:text-white',
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
  }
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCard, setExpandedCard] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_LIMIT = 6;

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !query || 
        service.name.toLowerCase().includes(query) ||
        service.hindiName.toLowerCase().includes(query) ||
        service.shortDesc.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Display only initial limit when on "All" category without search query, unless user clicks "View More"
  const displayedServices = useMemo(() => {
    if (!showAll && activeCategory === 'all' && !searchQuery) {
      return filteredServices.slice(0, INITIAL_LIMIT);
    }
    return filteredServices;
  }, [filteredServices, showAll, activeCategory, searchQuery]);

  const handleWhatsAppInquiry = (serviceName, hindiName) => {
    const text = encodeURIComponent(
      `Hello Hitesh Kumar, I would like to inquire about "${serviceName} (${hindiName})" at Saini Jan Seva Kendra. Please guide me regarding the required documents and procedure.`
    );
    window.open(`https://wa.me/918449544040?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#090d16] relative border-b border-slate-800/80 overflow-hidden">
      {/* Ambient glow orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-52 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold text-amber-400 U.Prcase tracking-wider bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
            Our Service Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-amber-300 via-yellow-100 to-white bg-clip-text text-transparent animate-shimmer heading-glow">
            Citizen & Digital Public Services
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
            <div className="w-16 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg shadow-amber-500/30" />
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
          </div>
          <p className="text-slate-400 mt-2.5 sm:mt-3.5 text-xs sm:text-lg">
            <span className="sm:hidden">All 25 verified civic services at our center. Search or filter by category below.</span>
            <span className="hidden sm:inline">Complete list of all <strong className="text-white font-bold">25 verified civic services</strong> available at our center. Search by service name or filter by category below.</span>
          </p>
        </div>

        {/* Search & Category Filter Bar in Dark Theme */}
        <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          
          {/* Live Search Input */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none text-blue-400">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search service (Aadhaar, PAN, Pension, Bills...)"
              className="w-full pl-10 sm:pl-11 pr-10 sm:pr-12 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-xs sm:text-base shadow-lg transition-all bg-slate-900/90 text-white placeholder-slate-500 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 sm:pr-4 flex items-center text-xs text-slate-400 hover:text-white font-bold"
              >
                Clear ✕
              </button>
            )}
          </div>

          {/* Category Tabs — swipeable horizontal pills on mobile, wrap on tablet/desktop */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto sm:flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2 pb-2 sm:pb-0 scrollbar-none px-1">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery('');
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap flex-shrink-0 transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 scale-105 border border-blue-400/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Result Counter */}
          <div className="text-center text-[11px] sm:text-xs text-slate-400 font-medium">
            Showing <span className="font-extrabold text-blue-400">{displayedServices.length}</span> of {filteredServices.length} Services
            {!showAll && activeCategory === 'all' && !searchQuery && (
              <span className="text-slate-400"> (Showing Popular Services • Click below to view all)</span>
            )}
          </div>

        </div>

        {/* Services Grid in Dark Theme */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/80 rounded-3xl border border-dashed border-slate-800 max-w-lg mx-auto p-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mx-auto mb-3 border border-amber-500/30">
              <Search className="w-7 h-7" />
            </div>
            <p className="text-white font-bold text-base">No services found</p>
            <p className="text-xs text-slate-400 mt-1">Please try searching with another keyword or reset the category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setShowAll(true);
              }}
              className="mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-500 transition-colors shadow-sm"
            >
              Show All 25 Services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
            {displayedServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || FileCheck;
              const isExpanded = expandedCard === service.id;
              const theme = categoryTheme[service.category] || categoryTheme.certificates;

              return (
                <div
                  key={service.id}
                  className="bg-slate-900/90 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Category Accent Top Line */}
                  <div className={`h-1 sm:h-1.5 w-full ${theme.accent}`} />

                  {/* Main Card Content */}
                  <div className="p-2 sm:p-6 flex-1 flex flex-col">
                    
                    {/* Header Row: Icon, Number, Hindi Badge */}
                    <div className="flex items-start justify-between gap-1.5 sm:gap-3 mb-1.5 sm:mb-4">
                      <div className={`w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xs transition-colors duration-300 ${theme.iconBg}`}>
                        <IconComponent className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="hidden sm:inline-block text-[11px] font-bold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md">
                          #{service.id}
                        </span>
                        <span className="text-[9px] sm:text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 px-1.5 sm:px-2.5 py-0.5 rounded-md sm:rounded-lg truncate max-w-[85px] sm:max-w-none">
                          {service.hindiName}
                        </span>
                      </div>
                    </div>

                    {/* Service Titles */}
                    <h3 className="text-xs sm:text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                      {service.name}
                    </h3>
                    <div className="mt-0.5 mb-1 sm:mb-3">
                      <span className={`text-[8px] sm:text-[10px] font-extrabold uppercase px-1.5 sm:px-2 py-0.5 rounded-md border ${theme.badge} inline-block truncate max-w-full`}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-[10px] sm:text-sm text-slate-400 sm:text-slate-300 leading-tight sm:leading-relaxed font-normal line-clamp-1 sm:line-clamp-none">
                      {service.shortDesc}
                    </p>

                    {/* Required Documents Accordion */}
                    {service.documents && (
                      <div className="mt-1.5 sm:mt-4 pt-1.5 sm:pt-3.5 border-t border-slate-800">
                        <button
                          type="button"
                          onClick={() => setExpandedCard(isExpanded ? null : service.id)}
                          className="text-[9px] sm:text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center justify-between w-full min-h-[32px] sm:min-h-[36px] py-1"
                        >
                          <span className="flex items-center gap-1 sm:gap-1.5">
                            <Info className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                            <span className="sm:hidden">{isExpanded ? 'Hide' : 'Docs'}</span>
                            <span className="hidden sm:inline">{isExpanded ? 'Hide Required Documents' : 'View Required Documents'}</span>
                          </span>
                          <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isExpanded && (
                          <ul className="mt-1.5 sm:mt-2 space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs text-slate-300 bg-slate-950/80 p-2 sm:p-3.5 rounded-lg sm:rounded-2xl border border-slate-800 animate-fadeIn">
                            {service.documents.map((doc, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-1.5 sm:gap-2">
                                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="leading-tight">{doc}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Actions: Direct WhatsApp & Call */}
                  <div className="p-2 sm:p-5 pt-0 flex items-center gap-1 sm:gap-2 mt-auto">
                    <button
                      onClick={() => handleWhatsAppInquiry(service.name, service.hindiName)}
                      className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2.5 px-2 sm:px-3.5 rounded-lg sm:rounded-2xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-white font-bold text-[10px] sm:text-xs transition-all border border-emerald-500/30 shadow-xs hover:shadow-glow-emerald group/btn min-h-[36px]"
                      title="Inquire on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 group-hover/btn:text-white flex-shrink-0" />
                      <span className="sm:hidden">WhatsApp</span>
                      <span className="hidden sm:inline">WhatsApp Inquiry</span>
                    </button>

                    <a
                      href="tel:8449544040"
                      className="p-2 sm:p-2.5 rounded-lg sm:rounded-2xl bg-blue-500/15 hover:bg-blue-600 text-blue-400 hover:text-white transition-all border border-blue-500/30 shadow-xs flex-shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                      title="Call directly"
                      aria-label="Call directly"
                    >
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* "View More Services" Expand / Collapse Button */}
        {activeCategory === 'all' && !searchQuery && filteredServices.length > INITIAL_LIMIT && (
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setShowAll(true);
                }
              }}
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-base shadow-xl shadow-blue-600/30 border border-blue-400/30 hover:shadow-glow-blue transition-all transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <span className="sm:hidden">{showAll ? 'Show Fewer Services' : 'Explore More Services'}</span>
              <span className="hidden sm:inline">{showAll ? 'Show Fewer Services (कम सेवाएँ दिखाएं)' : 'Explore More Services (और सेवाएँ देखें)'}</span>
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl bg-white/15 text-[10px] sm:text-xs font-extrabold text-blue-200 group-hover:bg-white/25">
                {showAll ? 'Collapse' : `+${filteredServices.length - INITIAL_LIMIT} more`}
              </span>
              <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
