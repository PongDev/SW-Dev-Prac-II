import LocalizationDatePicker from "@/components/LocalizationDatePicker";
import { MenuItem, Select } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  let user = null;

  if (session?.user.token) {
    user = (await getUserProfile(session.user.token)).data;
  }

  return (
    <main className="flex justify-center py-5">
      <form className="flex flex-col">
        <h3 className="text-center text-2xl py-2 font-bold">
          Vaccine Reservation
        </h3>
        {user ? (
          <>
            <div className="grid grid-cols-2 m-auto min-w-[50%]">
              <div>Name:</div>
              <div>{user.name}</div>
              <div>Email:</div>
              <div>{user.email}</div>
              <div>Tel:</div>
              <div>{user.tel}</div>
            </div>
            <div>Member Since: {new Date(user.createdAt).toString()}</div>
          </>
        ) : null}
        <div className="flex">
          <input
            type="text"
            placeholder="Name"
            className="block rounded-md mx-3 my-2 px-2 py-1 focus:placeholder-slate-300 focus:shadow-2xl grow"
            pattern="[A-Z][a-z]*"
            required
          />
          <input
            type="text"
            placeholder="Surname"
            className="block rounded-md mx-3 my-2 px-2 py-1 focus:placeholder-slate-300 focus:shadow-2xl grow"
            pattern="[A-Z][a-z]*"
            required
          />
        </div>
        <input
          type="text"
          placeholder="National ID"
          className="block rounded-md mx-3 my-2 px-2 py-1 focus:placeholder-slate-300 focus:shadow-2xl"
          pattern="[0-9]{13}"
          required
        />
        <Select
          className="rounded-md mx-3 my-2 px-2 py-1 bg-white"
          variant="standard"
          required
        >
          <MenuItem value="Chulalongkorn Hospital">
            Chulalongkorn Hospital
          </MenuItem>
          <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat">University Hospital</MenuItem>
        </Select>
        <div className="flex flex-col mx-3 my-2">
          <LocalizationDatePicker className="rounded-md bg-white" />
        </div>
        <input
          type="submit"
          value="Submit"
          className="rounded-md mx-3 my-2 px-2 py-1 bg-amber-500 hover:bg-amber-400 border border-amber-600 hover:border-amber-500 font-medium"
        />
      </form>
    </main>
  );
}
