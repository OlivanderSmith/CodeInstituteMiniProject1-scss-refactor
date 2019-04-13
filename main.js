// -------------------------------------Burger Menu script
const burgerButton = document.getElementById("burgerButton");
const burgerMenu = document.getElementById("burgerMenu");
const burgerIcon = document.getElementById("burgerIcon");

const hidden = "hiddenMenu";
const down = "menuSlideDown";
const up = "menuSlideUp";
const unhidden = "unhiddenMenu";
const startways = "menuOrigin";
const sideways = "menuOpen";
const rightways = "menuClosed";

const burgerClick = (burgerButton.onclick = () => {
  if (burgerMenu.classList.contains(hidden)) {
    burgerMenu.classList.add(down);
    burgerMenu.classList.remove(hidden);
    burgerMenu.classList.add(up);
    burgerMenu.classList.remove(up);
    setTimeout(() => burgerMenu.classList.add(unhidden), 500);
    burgerIcon.classList.remove(startways);
    burgerIcon.classList.remove(rightways);
    burgerIcon.classList.add(sideways);
  } else if (burgerMenu.classList.contains(unhidden)) {
    burgerMenu.classList.add(up);
    burgerMenu.classList.remove(down);
    burgerMenu.classList.add(hidden);
    setTimeout(() => burgerMenu.classList.remove(unhidden), 500);
    burgerIcon.classList.remove(sideways);
    burgerIcon.classList.add(rightways);
    burgerIcon.classList.add(startways);
  }
});

// -----------------------------------Hide/Unhide menu onScroll

const navBar = document.getElementById("navBar");
var previousPosition = window.pageYOffset;

window.onscroll = () => {
  var currentPosition = window.pageYOffset;

  if (previousPosition > currentPosition) {
    navBar.style.top = "8px";
  } else {
    navBar.style.top = "-50vh";
  }
  previousPosition = currentPosition;
};
