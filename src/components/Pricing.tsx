import React, { useState } from 'react';
import { Check, Flame, ArrowRight } from 'lucide-react';
import { PRICING_PLANS, FAQS } from '../data/gymData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
  onOpenTrialModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onOpenTrialModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#0c0c0e] relative border-t border-zinc-900">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF5722]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#FF5722] uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" />
            Transparent Memberships
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            AFFORDABLE PLANS. PREMIUM STANDARDS.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            No hidden maintenance charges or surprise enrollment fees. Choose the commitment level that fits your goals and budget.
          </p>
        </div>

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border-2 border-[#FF5722] shadow-2xl shadow-[#FF5722]/15 md:-translate-y-3'
                  : 'bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF5722] text-black text-xs font-black uppercase tracking-wider shadow-lg">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">{plan.highlight}</p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-zinc-400 text-lg">₹</span>
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-zinc-400 font-semibold">/ {plan.period}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-xs">
                    <span className="text-zinc-500 line-through">
                      ₹{plan.originalPrice.toLocaleString('en-IN')}
                    </span>
                    {plan.savings && (
                      <span className="text-[#CCFF00] font-bold px-2 py-0.5 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/20">
                        {plan.savings}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    What's included:
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#FF5722]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#FF5722] hover:bg-[#FF7043] text-black shadow-xl shadow-[#FF5722]/30 hover:shadow-[#FF5722]/50'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  }`}
                >
                  <span>Get Started with {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center mt-3">
                  <button
                    onClick={onOpenTrialModal}
                    className="text-[11px] text-zinc-400 hover:text-white underline underline-offset-2"
                  >
                    Or try 1-day free pass first
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Pass Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10">
            <span className="inline-block text-xs font-bold text-[#CCFF00] uppercase tracking-wider mb-1">
              Zero Financial Risk
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
              STILL DECIDING? CLAIM A 100% FREE TRIAL PASS
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Walk into our Mohan Reddy Complex facility, experience the imported machines, and get a consultation with our certified trainers today.
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="relative z-10 shrink-0 px-8 py-4 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black uppercase text-xs tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
          >
            Claim 1-Day Free Pass
          </button>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Everything you need to know about joining Fierce Fitness Gym
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-zinc-900/40 border border-zinc-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-zinc-200 hover:text-white"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#FF5722] font-bold text-lg shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
