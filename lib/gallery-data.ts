export type GalleryCategory =
  | 'Exterior Railings'
  | 'Interior Railings'
  | 'Gates & Fencing'
  | 'Custom Work'
  | 'Fire Escapes & Roof Access';

export interface GalleryPhoto {
  id: string;
  category: GalleryCategory;
  label: string;
  color: string;
  accentColor: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Exterior Railings',
  'Interior Railings',
  'Gates & Fencing',
  'Custom Work',
  'Fire Escapes & Roof Access',
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // Exterior Railings
  { id: 'er-1', category: 'Exterior Railings', label: 'Steel & Iron Exterior Railing', color: '#3d4f5c', accentColor: '#5a7080' },
  { id: 'er-2', category: 'Exterior Railings', label: 'Black Iron Porch Railing', color: '#2c3340', accentColor: '#3f4a5a' },
  { id: 'er-3', category: 'Exterior Railings', label: 'Stair Railing — Brownstone', color: '#4a4540', accentColor: '#635e57' },
  { id: 'er-4', category: 'Exterior Railings', label: 'Balcony Railing System', color: '#3b4a52', accentColor: '#526370' },
  { id: 'er-5', category: 'Exterior Railings', label: 'Front Step Handrail', color: '#3a3f45', accentColor: '#52585f' },

  // Interior Railings
  { id: 'ir-1', category: 'Interior Railings', label: 'Spiral Staircase Railing', color: '#524840', accentColor: '#6b5f55' },
  { id: 'ir-2', category: 'Interior Railings', label: 'Open Concept Stair Rail', color: '#4a4035', accentColor: '#63574a' },
  { id: 'ir-3', category: 'Interior Railings', label: 'Wrought Iron Banister', color: '#3a3530', accentColor: '#524d47' },
  { id: 'ir-4', category: 'Interior Railings', label: 'Steel Panel Stair Rail', color: '#404850', accentColor: '#586068' },

  // Gates & Fencing
  { id: 'gf-1', category: 'Gates & Fencing', label: 'Custom Ornamental Gate', color: '#1e3040', accentColor: '#2e4558' },
  { id: 'gf-2', category: 'Gates & Fencing', label: 'Driveway Entry Gate', color: '#22303e', accentColor: '#344555' },
  { id: 'gf-3', category: 'Gates & Fencing', label: 'Iron Perimeter Fence', color: '#283038', accentColor: '#3a4450' },
  { id: 'gf-4', category: 'Gates & Fencing', label: 'Sliding Security Gate', color: '#1a2a38', accentColor: '#2c3f50' },

  // Custom Work
  { id: 'cw-1', category: 'Custom Work', label: 'Decorative Steel Panel', color: '#4a2828', accentColor: '#633838' },
  { id: 'cw-2', category: 'Custom Work', label: 'Structural Steel Frame', color: '#3e2c24', accentColor: '#554038' },
  { id: 'cw-3', category: 'Custom Work', label: 'Custom Canopy Structure', color: '#3a3020', accentColor: '#524430' },
  { id: 'cw-4', category: 'Custom Work', label: 'Window Security Grate', color: '#2e2828', accentColor: '#423c3c' },

  // Fire Escapes & Roof Access
  { id: 'fe-1', category: 'Fire Escapes & Roof Access', label: 'Fire Escape — Victorian Home', color: '#1e3028', accentColor: '#2c4438' },
  { id: 'fe-2', category: 'Fire Escapes & Roof Access', label: 'Roof Access Ladder', color: '#1a2c22', accentColor: '#283f30' },
  { id: 'fe-3', category: 'Fire Escapes & Roof Access', label: 'Commercial Fire Escape System', color: '#222e28', accentColor: '#334038' },
];

export function getPhotoById(id: string): GalleryPhoto | undefined {
  return GALLERY_PHOTOS.find((p) => p.id === id);
}

export function getPhotosByIds(ids: string[]): GalleryPhoto[] {
  return ids.map((id) => getPhotoById(id)).filter((p): p is GalleryPhoto => p !== undefined);
}
