import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquareQuote, Filter, ExternalLink } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Trainers', 'Equipment', 'Atmosphere', 'Results'];

  const filteredReviews = activeFilter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.highlightTag === activeFilter);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0c0c0e] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Google Reputation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#FF5722] uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-[#FF5722]" />
              Authentic Social Proof
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              560+ GOOGLE REVIEWS. 5.0 RATING.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Read real, unfiltered experiences from members in Gundlapochampally who transformed their health, body composition, and confidence with Fierce Fitness.
            </p>
          </div>

          {/* Google Score Summary Box */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-xl flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24-12 24z"
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
                <span className="font-bold text-white text-base">Google Verified Reviews</span>
              </div>

              <div className="font-display text-4xl font-extrabold text-white my-1">
                5.0 <span className="text-zinc-500 text-2xl font-normal">/ 5.0</span>
              </div>

              <div className="flex text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="text-xs text-zinc-400 font-medium mt-1">
                Based on 560+ customer reviews in Hyderabad
              </div>

              <a
                href="https://maps.google.com/?q=Fierce+Fitness+Gym+Gundlapochampally+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#FF5722] hover:text-[#FF7043] transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Topics:
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-zinc-100 text-black font-bold shadow-md'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg relative"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-4 right-4 text-zinc-800 pointer-events-none">
                <MessageSquareQuote className="w-8 h-8 opacity-40" />
              </div>

              <div>
                {/* Rating row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-700 flex items-center justify-center font-bold text-xs text-white uppercase">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      {item.name}
                      <span title="Verified Google Review" className="inline-flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853]" />
                      </span>
                    </h4>
                    <p className="text-[11px] text-zinc-500">{item.role}</p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-800 text-[#FF5722] uppercase tracking-wider">
                  {item.highlightTag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
