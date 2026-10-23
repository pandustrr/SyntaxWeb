// Pricelist module types
export interface PricePlan {
  name: string;
  description: string;
  pages: string[];
  features: string[];
  highlight: boolean;
  icon?: React.ComponentType<{ size?: number | string; className?: string }> | any;
}

export interface AddOn {
  name: string;
  price?: string;
}
