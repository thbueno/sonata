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
      <section id="hero" >
        <Hero />
      </section>
      <section id="soraia">
        <Soraia />
      </section>
      <section id="estrategia" >
        <Tomada />
      </section>
      <section id="cultura">
        <Estrategia />
      </section>
      <section id="formacao">
        <Formacao />
      </section>
      <Footer />
    </div>
  );
}
