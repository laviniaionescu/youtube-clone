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