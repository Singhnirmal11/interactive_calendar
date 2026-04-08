function CalendarGrid() {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = Array.from({ length: 35 }, (_, i) => i + 1);

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
        {days.map((day) => (
          <div
            key={day}
            className="h-14 md:h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 font-medium hover:bg-blue-50 transition cursor-pointer"
          >
            {day <= 30 ? day : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarGrid;