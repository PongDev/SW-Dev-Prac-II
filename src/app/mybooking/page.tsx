"use client";

import BookingItems from "@/components/BookingItems";

export default function MyBooking() {
  return (
    <main>
      <div className="flex-col text-center justify-center py-5">
        <h1 className="text-xl font-semibold m-3">My Booking</h1>
        <div className="max-w-[40%] m-auto">
          <BookingItems />
        </div>
      </div>
    </main>
  );
}
