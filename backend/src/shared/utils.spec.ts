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

  it("should handle items with null or undefined dates", () => {
    const itemsWithNulls = [
      ...items,
      { id: 4, date: null },
      { id: 5, date: undefined },
    ];

    const sorted = sortByDate(itemsWithNulls, (item) => item.date);

    expect(sorted).toEqual([
      { id: 4, date: null },
      { id: 5, date: undefined },
      { id: 2, date: "2022-12-31" },
      { id: 1, date: "2023-01-01" },
      { id: 3, date: "2023-06-15" },
    ]);
  });
});

describe("sanitizeHtmlString", () => {
  it("should remove script tags", () => {
    const input = '<div>Hello</div><script>alert("XSS")</script><p>World</p>';
    const output = sanitizeHtmlString(input);

    expect(output).toBe("<div>Hello</div><p>World</p>");
  });

  it("should remove event handler attributes", () => {
    const input = '<button onclick="doSomething()">Click me</button>';
    const output = sanitizeHtmlString(input);

    expect(output).toBe("<button>Click me</button>");
  });

  it("should allow safe HTML tags", () => {
    const input =
      "<div><strong>Bold Text</strong> and <em>Italic Text</em></div>";
    const output = sanitizeHtmlString(input);

    expect(output).toBe(
      "<div><strong>Bold Text</strong> and <em>Italic Text</em></div>",
    );
  });

  it("should remove dangerous attributes", () => {
    const input =
      '<a href="javascript:alert(\'XSS\')" style="color:red;" onmouseover="stealCookies()">Click me</a>';
    const output = sanitizeHtmlString(input);

    expect(output).toBe('<a style="color:red;">Click me</a>');
  });

  it("should handle empty strings", () => {
    const input = "";
    const output = sanitizeHtmlString(input);

    expect(output).toBe("");
  });
});
