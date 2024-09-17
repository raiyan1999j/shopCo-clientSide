/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "fontShare":['"Satoshi", sans-serif'],
        "googleFont":['"Oswald", sans-serif']
      },
      backgroundImage:{
        "bannerImg":"url(./public/banner.png)",
        "vectorSmall":"url(./public/vectorSmall.png)",
        "vectorBig":"url(./public/vectorBig.png)"
      }
    },
  },
  plugins: [],
}

