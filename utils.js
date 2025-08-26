(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();           // Node / Jest
  } else {
    root.SWUtils = factory();             // Browser (window.SWUtils)
  }
}(typeof self !== "undefined" ? self : this, function () {

  function validateEmail(email) {
    if (!email) return true; // optional field
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validateCategory(cat) {
    return typeof cat === "string" && cat.trim().length >= 3;
  }

  function validateDetails(details) {
    return typeof details === "string" && details.trim().length >= 10;
  }

  function formatReport({ email, category, details }) {
    return {
      email: email || "Anonymous",
      category: String(category || "").trim(),
      length: String(details || "").trim().length
    };
  }

  return { validateEmail, validateCategory, validateDetails, formatReport };
}));
