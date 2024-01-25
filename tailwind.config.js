/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-colour": "var(--background-colour)",
        icon: "var(--icon)",
        "inactive-1": "var(--inactive-1)",
        "internal-tool-background": "var(--internal-tool-background)",
        "primary-color-digital-bank": "var(--primary-color-digital-bank)",
        "primarymain-blue": "var(--primarymain-blue)",
        "text-1": "var(--text-1)",
        "text-3": "var(--text-3)",
        "text-h1": "var(--text-h1)",
      },
      fontFamily: {
        "body-text-light": "var(--body-text-light-font-family)",
        heading: "var(--heading-font-family)",
        "internal-tool-nav": "var(--internal-tool-nav-font-family)",
        "internal-tool-subheading": "var(--internal-tool-subheading-font-family)",
      },
      boxShadow: {
        NATID: "var(--NATID)",
      },
    },
  },
  plugins: [],
};
