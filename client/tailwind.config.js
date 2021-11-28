module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"],
    },
    extend: {
      borderColor: (theme) => ({
        "coral-red": {
          50: "#fff5f5",
          100: "#feecec",
          200: "#fdcecf",
          300: "#fbb1b1",
          400: "#f87777",
          500: "#f53c3d",
          600: "#dd3637",
          700: "#b82d2e",
          800: "#932425",
          900: "#781d1e",
        },
      }),

      gradientColorStops: (theme) => ({
        "coral-red": {
          50: "#fff5f5",
          100: "#feecec",
          200: "#fdcecf",
          300: "#fbb1b1",
          400: "#f87777",
          500: "#f53c3d",
          600: "#dd3637",
          700: "#b82d2e",
          800: "#932425",
          900: "#781d1e",
        },
      }),
      textColor: {
        astronaut: {
          50: "#f4f5f8",
          100: "#e9ebf1",
          200: "#c8ccdd",
          300: "#a7aec8",
          400: "#66719e",
          500: "#243475",
          600: "#202f69",
          700: "#1b2758",
          800: "#161f46",
          900: "#121939",
        },
        "coral-red": {
          50: "#fff5f5",
          100: "#feecec",
          200: "#fdcecf",
          300: "#fbb1b1",
          400: "#f87777",
          500: "#f53c3d",
          600: "#dd3637",
          700: "#b82d2e",
          800: "#932425",
          900: "#781d1e",
        },
        "amethyst-smoke": {
          50: "#fafafb",
          100: "#f5f5f7",
          200: "#e6e5ec",
          300: "#d7d5e1",
          400: "#b9b6ca",
          500: "#9b97b3",
          600: "#8c88a1",
          700: "#747186",
          800: "#5d5b6b",
          900: "#4c4a58",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
