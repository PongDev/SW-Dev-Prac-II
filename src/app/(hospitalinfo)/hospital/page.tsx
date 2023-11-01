import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function Home() {
  const hospitals = getHospitals();
  const session = await getServerSession(authOptions);
  let addHospitalForm = null;

  if (session) {
    const user = (await getUserProfile(session.user.token)).data;

    if (user.role === "admin") {
      addHospitalForm = <AddHospitalForm />;
    }
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <HospitalCatalog hospitalsData={hospitals} />
      {addHospitalForm}
    </Suspense>
  );
}
