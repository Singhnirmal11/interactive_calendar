import { useState } from "react";
import { addMonths, isBefore, startOfDay } from "date-fns";
import CalendarHeader from "./components/CalendarHeader";
import CalendarGrid from "./components/CalendarGrid";
import NotesPanel from "./components/NotesPanel";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Hero Banner */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src="/banner.jpg"
            alt="Calendar Banner"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add(
                "bg-gradient-to-r",
                "from-blue-600",
                "to-sky-400"
              );
            }}
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] opacity-90">
              Interactive Calendar
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Plan Your Days
            </h1>
            <p className="mt-2 text-sm md:text-base text-white/90">
              Select date ranges and keep notes beautifully.
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
              <NotesPanel startDate={startDate} endDate={endDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;