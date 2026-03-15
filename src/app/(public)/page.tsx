import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';

export default function Home() {
  return (
    <div className="relative">
      <div id="home">
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </div>
    </div>
  );
}
