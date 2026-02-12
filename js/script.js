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


// scroll animation
const faders = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

