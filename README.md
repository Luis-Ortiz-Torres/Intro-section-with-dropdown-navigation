# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto:good,w_900/Challenges/zp74vhrxan0bpg43z2uu.jpg)

### Links

- Solution URL: [Solution URL here](https://github.com/Luis-Ortiz-Torres/Intro-section-with-dropdown-navigation)
- Live Site URL: [Live site URL here](https://luis-ortiz-torres.github.io/Intro-section-with-dropdown-navigation/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript

### What I learned

Mainly I learned how to make a responsive dropdown menu with html, css and javascript.  
I also learned a bit about CSS Grid with areas to create layouts.

```css
.main__grid{
    display: grid;
    grid-auto-columns: 5% 1fr 5%;
    grid-template-areas: 
    "img img img"
    ".   text  .";
}

.main__article{
    grid-area: text;
}

.main__picture{
    grid-area: img;
}
```

## Author

- Frontend Mentor - [@Luis-Ortiz-Torres](https://www.frontendmentor.io/profile/Luis-Ortiz-Torres)
- Github - [Luis-Ortiz-Torres](https://github.com/Luis-Ortiz-Torres)
