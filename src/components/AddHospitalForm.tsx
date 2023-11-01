import { dbConnect } from "@/db/dbConnect";
import AddHospitalFormInput from "./AddHospitalFormInput";
import Hospital from "@/db/models/Hospital";
import { revalidatePath } from "next/cache";

export default function AddHospitalForm() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";

    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name,
        address,
        district,
        province,
        postalcode,
        tel,
        picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidatePath("/hospital");
  };

  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-lg font-semibold m-3">Add Hospital</h2>
        <form action={addHospital} className="flex flex-col">
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 w-96">
            <AddHospitalFormInput text="Name:" id="name" name="name" />
            <AddHospitalFormInput text="Address:" id="address" name="address" />
            <AddHospitalFormInput
              text="District:"
              id="district"
              name="district"
            />
            <AddHospitalFormInput
              text="Province:"
              id="province"
              name="province"
            />
            <AddHospitalFormInput
              text="Postal Code:"
              id="postalcode"
              name="postalcode"
            />
            <AddHospitalFormInput text="Tel:" id="tel" name="tel" />
            <AddHospitalFormInput text="Picture:" id="picture" name="picture" />
          </div>
          <button
            className="bg-orange-400 w-[40%] my-3 m-auto rounded p-1 font-semibold
          hover:bg-orange-500 hover:text-gray-600"
          >
            Add Hospital
          </button>
        </form>
      </div>
    </div>
  );
}
