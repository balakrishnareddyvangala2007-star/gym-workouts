import React from 'react';
import { Flame, Clock, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

interface ProgramsProps {
  onSelectProgramForTrial: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgramForTrial }) => {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#0c0c0e] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#CCFF00] uppercase tracking-widest mb-3">
              <Flame className="w-3.5 h-3.5" />
              Engineered Workouts
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-3">
              TRAINING PROGRAMS BUILT FOR RESULTS
            </h2>
            <p className="text-zinc-400 text-base">
              Whether your goal is muscle hypertrophy, athletic conditioning, rapid fat loss, or postural recovery, our specialized tracks deliver.
            </p>
          </div>

          <div className="text-sm font-semibold text-zinc-400">
            All programs supervised by certified on-floor trainers
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between bg-zinc-900/40 hover:bg-zinc-900/70 ${
                program.popular
                  ? 'border-[#FF5722]/50 shadow-lg shadow-[#FF5722]/5'
                  : 'border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {/* Program Top Image Banner */}
              <div className="relative h-56 w-full overflow-hidden group">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-85 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Popular Pill */}
                {program.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FF5722] text-black text-xs font-extrabold uppercase tracking-wider shadow-lg">
                    High Demand
                  </div>
                )}

                {/* Intensity & Duration Chips */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-zinc-800 text-zinc-200">
                    <Zap className="w-3 h-3 text-[#CCFF00]" />
                    Intensity: {program.intensity}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-zinc-800 text-zinc-200">
                    <Clock className="w-3 h-3 text-[#FF5722]" />
                    {program.duration}
                  </span>
                </div>
              </div>

              {/* Program Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#FF5722] uppercase tracking-wider mb-1">
                    {program.tagline}
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {program.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">
                    Included in standard memberships
                  </span>
                  <button
                    onClick={() => onSelectProgramForTrial(program.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#FF5722] bg-zinc-800/80 hover:bg-zinc-800 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Try in Free Pass
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF5722]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
