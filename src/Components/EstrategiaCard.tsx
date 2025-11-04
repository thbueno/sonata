import Image from "next/image";
import { Button } from "./Button";

interface EstrategiaCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function EstrategiaCard({
  image,
  imageAlt,
  title,
  description,
  buttonText = "Saiba Mais",
  onButtonClick,
}: EstrategiaCardProps) {
  return (
    <div className="bg-linear-150 from-(--gd-grey) to-(--blue) rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full p-4">
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden shrink-0 rounded-2xl">
        <Image src={image} alt={imageAlt} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="px-2 pt-4 pb-2 flex flex-col gap-4 grow">
        <h3
          className="text-(--green-light) font-semibold text-2xl sm:text-3xl leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className="text-white/90 text-sm sm:text-base leading-relaxed grow">
          {description}
        </p>

        {/* Button */}
        <div className="mt-2">
          <Button
            variant="white"
            className="bg-transparent! text-(--green-light)! border-2! border-(--green-light)! hover:bg-(--green-light)! hover:text-white!"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
