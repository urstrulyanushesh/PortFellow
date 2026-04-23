/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#ed69ff",
        "on-tertiary-fixed": "#320032",
        "error-container": "#a70138",
        "primary-fixed": "#ed69ff",
        "secondary": "#af88ff",
        "primary-dim": "#ec63ff",
        "secondary-container": "#6001d1",
        "inverse-primary": "#a300bb",
        "secondary-fixed": "#dcc9ff",
        "on-primary-fixed-variant": "#51005d",
        "on-secondary-fixed": "#430097",
        "tertiary": "#ff51fa",
        "surface-container-high": "#201f1f",
        "tertiary-dim": "#ff51fa",
        "on-error-container": "#ffb2b9",
        "on-error": "#490013",
        "surface-tint": "#f382ff",
        "error-dim": "#d73357",
        "background": "#0e0e0e",
        "on-tertiary": "#400040",
        "surface-bright": "#2c2c2c",
        "inverse-surface": "#fcf8f8",
        "on-surface-variant": "#adaaaa",
        "surface-container-highest": "#262626",
        "surface-dim": "#0e0e0e",
        "surface": "#0e0e0e",
        "primary-fixed-dim": "#e451f9",
        "on-background": "#ffffff",
        "on-secondary-fixed-variant": "#6514d6",
        "on-secondary-container": "#e1d0ff",
        "on-tertiary-container": "#230023",
        "on-secondary": "#2b0065",
        "on-primary-container": "#41004c",
        "surface-variant": "#262626",
        "on-tertiary-fixed-variant": "#6a006a",
        "outline": "#777575",
        "primary": "#f382ff",
        "secondary-fixed-dim": "#d0b8ff",
        "surface-container-low": "#131313",
        "on-primary": "#540061",
        "surface-container-lowest": "#000000",
        "tertiary-container": "#fe00fe",
        "secondary-dim": "#8a4cfc",
        "tertiary-fixed-dim": "#ff61f8",
        "outline-variant": "#494847",
        "error": "#ff6e84",
        "on-surface": "#ffffff",
        "tertiary-fixed": "#ff81f5",
        "inverse-on-surface": "#565554",
        "surface-container": "#1a1919",
        "on-primary-fixed": "#000000"
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Space Grotesk"],
        body: ["Inter"],
        label: ["Inter"]
      }
    }
  }
}
