"use client";
import { useState } from "react";
import { Calendar } from "../calendar";

export const CalendarApp = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  );
};
