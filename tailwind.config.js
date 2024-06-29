/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(0, 100%, 74%)",
        "primary-green": "hsl(154, 59%, 51%)",
        "accent-blue": "hsl(248, 32%, 49%)",
        "neutral-dark-blue": "hsl(249, 10%, 26%)",
        "neutral-greyish-blue": "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui"],
      },
      backgroundImage: {
        "bg-desktop": "url('/images/bg-intro-desktop.png')",
        "bg-mobile": "url('/images/bg-intro-mobile.png')",
      },
    },
  },
  plugins: [],
};
