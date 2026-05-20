import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Costa Railings LTD',
  description:
    'Learn about Costa Railings LTD, a family-owned custom metal fabrication company serving Toronto and the GTA for over 30 years.',
};

function DecorativeDivider() {
  return (
    <div className="flex items-center gap-4 my-6" aria-hidden="true">
      <div className="flex-1 h-px bg-[#e5e4de]" />
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-[#C8373A] opacity-70">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
      </svg>
      <div className="flex-1 h-px bg-[#e5e4de]" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#fafaf8] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-[#C8373A] text-[11px] tracking-[0.22em] uppercase font-medium mb-3">
            Our Story
          </p>
          <h1 className="font-display font-bold text-[#1a1a1a] text-4xl sm:text-5xl leading-tight max-w-xl">
            About Costa Railings
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main copy */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-semibold text-[#1a1a1a] text-2xl sm:text-3xl leading-snug mb-6">
              A Family Tradition of Precision Metal Craftsmanship
            </h2>
            <DecorativeDivider />

            <div className="prose prose-lg max-w-none mt-6 space-y-5 text-[#3a3a3a] leading-relaxed">
              <p>
                Costa Railings LTD is a custom metal fabrication company serving Toronto and the GTA for
                custom residential homes, commercial properties, contractors, and builders. We specialize in
                custom fabrication and installation of metalwork — including interior and exterior railings,
                building railings, fire escapes, fencing, canopy structures, window security solutions,
                structural steel, and more.
              </p>
              <p>
                We also offer on-site welding service for any residential and commercial site, bringing
                professional-grade equipment and expertise directly to your project location.
              </p>
              <p>
                Costa Railings is a family-owned business operating for 30+ years in the Dufferin and Dupont
                area of Toronto. Over the decades, we have built lasting relationships with homeowners,
                contractors, and developers throughout the city — earning a reputation for reliability,
                quality, and craftsmanship that stands the test of time.
              </p>
              <p>
                Our goal is simple: deliver strong workmanship, clean finished products, and designs crafted
                for client appreciation. Whether you are renovating a Victorian row home or outfitting a new
                commercial build, our team brings the same level of care and precision to every project.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            {/* 30+ Years stat callout */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden mb-6">
              <div className="h-1 bg-[#C8373A]" />
              <div className="p-8 text-center">
                <p className="font-display font-bold text-[80px] leading-none text-white mb-2">30<span className="text-[#C8373A]">+</span></p>
                <p className="font-display text-[16px] text-white/70 tracking-wide">Years of Service</p>
                <div className="w-10 h-px bg-[#C8373A] mx-auto my-4" />
                <p className="text-white/50 text-sm leading-relaxed">
                  Family-owned and operated<br />in the Dufferin &amp; Dupont area
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="bg-[#fafaf8] border border-[#e5e4de] rounded-lg p-6">
              <h3 className="font-display font-semibold text-[#1a1a1a] text-lg mb-5">
                What We Stand For
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    heading: 'Strong Workmanship',
                    body: 'Every piece is built to last — no shortcuts, no compromise on structural integrity.',
                  },
                  {
                    heading: 'Clean Finished Products',
                    body: 'Attention to detail from the first weld to the final installation.',
                  },
                  {
                    heading: 'Client-Centred Design',
                    body: 'Designs crafted around your vision, your space, and your specifications.',
                  },
                ].map(({ heading, body }) => (
                  <li key={heading} className="flex gap-3">
                    <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#C8373A]" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-sm text-[#1a1a1a] mb-0.5">{heading}</p>
                      <p className="text-sm text-[#6b6b6b] leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services they offer */}
      <section className="bg-[#fafaf8] border-y border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-display font-semibold text-[#1a1a1a] text-xl sm:text-2xl mb-8 text-center">
            We Fabricate &amp; Install
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              'Exterior Railings',
              'Interior Railings',
              'Fire Escapes',
              'Gates',
              'Fencing',
              'Canopy Structures',
              'Structural Steel',
              'Window Security',
              'Roof Access Ladders',
              'On-Site Welding',
              'Drain Grates',
              'Custom Metal Work',
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-[#e5e4de] rounded px-4 py-3 text-sm text-[#3a3a3a] flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-[#C8373A] flex-shrink-0" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
        <h2 className="font-display font-semibold text-[#1a1a1a] text-2xl sm:text-3xl mb-3">
          Ready to start your project?
        </h2>
        <p className="text-[#6b6b6b] mb-6 max-w-md mx-auto">
          Contact us for a quote — we work with homeowners, contractors, and commercial builders throughout Toronto and the GTA.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8373A] text-white font-semibold rounded hover:bg-[#a42e31] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:ring-offset-2"
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
