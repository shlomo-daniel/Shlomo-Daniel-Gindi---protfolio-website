const navBar = document.querySelector("nav");

let lastScroll = 0;
const threshhold = 10;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= threshhold) {
    navBar.classList.remove("nav-hidden");
  } else if (currentScroll < lastScroll) {
    navBar.classList.remove("nav-hidden");
  } else {
    navBar.classList.add("nav-hidden");
  }
  console.log(navBar);
  console.log(currentScroll);

  lastScroll = currentScroll;
});
