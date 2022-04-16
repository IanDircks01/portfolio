module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        "slate-cool": {
          200: "#e6ecf0",
          300: "#d5dee6",
          400: "#bcc7d1",
          500: "#92A0AD",
          600: "#586a7a",
          700: "#3d4b59",
        },
        blue: {
          500: "#277bb1",
          700: "#1A4057",
          800: "#142B38",
        },
        green: {
          700: "#118242",
        },
      },
      colors: {
        blue: {
          100: "#F5F8FA",
          200: "#E9EFF5",
          300: "#C7E2F2",
          400: "#7CB7D6",
          500: "#065DFF",
          700: "#1A4057",
          800: "#142B38",
        },
        green: {
          500: "#4DBE7E",
        },
        "slate-cool": {
          100: "#F0F3F5",
          200: "#E6ECF0",
          300: "#D5DEE6",
          400: "#BCC7D1",
          500: "#92A0AD",
          600: "#586A7A",
          700: "#3D4B59",
          800: "#2B3947",
          900: "#1D2A36",
        },
        "blue-500-slate-cool-400-mix": {
          450: "#588DEA",
        },
        "slate-neutral": {
          200: "#EBECED",
          500: "#A3A9AD",
        },
        "gradient-2": "#093483",
      },
      spacing: {
        13: "3.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
