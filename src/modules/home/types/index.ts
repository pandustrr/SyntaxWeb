// Home module types
export interface ServiceItem {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  desc: string;
}

export interface HeroStat {
  label: string;
  value: string;
}
