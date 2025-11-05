import { Navbar } from "@/Components/Navbar";
import { Hero } from "@/Components/Hero";
import Soraia from "@/Components/Soraia";
import Estrategia from "@/Components/Estrategia";
import Formacao from "@/Components/Formacao";
import Tomada from "@/Components/Tomada";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero" className="snap-section">
        <Hero />
      </section>
      <section id="soraia" className="snap-section">
        <Soraia />
      </section>
      <section id="estrategia" className="snap-section">
        <Tomada />
      </section>
      <section id="cultura" className="snap-section">
        <Estrategia />
      </section>
      <section id="formacao" className="snap-section">
        <Formacao />
      </section>
      <Footer />
    </div>
  );
}
