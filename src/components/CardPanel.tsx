"use client";

import Card from "@/components/Card";
import Link from "next/link";
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

  const mockHospitalData = [
    { id: "001", name: "Chulalongkorn Hospital", imgSrc: "/img/chula.jpg" },
    { id: "002", name: "Rajavithi Hospital", imgSrc: "/img/rajavithi.jpg" },
    {
      id: "003",
      name: "Thammasat University Hospital",
      imgSrc: "/img/thammasat.jpg",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        {mockHospitalData.map((hospital) => (
          <Link href={`/hospital/${hospital.id}`}>
            <Card
              name={hospital.name}
              imgSrc={hospital.imgSrc}
              rating={ratingMap.get(hospital.name) ?? 0}
              onRatingUpdate={onRatingUpdate}
            />
          </Link>
        ))}
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
