'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, X } from 'lucide-react';

interface FloatingQuoteBarProps {
  selectedIds: string[];
  onClear: () => void;
}

export default function FloatingQuoteBar({ selectedIds, onClear }: FloatingQuoteBarProps) {
  const router = useRouter();

  if (selectedIds.length === 0) return null;

  function handleRequest() {
    router.push(`/contact?refs=${selectedIds.join(',')}`);
  }

  const count = selectedIds.length;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-[#1a1a1a] text-white rounded-full shadow-2xl px-5 py-3 animate-in slide-in-from-bottom-4 duration-200"
    >
      <span className="text-sm font-medium whitespace-nowrap">
        {count} photo{count !== 1 ? 's' : ''} selected
      </span>

      <div className="w-px h-5 bg-white/20" aria-hidden="true" />

      <button
        onClick={handleRequest}
        className="flex items-center gap-1.5 text-sm font-semibold text-[#ff8a8c] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded whitespace-nowrap"
      >
        Request Quote
        <ArrowRight size={14} />
      </button>

      <button
        onClick={onClear}
        className="ml-1 text-white/40 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-full p-0.5"
        aria-label="Clear selection"
      >
        <X size={14} />
      </button>
    </div>
  );
}
