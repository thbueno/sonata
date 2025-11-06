import { EstrategiaCard } from "./EstrategiaCard";

const cards = [
  {
    image: "/images/incompany-image.png",
    imageAlt: "Sonata InCompany",
    title: "Sonata<br />InCompany",
    description: "Aprendizagem potencializada pela dinâmica de grupo",
  },
  {
    image: "/images/imersoes-image.png",
    imageAlt: "Imersões Internacionais",
    title: "Imersões<br />Internacionais",
    description:
      "Conduzimos cada participante a um profundo encontro consigo mesmo",
  },
  {
    image: "/images/cursos-image.png",
    imageAlt: "Cursos Online",
    title: "Cursos<br />Online",
    description:
      "Nossas atividades ampliam a visão de mundo e afinam a intuição de cada um.",
  },
];

export default function Estrategia() {
  return (
    <section className="w-full py-16 px-12 md:px-24 lg:px-56">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="intersect:motion-preset-blur-down-lg motion-duration-700">
          Cultura que
          <br />
          transforma
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start intersect:motion-preset-blur-right motion-duration-1500">
          {cards.map((card, index) => (
            <EstrategiaCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
