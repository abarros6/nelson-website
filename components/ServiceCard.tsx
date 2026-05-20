import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, name, description }: ServiceCardProps) {
  return (
    <div className="group bg-white border border-[#e5e4de] rounded-lg p-6 hover:border-[#C8373A] hover:shadow-md transition-all duration-200">
      <div className="w-10 h-10 rounded-md bg-[#fdf0f0] flex items-center justify-center mb-4 group-hover:bg-[#C8373A] transition-colors">
        <Icon size={20} className="text-[#C8373A] group-hover:text-white transition-colors" strokeWidth={1.75} />
      </div>
      <h3 className="font-display font-semibold text-[16px] text-[#1a1a1a] mb-2 leading-snug">{name}</h3>
      <p className="text-sm text-[#6b6b6b] leading-relaxed">{description}</p>
    </div>
  );
}
