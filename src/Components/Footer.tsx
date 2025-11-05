import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-12 md:px-24 lg:px-56 bg-(--bg)">
      <div className="container mx-auto">
        {/* Top Section - Logo and Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-200">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/sonata-logo.png"
              alt="Sonata Leadership Academy"
              width={180}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Image
                src="/svgs/instagram-icon.svg"
                alt="Instagram"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Image
                src="/svgs/youtube-icon.svg"
                alt="YouTube"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-(--grey)">
            © 2025 Sonata Brasil. Todos os direitos reservados.
          </p>
          <p className="text-sm text-(--grey) flex items-center gap-1">
           Feito com ❤️ pela Esthalo
          </p>
        </div>
      </div>
    </footer>
  );
}
