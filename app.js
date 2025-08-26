(function () {
  const { validateEmail, validateCategory, validateDetails, formatReport } = window.SWUtils;

  const form = document.getElementById("reportForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const category = document.getElementById("category").value;
    const details = document.getElementById("details").value;

    if (!validateEmail(email)) {
      status.textContent = "Invalid email";
    } else if (!validateCategory(category)) {
      status.textContent = "Category too short";
    } else if (!validateDetails(details)) {
      status.textContent = "Details too short";
    } else {
      const report = formatReport({ email, category, details });
      status.textContent = "Report submitted by " + report.email;
    }
  });
})();
