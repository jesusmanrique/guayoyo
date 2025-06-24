import { ReactNode } from "react";

type CardProps = {
  readonly image: string;
  readonly title: string;
  readonly text: ReactNode;
};

export default function Card({ image, title, text }: CardProps) {
  return (
    <div className="card bg-base-200 w-96 h-[500px] flex flex-col shadow-sm overflow-hidden">
      <div
        className="w-full h-48 bg-center bg-cover rounded-t-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="flex flex-col flex-1 p-6">
        <h2 className="card-title mb-2">{title}</h2>
        <p className="flex-1">{text}</p>
      </div>
    </div>
  );
}
