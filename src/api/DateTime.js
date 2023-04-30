export function formatDate(date) {
  return date.toLocaleDateString();
}

export function formatDateTime(dateTime) {
  return dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
}
