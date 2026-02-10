# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Use the local JSON data to dynamically populate the content

### Screenshot

![](/public/images/screenshots/screenshot-desktop.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- SCSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://react.dev) - JS library

### What I learned

This reminded me of SASS' super-powered mixins. I like that I can write a component-like function in CSS and reuse it.

To see how you can add code snippets, see below:

```css
@mixin theme($theme: $Light-red) {
  color: $theme;
  background-color: rgba($theme, 0.09);
}

.reaction {
  @include theme()
}
```
```js
const Tablet = ({icon,category,score}) => {
  return (
    <div className={`tablet ${category.toLowerCase()}`}>
      <div className='tablet__info'>
        <img src={icon} alt={`${category} icon`} />
        <span>{category}</span>
      </div>
      <div className='tablet__box'>
        <span className='tablet__scorebox'><strong className='tablet__score'>{score}</strong> / 100</span>
      </div>
    </div>
  );
}

export default Tablet
```

### Continued development

I would like to continue to learn SCSS in all its glory.

### Useful resources

- [Prime Inspire](https://primeinspire.com/blog/how-to-install-scss-step-by-step-beginners-guide) - This helped me with SASS installation. It is a straight forward installation guide to get you up and running, fast.

- [Official SASS - SASS Basics](https://sass-lang.com/guide/#mixins) - This helped me quickly brush up on my previous knowledge of SASS. I'd recommend it to anyone coming back to SASS.

- [Gradient Generator - Josh W Comeau](https://www.joshwcomeau.com/gradient-generator/) - Simple gradient generator for your project.

- [Neumorphism.io](https://neumorphism.io/#7e9ce2) - The simplest way to get nice shadows for your elements.

## Author

- Website - [Simon-gabriel](https://simon-gabriel.netlify.app)
- Github - [i-Strider243](https://github.com/i-Strider243)
- Frontend Mentor - [@i-Strider243](https://www.frontendmentor.io/profile/i-Strider243)
- X - [@Strider18](https://x.com/Strider18)
- LinkedIn - [@SimonGabriel](www.linkedin.com/in/gabriel-o-simon)

## Acknowledgments

I thank God for another successful project.
