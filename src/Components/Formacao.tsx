import { FormacaoCard } from "./FormacaoCard";

const cards = [
  {
    image: "/images/inconciente-image.png",
    imageAlt: "Inconsciente Empresarial",
    title: "Inconsciente Empresarial",
    description: "Conteúdos e ferramentas conectados à rotina de quem toma decisões",
  },
  {
    image: "/images/mitografia-image.png",
    imageAlt: "Mitografia",
    title: "Mitografia",
    description: "Aprovados em Journals acadêmicos e capítulos de livro internacionais.",
  },
];

export default function Formacao() {
  return (
    <section className="w-full py-16 px-6 sm:px-8 md:px-12 lg:px-48">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-(--dark-blue) font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-center mb-12">
          Formação para
          <br />
          ser e viver
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <FormacaoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
