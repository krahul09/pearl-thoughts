"use client";

import React from "react";
import DatePicker from "../components/DatePicker";

export default function Home() {
  const handleDateSelect = (date: Date) => {
    console.log("Selected date:", date);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Date Picker Demo</h1>
      <DatePicker onDateSelect={handleDateSelect} />
    </div>
  );
}
