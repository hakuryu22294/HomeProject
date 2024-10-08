/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/utils/store";

import {
  generateBlockedPeroids,
  generateDateRange,
  defaultSelected,
  generateDiabledDates,
} from "@/utils/calendar";
function BookingCalendar() {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings);
  const { toast } = useToast();

  const blockedPeriods = generateBlockedPeroids({
    bookings,
    today: currentDate,
  });
  const unavailableDates = generateDiabledDates(blockedPeriods);
  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: "Some date are blocked. Please choice again",
          title: "Error",
          variant: "destructive",
        });
        return true;
      }
      return false;
    });
    useProperty.setState({
      range,
    });
  }, [range, unavailableDates, bookings, toast]);
  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className="mb-4"
      disabled={blockedPeriods}
    />
  );
}
export default BookingCalendar;
