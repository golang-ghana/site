'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Community from '../components/Community';
import Footer from '../components/Footer';

// Dynamically import the Auth component with SSR disabled
const Auth = dynamic(() => import('../pages/Auth'), { ssr: false });

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Function to handle sign up click from Header
  const handleSignUpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAuthModal(true);
  };

  // Close modal when clicking on the overlay
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowAuthModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header onSignUpClick={handleSignUpClick} />
      <Hero />
      <About />
      <Community />
      <Footer />

      {/* Auth Modal */}
      {showAuthModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/40" // blur + semi-transparent overlay
          onClick={handleCloseModal}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md">
            <Auth onSuccess={() => setShowAuthModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
