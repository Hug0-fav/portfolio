/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This is to enable Tailwind CSS to purge unused styles -- to tell it where the files are.
    // Specify the paths to all of your template files
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      text: {
        primary: {
          100: "text-slate-100",
        },
        secondary: "text-slate-400",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: { "@tailwindcss/postcss": {} },
};
