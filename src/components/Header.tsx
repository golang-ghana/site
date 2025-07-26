'use client';

import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/go-main-big-gh.png"
              alt="Golang Ghana Logo"
              width={36}
              height={36}
              className="rounded-sm"
            />

            <span className="text-xl font-bold text-gray-900 dark:text-white">Golang Ghana</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About</a>
            <a href="#blog" onClick={e => { e.preventDefault(); document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Blog</a>
            <a href="#events" onClick={e => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Events</a>
            <a href="#resources" onClick={e => { e.preventDefault(); document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Resources</a>
            <a href="#community" onClick={e => { e.preventDefault(); document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Community</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200" onClick={e => { e.preventDefault(); document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Theme</span>
                <ThemeToggle />
              </div>
              <a href="#about" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About</a>
              <a href="#blog" onClick={e => { e.preventDefault(); document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Blog</a>
              <a href="#events" onClick={e => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Events</a>
              <a href="#resources" onClick={e => { e.preventDefault(); document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Resources</a>
              <a href="#community" onClick={e => { e.preventDefault(); document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Community</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 w-full mb-2">
                Sign In
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200 w-full" onClick={e => { e.preventDefault(); document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
