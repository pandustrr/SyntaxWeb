// Pricelist module types
export interface PricePlan {
  name: string;
  description: string;
  pages: string[];
  features: string[];
  highlight: boolean;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface AddOn {
  name: string;
  price?: string;
}
