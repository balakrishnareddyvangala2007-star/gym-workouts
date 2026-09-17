import React, { useState } from 'react';
import { X, Flame, Phone, User, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramOrPlan?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  initialProgramOrPlan = 'General Workout',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Muscle Hypertrophy & Strength');
  const [timeSlot, setTimeSlot] = useState('Morning (6:00 AM – 9:00 AM)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Generate random pass code
    const randomCode = `FFG-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassCode(randomCode);
    setIsSubmitted(true);
  };

  const handleWhatsAppConfirm = () => {
    const message = encodeURIComponent(
      `Hi Fierce Fitness Gym! I have generated my 1-Day Free Pass.\n\nName: ${name}\nPhone: ${phone}\nPass Code: ${passCode}\nFocus/Interest: ${initialProgramOrPlan} (${goal})\nPreferred Slot: ${timeSlot}\n\nLooking forward to working out at Mohan Reddy Complex!`
    );
    window.open(`https://wa.me/919177804696?text=${message}`, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#121216] border border-zinc-800 shadow-2xl p-6 sm:p-8 my-8 text-left">
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 w-max text-xs font-bold text-[#FF5722] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              100% Free • No Credit Card Required
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
              CLAIM YOUR 1-DAY FREE TRIAL PASS
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 mb-6">
              Experience the imported machines, floor vibe, and coaching at Mohan Reddy Complex, Gundlapochampally.
            </p>

            {initialProgramOrPlan && initialProgramOrPlan !== 'General Workout' && (
              <div className="mb-5 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-center justify-between">
                <span>Selected Interest:</span>
                <span className="font-bold text-[#CCFF00]">{initialProgramOrPlan}</span>
              </div>
            )}

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Full Name <span className="text-[#FF5722]">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF5722] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Phone / WhatsApp Number <span className="text-[#FF5722]">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF5722] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF5722] transition-colors"
                  >
                    <option value="Muscle Hypertrophy & Strength">Muscle & Strength</option>
                    <option value="Fat Loss & Toning">Fat Loss & Conditioning</option>
                    <option value="General Health & Stamina">General Fitness</option>
                    <option value="Personal Training Coaching">1-on-1 Personal Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF5722] transition-colors"
                  >
                    <option value="Morning (6:00 AM – 9:00 AM)">Morning (6:00 – 9:00 AM)</option>
                    <option value="Afternoon (11:00 AM – 3:00 PM)">Afternoon (11:00 AM – 3:00 PM)</option>
                    <option value="Evening (5:30 PM – 9:30 PM)">Evening (5:30 – 9:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-black font-extrabold uppercase text-xs tracking-wider shadow-xl shadow-[#FF5722]/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Flame className="w-4 h-4 fill-black" />
                Generate Instant Free Pass
              </button>

              <p className="text-[11px] text-zinc-500 text-center mt-2">
                We respect your privacy. No spam. You'll receive your digital trial pass code immediately.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation & Ticket State */
          <div className="text-center py-2 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-[#34A853]/15 text-[#34A853] flex items-center justify-center mx-auto mb-4 border border-[#34A853]/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
              YOUR FREE PASS IS READY!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 mb-6">
              Welcome, <span className="text-white font-bold">{name}</span>! Show this digital pass at the Fierce Fitness reception.
            </p>

            {/* Digital Pass Ticket Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border-2 border-dashed border-zinc-700 relative text-left mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF5722]">
                    1-Day VIP Guest Pass
                  </span>
                  <div className="font-display text-lg font-bold text-white uppercase">
                    FIERCE FITNESS GYM
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-zinc-500 uppercase">Pass Code</span>
                  <div className="font-mono text-base font-extrabold text-[#CCFF00]">
                    {passCode}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 mb-2">
                <div>
                  <span className="text-zinc-500 block">Name:</span>
                  <span className="text-white font-semibold">{name}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Slot:</span>
                  <span className="text-white font-semibold">{timeSlot}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-900 text-[10px] text-zinc-400">
                📍 Mohan Reddy Complex, Gundlapochampally, Hyderabad
              </div>
            </div>

            {/* Instant WhatsApp Send Button */}
            <button
              onClick={handleWhatsAppConfirm}
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold uppercase text-xs tracking-wider shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 mb-3 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              Confirm & Save Pass via WhatsApp
            </button>

            <button
              onClick={resetForm}
              className="text-xs text-zinc-400 hover:text-white underline underline-offset-2"
            >
              Close & return to website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
