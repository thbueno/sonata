
import Image from "next/image";
import { Button } from "./Button";


export function Navbar() {
  const navItems = [
    { label: "Soraia Schutel", href: "#soraia" },
    { label: "Estratégia", href: "#estrategia" },
    { label: "Cultura", href: "#cultura" },
    { label: "Formação", href: "#formacao" },
  ];

  return (
    <div className="sticky top-4 z-50 flex justify-center px-6 md:px-24 lg:px-56">
      <nav
        className="
        container flex items-center justify-between px-4 rounded-full md:px-6 lg:px-10 py-6
        transition-all duration-300
        bg-white/70 backdrop-blur-[10px] border
        border-gray-200 before:content-[' '] 
        before:absolute before:insert-0 before:border before:border-white/90
      "
      >
        <div className="shrink-0">
          <Image
            src="/images/sonata-logo.png"
            alt="Sonata Leadership Academy"
            width={120}
            height={60}
            priority
            className="h-auto w-auto"
          />
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                transition-colors duration-200
                hover:text-(--blue)  
              "
            >
              <p className="text-base text-var(--grey) hover:text-(--blue)">
                {item.label}
              </p>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <Button variant="green">Contato</Button>
        </div>
      </nav>
    </div>
  );
}
