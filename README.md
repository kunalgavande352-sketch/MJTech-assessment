# MJTech

Static wellness research and tools platform built with modern HTML, CSS, and vanilla JavaScript — zero build steps and no backend required.

## Project Structure

```
MJTech/
├── index.html                 Home, briefing, vitality quiz
├── pages/
│   ├── tools.html             Four in-browser wellness tools
│   ├── guides.html            Searchable 12-guide library
│   ├── guide.html             Individual guide (query string ?id=)
│   ├── about.html             Editorial standards & mission
│   └── contact.html           Contact form (client-side validation)
├── assets/
│   ├── css/styles.css         Shared visual system
│   ├── js/                    Interactions per page
│   └── images/logo.svg        MJTech brand mark
├── .gitignore
└── README.md
```

## Run Locally

Open `index.html` directly in any web browser, or run a local HTTP server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Features Included

- Responsive shared navigation, mobile drawer menu, and unified footer
- Home vitality reflection (5 questions, zero storage)
- 4 interactive wellness tools: metabolic reflection, circadian sleep-window estimator, hydration planner, and visit checklist
- Health guide library with live search, keyword filters, and dynamic article reader
- Client-side contact validation

Pages provide evidence-informed health information, not medical advice.
