/**
 * @jest-environment jsdom
 */
// storage.test.js
const { STORAGE_KEY, readReports, writeReports, clearReports, addReport } = require("./storage");

beforeEach(() => {
  localStorage.clear();
});

test("readReports returns [] when nothing stored", () => {
  expect(readReports()).toEqual([]);
});

test("writeReports then readReports round-trip", () => {
  const data = [{ email: "anon", category: "Test", details: "Something happened", ts: "2024-01-01T00:00:00Z" }];
  writeReports(data);
  expect(readReports()).toEqual(data);
});

test("addReport appends and sets timestamp", () => {
  const r = addReport({ email: "me", category: "Safety", details: "A long enough description" });
  const list = readReports();
  expect(list.length).toBe(1);
  expect(list[0].email).toBe("me");
  expect(typeof r.ts).toBe("string");
});

test("clearReports removes stored data", () => {
  writeReports([{ a: 1 }]);
  clearReports();
  expect(readReports()).toEqual([]);
  expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
});
