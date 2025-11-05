import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export function Navbar() {
  const navItems = [
    { label: "Soraia Schutel", href: "#soraia" },
    { label: "Estratégia", href: "#estrategia" },
    { label: "Cultura", href: "#cultura" },
    { label: "Formação", href: "#formacao" },
  ];

  return (
    <nav
      className="
      w-full px-6 md:px-24 lg:px-40 py-4
      sticky top-0 z-50 bg-white/80 
      transition-all duration-300
    "
    >
      <ProgressiveBlur height="120%" position="bottom" className="-z-10" />
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
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
      </div>
    </nav>
  );
}
