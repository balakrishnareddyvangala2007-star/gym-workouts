import React from 'react';
import { Dumbbell, Award, Users, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { FEATURES } from '../data/gymData';

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="w-6 h-6 text-[#FF5722]" />,
  Award: <Award className="w-6 h-6 text-[#CCFF00]" />,
  Users: <Users className="w-6 h-6 text-[#FF5722]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#CCFF00]" />,
};

interface WhyChooseUsProps {
  onOpenTrialModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0c0c0e] relative border-t border-zinc-900">
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FF5722]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#FF5722] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The Fierce Difference
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            WHY GUNDLAPOCHAMPALLY LIFTS WITH US
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            We built Fierce Fitness Gym to eliminate crowded franchised gym headaches. You get professional gear, knowledgeable coaching, and an environment that demands your best.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Card top row */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                    {iconMap[feature.iconName]}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400 bg-black/50 px-2.5 py-1 rounded-md border border-zinc-800/60">
                    {feature.highlight}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide mb-3 group-hover:text-[#FF5722] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs font-semibold text-zinc-400">
                <Check className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>Verified in 560+ Reviews</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF5722]/15 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#FF5722]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                Want to test the machines before committing?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Claim our no-strings-attached 1-Day Trial Pass and experience the floor yourself.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto shrink-0 px-6 py-3 bg-[#FF5722] hover:bg-[#FF7043] text-black font-extrabold uppercase text-xs tracking-wider rounded-xl transition-all shadow-md shadow-[#FF5722]/20 cursor-pointer"
          >
            Claim 1-Day Free Pass
          </button>
        </div>
      </div>
    </section>
  );
};
