// -------------------------------------Burger Menu script
const burgerButton = document.getElementById("burgerButton");
const burger = document.getElementById("burgerMenu");

const hidden = "hiddenMenu";
const down = "menuSlideDown";
const up = "menuSlideUp;";
const unhidden = "unhiddenMenu";

burgerButton.onclick = () => {
  if (burger.classList.contains(hidden)) {
    burger.classList.add(down);
    burger.classList.remove(hidden);
    setTimeout(() => burger.classList.add(unhidden), 750);
  } else if (burger.classList.contains(down)) {
    burger.classList.add(up);
    setTimeout(() => burger.classList.remove(unhidden), 0001);
    burger.classList.remove(down);
  } else if (burger.classList.contains(up)) {
    burger.classList.add(down);
    burger.classList.remove(up);
    setTimeout(() => burger.classList.add(unhidden), 750);
  }
};
// ---------------------------------------------------------
