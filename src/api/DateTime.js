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
