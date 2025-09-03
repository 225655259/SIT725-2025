// utils.test.js (CommonJS)
const { validateEmail, validateCategory, validateDetails, formatReport } = require("./utils");

test("validateEmail accepts valid and optional emails", () => {
  expect(validateEmail("user@example.com")).toBe(true);
  expect(validateEmail("")).toBe(true); // optional
  expect(validateEmail("invalid")).toBe(false);
});

test("validateCategory requires >= 3 characters", () => {
  expect(validateCategory("HR")).toBe(false);
  expect(validateCategory("Safety")).toBe(true);
});

test("validateDetails requires >= 10 characters", () => {
  expect(validateDetails("Too short")).toBe(false);
  expect(validateDetails("This is long enough")).toBe(true);
});

test("formatReport defaults email to Anonymous and trims", () => {
  const rep = formatReport({ email: "", category: "  Harassment  ", details: "  detail text here " });
  expect(rep.email).toBe("Anonymous");
  expect(rep.category).toBe("Harassment");
  expect(rep.length).toBeGreaterThan(10);
});
