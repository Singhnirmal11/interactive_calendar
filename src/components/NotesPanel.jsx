import { useState, useEffect } from "react";
import { format } from "date-fns";

function NotesPanel({
  startDate,
  endDate,
  onSaveNote,
  existingNote,
  onClearSelection,
}) {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setText(existingNote || "");
    setSaved(false);
  }, [existingNote, startDate, endDate]);

  const getLabel = () => {
    if (!startDate) return "No date selected";

    if (!endDate) {
      return format(startDate, "dd MMM yyyy");
    }

    return `${format(startDate, "dd MMM yyyy")} → ${format(
      endDate,
      "dd MMM yyyy"
    )}`;
  };

  const handleSave = () => {
    if (!startDate) return;
    onSaveNote(text);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-inner h-full">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
        Notes Section
      </p>

      <div className="flex items-center justify-between mt-2">
        <h3 className="text-2xl font-bold text-slate-800">Add Notes</h3>

        {startDate && (
          <button
            onClick={() => onClearSelection()}
            className="text-sm px-3 py-1.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            Clear
          </button>
        )}
      </div>

      <p className="text-slate-600 mt-3 text-sm leading-relaxed">
        Select a date or date range from the calendar and attach notes for
        planning, reminders, or events.
      </p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Selected Date / Range
        </label>
        <div className="w-full rounded-2xl bg-white border border-slate-200 px-4 py-3 text-slate-600 font-medium">
          {getLabel()}
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Your Notes
        </label>
        <textarea
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your plans, reminders, or event notes here..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={!startDate}
        />
      </div>

      <button
        onClick={handleSave}
        disabled={!startDate}
        className={`mt-5 w-full font-semibold py-3 rounded-2xl transition ${
          !startDate
            ? "bg-slate-300 text-slate-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        Save Notes
      </button>

      {saved && (
        <p className="mt-3 text-sm text-green-600 font-medium">
          Notes saved successfully ✓
        </p>
      )}
    </div>
  );
}

export default NotesPanel;