module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF1B79",
        secondary: "#FFEB3B",
        trustpilot: "#00B67A",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["Andika", "system-ui", "sans-serif"],
      },
      borderRadius: {
        large: "40px",
      },
      backgroundImage: {
        'rainbow': 'linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8F00FF)',
      },
    },
  },
  plugins: [],
};