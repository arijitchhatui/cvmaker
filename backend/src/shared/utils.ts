export function sortByDate<T>(
  items: T[],
  getDate: (item: T) => string | number | null | undefined,
  order: "asc" | "desc" = "asc",
): T[] {
  return [...items].sort((a, b) => {
    const da = getDate(a) ? new Date(getDate(a)!).getTime() : 0;
    const db = getDate(b) ? new Date(getDate(b)!).getTime() : 0;

    return order === "asc" ? da - db : db - da;
  });
}

export function sanitizeHtmlString(input: string): string {
  if (!input) return "";

  let output = input;

  output = output.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    "",
  );

  output = output.replace(/<(iframe|object|embed)\b[^>]*>(.*?)<\/\1>/gi, "");

  output = output.replace(/<(iframe|object|embed)\b[^\\/]*\/?>/gi, "");

  output = output.replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");

  output = output.replace(
    /\s(href|src)\s*=\s*(["']?)\s*(javascript:|vbscript:|data:)/gi,
    " $1=$2#",
  );

  return output.trim();
}
