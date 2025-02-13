// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // For React/Vite
    ],
    theme: {
      extend: {
        colors: {
          primary: "#008080",  // Custom teal color
          secondary: "#F4E1D2", // Custom light sand color
          accent: "#FFD700",   // Mustard yellow
          dark: "#004d40",     // Forest green
        },
        fontFamily: {
          outfit: ["Outfit", "sans-serif"],
          pacifico: ["Pacifico", "cursive"],
        },
      },
    },
    plugins: [],
  };
  