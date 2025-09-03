// app.js — saves submitted reports to localStorage and shows a status message

(function () {
  // --- helpers for localStorage ---
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  // --- form handling ---
  const form = document.getElementById("reportForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const category = document.getElementById("category").value.trim();
    const details = document.getElementById("details").value.trim();

    // Basic validation (you can also keep/extend utils.js checks if you want)
    if (category.length < 3) {
      status.textContent = "Category too short";
      status.style.color = "#b91c1c";
      return;
    }
    if (details.length < 10) {
      status.textContent = "Details too short";
      status.style.color = "#b91c1c";
      return;
    }

    const report = {
      email: email || "Anonymous",
      category,
      details,
      ts: new Date().toISOString()
    };

    const list = readReports();
    list.push(report);
    writeReports(list);

    status.textContent = "Report submitted. It should appear in the dashboard.";
    status.style.color = "#166534";

    form.reset();
  });
})();
