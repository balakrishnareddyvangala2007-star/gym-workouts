import React, { useState, useEffect } from 'react';
import { Dumbbell, Phone, Menu, X, Flame } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Programs', href: '#programs' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Location & Hours', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Fierce Fitness Gym Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#FF8A65] flex items-center justify-center shadow-lg shadow-[#FF5722]/30 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-black fill-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase flex items-center gap-1.5 leading-none">
                FIERCE <span className="text-[#FF5722]">FITNESS</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 font-semibold uppercase mt-1">
                Gundlapochampally • Hyd
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-zinc-300 hover:text-white hover:text-[#FF5722] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5722] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="navbar-phone-link"
              href={`tel:${GYM_DETAILS.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900/90 border border-zinc-800 px-3.5 py-2 rounded-lg hover:border-zinc-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>{GYM_DETAILS.phone}</span>
            </a>

            <button
              id="navbar-trial-cta-btn"
              onClick={onOpenTrialModal}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF5722] via-[#FF7043] to-[#FF5722] rounded-lg shadow-lg shadow-[#FF5722]/25 hover:shadow-[#FF5722]/45 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5 fill-black" />
                Book Free Pass
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              id="mobile-trial-btn-top"
              onClick={onOpenTrialModal}
              className="px-3 py-1.5 text-xs font-bold text-black bg-[#FF5722] rounded-md uppercase"
            >
              Free Trial
            </button>
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-drawer-menu"
            className="lg:hidden mt-3 p-5 bg-zinc-950/95 border border-zinc-800 rounded-2xl backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
          >
            <div className="flex flex-col space-y-3 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-3">
              <a
                href={`tel:${GYM_DETAILS.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-900 text-sm font-semibold text-white border border-zinc-800"
              >
                <Phone className="w-4 h-4 text-[#CCFF00]" />
                Call +91 91778 04696
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#FF5722] text-black font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#FF5722]/30 flex items-center justify-center gap-2"
              >
                <Dumbbell className="w-4 h-4 fill-black" />
                Claim 1-Day Free Trial Pass
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
