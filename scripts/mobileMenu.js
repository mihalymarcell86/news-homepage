const openButton = document.querySelector(".menu-hamburger");
const closeButton = document.querySelector(".menu-hamburger-close");
const navigationDrawer = document.querySelector(".header__navigation");
const backdrop = document.querySelector(".navigation__backdrop");

function openMenu() {
  navigationDrawer.style.translate = "none";
  backdrop.style.display = "block";
  //disable content scrolling
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  backdrop.style.display = "none";
  navigationDrawer.style.translate = window.innerWidth < 600 ? "100%" : "none";
  //reenable scrolling
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "auto";
}

openButton.addEventListener("click", openMenu);
backdrop.addEventListener("click", closeMenu);

navigationDrawer
  .querySelectorAll("a")
  .forEach((el) => el.addEventListener("click", closeMenu));

closeButton.addEventListener("click", closeMenu);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    navigationDrawer.style.transition = "none";
    closeMenu();
  } else {
    navigationDrawer.style.transition = "translate 0.2s ease";
    navigationDrawer.style.translate = "100%";
  }
});
