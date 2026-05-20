'use client';

import { Check } from 'lucide-react';
import type { GalleryPhoto } from '@/lib/gallery-data';

interface PhotoCardProps {
  photo: GalleryPhoto;
  isSelected?: boolean;
  onToggle?: (id: string) => void;
  /** Compact thumbnail mode — used in contact form selected photos preview */
  compact?: boolean;
  onRemove?: (id: string) => void;
}

export default function PhotoCard({ photo, isSelected = false, onToggle, compact = false, onRemove }: PhotoCardProps) {
  if (compact) {
    return (
      <div className="relative flex-shrink-0 group">
        <div
          className="w-20 h-16 rounded-md overflow-hidden"
          style={{ backgroundColor: photo.color }}
          aria-hidden="true"
        >
          {/* Decorative grid suggesting metalwork */}
          <svg viewBox="0 0 80 64" className="w-full h-full opacity-20">
            {[16, 32, 48, 64].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="64" stroke="white" strokeWidth="1.5" />
            ))}
            {[16, 32, 48].map((y) => (
              <line key={y} x1="0" y1={y} x2="80" y2={y} stroke="white" strokeWidth="1.5" />
            ))}
          </svg>
        </div>
        <p className="mt-1 text-[10px] text-[#6b6b6b] leading-tight w-20 truncate" title={photo.label}>
          {photo.label}
        </p>
        {onRemove && (
          <button
            onClick={() => onRemove(photo.id)}
            className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#C8373A] text-white rounded-full flex items-center justify-center text-[10px] leading-none hover:bg-[#a42e31] focus:outline-none focus:ring-2 focus:ring-[#C8373A]"
            aria-label={`Remove ${photo.label}`}
          >
            ✕
          </button>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => onToggle?.(photo.id)}
      className={[
        'relative w-full rounded-lg overflow-hidden group text-left focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:ring-offset-2 transition-transform hover:scale-[1.01]',
        isSelected ? 'ring-2 ring-[#C8373A] ring-offset-2' : '',
      ].join(' ')}
      aria-pressed={isSelected}
      aria-label={`${isSelected ? 'Deselect' : 'Select'} photo: ${photo.label}`}
    >
      {/* Placeholder image */}
      <div
        className="aspect-[4/3] relative"
        style={{ backgroundColor: photo.color }}
      >
        {/* Decorative metalwork pattern */}
        <svg viewBox="0 0 160 120" className="absolute inset-0 w-full h-full opacity-[0.15]" aria-hidden="true">
          {/* Vertical bars */}
          {[20, 40, 60, 80, 100, 120, 140].map((x) => (
            <rect key={x} x={x - 1} y="0" width="2.5" height="120" fill="white" />
          ))}
          {/* Horizontal rails */}
          <rect x="0" y="30" width="160" height="3" fill="white" />
          <rect x="0" y="80" width="160" height="3" fill="white" />
          {/* Spear tips */}
          {[20, 40, 60, 80, 100, 120, 140].map((x) => (
            <polygon key={x} points={`${x},10 ${x - 6},30 ${x + 6},30`} fill="white" />
          ))}
        </svg>

        {/* Label overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white text-xs font-medium leading-snug">{photo.label}</p>
          <p className="text-white/60 text-[10px] mt-0.5">{photo.category}</p>
        </div>

        {/* Selected overlay */}
        {isSelected && (
          <div className="absolute inset-0 bg-[#C8373A]/20 flex items-start justify-end p-2">
            <span className="w-6 h-6 bg-[#C8373A] rounded-full flex items-center justify-center shadow-md">
              <Check size={13} className="text-white" strokeWidth={2.5} />
            </span>
          </div>
        )}

        {/* Hover select hint */}
        {!isSelected && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-start justify-end p-2 opacity-0 group-hover:opacity-100">
            <span className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center shadow-sm">
              <Check size={12} className="text-[#6b6b6b]" strokeWidth={2} />
            </span>
          </div>
        )}
      </div>
    </button>
  );
}
