import { parseISO } from "date-fns";
import { format, utcToZonedTime } from "date-fns-tz";

export function dateFormatter(date: string) {
  const localTz = new window.Intl.DateTimeFormat().resolvedOptions().timeZone;
  const parsed = parseISO(date);
  const zonedTime = utcToZonedTime(parsed, localTz);
  const fmt = "d/MM/yy HH:mm";
  return format(zonedTime, fmt);
}
