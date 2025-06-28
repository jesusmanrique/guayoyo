import { ReactNode } from "react";

type CardProps = {
  readonly image: string;
  readonly title: string;
  readonly text: ReactNode;
};

export default function Card({ image, title, text }: CardProps) {
  return (
    <div className="card w-96 h-[450px] flex flex-col shadow-lg overflow-hidden hover-scale animate-fade-in-scale bg-white/10 backdrop-blur-md border border-white/20">
      <div
        className="w-full h-100 bg-center bg-cover rounded-t-xl transition-transform duration-300"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="flex flex-col flex-1 p-6">
        <h2 className="card-title mb-2 text-white font-semibold">{title}</h2>
        <p className="flex-1 text-white/90">{text}</p>
      </div>
    </div>
  );
}
