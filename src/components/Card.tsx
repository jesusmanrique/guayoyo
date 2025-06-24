import Image from "next/image";
import { ReactNode } from "react";

type CardProps = {
  readonly image: string;
  readonly title: string;
  readonly text: ReactNode;
  readonly button: string;
};

export default function Card({ image, title, text, button }: CardProps) {
  return (
    <div className="card bg-base-200 w-96 h-[500px] flex flex-col shadow-sm transition-transform duration-300 hover:-rotate-3">
      <figure>
        <Image src={image} alt={title} width={200} height={200} />
      </figure>
      <div className="card-body flex flex-col flex-1">
        <h2 className="card-title">{title}</h2>
        <p className="flex-1">{text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{button}</button>
        </div>
      </div>
    </div>
  );
}
