import { formatTime } from "./formatTime";

export function getTimeRange() {
    const now = new Date();
    const later = new Date(now.getTime() + 2.5 * 60 * 60 * 1000);
  
    const formattedNow = formatTime(now);
    const formattedLater = formatTime(later);
  
    return `${formattedNow} - ${formattedLater}`;
}
  