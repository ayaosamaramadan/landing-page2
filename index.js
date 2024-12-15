let menu = document.getElementById("menu");

function handleMenu() {
  if (menu.style.opacity === "0") {
    menu.classList.add("nav-active");
    menu.style.opacity = "1";
  } else {
    menu.classList.remove("nav-active");
    menu.style.opacity = "0";
  }
}
