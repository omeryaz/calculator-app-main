# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshots

![Default dark theme dekstop design](/images/calc_desktop1.png "Default theme desktop design")

![Light theme dekstop design](/images/calc_desktop2.png "Light theme dekstop design")

![Neon theme mobile design](/images/calc_mobile3.png "Neon theme mobile design")

### Links

- Solution URL: [Solution URL](https://github.com/omeryaz/calculator-app-main)
- Live Site URL: [Live site URL](https://omeryaz.github.io/calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Javascript

### What I learned

#### CSS

- I have learned about CSS variables and various selectors such as :root, :has, :checked etc.
- Utilized CSS Grid for the first time.
- Fixed the theme numbers at the top right corner of the calculator with position relative/absolute:

```css
/* parent element */
.head-part {
  position: relative;
}
/* child element */
.theme-numbers {
  position: absolute;
}
```

- Used filter to set a common rule for hovering:

```css
button:hover {
  filter: brightness(1.25);
}
```

- Playing with the box-shadow property and position:relative, I have managed to create the clicking effect for the buttons:

```css
button:active {
  box-shadow: none;
  position: relative;
  top: 4px;
}
```

#### Javascript

Learned about localStorage, getItem and setItem.

```js
// "theme" is the key and currentTheme variable will be the value.
const storeTheme = function (currentTheme) {
  localStorage.setItem("theme", currentTheme);
};

// Get the item from local storage with the key "theme"
const activeTheme = localStorage.getItem("theme");
```

### Continued development

- I need to expand my knowledge of CSS and get used to it's libraries/frameworks.
- I want to start doing projects in React/ React Native.

### Useful resources

- [Kevin Powell's How to create a theme switcher with HTML & CSS video](https://www.youtube.com/watch?v=fyuao3G-2qg&ab_channel=KevinPowell) - I learned nearly everything that I need to know for this project's theme switch part from this video. Kevin is a great guy and a great teacher! He is my CSS guy from this point on.
- [Web Dev Simplified videos](https://www.youtube.com/@WebDevSimplified) - Kyle's videos helped me refresh my memory about various topics. I watch him all the time to learn new stuff and refresh my knowledge!
- [CSS Grid Attack](https://codingfantasy.com/games/css-grid-attack) - Most of my CSS grid knowledge comes from this game that I have played some before starting the project.

## Author

- Frontend Mentor - [@omeryaz](https://www.frontendmentor.io/profile/omeryaz)
