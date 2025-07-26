'use client';

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Resources from '../components/Resources';
import Community from '../components/Community';
import Footer from '../components/Footer';

export default function Home() {
  const { isDark } = useTheme();

  return (
    <div 
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <Header />
      <Hero />
      <About />
      {/* <Blog /> */}
      {/* <Events /> */}
      {/* <Resources /> */}
      <Community />
      <Footer />
    </div>
  );
}
