"use client";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

export default function LocalizationDatePicker({
  className,
  onChange,
}: {
  className?: string;
  onChange?: (newDate: Dayjs | null) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className={className} onChange={onChange} />
    </LocalizationProvider>
  );
}
