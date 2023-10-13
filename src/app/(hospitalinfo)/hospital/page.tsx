import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Home() {
  const hospitals = getHospitals();

  return (
    <Suspense fallback={<LinearProgress />}>
      <HospitalCatalog hospitalsData={hospitals} />;
    </Suspense>
  );
}
