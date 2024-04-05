/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(246, 80%, 60%)",
         LightRed/* (work) */:  "hsl(15, 100%, 70%)",
         SoftBlue /* (play) */:" hsl(195, 74%, 62%)",
         LightRed /* (study) */: "hsl(348, 100%, 68%)",
         LimeGreen /* (exercise) */: "hsl(145, 58%, 55%)",
         Violet /* (social) */: "hsl(264, 64%, 52%)",
         SoftOrange /* (self care) */: "hsl(43, 84%, 65%)",
 
       /* ### Neutral*/
         VeryDarkBlue: "hsl(226, 43%, 10%)", 
         DarkBlue:" hsl(235, 46%, 20%)",
         DesaturatedBlue: "hsl(235, 45%, 61%)",
         PaleBlue: "hsl(236, 100%, 87%)"
 
       },
       maxHeight: {
        "1/4": "25%", 
        "1/2" : "50%",
        "3/4" : "75%",
       },
       minWidth:  {
        "1/4": "25%", 
        "1/2" : "50%",
        "3/4" : "75%"
       },
    },
  },
  plugins: [],
}