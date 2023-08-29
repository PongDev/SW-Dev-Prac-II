import Image from "next/image";
import styles from "./card.module.css";

export default function Card({
  name,
  imgSrc,
}: {
  name: string;
  imgSrc: string;
}) {
  return (
    <div className="w-1/4 h-[300px] bg-blue-400 shadow-xl min-w-[300px] m-[20px] flex flex-col rounded-xl overflow-hidden">
      <h3 className="w-full text-center align-middle text-lg">{name}</h3>
      <div className="w-full relative grow">
        <Image src={imgSrc} alt={name} fill={true} className="object-cover" />
      </div>
    </div>
  );
}
