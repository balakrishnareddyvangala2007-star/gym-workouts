import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, CheckCircle, ExternalLink } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const LocationAndHours: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#0c0c0e] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#CCFF00] uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Visit Our Facility
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            LOCATION & FLEXIBLE TIMINGS
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Centrally positioned in Mohan Reddy Complex, Gundlapochampally with dedicated parking and open 6 days a week until 9:30 PM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Operating Hours & Direct Connect Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Operating Hours Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FF5722]/15 flex items-center justify-center text-[#FF5722]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                    OPERATING HOURS
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#CCFF00] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                    Open Today until {GYM_DETAILS.timings.closingTime}
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-2.5 border-b border-zinc-800/70">
                  <span className="font-medium text-zinc-300">Monday – Saturday</span>
                  <span className="font-bold text-white bg-zinc-800/80 px-2.5 py-1 rounded-md text-xs">
                    5:30 AM – 9:30 PM
                  </span>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-zinc-800/70">
                  <span className="font-medium text-zinc-300">Sunday (Morning Power Hours)</span>
                  <span className="font-bold text-amber-400 bg-zinc-800/80 px-2.5 py-1 rounded-md text-xs">
                    6:00 AM – 1:00 PM
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-[11px] text-zinc-400">
                  <span className="text-[#FF5722] font-bold">Peak Hours Tip: </span>
                  Evenings (6:30 PM – 8:30 PM) are buzzing with energy. For quiet solitary lifting, we recommend 11:00 AM – 4:00 PM.
                </div>
              </div>
            </div>

            {/* Address & Direct Phone Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/15 flex items-center justify-center text-[#CCFF00]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                      GYM ADDRESS
                    </h3>
                    <p className="text-xs text-zinc-400">Gundlapochampally, Hyderabad</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-zinc-300 mb-6">
                  <p className="font-semibold text-white">
                    {GYM_DETAILS.address}
                  </p>
                  <p className="text-xs text-zinc-400">
                    Landmark: {GYM_DETAILS.landmark}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Direct Call and WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  id="direct-call-btn"
                  href={`tel:${GYM_DETAILS.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#CCFF00]" />
                  Call: +91 91778 04696
                </a>

                <a
                  id="direct-whatsapp-btn"
                  href={GYM_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  WhatsApp Quick Chat
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Navigation Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 flex flex-col">
            {/* Map Container */}
            <div className="relative w-full h-[380px] sm:h-[420px] bg-zinc-900">
              <iframe
                title="Fierce Fitness Gym Location Map"
                src="https://maps.google.com/maps?q=Mohan+Reddy+Complex,+Gundlapochampally,+Hyderabad,+Telangana+500100&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-zinc-700/80 shadow-xl max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5722] animate-ping" />
                  <span className="font-display font-bold text-sm text-white uppercase">
                    FIERCE FITNESS GYM
                  </span>
                </div>
                <p className="text-[11px] text-zinc-300 mt-1">
                  Mohan Reddy Complex, Gundlapochampally
                </p>
              </div>

              {/* Directions Button on Map */}
              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.google.com/?q=Fierce+Fitness+Gym+Mohan+Reddy+Complex+Gundlapochampally+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF5722] hover:bg-[#FF7043] text-black font-extrabold text-xs uppercase tracking-wider shadow-xl transition-all"
                >
                  <Navigation className="w-4 h-4 fill-black" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Map Bottom Metadata */}
            <div className="p-4 sm:p-5 bg-zinc-950 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400 border-t border-zinc-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#34A853]" />
                <span>Dedicated Free Parking for Bikes & Cars Available</span>
              </div>
              <span className="text-zinc-500">Secunderabad / Medchal Route</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
