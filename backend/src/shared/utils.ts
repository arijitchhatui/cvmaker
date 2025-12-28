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

  let prev: string;
  let output = input;

  do {
    prev = output;

    output = output.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      "",
    );

    output = output.replace(
      /<(iframe|object|embed)\b[^>]*>([\s\S]*?)<\/\1>/gi,
      "",
    );

    output = output.replace(/<(iframe|object|embed)\b[^/]*\/?>/gi, "");

    output = output.replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");

    output = output.replace(
      /\s(href|src)\s*=\s*(?:"\s*(javascript:|vbscript:|data:)[^"]*"|\s*'\s*(javascript:|vbscript:|data:)[^']*'|\s*(javascript:|vbscript:|data:)[^\s>]+)/gi,
      "",
    );
  } while (output !== prev);

  return output.trim();
}
