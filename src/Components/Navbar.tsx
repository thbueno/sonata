
"use client";

import Image from "next/image";
import { Button } from "./Button";



import { useState, useEffect } from "react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Soraia Schutel", href: "#soraia" },
    { label: "Estratégia", href: "#estrategia" },
    { label: "Cultura", href: "#cultura" },
    { label: "Formação", href: "#formacao" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "soraia", "cultura", "estrategia", "formacao"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-4 z-50 flex justify-center px-6 md:px-24 lg:px-52">
      <nav
        className="
        container flex items-center justify-between px-4 rounded-full md:px-6 lg:px-10 py-6
        transition-all duration-300
        bg-white/70 backdrop-blur-[10px] border
        border-white before:content-[' '] 
        before:absolute before:insert-0 before:border before:border-white/90
      "
      >
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="shrink-0 transition-opacity duration-200 hover:opacity-80"
        >
          <Image
            src="/images/sonata-logo.png"
            alt="Sonata Leadership Academy"
            width={120}
            height={60}
            priority
            className="h-auto w-auto"
          />
        </a>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="
                  relative group
                  transition-all duration-300 ease-out
                "
              >
                <p
                  className={`
                  text-base
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-(--blue) font-medium"
                      : "text-(--grey) hover:text-(--blue)"
                  }
                `}
                >
                  {item.label}
                </p>
                <span
                  className={`
                  absolute -bottom-1 left-0 h-0.5 bg-(--blue)
                  transition-all duration-300 ease-out
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
                />
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <Button variant="green">Contato</Button>
        </div>
      </nav>
    </div>
  );
}
