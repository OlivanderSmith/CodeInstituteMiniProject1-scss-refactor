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

  if (window.pageYOffset < 40) {
    navBar.style.top = "0";
  } else if (previousPosition > currentPosition) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-50vh";
  }
  previousPosition = currentPosition;
};

// -----------------------------------Media Carousel

const a = document.getElementById("slide-a");
const b = document.getElementById("slide-b");
const c = document.getElementById("slide-c");
const d = document.getElementById("slide-d");

const one = "slide-order-1";
const two = "slide-order-2";
const three = "slide-order-3";
const four = "slide-order-4";

const leftArrow = () => {
  if (a.classList.contains(one)) {
    d.classList.add("left-animation");
    setTimeout(() => d.classList.remove("left-animation"), 1000);
    a.classList.remove(one);
    a.classList.add(two);
    b.classList.remove(two);
    b.classList.add(three);
    c.classList.remove(three);
    c.classList.add(four);
    d.classList.remove(four);
    d.classList.add(one);
  } else if (b.classList.contains(one)) {
    a.classList.add("left-animation");
    setTimeout(() => a.classList.remove("left-animation"), 1000);
    b.classList.remove(one);
    b.classList.add(two);
    c.classList.remove(two);
    c.classList.add(three);
    d.classList.remove(three);
    d.classList.add(four);
    a.classList.remove(four);
    a.classList.add(one);
  } else if (c.classList.contains(one)) {
    b.classList.add("left-animation");
    setTimeout(() => b.classList.remove("left-animation"), 1000);
    c.classList.remove(one);
    c.classList.add(two);
    d.classList.remove(two);
    d.classList.add(three);
    a.classList.remove(three);
    a.classList.add(four);
    b.classList.remove(four);
    b.classList.add(one);
  } else if (d.classList.contains(one)) {
    c.classList.add("left-animation");
    setTimeout(() => c.classList.remove("left-animation"), 1000);
    d.classList.remove(one);
    d.classList.add(two);
    a.classList.remove(two);
    a.classList.add(three);
    b.classList.remove(three);
    b.classList.add(four);
    c.classList.remove(four);
    c.classList.add(one);
  }
};

const rightArrow = () => {
  if (a.classList.contains(one)) {
    b.classList.add("right-animation");
    setTimeout(() => b.classList.remove("right-animation"), 1000);
    setTimeout(() => {
      a.classList.remove(one);
      a.classList.add(four);
      b.classList.remove(two);
      b.classList.add(one);
      c.classList.remove(three);
      c.classList.add(two);
      d.classList.remove(four);
      d.classList.add(three);
    }, 1000);
  } else if (b.classList.contains(one)) {
    c.classList.add("right-animation");
    setTimeout(() => c.classList.remove("right-animation"), 1000);
    setTimeout(() => {
      b.classList.remove(one);
      b.classList.add(four);
      c.classList.remove(two);
      c.classList.add(one);
      d.classList.remove(three);
      d.classList.add(two);
      a.classList.remove(four);
      a.classList.add(three);
    }, 1000);
  } else if (c.classList.contains(one)) {
    d.classList.add("right-animation");
    setTimeout(() => d.classList.remove("right-animation"), 1000);
    setTimeout(() => {
      c.classList.remove(one);
      c.classList.add(four);
      d.classList.remove(two);
      d.classList.add(one);
      a.classList.remove(three);
      a.classList.add(two);
      b.classList.remove(four);
      b.classList.add(three);
    }, 1000);
  } else if (d.classList.contains(one)) {
    a.classList.add("right-animation");
    setTimeout(() => a.classList.remove("right-animation"), 1000);
    setTimeout(() => {
      d.classList.remove(one);
      d.classList.add(four);
      a.classList.remove(two);
      a.classList.add(one);
      b.classList.remove(three);
      b.classList.add(two);
      c.classList.remove(four);
      c.classList.add(three);
    }, 1000);
  }
};

document.onkeydown = function() {
  switch (window.event.keyCode) {
    case 37:
      leftArrow();
      break;
    case 39:
      rightArrow();
      break;
    case 32:
      playPause();
      break;
  }
};

const playPause = () => {
  getElementById("body").classList.toggle("body-toggle");
};

setInterval(
  () =>
    document.getElementById("body").classList.contains("body-toggle")
      ? rightArrow()
      : null,
  3000
);
