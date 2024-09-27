import React, { useContext } from "react";
import { DatePickerContext } from "../context/DatePickerContext";

const DateRange = () => {
  const {
    recurrenceType,
    recurrenceStartDate,
    setRecurrenceStartDate,
    recurrenceEndDate,
    setRecurrenceEndDate,
  } = useContext(DatePickerContext);

  if (recurrenceType === "none") return null;

  return (
    <div className="mt-4">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          value={recurrenceStartDate.toISOString().split("T")[0]}
          onChange={(e) => setRecurrenceStartDate(new Date(e.target.value))}
          className="w-full p-2 border rounded mt-1"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          End Date (Optional)
        </label>
        <input
          type="date"
          value={
            recurrenceEndDate
              ? recurrenceEndDate.toISOString().split("T")[0]
              : ""
          }
          onChange={(e) =>
            setRecurrenceEndDate(
              e.target.value ? new Date(e.target.value) : null
            )
          }
          className="w-full p-2 border rounded mt-1"
        />
      </div>
    </div>
  );
};

export default DateRange;
