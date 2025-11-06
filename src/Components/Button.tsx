import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "green" | "blue" | "white";
  children: React.ReactNode;
}

export function Button({
  variant = "blue",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = `
    px-8 py-3 rounded-full font-sf-pro font-normal text-sm
    transition-all duration-300 ease-out
    focus-visible:outline-2 focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95
  `;

  const variantStyles = {
    green: `
      bg-(--green) text-white
      hover:bg-(--green)/90 hover:shadow-lg
      focus-visible:outline-[hsla(94,60%,55%,0.5)]
    `,
    blue: `
      bg-[hsla(181,86%,38%,1)] text-white
      hover:bg-[hsla(181,86%,33%,1)] hover:shadow-lg
      focus-visible:outline-[hsla(181,86%,38%,0.5)]
    `,
    white: `
      bg-white text-[hsla(181,86%,38%,1)] border-1 border-[hsla(181,86%,38%,1)]
      hover:bg-[hsla(181,86%,38%,0.05)] hover:shadow-md
      focus-visible:outline-[hsla(181,86%,38%,0.5)]
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
