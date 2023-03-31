// get the necessary DOM elements
const burgerMenu = document.querySelector('[data-role="BurgerMenu"]');
const mobileMenu = document.querySelector('[data-role="MobileMenu"]');
const closeMobileMenu = document.querySelector('[data-role="CloseMobileMenu"]');

// add event listeners to the elements
burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("visible");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("visible");
});
