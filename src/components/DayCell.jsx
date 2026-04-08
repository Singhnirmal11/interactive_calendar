import { format, isToday } from "date-fns";
import {
  isCurrentMonthDay,
  isDateInRange,
  isStartDate,
  isEndDate,
} from "../utils/dateUtils";

function DayCell({ day, currentMonth, startDate, endDate, onSelectDate }) {
  const currentMonthDay = isCurrentMonthDay(day, currentMonth);
  const today = isToday(day);

  const inRange = isDateInRange(day, startDate, endDate);
  const isStart = isStartDate(day, startDate);
  const isEnd = isEndDate(day, endDate);

  let classes =
    "h-14 md:h-16 rounded-2xl border flex items-center justify-center text-sm md:text-base font-medium transition-all duration-200 cursor-pointer";

  // Highest priority: Start or End date
  if (isStart || isEnd) {
    classes += " bg-blue-600 text-white border-blue-700 shadow-md";
  }

  // Second priority: In between selected range
  else if (inRange) {
    classes += " bg-blue-100 text-blue-900 border-blue-300";
  }

  // Normal current month days
  else if (currentMonthDay) {
    classes += " bg-white border-slate-200 text-slate-700 hover:bg-blue-50";
  }
  
  // Previous/next month faded days
  else {
    classes += " bg-slate-100 border-slate-200 text-slate-300";
  }

  // Today ring only if not already selected
  if (today && !isStart && !isEnd) {
    classes += " ring-2 ring-blue-400";
  }

  return (
    <div className={classes} onClick={() => onSelectDate(day)}>
      {format(day, "d")}
    </div>
  );
}

export default DayCell;