export function randomIntFromInterval(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-uk", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
