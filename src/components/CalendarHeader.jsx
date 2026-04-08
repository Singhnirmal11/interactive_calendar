function CalendarHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Monthly View
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
          April 2026
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition font-medium">
          ← Prev
        </button>
        <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition font-medium">
          Next →
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;