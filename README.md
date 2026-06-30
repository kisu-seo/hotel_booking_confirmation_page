# Hotel booking confirmation page

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### Screenshot

![Project Screenshot](./browser_extensions_manager_ui_1.png)

### Links

- Solution URL: [Solution URL](https://github.com/kisu-seo/browser_extension_manager_ui)
- Live Site URL: [Live URL](https://kisu-seo.github.io/browser_extension_manager_ui/)

## My process

### Built with

- **Semantic HTML5 & Accessibility (A11y)** — Structured with semantic tags (`<header>`, `<main>`, `<aside>`, `<nav>`, `<article>`, `<section>`) and ARIA attributes (`aria-label`) for screen reader support. All interactive controls are keyboard-accessible with visible `focus-visible` indicators.
- **Vanilla CSS — Flexbox & Responsive Design** — Framework-free styling using Flexbox for all layouts. Mobile-first approach with `@media (min-width: 768px)` (tablet) and `@media (min-width: 1024px)` (desktop) breakpoints.
- **CSS Custom Properties (Design Tokens)** — Centralized color palette (20 tokens), border radius (10 tokens), and spacing scale (19 tokens) defined in `:root` and referenced throughout.
- **Typography System** — 11 preset utility classes (`text-preset-1` through `text-preset-11`) using three Google Fonts families: Fraunces (display/serif), DM Sans (UI/body), and DM Mono (labels/monospace).
- **CSS Transitions & Animations** — Sidebar slide-in with `cubic-bezier` easing, card fan-out hover effect using `rotate` transforms, and a sun icon reveal animation — all GPU-accelerated via `transform` and `opacity`.
- **Vanilla JavaScript (ES2022+)** — Framework-free DOM interactions: sidebar toggle with body scroll lock, and Wi-Fi password copy using the `navigator.clipboard` API with a `document.execCommand` fallback for older browsers.
- **Vite 5** — Used as the local development server and bundler (`npm run dev` / `npm run build`).


## Author

- Website - [Kisu Seo](https://github.com/kisu-seo)
- Frontend Mentor - [@kisu-seo](https://www.frontendmentor.io/profile/kisu-seo)
