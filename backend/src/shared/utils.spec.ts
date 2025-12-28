import { sanitizeHtmlString, sortByDate } from "./utils";

describe("sortByDate", () => {
  const items = [
    { id: 1, date: "2023-01-01" },
    { id: 2, date: "2022-12-31" },
    { id: 3, date: "2023-06-15" },
  ];

  it("should sort items by date in ascending order", () => {
    const sorted = sortByDate(items, (item) => item.date);

    expect(sorted).toEqual([
      { id: 2, date: "2022-12-31" },
      { id: 1, date: "2023-01-01" },
      { id: 3, date: "2023-06-15" },
    ]);
  });

  it("should sort items by date in descending order", () => {
    const sorted = sortByDate(items, (item) => item.date, "desc");

    expect(sorted).toEqual([
      { id: 3, date: "2023-06-15" },
      { id: 1, date: "2023-01-01" },
      { id: 2, date: "2022-12-31" },
    ]);
  });
});

describe("sanitizeHtmlString", () => {
  it("should remove script tags", () => {
    const input = '<div>Hello</div><script>alert("XSS")</script><p>World</p>';
    const output = sanitizeHtmlString(input);

    expect(output).toBe("<div>Hello</div><p>World</p>");
  });
});
