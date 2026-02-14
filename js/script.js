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
function generateID() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  if (!name || !role) {
    alert("Please fill all details");
    return;
  }

  // Create random member ID
  const memberID = "MV" + Math.floor(1000 + Math.random() * 9000);

  // Display data
  document.getElementById("memberName").innerText = name;
  document.getElementById("memberRole").innerText = role;
  document.getElementById("memberID").innerText = memberID;

  // Show card
  document.getElementById("idCard").style.display = "block";

  // Clear previous QR
  document.getElementById("qrcode").innerHTML = "";

  // Generate QR
  new QRCode(document.getElementById("qrcode"), {
    text: "Member ID: " + memberID + " | Name: " + name,
    width: 100,
    height: 100
  });
}

// Scroll animation
let fadeElements = [];

window.addEventListener('load', () => {
  fadeElements = document.querySelectorAll('.fade-up');
  revealOnScroll();
});


function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      el.classList.add('active');

      // animate progress bar inside this section
      const progress = el.querySelector('.progress');
      if (progress && !progress.classList.contains('loaded')) {
        progress.style.width = progress.dataset.width;
        progress.classList.add('loaded');
      }
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
