import Image from "next/image";
import { Button } from "./Button";

export default function Soraia() {
  return (
    <section className="w-full py-16 px-12 md:px-24 lg:px-56">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:items-start lg:justify-start gap-6">
          {/* Image Container */}
          <div className="flex justify-center md:justify-start lg:justify-start items-top">
            <div className="relative w-full max-w-[360px] aspect-3/4 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Soraia-photo.png"
                alt="Soraia Schutel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col gap-6 items-center justify-center lg:items-start lg:justify-start">
            {/* Title */}
            <h2 className="text-left mb-0! mt-6 md:mt-0 lg:mt-0">
              Soraia Schutel
            </h2>

            {/* Description */}
            <p>
              Já lecionou em Universidades no Brasil e exterior como Unisinos e
              Universidade La Sapienza-Roma, e contribuiu com a escrita de
              artigos científicos aprovados em Journals acadêmicos e capítulos
              de livro internacionais.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-4">
              {/* PhD */}
              <div className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                <div className="shrink-0 w-8 h-8">
                  <Image
                    src="/svgs/phd-icon.svg"
                    alt="PhD"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-(--dark-blue) font-semibold text-base">
                  PhD em Administração
                </h3>
              </div>

              {/* Imersões */}
              <div className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                <div className="shrink-0 w-8 h-8">
                  <Image
                    src="/svgs/imersoes-icon.svg"
                    alt="Imersões"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-(--dark-blue) font-semibold text-base">
                  Imersões pelo mundo
                </h3>
              </div>

              {/* Pós graduada */}
              <div className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                <div className="shrink-0 w-8 h-8">
                  <Image
                    src="/svgs/pos-icon.svg"
                    alt="Pós graduada"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-(--dark-blue) font-semibold text-base">
                  Pós graduada
                </h3>
              </div>

              {/* Mentora */}
              <div className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                <div className="shrink-0 w-8 h-8">
                  <Image
                    src="/svgs/mentora-icon.svg"
                    alt="Mentora"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-(--dark-blue) font-semibold text-base">
                  Mentora de Carreira
                </h3>
              </div>

              {/* MBA */}
              <div className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                <div className="shrink-0 w-8 h-8">
                  <Image
                    src="/svgs/mba-icon.svg"
                    alt="MBA"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-(--dark-blue) font-semibold text-base">
                  Coordenadora MBA
                </h3>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Button variant="green">Saiba mais</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
