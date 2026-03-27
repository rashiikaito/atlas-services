'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-playfair font-bold text-safari-gold">
          Atlas
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-deep-charcoal hover:text-safari-gold font-geist">
            Home
          </Link>
          <Link href="/property" className="text-deep-charcoal hover:text-safari-gold font-geist">
            Property & Estate
          </Link>
          <Link href="/concierge" className="text-deep-charcoal hover:text-safari-gold font-geist">
            Concierge
          </Link>
          <Link href="/expat" className="text-deep-charcoal hover:text-safari-gold font-geist">
            Expat Services
          </Link>
          <Link href="/travel" className="text-deep-charcoal hover:text-safari-gold font-geist">
            Travel & Tourism
          </Link>
          <Link href="/contact" className="cta-button">
            Request Consultation
          </Link>
        </div>

        <button 
          className="md:hidden text-deep-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4">
          <Link href="/" className="text-deep-charcoal">Home</Link>
          <Link href="/property" className="text-deep-charcoal">Property & Estate</Link>
          <Link href="/concierge" className="text-deep-charcoal">Concierge</Link>
          <Link href="/expat" className="text-deep-charcoal">Expat Services</Link>
          <Link href="/travel" className="text-deep-charcoal">Travel & Tourism</Link>
          <Link href="/contact" className="cta-button inline-block text-center">
            Request Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
