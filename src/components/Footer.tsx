import React from 'react';
import { Flame, Phone, MapPin, Mail, Instagram, Facebook, Youtube, Clock, Star, ChevronRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface FooterProps {
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrialModal }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF5722] flex items-center justify-center text-black">
                  <Flame className="w-6 h-6 fill-black" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold uppercase text-white tracking-wider">
                    FIERCE <span className="text-[#FF5722]">FITNESS</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 tracking-widest uppercase">
                    Gundlapochampally, Hyderabad
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
                Hyderabad’s premier high-intensity strength and transformation center. Dedicated to heavy lifting, athletic functional conditioning, and welcoming lifters of all levels.
              </p>

              {/* Google 5.0 Star badge in footer */}
              <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">5.0 / 5.0 Rating</span>
                <span className="text-zinc-500">•</span>
                <span className="text-xs text-zinc-400">560+ Reviews</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase text-white tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Why Fierce', href: '#why-us' },
                { name: 'Training Programs', href: '#programs' },
                { name: 'Equipment Floor', href: '#equipment' },
                { name: 'Certified Trainers', href: '#trainers' },
                { name: 'Member Reviews', href: '#reviews' },
                { name: 'Pricing Plans', href: '#pricing' },
                { name: 'Location & Map', href: '#location' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="hover:text-white hover:text-[#FF5722] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#FF5722]" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase text-white tracking-wider mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#CCFF00]" />
              OPERATING TIMINGS
            </h4>
            <div className="space-y-3">
              <div>
                <span className="text-zinc-300 block font-semibold">Monday – Saturday</span>
                <span className="text-zinc-400">5:30 AM – 9:30 PM (Continuous)</span>
              </div>
              <div>
                <span className="text-zinc-300 block font-semibold">Sunday</span>
                <span className="text-amber-400 font-medium">6:00 AM – 1:00 PM (Morning Hours)</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenTrialModal}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#FF5722] hover:bg-[#FF7043] text-black font-extrabold uppercase text-xs tracking-wider transition-colors cursor-pointer"
                >
                  Book 1-Day Trial Pass
                </button>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Address */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase text-white tracking-wider mb-4">
              CONTACT & ADDRESS
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                <span>{GYM_DETAILS.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CCFF00] shrink-0" />
                <a
                  href={`tel:${GYM_DETAILS.phoneRaw}`}
                  className="text-white hover:text-[#CCFF00] font-semibold transition-colors"
                >
                  {GYM_DETAILS.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF5722] shrink-0" />
                <a
                  href={`mailto:${GYM_DETAILS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {GYM_DETAILS.email}
                </a>
              </div>

              {/* Social links */}
              <div className="pt-3 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-[#FF5722] text-zinc-300 hover:text-black flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-[#FF5722] text-zinc-300 hover:text-black flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-[#FF5722] text-zinc-300 hover:text-black flex items-center justify-center transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Fierce Fitness Gym. All rights reserved. Mohan Reddy Complex, Gundlapochampally, Hyderabad.
          </div>
          <div className="flex items-center gap-4">
            <span>5.0 ★ Google Rated Gym</span>
            <span>•</span>
            <span>Unisex Fitness Center</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
