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
    px-8 py-3 rounded-full font-sf-pro font-semibold text-sm
    transition-all duration-200 ease-out
    focus-visible:outline-2 focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:-translate-x-1 hover:-translate-y-1
    active:translate-x-0 active:translate-y-0
  `;

  const variantStyles = {
    green: `
      bg-[hsla(110,92%,66%,100)] border-2 border-(--dark-blue) text-(--dark-blue)
      hover:shadow-[0.25rem_0.25rem_5px_hsla(181,30%,50%,100)] hover:text-white
      hover:bg-(--blue) transition-all duration-500 ease-out
      active:shadow-none
      focus-visible:outline-[hsla(94,60%,55%,0.5)]
    `,
    blue: `
      bg-[hsla(181,86%,38%,1)] border-2 border-(--blue) text-white hover:text-(--dark-blue)
      hover:bg-white hover:border-2 hover:border-(--dark-blue)
      hover:shadow-[0.25rem_0.25rem_5px_hsla(181,30%,50%,100)]
      active:shadow-none transition-all duration-500 ease-out
      focus-visible:outline-[hsla(181,86%,38%,0.5)]
    `,
    white: `
      bg-white text-[hsla(181,86%,38%,1)] border-2 border-[hsla(181,86%,38%,1)]
      hover:bg-(--blue) hover:border-(--dark-blue) hover:text-white hover:shadow-[0.25rem_0.25rem_5px_hsla(181,30%,50%,100)]
      active:shadow-none transition-all duration-500 ease-out
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
