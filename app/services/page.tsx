import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Home,
  Hammer,
  Building2,
  Cloud,
  Flame,
  Zap,
  DoorOpen,
  Layers,
  Grid3x3,
  ArrowUpToLine,
  ArrowRight,
  Fence,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Services — Costa Railings LTD',
  description:
    'Custom metal fabrication services including railings, gates, fire escapes, structural steel, fencing, canopies, on-site welding, and more.',
};

const SERVICES = [
  {
    icon: Home,
    name: 'Exterior Railings',
    description:
      'Durable, custom-crafted porch, balcony, and stair railings engineered for any exterior installation and climate condition.',
  },
  {
    icon: Layers,
    name: 'Interior Railings',
    description:
      'Elegant interior stair and balcony railings built to complement any architectural style, from modern to traditional.',
  },
  {
    icon: Hammer,
    name: 'Custom Metal Work',
    description:
      'Bespoke fabrication for unique architectural elements, decorative panels, and one-of-a-kind metalwork projects.',
  },
  {
    icon: Building2,
    name: 'Structural Steel',
    description:
      'Precision structural steel fabrication and installation for residential and commercial construction projects of all scales.',
  },
  {
    icon: Cloud,
    name: 'Canopy',
    description:
      'Custom metal canopy structures providing shelter and aesthetic character for entrances, patios, and commercial facades.',
  },
  {
    icon: ArrowUpToLine,
    name: 'Roof Access Ladders',
    description:
      'Safe, code-compliant fixed access ladders for rooftop equipment, HVAC servicing, and maintenance applications.',
  },
  {
    icon: Flame,
    name: 'Fire Escapes',
    description:
      'Full fabrication and installation of fire escape systems designed to meet Ontario building and fire code requirements.',
  },
  {
    icon: Zap,
    name: 'On-Site Welding',
    description:
      'Mobile professional welding services delivered directly to your residential or commercial job site across the GTA.',
  },
  {
    icon: DoorOpen,
    name: 'Gates',
    description:
      'Custom ornamental and security gates for driveways, entrances, and commercial properties — manual or automated.',
  },
  {
    icon: Fence,
    name: 'Fencing',
    description:
      'Iron, steel, and metal perimeter fencing systems for residential, commercial, and industrial properties.',
  },
  {
    icon: Grid3x3,
    name: 'Drain Grates',
    description:
      'Heavy-duty custom drain grates and floor grating fabricated to specification for commercial and municipal applications.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#fafaf8] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-[#C8373A] text-[11px] tracking-[0.22em] uppercase font-medium mb-3">
            What We Offer
          </p>
          <h1 className="font-display font-bold text-[#1a1a1a] text-4xl sm:text-5xl leading-tight mb-4">
            Our Services
          </h1>
          <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
            From custom residential railings to commercial structural steel, our team handles fabrication
            and installation across all metal trades.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.name}
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-semibold text-white text-2xl sm:text-3xl mb-1">
              Have a project in mind?
            </h2>
            <p className="text-white/60 text-sm">Get in touch — we&rsquo;ll find the right solution for your needs.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 bg-[#C8373A] text-white font-semibold rounded hover:bg-[#a42e31] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
