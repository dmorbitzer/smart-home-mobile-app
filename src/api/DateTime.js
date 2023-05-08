export function formatDate(date) {
  return date.toLocaleDateString("de-DE");
}

export function formatDateTime(dateTime) {
  return (
    dateTime.toLocaleDateString("de-DE") +
    " " +
    dateTime.toLocaleTimeString("de-DE")
  );
}

export function formatStringToTime(timeString) {
  return new Date(timeString).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
