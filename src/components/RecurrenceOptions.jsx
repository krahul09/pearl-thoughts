import React, { useContext } from "react";
import { DatePickerContext } from "../context/DatePickerContext";

const RecurrenceOptions = () => {
  const {
    recurrenceType,
    setRecurrenceType,
    recurrenceInterval,
    setRecurrenceInterval,
  } = useContext(DatePickerContext);

  return (
    <div className="mt-4">
      <select
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="none">No repeat</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      {recurrenceType !== "none" && (
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">
            Every
          </label>
          <div className="flex items-center mt-1">
            <input
              type="number"
              min="1"
              value={recurrenceInterval}
              onChange={(e) => setRecurrenceInterval(parseInt(e.target.value))}
              className="w-16 p-1 border rounded mr-2"
            />
            <span>{recurrenceType.slice(0, -2)}(s)</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;
