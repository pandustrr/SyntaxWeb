/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
<<<<<<< HEAD
          blue: "#22D3EE",
          cyan: "#22D3EE",
=======
          maroon: "#4c0519", // rose-900
          red: "#dc2626", // red-600
          orange: "#f97316", // orange-500
>>>>>>> a316ab4802c9de0f5bd06de45ab4442322c3ec35
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
