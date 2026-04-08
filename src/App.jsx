import { useState, useEffect } from "react";
import { addMonths, isBefore, startOfDay, format } from "date-fns";
import CalendarHeader from "./components/CalendarHeader";
import CalendarGrid from "./components/CalendarGrid";
import NotesPanel from "./components/NotesPanel";
import { getRangeKey } from "./utils/dateUtils";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("calendar-notes");
    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  const handleSelectDate = (selectedDay) => {
    const clickedDate = startOfDay(selectedDay);

    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
      return;
    }

    if (isBefore(clickedDate, startDate)) {
      setStartDate(clickedDate);
      setEndDate(startDate);
    } else {
      setEndDate(clickedDate);
    }
  };

  const handleSaveNote = (text) => {
    const key = getRangeKey(startDate, endDate);
    if (!key) return;

    setNotes((prev) => ({
      ...prev,
      [key]: text,
    }));
  };

  const getCurrentNote = () => {
    const key = getRangeKey(startDate, endDate);
    if (!key) return "";
    return notes[key] || "";
  };

  const handleClearSelection = () => {
    setStartDate(null);
    setEndDate(null);
  };

  useEffect(() => {
    localStorage.setItem("calendar-notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Hero Banner */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-r from-blue-700 to-sky-500">
          <img
            src="/banner.jpg"
            alt="Calendar Banner"
            className="w-full h-full object-cover scale-105"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          {/* Top Right Badge */}
          <div className="absolute top-5 right-5 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-4 py-2 text-white shadow-lg">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80">
              Planner
            </p>
            <p className="text-sm md:text-lg font-semibold">
              Interactive Calendar
            </p>
          </div>

          {/* Main Text */}
          <div className="absolute bottom-6 left-6 text-white max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] opacity-90">
              Wall Calendar Experience
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
              Plan Your Days Beautifully
            </h1>
            <p className="mt-3 text-sm md:text-base text-white/90 leading-relaxed">
              Select date ranges, organize plans, and save notes with a clean,
              responsive calendar interface.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-10">
          <CalendarHeader
            currentMonth={currentMonth}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />

          {/* Selected Range Summary */}
          {startDate && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-blue-50 border border-blue-200 px-4 py-2 text-sm text-blue-800 font-medium shadow-sm">
              <span>Selected:</span>
              <span>
                {endDate
                  ? `${format(startDate, "dd MMM yyyy")} → ${format(
                      endDate,
                      "dd MMM yyyy"
                    )}`
                  : format(startDate, "dd MMM yyyy")}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <CalendarGrid
                currentMonth={currentMonth}
                startDate={startDate}
                endDate={endDate}
                onSelectDate={handleSelectDate}
              />
            </div>

            <div className="lg:col-span-1">
              <NotesPanel
                startDate={startDate}
                endDate={endDate}
                onSaveNote={handleSaveNote}
                existingNote={getCurrentNote()}
                onClearSelection={handleClearSelection}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;