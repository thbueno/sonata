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
    <div className="w-full top-0 z-50">
      <nav
        className="
        max-w-6xl mx-auto flex items-center justify-between py-6 px-6 md:px-24 lg:px-44
        transition-all duration-500
        bg-white backdrop-blur-[10px] border
        border-white before:content-[' '] 
        before:absolute before:insert-0 before:border before:border-white/90
      "
      >
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="shrink-0 transition-opacity duration-500 hover:opacity-80"
        >
          <Image
            src="/images/sonata-logo.png"
            alt="Sonata Leadership Academy"
            width={100}
            height={60}
            priority
            className="h-10 w-auto"
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
                      ? "text-(--blue) font-semibold"
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
          <Button variant="green">Conecte-se</Button>
        </div>
      </nav>
    </div>
  );
}
