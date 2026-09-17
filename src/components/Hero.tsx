import React from 'react';
import { Star, ShieldCheck, Flame, ArrowRight, Clock, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#0c0c0e]">
      {/* Background Graphic & Texture */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Ambient colored lighting glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-[#FF5722]/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#CCFF00]/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Diagonal carbon lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0e]/40 via-transparent to-[#0c0c0e]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Live Status & Google Rating Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 pr-4 rounded-full bg-zinc-900/90 border border-zinc-800 shadow-xl mb-6 backdrop-blur-md">
              {/* Google 5.0 badge */}
              <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full border border-zinc-800">
                <span className="font-bold text-xs text-white flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  5.0
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-xs font-semibold text-zinc-300">
                560+ Google Reviews
              </span>
              <span className="hidden sm:inline-block text-zinc-600">•</span>
              <div className="flex items-center gap-1.5 text-xs text-[#CCFF00] font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]"></span>
                </span>
                <span>Open till 9:30 PM</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-6">
              UNLEASH YOUR <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#FF7043] to-[#FFAB91]">
                FIERCE POTENTIAL
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
              Step into Gundlapochampally’s highest-rated fitness powerhouse. Built with{' '}
              <span className="text-white font-semibold">commercial imported equipment</span>,{' '}
              <span className="text-white font-semibold">certified elite trainers</span>, and an electric community designed to turn your body and mindset fierce.
            </p>

            {/* Value Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl mb-9">
              {[
                'Commercial Bio-Mechanic Equipment',
                'Certified Dedicated Personal Trainers',
                'Clean, Air-Conditioned Training Floors',
                'Flexible Timings (Mon-Sat till 9:30 PM)',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm text-zinc-200">
                  <div className="w-4 h-4 rounded-full bg-[#FF5722]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5722]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-free-pass-cta"
                onClick={onOpenTrialModal}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-extrabold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF5722] via-[#FF7043] to-[#FF5722] rounded-xl shadow-xl shadow-[#FF5722]/30 hover:shadow-[#FF5722]/50 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <Flame className="w-5 h-5 fill-black" />
                  Get 1-Day Free Pass
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                id="hero-view-pricing-cta"
                onClick={() => scrollToSection('#pricing')}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-bold uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all cursor-pointer"
              >
                View Plans & Pricing
              </button>
            </div>

            {/* Address Micro Note */}
            <div className="flex items-center gap-2 mt-6 text-xs text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Mohan Reddy Complex, Gundlapochampally, Hyderabad</span>
            </div>
          </div>

          {/* Right Column: Visual Gym Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Card glow container */}
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-900/50 shadow-2xl backdrop-blur-sm group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                  alt="Fierce Fitness Gym Training Floor"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-110"
                  loading="eager"
                />
                
                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Floating Top Tag: Verified Center */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-zinc-700/60 text-xs font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
                  <span>#1 Rated in Medchal Zone</span>
                </div>

                {/* Floating Bottom Overlay Info Card */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                        Fierce Fitness Gym
                      </h4>
                      <p className="text-xs text-zinc-400">Mohan Reddy Complex, Gundlapochampally</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        5.0 / 5.0
                      </div>
                      <span className="text-[11px] text-zinc-400">560+ Google reviews</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80 text-xs text-zinc-300">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FF5722]" />
                      Mon-Sat: 5:30 AM – 9:30 PM
                    </span>
                    <button
                      onClick={onOpenTrialModal}
                      className="text-[#FF5722] hover:text-[#FF7043] font-bold flex items-center gap-1"
                    >
                      Claim Pass <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Metric Card: 100% Genuine */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-[#141418] border border-zinc-800 shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/15 flex items-center justify-center text-[#CCFF00]">
                  <Flame className="w-5 h-5 fill-[#CCFF00]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Zero Admission Fee
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    On Quarterly & Annual Memberships
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          {GYM_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="p-3 sm:p-4 rounded-xl bg-zinc-900/30 border border-zinc-900/60">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#FF5722] uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
