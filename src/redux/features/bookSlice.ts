import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
  booking: BookingItem[];
};

const initialState: BookingState = {
  booking: [],
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const targetIdx = state.booking.findIndex(
        (e) => e.nationalID === action.payload.nationalID
      );

      if (targetIdx !== -1) {
        state.booking[targetIdx] = action.payload;
      } else {
        state.booking.push(action.payload);
      }
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      state.booking = state.booking.filter(
        (e) => e.nationalID !== action.payload.nationalID
      );
    },
  },
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
