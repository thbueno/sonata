import Image from "next/image";
import { Button } from "./Button";
import BlurEffect from "react-progressive-blur";
import { ProgressiveBlur } from "@/Components/progressive-blur";

interface FormacaoCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function FormacaoCard({
  image,
  imageAlt,
  title,
  description,
  buttonText = "Saiba Mais",
  onButtonClick,
}: FormacaoCardProps) {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      {/* Background Image */}
      <Image src={image} alt={imageAlt} fill className="object-cover" />

      {/* Progressive Blur Overlay from bottom */}
      <ProgressiveBlur height="50%" position="bottom" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-8 pb-12">
        <h3 className="text-(--green-light)! leading-tight mb-3">{title}</h3>

        <p className="text-(--green-light)! leading-relaxed mb-6">
          {description}
        </p>

        {/* Button */}
        <Button
          variant="white"
          className="bg-transparent! text-(--green-light)! border-2! border-(--green-light)! hover:bg-(--green-light)! hover:text-(--dark-blue)!"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
