var menuSwitch = document.querySelector(".page-header__switch");
var bgHeader = document.querySelector(".bg-header-wrap");

menuSwitch.addEventListener("click", function () {
  bgHeader.classList.toggle("menu-hide");
});
