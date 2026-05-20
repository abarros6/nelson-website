'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Printer, CheckCircle2, AlertCircle } from 'lucide-react';
import PhotoCard from '@/components/PhotoCard';
import { getPhotosByIds } from '@/lib/gallery-data';

interface ContactContentProps {
  initialRefs: string[];
}

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  error?: string;
}

export default function ContactContent({ initialRefs }: ContactContentProps) {
  const [selectedRefs, setSelectedRefs] = useState<string[]>(initialRefs);
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  const selectedPhotos = getPhotosByIds(selectedRefs);

  const removePhoto = useCallback((id: string) => {
    setSelectedRefs((prev) => prev.filter((r) => r !== id));
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState({ status: 'submitting' });

    const form = e.currentTarget;
    const data = new FormData(form);

    const body = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      phone: data.get('phone') as string,
      message: data.get('message') as string,
      refs: selectedRefs,
      website: data.get('website') as string, // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setFormState({ status: 'error', error: json.message ?? 'Something went wrong. Please try again.' });
      } else {
        setFormState({ status: 'success' });
        form.reset();
        setSelectedRefs([]);
      }
    } catch {
      setFormState({ status: 'error', error: 'Network error. Please check your connection and try again.' });
    }
  }

  if (formState.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle2 size={48} className="text-[#C8373A] mb-4" />
        <h2 className="font-display font-semibold text-[#1a1a1a] text-2xl mb-3">Quote Request Received</h2>
        <p className="text-[#6b6b6b] max-w-md leading-relaxed mb-6">
          Thank you for reaching out. Our team will review your request and be in touch with you shortly.
        </p>
        <Link
          href="/"
          className="text-[#C8373A] font-medium hover:underline text-sm"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Form */}
      <div className="lg:col-span-7">
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot — hidden from users, must remain empty */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: 'none' }}
            aria-hidden="true"
          />

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                Name <span className="text-[#C8373A]" aria-label="required">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full px-4 py-3 bg-white border border-[#e5e4de] rounded-md text-sm text-[#1a1a1a] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:border-transparent transition"
                placeholder="Your full name"
              />
            </div>

            {/* Email + Phone row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Email <span className="text-[#C8373A]" aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-white border border-[#e5e4de] rounded-md text-sm text-[#1a1a1a] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:border-transparent transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                  Phone <span className="text-[#9a9a9a] font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full px-4 py-3 bg-white border border-[#e5e4de] rounded-md text-sm text-[#1a1a1a] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:border-transparent transition"
                  placeholder="(416) 000-0000"
                />
              </div>
            </div>

            {/* Selected reference photos */}
            <div>
              <p className="block text-sm font-medium text-[#1a1a1a] mb-2">
                Reference Photos
              </p>
              {selectedPhotos.length > 0 ? (
                <div>
                  <p className="text-xs text-[#6b6b6b] mb-3">
                    Your Selected Reference Photos — click ✕ to remove any
                  </p>
                  <div className="flex flex-wrap gap-3 p-4 bg-[#fafaf8] border border-[#e5e4de] rounded-md">
                    {selectedPhotos.map((photo) => (
                      <PhotoCard
                        key={photo.id}
                        photo={photo}
                        compact
                        onRemove={removePhoto}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-[#fafaf8] border border-[#e5e4de] rounded-md text-sm text-[#6b6b6b]">
                  Want to reference a specific style?{' '}
                  <Link href="/gallery" className="text-[#C8373A] underline underline-offset-2 hover:no-underline">
                    Browse our gallery and select photos
                  </Link>{' '}
                  to include them in your request.
                </div>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                Project Description <span className="text-[#C8373A]" aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border border-[#e5e4de] rounded-md text-sm text-[#1a1a1a] placeholder:text-[#9a9a9a] focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:border-transparent transition resize-y"
                placeholder="Describe your project — type of work, location, dimensions if known, any special requirements..."
              />
            </div>

            {/* Error message */}
            {formState.status === 'error' && (
              <div className="flex items-start gap-2.5 p-4 bg-[#fdf0f0] border border-[#f5c6c7] rounded-md text-sm text-[#a42e31]" role="alert">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <p>{formState.error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={formState.status === 'submitting'}
              className="w-full sm:w-auto px-8 py-3 bg-[#C8373A] text-white font-semibold rounded hover:bg-[#a42e31] disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:ring-offset-2"
            >
              {formState.status === 'submitting' ? 'Sending…' : 'Send Quote Request'}
            </button>
          </div>
        </form>
      </div>

      {/* Sidebar: contact info + map */}
      <div className="lg:col-span-5">
        <div className="bg-[#fafaf8] border border-[#e5e4de] rounded-lg overflow-hidden">
          <div className="h-1 bg-[#C8373A]" />
          <div className="p-6">
            <h2 className="font-display font-semibold text-[#1a1a1a] text-lg mb-5">Contact Information</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#C8373A]" />
                <div>
                  <p className="font-medium text-[#1a1a1a]">Address</p>
                  <p className="text-[#6b6b6b] mt-0.5">
                    187 Geary Ave.<br />
                    Toronto, Ontario M6H 2G1
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#C8373A]" />
                <div>
                  <p className="font-medium text-[#1a1a1a]">Phone</p>
                  <a href="tel:+14165353700" className="text-[#6b6b6b] mt-0.5 hover:text-[#C8373A] transition-colors">
                    (416) 535-3700
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Printer size={16} className="mt-0.5 flex-shrink-0 text-[#C8373A]" />
                <div>
                  <p className="font-medium text-[#1a1a1a]">Fax</p>
                  <p className="text-[#6b6b6b] mt-0.5">(416) 535-4700</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Google Maps embed */}
          <div className="border-t border-[#e5e4de]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.9567789012345!2d-79.43850!3d43.66720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34f0e0000001%3A0x0!2s187+Geary+Ave%2C+Toronto%2C+ON+M6H+2G1!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="220"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Costa Railings LTD location — 187 Geary Ave, Toronto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
