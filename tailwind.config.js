/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EC",
        rice: "#F8F7F2",
        mist: "#EFEDE6",
        ink: "#2F2F2B",
        ash: "#77736A",
        line: "#C9C4B8",
        warm: "#E9D8B8",
        wood: "#B7926A",
        bluegray: "#DDE4E2",
        redbrown: "#9D6B5C"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans SC",
          "Source Han Sans SC",
          "PingFang SC",
          "Microsoft YaHei",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        hush: "0 24px 70px rgba(79, 67, 46, 0.08)"
      }
    }
  },
  plugins: []
};
