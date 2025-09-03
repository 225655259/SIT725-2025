// storage.js
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();         // Node / Jest
  } else {
    root.SWStore = factory();           // Browser (window.SWStore)
  }
}(typeof self !== "undefined" ? self : this, function () {
  const STORAGE_KEY = "sw_reports";

  function readReports() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function writeReports(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list || []));
  }

  function clearReports() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function addReport({ email = "Anonymous", category = "", details = "" }) {
    const ts = new Date().toISOString();
    const rpt = { email, category, details, ts };
    const cur = readReports();
    cur.push(rpt);
    writeReports(cur);
    return rpt;
  }

  return { STORAGE_KEY, readReports, writeReports, clearReports, addReport };
}));
