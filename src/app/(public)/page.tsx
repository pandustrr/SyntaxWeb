<<<<<<< HEAD
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
=======
import Home from './home';

export default function Page() {
  return <Home />;
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
}
