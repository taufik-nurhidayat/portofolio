/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#020617",
          "primary-content": "#ffffff",
          secondary: "#64748b",
          "secondary-content": "#ffffff",
          accent: "#67CBA0",
          neutral: "#181A2A",
          "base-100": "#ffffff",
          info: "#059669",
          success: "#60a5fa",
          warning: "#fbbf24",
          error: "#dc2626",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.25rem",
        },
      },
      // {
      //   dark: {
      //     "color-scheme": "dark",
      //     primary: "#020617",
      //     secondary: "oklch(74.8% 0.26 342.55)",
      //     accent: "oklch(74.51% 0.167 183.61)",
      //     neutral: "#2a323c",
      //     "neutral-content": "#A6ADBB",
      //     "base-100": "#1d232a",
      //     "base-200": "#191e24",
      //     "base-300": "#15191e",
      //     "base-content": "#A6ADBB",
      //     "--rounded-box": "0.5rem",
      //     "--rounded-btn": "0.25rem",
      //   },
      // },
    ],
  },
  plugins: [require("daisyui")],
};
