export const dateFromISOString = (isoString?: string) => {
  return new Date(isoString || Date.now()).toLocaleDateString("ru", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
};
export const getCurrentISO = () => new Date().toISOString();
