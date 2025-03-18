const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.remove("translate-x-full");
  //   navMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.add("translate-x-full");
  navMenu.style.display = "flex";
});
