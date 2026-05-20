'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

function GateLogo() {
  return (
    <svg
      viewBox="0 0 100 76"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-10 h-8 flex-shrink-0"
    >
      {/* Left post finial */}
      <circle cx="6" cy="8" r="5" />
      {/* Left post */}
      <rect x="2" y="11" width="8" height="61" rx="1.5" />

      {/* Right post finial */}
      <circle cx="94" cy="8" r="5" />
      {/* Right post */}
      <rect x="90" y="11" width="8" height="61" rx="1.5" />

      {/* Top horizontal rail */}
      <rect x="10" y="26" width="80" height="4" rx="1" />
      {/* Bottom horizontal rail */}
      <rect x="10" y="56" width="80" height="4" rx="1" />

      {/* Picket 1 */}
      <polygon points="20,16 18,26 22,26" />
      <rect x="18" y="26" width="4" height="46" rx="1" />

      {/* Picket 2 */}
      <polygon points="32,16 30,26 34,26" />
      <rect x="30" y="26" width="4" height="46" rx="1" />

      {/* Picket 3 */}
      <polygon points="44,16 42,26 46,26" />
      <rect x="42" y="26" width="4" height="46" rx="1" />

      {/* Picket 4 — center, slightly taller */}
      <polygon points="50,11 48,26 52,26" />
      <rect x="48" y="26" width="4" height="46" rx="1" />

      {/* Picket 5 */}
      <polygon points="62,16 60,26 64,26" />
      <rect x="60" y="26" width="4" height="46" rx="1" />

      {/* Picket 6 */}
      <polygon points="74,16 72,26 76,26" />
      <rect x="72" y="26" width="4" height="46" rx="1" />

      {/* Picket 7 */}
      <polygon points="86,16 84,26 88,26" />
      <rect x="84" y="26" width="4" height="46" rx="1" />

      {/* Small knobs on top rail at post junctions */}
      <circle cx="14" cy="28" r="2.5" />
      <circle cx="86" cy="28" r="2.5" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e4de] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Costa Railings LTD — Home">
            <span className="text-[#1a1a1a] group-hover:text-[#C8373A] transition-colors">
              <GateLogo />
            </span>
            <div className="leading-none">
              <span className="block font-display font-semibold text-[17px] tracking-wide text-[#1a1a1a] group-hover:text-[#C8373A] transition-colors">
                Costa Railings
              </span>
              <span className="block font-sans text-[10px] tracking-[0.18em] uppercase text-[#6b6b6b] mt-0.5">
                Ltd. &mdash; Est. Toronto
              </span>
            </div>
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
