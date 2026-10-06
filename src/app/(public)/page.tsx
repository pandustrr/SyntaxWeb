import { HeroSection } from '@/modules/home';
import { AboutSection } from '@/modules/home';
import { ServicesSection } from '@/modules/home';
import { PortfolioSection } from '@/modules/portfolio';

export default function Home() {
  return (
    <div className="relative">
      <div id="home">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
      </div>
    </div>
  );
}

