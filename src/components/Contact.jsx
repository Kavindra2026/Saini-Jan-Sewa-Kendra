import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle,
  Navigation,
  ArrowUpRight
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Aadhaar Card Services',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError('');
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setFormSubmitted(true);
    setFormError('');
  };

  const handleSendViaWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    const text = encodeURIComponent(
      `*Hello Saini Jan Seva Kendra (Hitesh Kumar)*,\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Mobile:* ${formData.phone}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Message:* ${formData.message ? formData.message : 'Please provide information regarding this service.'}`
    );

    window.open(`https://wa.me/918449544040?text=${text}`, '_blank');
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      service: 'Aadhaar Card Services',
      message: ''
    });
    setFormSubmitted(false);
  };

  // Exact Google Maps place link provided by user
  const exactMapsPlaceUrl = "https://www.google.com/maps/place/Saini+Jan+Seva+Kendra/@29.0099281,78.2993049,17z/data=!4m6!3m5!1s0x390ba3002927289b:0x76a1186c3ca523bf!8m2!3d29.0099281!4d78.3018798!16s%2Fg%2F11zfrzm318?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D";
  
  // Exact coordinates embed URL for Saini Jan Seva Kendra
  const mapsEmbedUrl = "https://maps.google.com/maps?q=29.0099281,78.3018798&hl=en&z=17&output=embed";

  return (
    <section id="contact" className="py-12 sm:py-24 bg-[#0b0f19] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
            Contact & Location
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-amber-300 via-yellow-100 to-white bg-clip-text text-transparent animate-shimmer heading-glow">
            Get in Touch with Us
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3.5">
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
            <div className="w-16 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg shadow-amber-500/30" />
            <div className="w-8 h-1 bg-amber-500/40 rounded-full" />
          </div>
          <p className="text-slate-400 mt-2.5 sm:mt-3.5 text-xs sm:text-lg">
            <span className="sm:hidden">Call directly, chat on WhatsApp, or view location below.</span>
            <span className="hidden sm:inline">Saini Jan Seva Kendra, Village Jaleelpur Mungra, Mandi Dhanaura. Call us directly, chat on WhatsApp, or send an inquiry below.</span>
          </p>
        </div>

        {/* Top 3 Info Cards in Dark Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-14">
          
          {/* Card 1: Exact Address & Location */}
          <div className="bg-slate-900/80 backdrop-blur-xl p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 group">
            <div>
              {/* Header with compact icon and tag */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                <a
                  href={exactMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Saini Jan Seva Kendra on Google Maps"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-500/10 hover:bg-blue-500/25 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-xs flex-shrink-0 transition-all hover:scale-105 cursor-pointer"
                >
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />
                </a>
                <span className="text-[10px] sm:text-[11px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                  Location
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5 sm:mb-2">
                Center Address
              </h3>
              
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-300">
                <p className="font-bold text-white text-sm sm:text-base">
                  Saini Jan Seva Kendra
                </p>
                <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                  Village Jaleelpur Mungra,<br />
                  Mandi Dhanaura, District Amroha,<br />
                  Uttar Pradesh - 244231
                </p>
              </div>

              <div className="mt-3.5 sm:mt-4 inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-950 border border-slate-800 text-[11px] sm:text-xs text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Proprietor: <strong>Hitesh Kumar</strong></span>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-800/80">
              <a
                href={exactMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl bg-slate-950 hover:bg-blue-600/15 text-blue-400 hover:text-blue-300 font-bold text-xs sm:text-sm border border-slate-800 hover:border-blue-500/40 transition-all group/btn"
              >
                <Navigation className="w-4 h-4 text-rose-500 group-hover/btn:scale-110 transition-transform" />
                <span>Open on Google Maps</span>
                <ArrowUpRight className="w-4 h-4 ml-auto text-slate-500 group-hover/btn:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Card 2: Direct Helpline Numbers */}
          <div className="bg-slate-900/80 backdrop-blur-xl p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 group">
            <div>
              {/* Header with compact icon and tag */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                  Helpline
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5 sm:mb-2">
                Direct Phone Numbers
              </h3>
              
              <p className="text-xs text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                Call directly for fast guidance & form inquiries:
              </p>

              <div className="space-y-2 sm:space-y-2.5">
                <a
                  href="tel:8449544040"
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-950/90 transition-all group/call"
                >
                  <span className="flex items-center gap-2 sm:gap-2.5 font-bold text-xs sm:text-sm text-white">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 group-hover/call:scale-110 transition-transform" />
                    <span>8449544040</span>
                  </span>
                  <span className="text-[11px] sm:text-xs bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg sm:rounded-xl font-bold group-hover/call:bg-indigo-600 group-hover/call:text-white transition-colors">
                    Call Now
                  </span>
                </a>

                <a
                  href="tel:8193043042"
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-950/90 transition-all group/call"
                >
                  <span className="flex items-center gap-2 sm:gap-2.5 font-bold text-xs sm:text-sm text-white">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 group-hover/call:scale-110 transition-transform" />
                    <span>8193043042</span>
                  </span>
                  <span className="text-[11px] sm:text-xs bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg sm:rounded-xl font-bold group-hover/call:bg-indigo-600 group-hover/call:text-white transition-colors">
                    Call Now
                  </span>
                </a>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-800/80">
              <p className="text-[10px] sm:text-[11px] text-slate-500 text-center font-medium">
                * Both numbers active for calls & WhatsApp
              </p>
            </div>
          </div>

          {/* Card 3: WhatsApp & Working Hours */}
          <div className="bg-slate-900/80 backdrop-blur-xl p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 group">
            <div>
              {/* Header with compact icon and tag */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-xs flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                  Live Chat
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5 sm:mb-2">
                WhatsApp & Hours
              </h3>
              
              <p className="text-xs text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                Send documents or chat directly on WhatsApp:
              </p>

              {/* Working Hours Pill */}
              <div className="p-3 sm:p-3.5 bg-slate-950 rounded-xl sm:rounded-2xl border border-slate-800 text-xs space-y-1">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Center Operating Hours:</span>
                </div>
                <p className="text-slate-300 pl-5.5 font-semibold text-xs">
                  7:00 AM – 9:00 PM
                </p>
                <div className="flex items-center gap-1.5 pl-5.5 pt-0.5 text-emerald-400 font-bold text-[10px] sm:text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Open 7 Days a Week</span>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-800/80">
              <a
                href="https://wa.me/918449544040?text=Hello%20Hitesh%20Kumar%2C%20I%20would%20like%20to%20inquire%20about%20a%20service%20at%20Saini%20Jan%20Seva%20Kendra."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-white font-bold text-xs sm:text-sm border border-emerald-500/30 transition-all group/btn shadow-xs hover:shadow-glow-emerald"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:text-white" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form & Google Maps Section in Dark Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
        {/* Contact Form (Hidden on mobile phones, visible on tablet & desktop) */}
        <div className="hidden sm:flex lg:col-span-6 bg-slate-900/90 p-5 sm:p-9 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl flex-col justify-between">
            <div>
              <div className="mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-amber-500/30">
                  Online Inquiry Form
                </span>
                <h3 className="text-lg sm:text-2xl font-extrabold mt-2 bg-gradient-to-r from-amber-300 via-yellow-100 to-white bg-clip-text text-transparent animate-shimmer heading-glow">
                  Send Your Inquiry or Requirements
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below and we will get back to you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center space-y-3 sm:space-y-3.5 animate-fadeIn">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white">
                    Thank You! Your message has been sent.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Hitesh Kumar (Saini Jan Seva Kendra) will reach out to you on your provided phone number shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-500 shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-3.5 sm:space-y-4" onSubmit={handleSubmit}>
                  {formError && (
                    <div className="p-3 sm:p-3.5 bg-rose-500/15 border border-rose-500/30 rounded-xl sm:rounded-2xl flex items-center gap-2 text-xs text-rose-300 font-semibold">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-extrabold text-slate-300 mb-1 sm:mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Ramesh Kumar / Rahul Saini"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-xs sm:text-sm bg-slate-950 text-white placeholder-slate-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-300 mb-1 sm:mb-1.5">
                      Mobile Number (10 Digits) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      maxLength="10"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., 98XXXXXXXX"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-xs sm:text-sm bg-slate-950 text-white placeholder-slate-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-300 mb-1 sm:mb-1.5">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-xs sm:text-sm bg-slate-950 text-white font-medium"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.name} className="bg-slate-900 text-white">
                          {srv.name} ({srv.hindiName})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-300 mb-1 sm:mb-1.5">
                      Message / Special Request (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows="2"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific questions regarding documents or procedure?"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-xs sm:text-sm bg-slate-950 text-white placeholder-slate-500 resize-none font-medium"
                    />
                  </div>

                  <div className="pt-1.5 sm:pt-2 grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#1ebd58] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/25 transition-all active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 flex-shrink-0" />
                      <span>Submit Form</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            <p className="text-[10px] sm:text-[11px] text-slate-500 text-center mt-3 sm:mt-4">
              🔒 Your information is completely safe, private, and confidential.
            </p>
          </div>

          {/* Embedded Google Maps with Exact Location in Dark Theme */}
          <div className="lg:col-span-6 bg-slate-900/90 p-5 sm:p-9 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-amber-500/30 whitespace-nowrap">
                    <span className="sm:hidden">📍 Google Maps</span>
                    <span className="hidden sm:inline">Verified Google Maps Location</span>
                  </span>
                  <h3 className="text-base sm:text-xl font-extrabold mt-1.5 sm:mt-2.5 bg-gradient-to-r from-amber-300 via-yellow-100 to-white bg-clip-text text-transparent animate-shimmer heading-glow">
                    Saini Jan Seva Kendra
                  </h3>
                </div>
                <a
                  href={exactMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md flex-shrink-0"
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
                  <span>Open Map</span>
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="w-full h-56 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 shadow-inner relative bg-slate-950">
                <iframe
                  title="Saini Jan Seva Kendra Exact Google Maps Location"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-125"
                />
              </div>

              <a
                href={exactMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to open Saini Jan Seva Kendra on Google Maps"
                className="hidden sm:block mt-3.5 sm:mt-4 p-3 sm:p-4 bg-slate-950 hover:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-800 hover:border-blue-500/40 text-xs text-slate-300 space-y-1 shadow-xs transition-all group/loc cursor-pointer"
              >
                <p className="font-extrabold text-white flex items-center gap-1.5 text-xs sm:text-sm group-hover/loc:text-blue-300 transition-colors">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 flex-shrink-0" />
                  <span>Saini Jan Seva Kendra (सैनी जन सेवा केंद्र)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500 group-hover/loc:text-blue-400" />
                </p>
                <p className="font-medium text-slate-300 text-[11px] sm:text-xs">📍 Village Jaleelpur Mungra, near Mandi Dhanaura, District Amroha, Uttar Pradesh</p>
                <p className="text-blue-400 font-bold text-[11px] sm:text-xs">Exact GPS Pin: 29.0099281, 78.3018798</p>
              </a>
            </div>

            <div className="hidden sm:block mt-4 sm:mt-5">
              <a
                href={exactMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl bg-slate-950 hover:bg-slate-800 text-blue-400 font-extrabold text-xs sm:text-sm border border-slate-800 hover:border-blue-500/50 shadow-xs transition-all"
              >
                <Navigation className="w-4 h-4 text-rose-500" />
                <span>Get Driving Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-1 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
