import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact & Quote Request — Costa Railings LTD',
  description:
    'Request a quote for custom metal fabrication work. Fill out our form and our team will be in touch.',
};

interface ContactPageProps {
  searchParams: Promise<{ refs?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const initialRefs = params.refs ? params.refs.split(',').filter(Boolean) : [];

  return (
    <>
      {/* Page header */}
      <section className="bg-[#fafaf8] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-[#C8373A] text-[11px] tracking-[0.22em] uppercase font-medium mb-3">
            Get in Touch
          </p>
          <h1 className="font-display font-bold text-[#1a1a1a] text-4xl sm:text-5xl leading-tight mb-4">
            Request a Quote
          </h1>
          <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
            Tell us about your project and we&rsquo;ll be in touch. We work with homeowners, contractors,
            and commercial builders throughout Toronto and the GTA.
          </p>
        </div>
      </section>

      {/* Contact form + sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <ContactContent initialRefs={initialRefs} />
      </section>
    </>
  );
}
