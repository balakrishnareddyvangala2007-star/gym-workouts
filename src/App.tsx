import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Programs } from './components/Programs';
import { EquipmentGallery } from './components/EquipmentGallery';
import { Trainers } from './components/Trainers';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [modalInitialTopic, setModalInitialTopic] = useState('1-Day Free Trial Pass');

  const handleOpenTrialModal = (topic: string = '1-Day Free Trial Pass') => {
    setModalInitialTopic(topic);
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 selection:bg-[#FF5722] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenTrialModal={() => handleOpenTrialModal('General 1-Day Trial Pass')} />

      {/* Main Sections */}
      <main id="main-content">
        <Hero onOpenTrialModal={() => handleOpenTrialModal('Hero 1-Day Free Pass')} />
        <WhyChooseUs onOpenTrialModal={() => handleOpenTrialModal('Trial After Why-Choose-Us')} />
        <Programs onSelectProgramForTrial={(programName) => handleOpenTrialModal(`Program: ${programName}`)} />
        <EquipmentGallery />
        <Trainers onBookConsultation={(trainerName) => handleOpenTrialModal(`Trainer Consult: ${trainerName}`)} />
        <Testimonials />
        <Pricing
          onSelectPlan={(planName) => handleOpenTrialModal(`Membership: ${planName}`)}
          onOpenTrialModal={() => handleOpenTrialModal('1-Day Free Pass from Pricing')}
        />
        <LocationAndHours />
      </main>

      {/* Footer */}
      <Footer onOpenTrialModal={() => handleOpenTrialModal('Footer Trial Pass')} />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />

      {/* Lead Generation & 1-Day Free Trial Pass Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrialModal}
        initialProgramOrPlan={modalInitialTopic}
      />
    </div>
  );
}
