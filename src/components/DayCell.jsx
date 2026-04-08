import { format, isToday } from "date-fns";
import { isCurrentMonthDay } from "../utils/dateUtils";

function DayCell({ day, currentMonth }) {
  const currentMonthDay = isCurrentMonthDay(day, currentMonth);
  const today = isToday(day);

  let classes =
    "h-14 md:h-16 rounded-2xl border flex items-center justify-center text-sm md:text-base font-medium transition cursor-pointer";

  if (currentMonthDay) {
    classes += " bg-white border-slate-200 text-slate-700 hover:bg-blue-50";
  } else {
    classes += " bg-slate-100 border-slate-200 text-slate-300";
  }

  if (today) {
    classes += " ring-2 ring-blue-400 font-bold";
  }

  return <div className={classes}>{format(day, "d")}</div>;
}

export default DayCell;