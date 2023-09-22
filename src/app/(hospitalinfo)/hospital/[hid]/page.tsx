import Image from "next/image";

export default function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const mockHospitalData = new Map();
  mockHospitalData.set("001", {
    name: "Chulalongkorn Hospital",
    imgSrc: "/img/chula.jpg",
  });
  mockHospitalData.set("002", {
    name: "Rajavithi Hospital",
    imgSrc: "/img/rajavithi.jpg",
  });
  mockHospitalData.set("003", {
    name: "Thammasat University Hospital",
    imgSrc: "/img/thammasat.jpg",
  });

  return (
    <main>
      <div className="flex flex-wrap justify-center my-5 w-auto">
        <div className="w-2/5 relative h-[350px] min-w-[525px] m-2">
          <Image
            src={mockHospitalData.get(params.hid).imgSrc}
            alt={mockHospitalData.get(params.hid).name}
            fill={true}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-2/5 text-center text-lg font-semibold m-2">
          <h1>{mockHospitalData.get(params.hid).name}</h1>
        </div>
      </div>
    </main>
  );
}
