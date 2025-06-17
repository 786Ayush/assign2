/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use CSS variables provided by next/font/google
        poppins: "var(--font-poppins)",
        syne: "var(--font-syne)",
      },
    },
  },
  // If you want to use the class strategy explicitly:
  // mode: 'class',
};
