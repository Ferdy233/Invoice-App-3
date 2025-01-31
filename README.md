# Invoice App

A React application for managing invoices, built with TypeScript and Vite.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository: `git clone https://github.com/Ferdy233/invoice-app.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`

## Features

* User authentication and authorization
* Invoice creation and management
* Filtering and sorting of invoices
* Responsive design for mobile and desktop devices

## Technologies Used

* React
* TypeScript
* Vite
* Redux Toolkit
* React Router DOM
* Sonner for toast notifications

## ESLint Configuration

This project uses ESLint for code linting and formatting. To configure ESLint, follow these steps:

1. Install the required plugins: `npm install eslint-plugin-react` or `yarn add eslint-plugin-react`
2. Update the ESLint configuration file: `eslint.config.js`

```javascript
export default {
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
}