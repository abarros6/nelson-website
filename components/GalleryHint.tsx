'use client';

import { useState } from 'react';
import { X, ImageIcon } from 'lucide-react';

export default function GalleryHint() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="status"
      className="flex items-start gap-3 bg-[#fdf8f0] border border-[#e8d9b8] rounded-lg px-4 py-3 text-sm text-[#5a4a2a] mb-6"
    >
      <ImageIcon size={16} className="flex-shrink-0 mt-0.5 text-[#b8882a]" />
      <p className="flex-1 leading-relaxed">
        <strong className="font-medium">See something you like?</strong> Select photos to include them in your quote
        request — then hit &ldquo;Request Quote&rdquo; to send them to our team.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="flex-shrink-0 text-[#b8882a] hover:text-[#5a4a2a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8882a] rounded"
        aria-label="Dismiss hint"
      >
        <X size={15} />
      </button>
    </div>
  );
}
