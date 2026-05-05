# Rauch Rodrigues — Portfolio

A personal portfolio website built with React, showcasing my projects, skills, and experience.

🔗 **Live site:** [rauchrodrigues.in](https://rauchrodrigues.in)

---

## Features

- **Home** — Hero section with animated skill icons, avatar, and CTA buttons
- **About** — Embedded resume preview with open/download actions
- **Projects** — Filterable project cards (React & Vanilla JS) with image carousels and detail pages
- **GitHub** — Live GitHub profile stats fetched from the GitHub API
- **Contact** — EmailJS-powered contact form with toast notifications
- **Download Resume** — Fixed ribbon button that fetches and force-downloads the PDF from Firebase Storage

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 (Create React App) |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Icons | React Icons |
| Email | EmailJS |
| Styling | CSS Modules |
| Resume hosting | Firebase Storage |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Production build
npm run build
```

---

## Environment Variables

Create a `.env` file in the root (see `.env.example`):

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Project Structure

```
src/
├── assets/          # Images and skill data
├── components/      # Reusable UI components
│   ├── animated_skills/
│   ├── Carousal/
│   ├── displayprojects/
│   ├── downloadRibbon/
│   ├── footer/
│   ├── header/
│   ├── navbar/
│   ├── project/
│   ├── socialMediaIcon/
│   └── ui/
│       └── Toast/   # Reusable toast component
├── data/            # Project data
└── pages/
    ├── about/
    ├── contact/
    ├── github/
    ├── home/
    ├── projectDetails/
    └── projects/
```

---

## License

MIT — feel free to use this as inspiration for your own portfolio.


### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
