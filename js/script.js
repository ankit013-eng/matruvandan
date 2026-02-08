function toggleLanguage() {
  const elements = document.querySelectorAll("[data-hi]");
  elements.forEach(el => {
    if (el.textContent === el.getAttribute("data-en")) {
      el.textContent = el.getAttribute("data-hi");
    } else {
      el.textContent = el.getAttribute("data-en");
    }
  });
}
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
console.log("Matru Vandan Site Loaded");

