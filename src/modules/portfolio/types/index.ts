// Portfolio module types
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
  problem: string;
  impact: string;
}
