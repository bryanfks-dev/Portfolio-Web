const dateFormatter = Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
});

export function formatToDisplayDate(date: Date): string {
  return dateFormatter.format(date);
}
