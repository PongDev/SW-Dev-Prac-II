import Link from "next/link";
import Card from "./Card";

export default async function HospitalCatalog({
  hospitalsData,
}: {
  hospitalsData: Promise<{
    data: {
      id: string;
      name: string;
      picture: string;
    }[];
  }>;
}) {
  const hospitals = (await hospitalsData).data;

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {hospitals.map((hospital) => (
          <Link href={`/hospital/${hospital.id}`}>
            <Card
              imgSrc={hospital.picture}
              name={hospital.name}
              key={hospital.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
