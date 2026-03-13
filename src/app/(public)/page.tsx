import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
