"use strict";

let screen = document.querySelector(".screen");
let actionbtns = document.querySelectorAll(".action");
const delbtn = document.querySelector(".delete");
const resetbtn = document.querySelector(".reset");
const equalsbtn = document.querySelector(".equals");

const opsArray = ["/", "x", "+", "-"];

// Deleting the alst character
function deleteFunc() {
  let screenArray = screen.textContent.split("");
  screenArray.pop();
  screen.textContent = screenArray.join("");
}

for (let i = 0; i < actionbtns.length; i++) {
  actionbtns[i].addEventListener("click", function () {
    if (
      // Since the operation signs can not be written consecutively, delete the last one to add the new operation sign
      opsArray.includes(screen.textContent[screen.textContent.length - 1]) &&
      actionbtns[i].classList.contains("op")
    ) {
      deleteFunc();
    }
    // Add the clicked button to the screen
    screen.textContent += actionbtns[i].textContent;
  });
}

// Resets the screen content
resetbtn.addEventListener("click", function () {
  screen.textContent = "";
});

// Evaluates the screen content
equalsbtn.addEventListener("click", function () {
  //   "x" is replaced with "*" for eval to work correctly
  screen.textContent = eval(screen.textContent.replace("x", "*"));
});

// Simply deletes the last character on screen
delbtn.addEventListener("click", deleteFunc);

// ? Storing preferred theme

// Getting the node list for themes
const colorThemes = document.querySelectorAll("[name = theme]");

// Function for storing a theme
const storeTheme = function (currentTheme) {
  localStorage.setItem("theme", currentTheme);
};

// Event listener that stores the clicked theme
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

// Retrieving the stored theme and loading it
const getTheme = function () {
  const activeTheme = localStorage.getItem("theme");

  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
};

// Get the theme preference after loading the page
window.onload = getTheme();
