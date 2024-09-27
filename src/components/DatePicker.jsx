"use client";

import React, { useState } from "react";
import { DatePickerProvider } from "../context/DatePickerContext";
import Calendar from "./Calendar";
import RecurrenceOptions from "./RecurrenceOptions";
import DateRange from "./DateRange";
import TimeReminder from "./TimeReminder";

const DatePicker = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [recurrenceType, setRecurrenceType] = useState("none");
  const [recurrenceInterval, setRecurrenceInterval] = useState(1);
  const [recurrenceStartDate, setRecurrenceStartDate] = useState(new Date());
  const [recurrenceEndDate, setRecurrenceEndDate] = useState(null);

  return (
    <DatePickerProvider
      value={{
        selectedDate,
        setSelectedDate,
        recurrenceType,
        setRecurrenceType,
        recurrenceInterval,
        setRecurrenceInterval,
        recurrenceStartDate,
        setRecurrenceStartDate,
        recurrenceEndDate,
        setRecurrenceEndDate,
        onDateSelect,
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 w-80">
        <Calendar />
        <RecurrenceOptions />
        <DateRange />
        <TimeReminder />
      </div>
    </DatePickerProvider>
  );
};

export default DatePicker;
