import LocalizationDatePicker from "@/components/LocalizationDatePicker";
import { MenuItem, Select } from "@mui/material";

export default function Booking() {
  return (
    <main className="flex justify-center py-5">
      <form className="flex flex-col">
        <h3 className="text-center text-2xl py-2 font-bold">
          Vaccine Reservation
        </h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Name"
            className="block rounded-md mx-3 my-2 px-2 py-1 focus:placeholder-slate-300 focus:shadow-2xl"
            pattern="[A-Z][a-z]*"
            required
          />
          <input
            type="text"
            placeholder="Surname"
            className="block rounded-md mx-3 my-2 px-2 py-1 focus:placeholder-slate-300 focus:shadow-2xl"
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
