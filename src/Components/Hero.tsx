import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
  return (
    <section
      className="
      w-full min-h-screen
      flex flex-col items-center justify-center
      px-6 py-20
    "
    >
      <div className="container mx-auto w-full flex flex-col items-center gap-12">
        {/* Hero Title */}
        <div className="text-center max-w-4xl px-8 md:px-14 lg:px-12 motion-preset-blur-down-md motion-duration-1500">
          <h1
            className="
            text-var(--dark-blue)
            leading-tight
          "
          >
            A nova fronteira de educação de lideranças vai{" "}
            <span className="font-petrona italic text-var(--dark-blue)">
              além da técnica
            </span>{" "}
            e do conhecimento prático
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="blue">comece hoje</Button>
          <Button variant="white">veja mais</Button>
        </div>

        {/* Video Placeholder */}
        <div
          className="
          relative w-full max-w-4xl aspect-video
          rounded-3xl overflow-hidden
          shadow-2xl
          group cursor-pointer
          transition-all duration-300
          hover:shadow-3xl hover:scale-[1.02]
          motion-preset-blur-right motion-duration-1000
        "
        >
          <Image
            src="/images/video-frame.png"
            alt="Video preview"
            fill
            className="object-cover"
            priority
          />

          {/* Play Button Overlay */}
          {/* <div
            className="
            absolute inset-0
            flex items-center justify-center
            bg-black/20
            transition-all duration-300
            group-hover:bg-black/30
          "
          >
            <div
              className="
              w-20 h-20 rounded-full
              bg-white/90 backdrop-blur-sm
              flex items-center justify-center
              transition-all duration-300
              group-hover:scale-110
              group-hover:bg-white
              shadow-xl
            "
            >
              <svg
                className="w-8 h-8 text-var(--dark-blue) ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
