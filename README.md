# Sophia Tan's Personal Website

A modern, responsive personal website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Blog section for sharing thoughts and insights
- Project showcase
- Contact form
- About section with professional background

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Create React App

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/thesophiatan/personalsite.git
```

2. Install dependencies:
```bash
cd personalsite
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

The site can be deployed to any static hosting service. For GitHub Pages:

1. Install gh-pages:
```bash
npm install --save gh-pages
```

2. Add the following to package.json:
```json
"homepage": "https://thesophiatan.github.io/personalsite",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## License

This project is licensed under the MIT License - see the LICENSE file for details. 