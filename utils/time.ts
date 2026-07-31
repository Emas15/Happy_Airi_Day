export type LoveDuration = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

export function getLoveDuration(startDate: string, now = new Date()): LoveDuration {
  const start = new Date(startDate);

  if (Number.isNaN(start.getTime()) || now <= start) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let years = now.getFullYear() - start.getFullYear();
  let monthCursor = new Date(start);
  monthCursor.setFullYear(start.getFullYear() + years);

  if (monthCursor > now) {
    years -= 1;
    monthCursor = new Date(start);
    monthCursor.setFullYear(start.getFullYear() + years);
  }

  let months =
    now.getMonth() -
    monthCursor.getMonth() +
    12 * (now.getFullYear() - monthCursor.getFullYear());

  const dayCursor = new Date(monthCursor);
  dayCursor.setMonth(monthCursor.getMonth() + months);

  if (dayCursor > now) {
    months -= 1;
    dayCursor.setMonth(monthCursor.getMonth() + months);
  }

  let remaining = now.getTime() - dayCursor.getTime();
  const days = Math.floor(remaining / MS_PER_DAY);
  remaining -= days * MS_PER_DAY;

  const hours = Math.floor(remaining / MS_PER_HOUR);
  remaining -= hours * MS_PER_HOUR;

  const minutes = Math.floor(remaining / MS_PER_MINUTE);
  remaining -= minutes * MS_PER_MINUTE;

  const seconds = Math.floor(remaining / MS_PER_SECOND);

  return { years, months, days, hours, minutes, seconds };
}
