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
      keyframes:{
        FadeIn:{
          "0%":{opacity: 0},
          "100":{opacity:100}
        },
        FlipOut:{
          "0%":{transform:'perspective(400px) rotateX(0deg)',opacity:'1'},
          "100%":{transform:'perspective(400px) rotateX(90deg)',opacity:'0'}
        },
        SlideOutRight:{
          "0%":{transform: "translateX(17.5%)"},
          "50%":{transform: "translateX(5%)"},
          "100%":{transform: "translateX(100%)"}
        }
      },
      animation:{
        'spin-one':'spin 15s linear infinite',
        'spin-two':'spin 5s linear infinite alternate-reverse',
        'spin-three':'spin 15s linear infinite reverse',
        'spin-four':'spin 5s linear infinite alternate-reverse',
        'bounce-one':'bounce 0.5s infinite',
        'bounce-two':'bounce 0.5s infinite 0.1s',
        'bounce-three':'bounce 0.5s infinite 0.2s',
        'FadeIn': "FadeIn 0.3s ease-in-out",
        'FlipOut':"FlipOut 0.3s ease-in-out forwards",
        "SlideOutRight" : "SlideOutRight 0.5s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}

