"use client";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function LocalizationDatePicker({
  className,
}: {
  className?: string;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className={className} />
    </LocalizationProvider>
  );
}
