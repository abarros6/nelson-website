'use client';

import { useState, useCallback } from 'react';
import PhotoCard from '@/components/PhotoCard';
import GalleryHint from '@/components/GalleryHint';
import FloatingQuoteBar from '@/components/FloatingQuoteBar';
import { GALLERY_PHOTOS, GALLERY_CATEGORIES, type GalleryCategory } from '@/lib/gallery-data';

interface GalleryClientProps {
  initialRefs: string[];
}

export default function GalleryClient({ initialRefs }: GalleryClientProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(initialRefs));
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'All'>('All');

  const togglePhoto = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const filteredPhotos =
    activeCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const categories: Array<GalleryCategory | 'All'> = ['All', ...GALLERY_CATEGORIES];

  return (
    <div className="pb-24">
      {/* Hint banner */}
      <GalleryHint />

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by category">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          const count = cat === 'All' ? GALLERY_PHOTOS.length : GALLERY_PHOTOS.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8373A] focus:ring-offset-2',
                isActive
                  ? 'bg-[#C8373A] text-white'
                  : 'bg-white border border-[#e5e4de] text-[#4a4a4a] hover:border-[#C8373A] hover:text-[#C8373A]',
              ].join(' ')}
              aria-pressed={isActive}
            >
              {cat}
              <span className={['ml-1.5 text-xs', isActive ? 'text-white/70' : 'text-[#9a9a9a]'].join(' ')}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isSelected={selectedIds.has(photo.id)}
            onToggle={togglePhoto}
          />
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <p className="text-center text-[#6b6b6b] py-20">No photos in this category yet.</p>
      )}

      {/* Floating quote bar */}
      <FloatingQuoteBar selectedIds={Array.from(selectedIds)} onClear={clearSelection} />
    </div>
  );
}
