import React, { useState } from "react";

const TimeReminder = () => {
  const [time, setTime] = useState("12:00");
  const [reminder, setReminder] = useState("On time");

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center py-2 border-t">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          Time
        </span>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-1 border rounded"
        />
      </div>
      <div className="flex justify-between items-center py-2 border-t">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          Reminder
        </span>
        <select
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          className="p-1 border rounded"
        >
          <option>On time</option>
          <option>5 minutes before</option>
          <option>15 minutes before</option>
          <option>30 minutes before</option>
          <option>1 hour before</option>
        </select>
      </div>
      <div className="flex justify-between items-center py-2 border-t">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
          Repeat
        </span>
        <span className="text-gray-500">None</span>
      </div>
    </div>
  );
};

export default TimeReminder;
