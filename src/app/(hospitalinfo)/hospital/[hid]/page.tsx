import getHospital from "@/libs/getHospital";
import Image from "next/image";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospital: {
    name: string;
    address: string;
    district: string;
    province: string;
    postalcode: string;
    tel: string;
    picture: string;
  } = (await getHospital(params.hid)).data;

  return (
    <main>
      <div className="flex flex-wrap justify-center my-5 w-auto">
        <div className="w-2/5 relative h-[350px] min-w-[525px] m-2">
          <Image
            src={hospital.picture}
            alt={hospital.name}
            fill={true}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-2/5 text-left m-2">
          <h1 className="text-lg font-semibold">{hospital.name}</h1>
          <div className="py-4">
            <h2 className="text-base">{hospital.address}</h2>
            <h2 className="text-base">{hospital.district}</h2>
            <h2 className="text-base">{hospital.province}</h2>
            <h2 className="text-base">{hospital.postalcode}</h2>
            <h2 className="text-base">Tel. {hospital.tel}</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
