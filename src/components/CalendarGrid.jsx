import DayCell from "./DayCell";
import { generateCalendarDays } from "../utils/dateUtils";

function CalendarGrid({ currentMonth, startDate, endDate, onSelectDate }) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = generateCalendarDays(currentMonth);

  return (
    <div className="bg-slate-50 rounded-3xl p-5 md:p-6 shadow-inner border border-slate-200">
      <div className="grid grid-cols-7 gap-3 mb-4">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold text-slate-500"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3">
        {days.map((day, index) => (
          <DayCell
            key={index}
            day={day}
            currentMonth={currentMonth}
            startDate={startDate}
            endDate={endDate}
            onSelectDate={onSelectDate}
          />
        ))}
      </div>
    </div>
  );
}

export default CalendarGrid;