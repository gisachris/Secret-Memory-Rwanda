'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 border-b border-yellow-400/20 relative z-50">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
            <img src="./logo.png" alt="logo" className="w-10 h-10 rounded-full" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#documentaries" className="text-white hover:text-yellow-400 transition-colors scroll-smooth">
              Documentaries
            </a>
            <Link href="/pricing" className="text-white hover:text-yellow-400 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)} />
        )}

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed inset-y-0 right-0 w-64 bg-zinc-900 transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } border-l border-yellow-400/20`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col space-y-4 p-4 mt-16">
            <a 
              href="/#documentaries" 
              className="text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentaries
            </a>
            <Link 
              href="/pricing" 
              className="text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}