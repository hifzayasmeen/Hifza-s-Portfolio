# Hifza Yasmeen | Personal Portfolio

Three-page portfolio website for **Web Technologies, BSCS Semester 5, Assignment 2** (topic: Personal Portfolio).

- **Name:** Hifza Yasmeen
- **Roll number:** _add your roll number_
- **Section:** _add your section_
- **GitHub repository:** https://github.com/hifzayasmeen/Hifza-s-Portfolio
- **Live website:** https://hifza-s-portfolio-delta.vercel.app

## Pages and CSS methods

| File | Purpose | CSS method |
|------|---------|-----------|
| `index.html` | Home: introduction, skills, current work | Inline (`style` attributes) |
| `information.html` | Projects and services: article, aside, table, video, audio | Embedded (`<style>` in `<head>`) |
| `registration.html` | Project inquiry form | External (`style.css`) |

Media: `images/workflow.svg`, `media/rag-pipeline-demo.mp4`, `media/intro-chime.mp3` and `media/intro-chime.ogg`.

## Website features

- Responsive portfolio layout with a consistent color palette, clear navigation and project-focused sections.
- Search the selected-projects table by project name, category or tool.
- The inquiry form validates required fields, shows a live description character count and prepares a message in the visitor's email app. It does not send or store form data on a server; the visitor reviews and sends the email themselves.
- Keyboard focus indicators, semantic landmarks, labeled form controls and reduced-motion support.

## Explanation

CSS (Cascading Style Sheets) controls how HTML content looks: colors, fonts, spacing and layout. Its main benefits are separating content from presentation, keeping a consistent design across pages, and making updates easy, because one change can restyle many elements.

A CSS rule has a selector, a property and a value. In my website, `.tag { color: #2A2370; }` uses the class selector `.tag`, the property `color` and the value `#2A2370`.

Inline CSS uses the `style` attribute on one element, as on my home page. It is quick but hard to reuse. Embedded CSS sits in a `<style>` element in the `<head>`, as on my information page, and styles one page. External CSS lives in a separate file such as `style.css`, linked from my registration page, and can be shared by many pages and cached by the browser.

CSS1 (1996) introduced basic fonts, colors and margins. CSS2 (1998) added positioning, media types and table styling, and CSS2.1 (2011) fixed errors and became a stable base. Modern CSS is split into independent modules, such as Flexbox, Grid, Selectors and Custom Properties, which evolve separately.

Browser support matters because browsers can render the same code differently, and unsupported features may fail. I tested in Google Chrome and Mozilla Firefox to confirm my layout, form validation and media controls behave consistently.

Semantic HTML example: `<article id="featured-project">` in `information.html` tells browsers and assistive technology that the content is a self-contained piece. Non-semantic example: `<div class="field">` in `registration.html` only groups a label and input for styling and has no meaning of its own.

## Validation

Run the pages through the Nu HTML Checker (the engine behind https://validator.w3.org/) after editing. Save validation screenshots in `screenshots/`:

- `screenshots/validation-index.png`
- `screenshots/validation-information.png`
- `screenshots/validation-registration.png`

## Form testing

Use dummy data. Check that the form opens an email draft (it does not send automatically) and record what you see.

| Test | Expected result | Result |
|------|-----------------|--------|
| Submit with required fields empty | Browser blocks submission and flags the first missing field | |
| Enter an invalid email (`abc`) | Browser asks for a valid email address | |
| Type in the project description | Character counter updates up to 600 characters | |
| Submit a valid inquiry | Email app opens a prefilled draft for review; nothing is sent automatically | |
| Reset the form | Fields and character counter clear | |

## Browser testing

| Feature | Browser 1 | Browser 2 |
|---------|-----------|-----------|
| Browser and version | | |
| Navigation and layout | | |
| Video and audio playback | | |
| Form validation messages | | |
| Differences noticed | | |
