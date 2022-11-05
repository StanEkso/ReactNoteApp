export default function dateFromISOString(isoString?: string) {
  return new Date(isoString || Date.now()).toLocaleDateString("ru", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
}
