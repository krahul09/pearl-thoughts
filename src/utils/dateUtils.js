// Utility function to get the correct number of days in a month
export const getDaysInMonth = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth(); // January is 0, December is 11
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the last day of the month
  return new Array(daysInMonth).fill(0).map((_, index) => index + 1); // Create an array of days [1, 2, ..., daysInMonth]
};

// Function to get recurring dates based on the recurrence type and interval
export const getRecurringDates = (
  selectedDate,
  recurrence,
  startDate,
  endDate
) => {
  let dates = [];

  // Convert startDate and endDate to Date objects if they are not already
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  if (recurrence.type === "None") {
    dates.push(selectedDate); // No recurrence, just the selected date
  } else if (recurrence.type === "Daily") {
    for (
      let d = new Date(start);
      end ? d <= end : true;
      d.setDate(d.getDate() + recurrence.interval)
    ) {
      dates.push(new Date(d)); // Push the recurring daily dates
      if (end && d >= end) break; // Stop if we reach the end date
    }
  } else if (recurrence.type === "Weekly") {
    for (
      let d = new Date(start);
      end ? d <= end : true;
      d.setDate(d.getDate() + 7 * recurrence.interval)
    ) {
      dates.push(new Date(d)); // Push the recurring weekly dates
      if (end && d >= end) break; // Stop if we reach the end date
    }
  } else if (recurrence.type === "Monthly") {
    for (
      let d = new Date(start);
      end ? d <= end : true;
      d.setMonth(d.getMonth() + recurrence.interval)
    ) {
      dates.push(new Date(d)); // Push the recurring monthly dates
      if (end && d >= end) break; // Stop if we reach the end date
    }
  } else if (recurrence.type === "Yearly") {
    for (
      let d = new Date(start);
      end ? d <= end : true;
      d.setFullYear(d.getFullYear() + recurrence.interval)
    ) {
      dates.push(new Date(d)); // Push the recurring yearly dates
      if (end && d >= end) break; // Stop if we reach the end date
    }
  }

  return dates;
};

// Utility function to get the nth occurrence of a specific day in a month (e.g., 2nd Tuesday)
export const getNthDayOfMonth = (year, month, dayOfWeek, n) => {
  let count = 0;
  let date = new Date(year, month, 1);

  // Loop through all the days in the month
  while (date.getMonth() === month) {
    if (date.getDay() === dayOfWeek) {
      count++;
      if (count === n) {
        return date; // Return the nth occurrence of the day
      }
    }
    date.setDate(date.getDate() + 1);
  }

  return null; // If no such day is found, return null
};
