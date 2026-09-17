import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import { GALLERY } from '../data/gymData';

export const EquipmentGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Machines', 'Free Weights', 'Cardio', 'Functional'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeCategory);

  return (
    <section id="equipment" className="py-20 lg:py-28 bg-[#0c0c0e] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#FF5722] uppercase tracking-widest mb-3">
            <Dumbbell className="w-3.5 h-3.5" />
            Zero Compromise Hardware
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            MODERN IMPORTED EQUIPMENT SHOWCASE
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We invested in commercial grade, biomechanically calibrated equipment to safeguard your joints while isolating target muscles with maximum resistance efficiency.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#FF5722] text-black shadow-lg shadow-[#FF5722]/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-end h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-80 group-hover:brightness-95 contrast-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-zinc-700/60 text-[11px] font-bold uppercase tracking-wider text-[#CCFF00]">
                  {item.category}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 p-5 bg-gradient-to-t from-black/95 to-transparent">
                <h4 className="font-display text-xl font-bold uppercase text-white tracking-wide mb-1 group-hover:text-[#FF5722] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floor Highlights Note */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300">
            <span className="text-[#FF5722] font-bold block text-sm mb-0.5">Heavy Weight Range</span>
            Dumbbells up to 50kg, 1,500+ kg of calibrated Olympic plates
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300">
            <span className="text-[#CCFF00] font-bold block text-sm mb-0.5">Dual Cable Towers</span>
            Zero wait times with multiple multi-angle functional trainers
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300">
            <span className="text-[#FF5722] font-bold block text-sm mb-0.5">Olympic Drop Platforms</span>
            High-density shock-absorbing rubber turf for safe heavy pulling
          </div>
        </div>
      </div>
    </section>
  );
};
