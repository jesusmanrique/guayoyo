import Image from "next/image";
import { ReactNode } from "react";

type CardProps = {
  image: string;
  title: string;
  text: ReactNode;
  button: string;
};

export default function Card({ image, title, text, button }: CardProps) {
  return (
    <div className="card bg-base-300 w-96 h-[500px] flex flex-col shadow-sm">
      <figure>
        <Image src={image} alt={title} width={200} height={200} />
      </figure>
      <div className="card-body flex flex-col flex-1">
        <h2 className="card-title">{title}</h2>
        <p className="flex-1">{text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral">{button}</button>
        </div>
      </div>
    </div>
  );
}
