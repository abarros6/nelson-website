'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e4de] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="Costa Railings LTD — Home">
            <Image
              src="/logo.jpg"
              alt="Costa Railings Ltd."
              width={1280}
              height={305}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    'text-[13px] tracking-wide font-medium transition-colors relative pb-0.5',
                    isActive
                      ? 'text-[#C8373A] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[#C8373A]'
                      : 'text-[#1a1a1a] hover:text-[#C8373A]',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-[#C8373A] text-white text-[13px] font-medium tracking-wide rounded hover:bg-[#a42e31] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:ring-offset-2"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-[#1a1a1a] hover:text-[#C8373A] focus:outline-none focus:ring-2 focus:ring-[#C8373A]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-[#e5e4de] bg-white" aria-label="Mobile navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    'block py-2.5 px-3 text-[15px] font-medium rounded transition-colors',
                    isActive
                      ? 'text-[#C8373A] bg-[#fdf0f0]'
                      : 'text-[#1a1a1a] hover:bg-[#f4f3ef] hover:text-[#C8373A]',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block text-center py-2.5 px-3 bg-[#C8373A] text-white text-[15px] font-medium rounded hover:bg-[#a42e31] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
