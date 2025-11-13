import { FormacaoCard } from "./FormacaoCard";

const cards = [
  {
    image: "/images/inconciente-image.png",
    imageAlt: "Inconsciente Empresarial",
    title: "Inconsciente Empresarial",
    description:
      "Método inovador de conexão entre propósito e ações práticas.",
  },
  {
    image: "/images/mitografia-image.png",
    imageAlt: "Mitografia",
    title: "Mitografia",
    description:
      "Abordagem clássica nos mitos para busca de identidade e previsão para a tomada de decisões.",
  },
];

export default function Formacao() {
  return (
    <section className="w-full py-16 px-12 md:px-24 lg:px-56">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="intersect:motion-preset-blur-down-md motion-duration-700">
          Formação para
          <br />
          ser e viver
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center intersect:motion-preset-blur-up-md motion-duration-1500">
          {cards.map((card, index) => (
            <FormacaoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
