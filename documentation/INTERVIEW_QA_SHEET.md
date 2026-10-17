# MJTech — Interview Quick Revision Sheet (Q&A Cheat Sheet)


---

## ⚡ Quick Project Facts 

- **Project Name**: MJTech (Wellness Research & Interactive Health Utilities)
- **Architecture**: Multi-Page Application (MPA), 100% Client-Side, Zero-Build
- **Primary Tech Stack**: Semantic HTML5, Modern CSS3 (Grid & Flexbox), Vanilla JavaScript (ES6+), SVG Vector Graphics
- **External Dependencies**: **Zero (0)** — No React, No jQuery, No Bootstrap, No Tailwind, No NPM build steps
- **Number of Pages**: 6 Pages (`index.html`, `tools.html`, `guides.html`, `guide.html`, `about.html`, `contact.html`)
- **Key Tools**: 4 interactive calculators (Circadian Sleep Window, Hydration Planner, Metabolic Reflection, Habit Checklist)
- **Library Content**: 12 categorized science-backed research guides with live search & filtering
- **Performance**: 100/100 Lighthouse Performance, First Contentful Paint < 200ms, Total bundle < 80KB
- **Privacy Standard**: Zero server logging, Zero database persistence, in-memory client calculation only

---

## 🎯 Top 10 Technical Questions & Direct Answers

### 1. "How did you structure this project?"
> *"I designed it as a clean modular multi-page application. Shared stylesheets and utility scripts are centralized in `assets/css/` and `assets/js/`. Page-specific logic is segregated: `home.js` handles the homepage reflection quiz, `tools.js` manages algorithmic calculators, and `guides.js` manages the in-memory dataset, search, and dynamic routing."*

### 2. "Why not use React for this application?"
> *"React is fantastic for high-frequency state updates and large interactive components. However, for a content-driven research platform with focused interactive tools, adding React would introduce 150KB+ of runtime overhead and hydration delays without tangible benefit. Vanilla JS gave me instant loading, 100% control over DOM events, zero build pipeline dependencies, and optimal Lighthouse scores."*

### 3. "Explain the algorithm behind the Circadian Sleep Window tool."
> *"The challenge is backward time calculation across midnight. I parse the wake time into minutes from midnight (`hours * 60 + minutes`), subtract target sleep minutes and fall-asleep latency. To prevent negative minutes when crossing midnight, I use modulo 1440 arithmetic: `((totalMinutes % 1440) + 1440) % 1440`. Then I pad hours and minutes to a clean `HH:MM` 24-hour string."*

### 4. "How did you build the live search and filter without third-party libraries?"
> *"In `guides.js`, 12 guide objects are stored in an array. When an input event fires on the search field or a category chip is toggled, an `apply()` function filters the array using standard `Array.prototype.filter()`. It checks if `guide.category === activeCategory` and performs a case-insensitive `indexOf()` lookup against a concatenated string of `title + summary`. The filtered array is immediately mapped to HTML template strings and inserted via `innerHTML`."*

### 5. "How does `guide.html` display 12 different articles with only one HTML file?"
> *"It uses client-side parameter routing. When a user clicks a guide card, it links to `guide.html?id=guide-id`. In `guides.js`, `new URLSearchParams(window.location.search).get('id')` extracts the ID, looks up the corresponding object in `GUIDES`, updates `document.title`, and injects the article body and sources into the DOM. If the ID is missing or invalid, it gracefully falls back to the default guide."*

### 6. "How did you ensure responsive design across devices?"
> *"I used a mobile-first philosophy built entirely with native CSS:
> - CSS Grid with auto-fit and fractional units (`grid-template-columns: 1.4fr 1fr 1fr 1fr` on desktop collapsing to `1fr` on mobile).
> - Flexbox with wrapping for navigation and filter chips.
> - Breakpoints at `980px` (tablet) and `768px` (mobile).
> - An accessible mobile drawer menu toggled by JavaScript updating `aria-expanded` and CSS classes."*

### 7. "How did you handle security and XSS in user notes?"
> *"In the Preventive Habit Planner, users can type custom notes for their doctor visit. When injecting this note into the DOM, I sanitize it by replacing `<` with `&lt;` (`notes.replace(/</g, '&lt;')`), preventing malicious script tag injection."*

### 8. "How did you implement the clipboard copy functionality?"
> *"I used the modern asynchronous `navigator.clipboard.writeText(out.innerText)`. To provide clear UI feedback, the button text changes from 'Copy list' to 'Copied' upon resolution, and a `setTimeout()` resets the label back after 1.6 seconds."*

### 9. "What is CSS Custom Properties usage in your styles?"
> *"In `:root`, I centralized our design tokens:
> `--bg`, `--paper`, `--ink`, `--plum` (primary brand color `#6b4a55`), `--sage`, `--shadow`, and `--radius`. This ensures design consistency, makes future re-theming effortless, and eliminates repeated hardcoded hex values."*

### 10. "How is data handled for user privacy?"
> *"All forms intercept submit events with `event.preventDefault()`. Calculations execute in browser memory and output directly to the UI. No data is sent over the network, no tracking cookies are set, and no health information is written to `localStorage`."*

---

## 👔 Behavioral & Project Experience Questions

### "What was the most difficult bug or challenge you faced in this project?"
> *"The trickiest challenge was time normalization across midnight in the sleep calculator. Initially, wake times early in the morning (like 5:00 AM) resulted in negative minute values when subtracting 8 hours and latency. A simple `Math.abs()` produced incorrect times. Resolving this required deriving the circular buffer formula `((totalMinutes % 1440) + 1440) % 1440`, which elegantly handles single and multi-day rollovers in one line of math."*

### "What would you do differently if you started over?"
> *"I would structure the guide data into a separate JSON file loaded via `fetch()` with Service Worker caching to demonstrate asynchronous data fetching and progressive web app capabilities, while keeping the core zero-build philosophy intact."*
