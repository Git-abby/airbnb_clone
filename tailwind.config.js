/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // "hero-pattern": "url('/img/hero-pattern.svg')",
        // "footer-texture": "url('/img/footer-texture.png')",
        "banner": "url('/src/images/Banner.webp')",
      },
    },
  },
  plugins: [],
};
