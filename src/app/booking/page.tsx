"use client";

import LocalizationDatePicker from "@/components/LocalizationDatePicker";
import { MenuItem, Select } from "@mui/material";
import getUserProfile from "@/libs/getUserProfile";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {
  const session = useSession().data;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (session?.user.token) {
        setUser((await getUserProfile(session.user.token)).data);
      }
    })();
  }, []);

  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const nationalIDRef = useRef<HTMLInputElement>(null);
  const [hospital, setHospital] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const reserveVaccine = () => {
    if (
      nameRef.current &&
      nameRef.current.value.trim() !== "" &&
      surnameRef.current &&
      surnameRef.current.value.trim() !== "" &&
      nationalIDRef.current &&
      nationalIDRef.current.value.trim() !== "" &&
      hospital != "" &&
      date != null
    ) {
      dispatch(
        addBooking({
          name: nameRef.current.value.trim(),
          surname: surnameRef.current.value.trim(),
          nationalID: nationalIDRef.current.value.trim(),
          hospital: hospital,
          date: date.format("YYYY-MM-DD"),
        })
      );
    }
  };

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
            ref={nameRef}
          />
          <input
            type="text"
            placeholder="Surname"
            className="block rounded-md mx-3 my-2 px-2 py-1 focus:placeholder-slate-300 focus:shadow-2xl grow"
            pattern="[A-Z][a-z]*"
            required
            ref={surnameRef}
          />
        </div>
        <input
          type="text"
          placeholder="National ID"
          className="block rounded-md mx-3 my-2 px-2 py-1 focus:placeholder-slate-300 focus:shadow-2xl"
          pattern="[0-9]{13}"
          required
          ref={nationalIDRef}
        />
        <Select
          className="rounded-md mx-3 my-2 px-2 py-1 bg-white"
          variant="standard"
          required
          value={hospital}
          onChange={(e) => setHospital(e.target.value as string)}
        >
          <MenuItem value="Chulalongkorn Hospital">
            Chulalongkorn Hospital
          </MenuItem>
          <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat">University Hospital</MenuItem>
        </Select>
        <div className="flex flex-col mx-3 my-2">
          <LocalizationDatePicker
            className="rounded-md bg-white"
            onChange={setDate}
          />
        </div>
        <button
          type="button"
          className="rounded-md mx-3 my-2 px-2 py-1 bg-amber-500 hover:bg-amber-400 border border-amber-600 hover:border-amber-500 font-medium"
          onClick={reserveVaccine}
        >
          Reserve Vaccine
        </button>
      </form>
    </main>
  );
}
