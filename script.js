function toggleMenu() {
  const menu = document.getElementById("navMenu");

  if (menu) {
    menu.classList.toggle("open");
  }
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
