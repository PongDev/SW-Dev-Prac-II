"use client";

import Card from "@/components/Card";
import { useReducer } from "react";

export default function CardPanel() {
  const ratingReducer = (
    ratingMap: Map<string, number>,
    action: { type: "ADD" | "REMOVE"; hospital: string; rating: number }
  ) => {
    switch (action.type) {
      case "ADD":
        return new Map(ratingMap.set(action.hospital, action.rating));
      case "REMOVE":
        ratingMap.delete(action.hospital);
        return new Map(ratingMap);
      default:
        return ratingMap;
    }
  };

  const [ratingMap, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number>()
  );

  const onRatingUpdate = (hospitalName: string, rating: number) => {
    dispatchRating({ type: "ADD", hospital: hospitalName, rating: rating });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        <Card
          name="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpg"
          rating={ratingMap.get("Chulalongkorn Hospital") ?? 0}
          onRatingUpdate={onRatingUpdate}
        />
        <Card
          name="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpg"
          rating={ratingMap.get("Rajavithi Hospital") ?? 0}
          onRatingUpdate={onRatingUpdate}
        />
        <Card
          name="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
          rating={ratingMap.get("Thammasat University Hospital") ?? 0}
          onRatingUpdate={onRatingUpdate}
        />
      </div>
      <div className="mx-5 my-1 text-lg font-semibold">
        {Array.from(ratingMap).map(([hospital, rating]) => {
          return (
            <div
              key={hospital}
              onClick={() =>
                dispatchRating({
                  type: "REMOVE",
                  hospital: hospital,
                  rating: rating,
                })
              }
            >
              {hospital} Rating = {rating}
            </div>
          );
        })}
      </div>
    </div>
  );
}
