# GithubSearch

![GithubSearch](https://github-searches.netlify.app/logo.svg)

> Find your GitHub repositories and organizations effortlessly.

## Preview

![Github Search](./screenshots/GithubSearch.png)
![Repos](./screenshots/repos.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/github-searches/deploy-status)](https://github-searches.netlify.app/)
[![CI status](https://github.com/rahulrajdahal/GithubSearch/actions/workflows/test.yml/badge.svg)](https://github.com/rahulrajdahal/GithubSearch/actions)

**[Visit the Live Application](https://github-searches.netlify.app/)**

---

## 📖 Walkthrough: What does this application do?

GithubSearch is a highly-optimized, modern web application designed to help you quickly look up GitHub users, their repositories, and organizations.

**Key Features:**

- **Lightning Fast Searches:** Built with React and structured around efficient data fetching and rendering.
- **Optimized Performance:** Utilizes strictly memoized components (`React.memo`) and image `lazy` loading to ensure maximum rendering speed, even when displaying thousands of repositories.
- **Automated Code Splitting:** Heavy subcomponents and page chunks are automatically code-split dynamically through `React.lazy` and `Suspense`, granting you instant Time-to-Interactive metrics.
- **Fully SEO Compliant:** Generates proper Opengraph identifiers, `robots.txt`, `sitemap.xml`, and adheres to web semantics to be search-engine ready from day one.

## 🏗 Installation & Local Setup

### 1. Clone the repository

```sh
git clone https://github.com/rahulrajdahal/GithubFinder.git
cd GithubFinder
```

### 2. Install Dependencies

You can use `npm`, `yarn`, or `pnpm`.

```sh
npm install
```

### 3. Run Development Server

```sh
npm run dev
```

Visit `http://localhost:5173` to view the application in your browser.

---

## 🧪 Testing and CI/CD

This application is thoroughly tested using **Vitest** and **React Testing Library**. A GitHub Actions workflow runs all tests automatically upon any Pull Request to the `main` branch to guarantee flawless merges.

### Run Tests Locally

```sh
# Run Unit Tests
npm run test:unit

# Run Component tests
npx vitest run --project=component
```

## 🚀 Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── test.yml       # CI/CD Action file
├── public/                # Static assets, robots, and sitemap.xml
├── src/
│   ├── assets/            # SVG icons and visual assets
│   ├── components/        # Memoized, reusable UI components (UserCard, Button, SearchInput)
│   ├── hooks/             # Custom React Hooks
│   ├── pages/             # Lazy-loaded page view structure
│   ├── utils/             # Helper utilities and API handlers
│   └── App.tsx            # Main application root and layout boundary
├── index.html             # Document source initialized with SEO standard headers
├── package.json           # NPM configuration, dependencies, and action scripts
└── vite.config.ts         # Vite bundler structure and Vitest parameters
```

## 🧞 Available Script Commands

All commands are run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs all project dependencies.               |
| `npm run dev`       | Starts the local dev server at `localhost:5173`. |
| `npm run build`     | Builds the production bundle into `./dist/`.     |
| `npm run preview`   | Previews your production build locally.          |
| `npm run test:unit` | Runs the Vitest utility tests suite.             |
| `npm run test:ui`   | Opens the Vitest UI dashboard locally.           |

---

**Note**: _This project is a streamlined, user-friendly implementation of the GitHub API tailored for rapid querying and excellent performance._
