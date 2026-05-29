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
  src: string;
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
  { id: 'er-1',  category: 'Exterior Railings', label: 'Exterior Fence Railing',     src: '/gallery/exterior-railings/fence-railing-1.jpg' },
  { id: 'er-2',  category: 'Exterior Railings', label: 'Outside Handrail',           src: '/gallery/exterior-railings/outside-handrail-1.jpg' },
  { id: 'er-3',  category: 'Exterior Railings', label: 'Outside Handrail',           src: '/gallery/exterior-railings/outside-handrail-2.jpg' },
  { id: 'er-4',  category: 'Exterior Railings', label: 'Outside Handrail',           src: '/gallery/exterior-railings/outside-handrail-3.jpg' },
  { id: 'er-5',  category: 'Exterior Railings', label: 'Outside Handrail',           src: '/gallery/exterior-railings/outside-handrail-4.jpg' },
  { id: 'er-6',  category: 'Exterior Railings', label: 'Outside Handrail',           src: '/gallery/exterior-railings/outside-handrail-5.jpg' },
  { id: 'er-7',  category: 'Exterior Railings', label: 'Outside Handrail',           src: '/gallery/exterior-railings/outside-handrail-6.jpg' },
  { id: 'er-8',  category: 'Exterior Railings', label: 'Outside Handrail',           src: '/gallery/exterior-railings/outside-handrail-7.jpg' },
  { id: 'er-9',  category: 'Exterior Railings', label: 'Outside Handrail',           src: '/gallery/exterior-railings/outside-handrail-8.jpg' },
  { id: 'er-10', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-1.jpg' },
  { id: 'er-11', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-2.jpg' },
  { id: 'er-12', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-3.jpg' },
  { id: 'er-13', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-4.jpg' },
  { id: 'er-14', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-5.jpg' },
  { id: 'er-15', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-6.jpg' },
  { id: 'er-16', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-7.jpg' },
  { id: 'er-17', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-8.jpg' },
  { id: 'er-18', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-9.jpg' },
  { id: 'er-19', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-10.jpg' },
  { id: 'er-20', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-11.jpg' },
  { id: 'er-21', category: 'Exterior Railings', label: 'Exterior Stair Railing',     src: '/gallery/exterior-railings/outside-railing-12.jpg' },

  // Interior Railings
  { id: 'ir-1',  category: 'Interior Railings', label: 'Interior Handrail',          src: '/gallery/interior-railings/inside-handrail-1.jpg' },
  { id: 'ir-2',  category: 'Interior Railings', label: 'Interior Handrail',          src: '/gallery/interior-railings/inside-handrail-2.jpg' },
  { id: 'ir-3',  category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-1.jpg' },
  { id: 'ir-4',  category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-2.jpg' },
  { id: 'ir-5',  category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-3.jpg' },
  { id: 'ir-6',  category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-4.jpg' },
  { id: 'ir-7',  category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-5.jpg' },
  { id: 'ir-8',  category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-6.jpg' },
  { id: 'ir-9',  category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-7.jpg' },
  { id: 'ir-10', category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-8.jpg' },
  { id: 'ir-11', category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-9.jpg' },
  { id: 'ir-12', category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-10.jpg' },
  { id: 'ir-13', category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-11.jpg' },
  { id: 'ir-14', category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-12.jpg' },
  { id: 'ir-15', category: 'Interior Railings', label: 'Interior Stair Railing',     src: '/gallery/interior-railings/inside-railing-13.jpg' },

  // Gates & Fencing
  { id: 'gf-1',  category: 'Gates & Fencing',  label: 'Custom Ornamental Gate',      src: '/gallery/gates-fencing/gate.jpg' },
  { id: 'gf-2',  category: 'Gates & Fencing',  label: 'Custom Ornamental Gate',      src: '/gallery/gates-fencing/gate2.jpg' },
  { id: 'gf-3',  category: 'Gates & Fencing',  label: 'Custom Ornamental Gate',      src: '/gallery/gates-fencing/gate-2.jpg' },
  { id: 'gf-4',  category: 'Gates & Fencing',  label: 'Custom Ornamental Gate',      src: '/gallery/gates-fencing/gate-3.jpg' },
  { id: 'gf-5',  category: 'Gates & Fencing',  label: 'Custom Ornamental Gate',      src: '/gallery/gates-fencing/gate-4.jpg' },
  { id: 'gf-6',  category: 'Gates & Fencing',  label: 'Safety Gate',                 src: '/gallery/gates-fencing/safety-gate.jpg' },

  // Custom Work
  { id: 'cw-1',  category: 'Custom Work',       label: 'Steel Bollard',               src: '/gallery/custom-work/bollard.jpg' },
  { id: 'cw-2',  category: 'Custom Work',       label: 'Custom Canopy Structure',     src: '/gallery/custom-work/canopy-1.jpg' },
  { id: 'cw-3',  category: 'Custom Work',       label: 'Custom Canopy Structure',     src: '/gallery/custom-work/canopy-2.jpg' },
  { id: 'cw-4',  category: 'Custom Work',       label: 'Window Security Grates',      src: '/gallery/custom-work/grates.jpg' },
  { id: 'cw-5',  category: 'Custom Work',       label: 'Interior Building Metalwork', src: '/gallery/custom-work/inside-building-1.jpg' },
  { id: 'cw-6',  category: 'Custom Work',       label: 'Interior Building Metalwork', src: '/gallery/custom-work/inside-building-3.jpg' },
  { id: 'cw-7',  category: 'Custom Work',       label: 'Interior Building Metalwork', src: '/gallery/custom-work/inside-building-4.jpg' },
  { id: 'cw-8',  category: 'Custom Work',       label: 'Exterior Protector',          src: '/gallery/custom-work/outside-protector.jpg' },
  { id: 'cw-9',  category: 'Custom Work',       label: 'Steel Planter',               src: '/gallery/custom-work/planter.jpg' },
  { id: 'cw-10', category: 'Custom Work',       label: 'Project Overview',            src: '/gallery/custom-work/project-overview.jpg' },
  { id: 'cw-11', category: 'Custom Work',       label: 'Security Window',             src: '/gallery/custom-work/security-window.jpg' },
  { id: 'cw-12', category: 'Custom Work',       label: 'Structural Metalwork',        src: '/gallery/custom-work/structural.jpg' },
  { id: 'cw-13', category: 'Custom Work',       label: 'Window Wells',                src: '/gallery/custom-work/window-wells.jpg' },

  // Fire Escapes & Roof Access
  { id: 'fe-1',  category: 'Fire Escapes & Roof Access', label: 'Fire Escape',        src: '/gallery/fire-escapes/fire-escape-1.jpg' },
  { id: 'fe-2',  category: 'Fire Escapes & Roof Access', label: 'Fire Escape',        src: '/gallery/fire-escapes/fire-escape-2.jpg' },
  { id: 'fe-3',  category: 'Fire Escapes & Roof Access', label: 'Fire Escape',        src: '/gallery/fire-escapes/fire-escape-3.jpg' },
  { id: 'fe-4',  category: 'Fire Escapes & Roof Access', label: 'Fire Escape',        src: '/gallery/fire-escapes/fire-escape-4.jpg' },
  { id: 'fe-5',  category: 'Fire Escapes & Roof Access', label: 'Roof Access Ladder', src: '/gallery/fire-escapes/roof-ladder-1.jpg' },
  { id: 'fe-6',  category: 'Fire Escapes & Roof Access', label: 'Roof Access Ladder', src: '/gallery/fire-escapes/roof-ladder-2.jpg' },
  { id: 'fe-7',  category: 'Fire Escapes & Roof Access', label: 'Roof Access Ladder', src: '/gallery/fire-escapes/roof-ladder-3.jpg' },
  { id: 'fe-8',  category: 'Fire Escapes & Roof Access', label: 'Roof Access Ladder', src: '/gallery/fire-escapes/roof-ladder-4.jpg' },
];

export function getPhotoById(id: string): GalleryPhoto | undefined {
  return GALLERY_PHOTOS.find((p) => p.id === id);
}

export function getPhotosByIds(ids: string[]): GalleryPhoto[] {
  return ids.map((id) => getPhotoById(id)).filter((p): p is GalleryPhoto => p !== undefined);
}
