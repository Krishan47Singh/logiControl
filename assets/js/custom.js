const toggler = document.querySelector(".toggler-icon");
const sidebar = document.querySelector(".slide-navbar");
const closeBtn = document.querySelector(".close");

toggler.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.transform = "translateX(800px)";
});

document.addEventListener("click", (e) => {
  const isClickInsideSidebar = sidebar.contains(e.target);
  const isClickOnToggler = toggler.contains(e.target);
  if (!isClickInsideSidebar && !isClickOnToggler) {
    sidebar.style.transform = "translateX(800px)";
  }
});

// navbar sticky

let nav = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    nav.classList.add("fixedbg");
  } else {
    nav.classList.remove("fixedbg");
  }
});
