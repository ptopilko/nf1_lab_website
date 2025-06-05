# Neurofibromatosis Type 1 Research Lab Website

A modern, responsive website for the Neurofibromatosis Type 1 (NF1) Research Lab, built with React, Styled Components, and Framer Motion.

![Screenshot of the website](public/images/website-screenshot.jpg)

## Features

- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean and professional design with smooth animations
- **Accessible**: Built with accessibility in mind
- **Fast Performance**: Optimized for fast loading times
- **SEO Friendly**: Properly structured for search engines

## Technologies Used

- React 18
- React Router v6
- Styled Components
- Framer Motion (for animations)
- React Icons
- Create React App (as the build tool)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nf1-lab-website.git
   cd nf1-lab-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - Ejects from Create React App (use with caution)

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  │   ├── Header/     # Header component with navigation
  │   ├── Footer/     # Footer component
  │   └── Layout/     # Main layout wrapper
  │
  ├── pages/         # Page components
  │   ├── Home/       # Home page
  │   ├── Research/   # Research page
  │   ├── Team/       # Team page
  │   ├── Publications/ # Publications page
  │   ├── News/       # News & Updates page
  │   ├── Contact/    # Contact page
  │   └── NotFound/   # 404 page
  │
  ├── styles/        # Global styles and theme
  └── utils/          # Utility functions
```

## Customization

### Theme

You can customize the theme by modifying the `src/Theme/theme.js` file. This includes colors, fonts, breakpoints, and other design tokens.

### Content

Update the content in the respective page components in the `src/pages/` directory.

## Deployment

### Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
```

This will create a `build` directory with the production-ready files.

### Deploying to Netlify

1. Push your code to a GitHub repository
2. Sign up/Log in to [Netlify](https://www.netlify.com/)
3. Click on "New site from Git"
4. Select your repository
5. Set the build command to `npm run build` and publish directory to `build`
6. Click "Deploy site"

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
