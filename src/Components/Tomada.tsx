import Image from "next/image";
import { Button } from "./Button";

export default function Tomada() {
  return (
    <section className="w-full py-16 px-12 md:px-24 lg:px-56">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="intersect:motion-preset-blur-down-lg motion-duration-1500">
          Tomada de Decisão
        </h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mentoria Card */}
          <div className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl bg-white transition-all duration-300  hover:-translate-y-1 intersect:motion-preset-blur-right motion-duration-1500">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/svgs/mentoria-icon.svg"
                alt="Mentoria"
                width={90}
                height={90}
              />
            </div>
            <h3>Mentoria Individual</h3>
            <p className="text-center">
              Sessões personalizadas para desenvolver suas habilidades de tomada
              de decisão, com foco em suas necessidades específicas e objetivos
              de carreira.
            </p>
            <Button variant="white">Agendar Mentoria</Button>
          </div>

          {/* Planejamento Card */}
          <div className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 intersect:motion-preset-blur-right motion-duration-1500">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/svgs/plan-icon.svg"
                alt="Planejamento"
                width={90}
                height={90}
              />
            </div>
            <h3>Planejamento Estratégico</h3>
            <p className="text-center">
              Aprenda metodologias comprovadas para estruturar processos
              decisórios complexos e implementar estratégias eficazes em sua
              organização.
            </p>
            <Button variant="white">Conhecer Programa</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
