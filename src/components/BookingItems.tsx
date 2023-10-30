"use client";

import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BookingItems() {
  const booking = useAppSelector((state) => state.bookingSlice.booking);
  const dispatch = useDispatch<AppDispatch>();

  return booking.length === 0 ? (
    <div>No Vaccine Booking</div>
  ) : (
    booking.map((e) => (
      <div className="flex justify-between items-center my-3">
        <div className="grid grid-cols-2 gap-1 text-left">
          <div>Name - Surname:</div>
          <div>
            {e.name} {e.surname}
          </div>
          <div>ID:</div>
          <div>{e.nationalID}</div>
          <div>Hospital:</div>
          <div>{e.hospital}</div>
          <div>Date:</div>
          <div>{e.date}</div>
        </div>
        <button
          className="h-fit bg-red-300 hover:bg-red-500 px-2 py-1 rounded-lg border border-red-800 hover:cursor-pointer"
          onClick={() => dispatch(removeBooking(e))}
        >
          Cancel Booking
        </button>
      </div>
    ))
  );
}
