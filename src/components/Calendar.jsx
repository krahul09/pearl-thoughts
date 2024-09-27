import React, { useState, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DatePickerContext } from "../context/DatePickerContext";

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useContext(DatePickerContext);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="p-1">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-semibold">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={nextMonth} className="p-1">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div key={day} className="text-center font-medium text-gray-500">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const date = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            day
          );
          const isSelected =
            date.toDateString() === selectedDate.toDateString();
          return (
            <button
              key={day}
              onClick={() => setSelectedDate(date)}
              className={`w-8 h-8 rounded-full ${
                isSelected ? "bg-blue-500 text-white" : "hover:bg-blue-100"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
