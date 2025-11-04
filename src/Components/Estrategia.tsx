import Image from "next/image";

export default function Estrategia() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-8 md:px-12 lg:px-48">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-(--dark-blue) font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-center mb-16">
          Estratégia para a<br />tomada de decisão
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
          {/* Mentoria Executiva */}
          <div className="flex flex-col items-center gap-6 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="w-32 h-32 flex items-center justify-center">
              <Image
                src="/svgs/mentoria-icon.svg"
                alt="Mentoria Executiva"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-(--dark-blue) font-bold text-2xl sm:text-3xl text-center">
              Mentoria Executiva
            </h3>
            <p className="text-(--grey) text-base sm:text-lg text-center leading-relaxed max-w-md">
              Já lecionou em Universidades no Brasil e exterior como Unisinos e Universidade La Sapienza-Roma
            </p>
          </div>

          {/* Planejamento Estratégico */}
          <div className="flex flex-col items-center gap-6 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="w-32 h-32 flex items-center justify-center">
              <Image
                src="/svgs/plan-icon.svg"
                alt="Planejamento Estratégico"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-(--dark-blue) font-bold text-2xl sm:text-3xl text-center">
              Planejamento Estratégico
            </h3>
            <p className="text-(--grey) text-base sm:text-lg text-center leading-relaxed max-w-md">
              Já lecionou em Universidades no Brasil e exterior como Unisinos e Universidade La Sapienza-Roma
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
