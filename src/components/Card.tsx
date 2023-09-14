import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

export default function Card({
  name,
  imgSrc,
  rating,
  onRatingUpdate,
}: {
  name: string;
  imgSrc: string;
  rating: number;
  onRatingUpdate: Function;
}) {
  return (
    <InteractiveCard>
      <h3 className="w-full text-center align-middle text-lg">{name}</h3>
      <div className="w-full relative grow">
        <Image src={imgSrc} alt={name} fill={true} className="object-cover" />
      </div>
      <Rating
        className="m-auto my-1"
        value={rating}
        onChange={(e, value) => {
          onRatingUpdate(name, value ?? 0);
        }}
        size="large"
      />
    </InteractiveCard>
  );
}
