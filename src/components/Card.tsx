import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card({
  name,
  imgSrc,
}: {
  name: string;
  imgSrc: string;
}) {
  return (
    <InteractiveCard>
      <h3 className="w-full text-center align-middle text-lg">{name}</h3>
      <div className="w-full relative grow">
        <Image src={imgSrc} alt={name} fill={true} className="object-cover" />
      </div>
    </InteractiveCard>
  );
}
