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
    "h-14 md:h-16 rounded-2xl border flex items-center justify-center text-sm md:text-base font-medium transition cursor-pointer";

  if (currentMonthDay) {
    classes += " bg-white border-slate-200 text-slate-700 hover:bg-blue-50";
  } else {
    classes += " bg-slate-100 border-slate-200 text-slate-300";
  }

  if (inRange) {
    classes += " bg-blue-100 border-blue-200 text-blue-900";
  }

  if (isStart || isEnd) {
    classes += " bg-blue-600 text-white border-blue-700";
  }

  if (today && !isStart && !isEnd) {
    classes += " ring-2 ring-blue-400 font-bold";
  }

  return (
    <div className={classes} onClick={() => onSelectDate(day)}>
      {format(day, "d")}
    </div>
  );
}

export default DayCell;