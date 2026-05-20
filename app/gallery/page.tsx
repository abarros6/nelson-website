import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery — Costa Railings LTD',
  description:
    'Browse our portfolio of custom metal fabrication work including railings, gates, fire escapes, and more.',
};

interface GalleryPageProps {
  searchParams: Promise<{ refs?: string; ref?: string }>;
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const params = await searchParams;

  const initialRefs: string[] = [];

  if (params.refs) {
    initialRefs.push(...params.refs.split(',').filter(Boolean));
  } else if (params.ref) {
    initialRefs.push(params.ref);
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-[#fafaf8] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-[#C8373A] text-[11px] tracking-[0.22em] uppercase font-medium mb-3">
            Our Work
          </p>
          <h1 className="font-display font-bold text-[#1a1a1a] text-4xl sm:text-5xl leading-tight mb-4">
            Gallery
          </h1>
          <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
            A selection of custom metalwork projects completed for residential and commercial clients
            throughout Toronto and the GTA.
          </p>
        </div>
      </section>

      {/* Gallery content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <GalleryClient initialRefs={initialRefs} />
      </section>
    </>
  );
}
