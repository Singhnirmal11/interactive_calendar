function NotesPanel() {
  return (
    <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-inner h-full">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
        Notes Section
      </p>

      <h3 className="text-2xl font-bold text-slate-800 mt-2">
        Add Notes
      </h3>

      <p className="text-slate-600 mt-3 text-sm leading-relaxed">
        Select a date or date range from the calendar to attach notes here.
      </p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Selected Date / Range
        </label>
        <div className="w-full rounded-2xl bg-white border border-slate-200 px-4 py-3 text-slate-500">
          No date selected
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Your Notes
        </label>
        <textarea
          rows="8"
          placeholder="Write something here..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl transition">
        Save Notes
      </button>
    </div>
  );
}

export default NotesPanel;