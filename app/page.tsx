import Image from 'next/image';
import Link from 'next/link';
import {
  Home,
  Hammer,
  Building2,
  Cloud,
  Flame,
  Zap,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

function DecorativeDivider() {
  return (
    <div className="flex items-center gap-4 my-2" aria-hidden="true">
      <div className="flex-1 h-px bg-[#e5e4de]" />
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-[#C8373A] opacity-70">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
      </svg>
      <div className="flex-1 h-px bg-[#e5e4de]" />
    </div>
  );
}

const HOME_SERVICES = [
  {
    icon: Home,
    name: 'Exterior Railings',
    desc: 'Durable, custom-crafted porch, balcony, and stair railings for any exterior.',
  },
  {
    icon: Home,
    name: 'Interior Railings',
    desc: 'Elegant interior stair and balcony railings built to complement any interior style.',
  },
  {
    icon: Hammer,
    name: 'Custom Metal Work',
    desc: 'Bespoke fabrication for unique architectural and decorative metalwork projects.',
  },
  {
    icon: Building2,
    name: 'Structural Steel',
    desc: 'Precision structural steel work for residential and commercial construction.',
  },
  {
    icon: Flame,
    name: 'Fire Escapes',
    desc: 'Code-compliant fire escape systems fabricated and installed for any building.',
  },
  {
    icon: Zap,
    name: 'On-Site Welding',
    desc: 'Mobile welding services for residential and commercial projects across the GTA.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a1a1a] min-h-[580px] flex items-center">
        {/* Background photo */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/gallery/exterior-railings/outside-railing-1.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-[#C8373A] text-[12px] tracking-[0.22em] uppercase font-sans font-medium mb-4">
              Toronto &amp; the GTA &mdash; Est. 30+ Years
            </p>
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5">
              Custom Metal
              <br />
              <em className="not-italic text-[#C8373A]">Fabrication.</em>
              <br />
              Built to Last.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Family-owned and operated for over three decades, Costa Railings LTD crafts and installs
              precision metalwork for homes, commercial properties, and builders across Toronto.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8373A] text-white font-semibold rounded hover:bg-[#a42e31] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
              >
                Request a Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded hover:bg-white/20 transition-colors border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="bg-[#fafaf8] border-y border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#C8373A] text-[11px] tracking-[0.22em] uppercase font-medium mb-3">
                About Us
              </p>
              <h2 className="font-display font-semibold text-[#1a1a1a] text-2xl sm:text-3xl leading-snug mb-4">
                Precision Craftsmanship,<br />30 Years in the Making
              </h2>
              <DecorativeDivider />
              <p className="text-[#4a4a4a] leading-relaxed mt-4 mb-6">
                Costa Railings LTD is a custom metal fabrication company serving Toronto and the GTA for
                residential homes, commercial properties, contractors, and builders. A family-owned business
                operating for 30+ years in the Dufferin and Dupont area — our goal is simple: deliver strong
                workmanship, clean finished products, and designs crafted for client appreciation.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[#C8373A] font-medium text-sm hover:gap-2.5 transition-all"
              >
                Learn more about us <ChevronRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-px bg-[#e5e4de] rounded-lg overflow-hidden">
              {[
                { number: '30+', label: 'Years in Business' },
                { number: '11', label: 'Services Offered' },
                { number: 'GTA', label: 'Service Area' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6 text-center">
                  <p className="font-display font-bold text-3xl text-[#C8373A] mb-1">{stat.number}</p>
                  <p className="text-xs text-[#6b6b6b] leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-12">
          <p className="text-[#C8373A] text-[11px] tracking-[0.22em] uppercase font-medium mb-3">
            What We Do
          </p>
          <h2 className="font-display font-semibold text-[#1a1a1a] text-2xl sm:text-3xl mb-3">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-4 mt-2" aria-hidden="true">
            <div className="w-16 h-px bg-[#e5e4de]" />
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-2.5 h-2.5 text-[#C8373A] opacity-60">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
            </svg>
            <div className="w-16 h-px bg-[#e5e4de]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {HOME_SERVICES.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="group bg-white border border-[#e5e4de] rounded-lg p-6 hover:border-[#C8373A] hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-md bg-[#fdf0f0] flex items-center justify-center mb-4 group-hover:bg-[#C8373A] transition-colors">
                <Icon
                  size={20}
                  className="text-[#C8373A] group-hover:text-white transition-colors"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="font-display font-semibold text-[16px] text-[#1a1a1a] mb-1.5">{name}</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#C8373A] font-semibold border border-[#C8373A] px-6 py-2.5 rounded hover:bg-[#C8373A] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:ring-offset-2"
          >
            See All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#C8373A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-3">
            Have a project in mind?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Get in touch with our team and we&rsquo;ll help bring your metalwork vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#C8373A] font-bold rounded hover:bg-[#fdf0f0] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#C8373A]"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
