const compnayMenu = document.getElementById("compnay");
const navCompany = document.getElementById("nav-company");

const careerMenu = document.getElementById("career");
const navCareer = document.getElementById("nav-career");

const menuButton = document.getElementById("menu-button");
const menuBox = document.getElementById("breakpoint");

menuButton.addEventListener("click", function () {
  menuBox.classList.toggle("display-side-menu");
});

navCompany.addEventListener("mouseover", () => {
  compnayMenu.classList.add("display-drop-menu");
});

navCompany.addEventListener("mouseleave", () => {
  compnayMenu.classList.remove("display-drop-menu");
});

navCareer.addEventListener("mouseover", () => {
  careerMenu.classList.add("display-drop-menu");
});

navCareer.addEventListener("mouseleave", () => {
  careerMenu.classList.remove("display-drop-menu");
});
