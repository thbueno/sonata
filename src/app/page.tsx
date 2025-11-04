import { Navbar } from '@/Components/Navbar';
import { Hero } from '@/Components/Hero';
import Soraia from '@/Components/Soraia';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Soraia />
    </div>
  );
}
