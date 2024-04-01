import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  className: string;
  handleClick: () => void;
}

const HomeCard = ({
  img,
  title,
  description,
  className,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] 2xl:max-w-[300px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} width={27} height={27} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold capitalize">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
