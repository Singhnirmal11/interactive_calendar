import { useState, useEffect } from "react";
import { format } from "date-fns";

function NotesPanel({
  startDate,
  endDate,
  onSaveNote,
  existingNote,
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(existingNote || "");
  }, [existingNote]);

  const getLabel = () => {
    if (!startDate) return "No date selected";

    if (!endDate) {
      return format(startDate, "dd MMM yyyy");
    }

    return `${format(startDate, "dd MMM")} → ${format(
      endDate,
      "dd MMM yyyy"
    )}`;
  };

  const handleSave = () => {
    onSaveNote(text);
  };

  return (
    <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-inner h-full">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
        Notes Section
      </p>

      <h3 className="text-2xl font-bold text-slate-800 mt-2">
        Add Notes
      </h3>

      <p className="text-slate-600 mt-3 text-sm">
        Select a date or date range from the calendar.
      </p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Selected Date / Range
        </label>
        <div className="w-full rounded-2xl bg-white border border-slate-200 px-4 py-3 text-slate-600">
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
          placeholder="Write something here..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl transition"
      >
        Save Notes
      </button>
    </div>
  );
}

export default NotesPanel;