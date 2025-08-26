const { validateEmail, validateCategory, validateDetails, formatReport } = require("./utils");

test("validateEmail works", () => {
  expect(validateEmail("user@example.com")).toBe(true);
  expect(validateEmail("invalid")).toBe(false);
  expect(validateEmail("")).toBe(true); // optional
});

test("validateCategory requires at least 3 chars", () => {
  expect(validateCategory("HR")).toBe(false);
  expect(validateCategory("Harassment")).toBe(true);
});

test("validateDetails requires at least 10 chars", () => {
  expect(validateDetails("Too short")).toBe(false);
  expect(validateDetails("This is long enough")).toBe(true);
});

test("formatReport fills Anonymous if no email", () => {
  const rep = formatReport({ email: "", category: "Safety", details: "Something happened here." });
  expect(rep.email).toBe("Anonymous");
  expect(rep.category).toBe("Safety");
  expect(rep.length).toBeGreaterThan(10);
});
