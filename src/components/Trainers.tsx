import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { TRAINERS } from '../data/gymData';

interface TrainersProps {
  onBookConsultation: (trainerName: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onBookConsultation }) => {
  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[#0c0c0e] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#CCFF00] uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            Elite Coaching Staff
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            MEET YOUR PERSONAL TRAINERS
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            No bro-science or cookie-cutter routines. Our trainers hold internationally accredited certifications, biomechanics training, and genuine passion for your personal progress.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              {/* Photo Area */}
              <div className="relative h-72 w-full overflow-hidden bg-zinc-950">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-800 text-xs font-bold text-[#CCFF00]">
                  {trainer.experienceYears}+ Years Coaching Experience
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mb-1">
                    {trainer.name}
                  </h3>
                  <div className="text-xs font-bold text-[#FF5722] uppercase tracking-wider mb-4">
                    {trainer.role}
                  </div>

                  {/* Certifications Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trainer.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-zinc-800/90 text-zinc-300 border border-zinc-700/60"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-zinc-300 font-semibold mb-2">
                    <span className="text-zinc-500">Specialty: </span>
                    {trainer.specialty}
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {trainer.bio}
                  </p>
                </div>

                {/* Trainer Action */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <button
                    onClick={() => onBookConsultation(trainer.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-[#FF5722] text-zinc-200 hover:text-black font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Free 1-on-1 Consult
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
