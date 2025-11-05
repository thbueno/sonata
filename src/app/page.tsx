import { Navbar } from "@/Components/Navbar";
import { Hero } from "@/Components/Hero";
import Soraia from "@/Components/Soraia";
import Estrategia from "@/Components/Estrategia";
import Formacao from "@/Components/Formacao";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Soraia />
      <Estrategia />
      <Formacao />
    </div>
  );
}
