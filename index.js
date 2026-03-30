// open and close the small vs big menu on desktop
function menuSwitch() {
  const smallPanel = document.getElementById("small-side-panel");
  const bigPanel = document.getElementById("big-side-panel");
  const mainContent = document.querySelector(".main-content");

  bigPanel.classList.toggle("is-hidden");
  smallPanel.classList.toggle("is-hidden");

  mainContent.classList.toggle("with-sidebar");

}

const burgerBtn = document.getElementById("burger-menu-container");
burgerBtn.addEventListener("click", menuSwitch);


// open the mobile menu
function openMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu")
  const menuOverlay = document.querySelector(".menu-overlay")

  if (window.innerWidth <= 768) {
    mobileMenu.classList.add("active")
    menuOverlay.classList.remove("is-hidden")
    document.body.style.overflow = "hidden"
  }
}

const mobileMenuBtn = document.querySelector(".mobile-menu-button")
mobileMenuBtn.addEventListener("click", openMobileMenu);

// close the mobile menu
function closeMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu")
  const menuOverlay = document.querySelector(".menu-overlay")
  document.body.style.overflow = ""

  mobileMenu.classList.remove("active")
  menuOverlay.classList.add("is-hidden")
}

const closeMobileMenuBtn = document.querySelector(".mobile-menu-close-btn")
closeMobileMenuBtn.addEventListener('click', closeMobileMenu)
const menuOverlay = document.querySelector(".menu-overlay")
menuOverlay.addEventListener("click", closeMobileMenu)