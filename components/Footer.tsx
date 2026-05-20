import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Printer } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-[#C8373A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="inline-flex bg-white rounded px-3 py-2 mb-4">
              <Image
                src="/logo.jpg"
                alt="Costa Railings Ltd."
                width={1280}
                height={305}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Custom metal fabrication and installation serving Toronto and the GTA for over 30 years.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-[13px] tracking-[0.14em] uppercase text-[#C8373A] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-white/40" />
                <span>
                  187 Geary Ave.
                  <br />
                  Toronto, Ontario M6H 2G1
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="flex-shrink-0 text-white/40" />
                <a href="tel:+14165353700" className="hover:text-white transition-colors">
                  (416) 535-3700
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer size={15} className="flex-shrink-0 text-white/40" />
                <span>(416) 535-4700</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-[13px] tracking-[0.14em] uppercase text-[#C8373A] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Costa Railings LTD. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">187 Geary Ave., Toronto, ON M6H 2G1</p>
        </div>
      </div>
    </footer>
  );
}
