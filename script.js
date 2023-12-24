const compnayMenu = document.getElementById("compnay");
const navCompany = document.getElementById("nav-company");

const careerMenu = document.getElementById("career");
const navCareer = document.getElementById("nav-career");

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
