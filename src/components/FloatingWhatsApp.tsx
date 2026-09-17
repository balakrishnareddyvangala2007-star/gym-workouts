import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customQuery, setCustomQuery] = useState('');

  const quickQuestions = [
    "Hi, I'm interested in joining Fierce Fitness!",
    "What are your membership charges?",
    "Can I book a 1-day free trial pass today?",
    "Are personal trainers available for weight loss?",
  ];

  const handleSendCustom = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919177804696?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Message Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#141418] border border-zinc-700 shadow-2xl p-4 text-left animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black">
                <MessageCircle className="w-5 h-5 fill-black" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Fierce Fitness Helpdesk
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#25D366]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online • Replies in ~5 mins
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-3 text-xs text-zinc-300">
            👋 Welcome! Have questions about fees, equipment, or personal training at Mohan Reddy Complex?
          </div>

          {/* Quick preset questions */}
          <div className="space-y-1.5 mb-3">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendCustom(q)}
                className="w-full text-left px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[11px] text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Custom message input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Type your question..."
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customQuery.trim()) {
                  handleSendCustom(customQuery);
                }
              }}
              className="w-full pl-3 pr-10 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#25D366]"
            />
            <button
              onClick={() => {
                if (customQuery.trim()) handleSendCustom(customQuery);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#25D366] hover:text-[#20bd5a]"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="flex items-center gap-3">
        {/* Tooltip hint when closed */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-xs text-zinc-200 shadow-xl cursor-pointer hover:border-zinc-700 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp</span>
          </div>
        )}

        <button
          id="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
          aria-label="Chat with Fierce Fitness on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

          {isOpen ? (
            <X className="w-7 h-7 text-black relative z-10" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-black text-black relative z-10" />
          )}
        </button>
      </div>
    </div>
  );
};
