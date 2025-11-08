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
    <section className="w-full py-16 px-0 md:px-24 lg:px-56">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="intersect:motion-preset-blur-down-lg motion-duration-700">
          Cultura que
          <br />
          transforma
        </h2>

        {/* Cards - Mobile Carousel / Desktop Grid */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-4
          md:grid md:grid-cols-2 md:overflow-visible md:snap-none
          lg:grid-cols-3 lg:gap-8
          intersect:motion-preset-blur-right motion-duration-1500
          scrollbar-hide
        ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 w-[85vw] snap-center
                md:w-auto md:flex-shrink md:snap-align-none
              "
            >
              <EstrategiaCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
