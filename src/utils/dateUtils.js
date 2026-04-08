import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  format,
  isWithinInterval,
  isSameDay,
} from "date-fns";

export const generateCalendarDays = (currentMonth) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = [];
  let day = calendarStart;

  while (day <= calendarEnd) {
    days.push(day);
    day = addDays(day, 1);
  }

  return days;
};

export const formatDateKey = (date) => format(date, "yyyy-MM-dd");

export const isCurrentMonthDay = (date, currentMonth) => {
  return isSameMonth(date, currentMonth);
};

export const isDateInRange = (date, startDate, endDate) => {
  if (!startDate || !endDate) return false;

  return isWithinInterval(date, {
    start: startDate,
    end: endDate,
  });
};

export const isStartDate = (date, startDate) => {
  if (!startDate) return false;
  return isSameDay(date, startDate);
};

export const isEndDate = (date, endDate) => {
  if (!endDate) return false;
  return isSameDay(date, endDate);
};