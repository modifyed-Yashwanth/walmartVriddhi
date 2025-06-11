export const stripHtml = (html: string): string =>
  html.replace(/<[^>]+>/g, "").trim();

export function formatPostDate(
  dateStr: string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  locale: string = "en-US"
): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString(locale, options);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Invalid date string:", dateStr, err.message);
    } else {
      console.error("Unknown error while formatting date:", dateStr, err);
    }
    return "";
  }
}
