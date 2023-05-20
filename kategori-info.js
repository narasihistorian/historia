// navbar burger toggle tab & mobile version -----------------------------------------------------

const burger = document.querySelector(".burger-hyperlink");
const nav = document.querySelector(".menu-navbar-hyperlink");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("navbar-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("navbar-open");
    burger.classList.toggle("toggle");
  });
});
