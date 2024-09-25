/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "fontShare":['"Satoshi", sans-serif'],
        "googleFont":['"Oswald", sans-serif'],
        "rubik":['"Rubik", sans-serif'],
        "inter":['"Inter", sans-serif'],
      },
      backgroundImage:{
        "bannerImg":"url(./public/banner.png)",
        "vectorSmall":"url(./public/vectorSmall.png)",
        "vectorBig":"url(./public/vectorBig.png)",
        "casual":"url(./public/casual.png)",
        "formal":"url(./public/formal.png)",
        "party":"url(./public/party.png)",
        "gym":"url(./public/gym.png)"
      },
      animation:{
        'spin-one':'spin 15s linear infinite',
        'spin-two':'spin 5s linear infinite alternate-reverse',
        'spin-three':'spin 15s linear infinite reverse',
        'spin-four':'spin 5s linear infinite alternate-reverse',
        'bounce-one':'bounce 0.5s infinite',
        'bounce-two':'bounce 0.5s infinite 0.1s',
        'bounce-three':'bounce 0.5s infinite 0.2s'
      }
    },
  },
  plugins: [],
}

