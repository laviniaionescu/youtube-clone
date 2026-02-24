function menuSwitch() {
  const smallPanel = document.getElementById("small-side-panel");
  const bigPanel = document.getElementById("big-side-panel");

  bigPanel.classList.toggle("is-hidden");
  smallPanel.classList.toggle("is-hidden");

}

const burgerBtn = document.getElementById("burger-menu-container");
burgerBtn.addEventListener("click", menuSwitch);