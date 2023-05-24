/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    "colors": {
      "vert": "#bcd46e",
      "orange": "#be7015",
      "jaune fonce": "#efdd7d",
      "beige": "#f7f8c4",
      "fond": "#faebda",
      "fond footer": "#ffffff"
     },
     "fontSize": {
      "xs": "0.375rem",
      "sm": "0.5rem",
      "base": "0.625rem",
      "lg": "0.6875rem",
      "xl": "0.8125rem",
      "2xl": "0.9375rem",
      "3xl": "2.5rem",
      "4xl": "6.25rem"
     },
     "fontFamily": {
      "unbounded": "Unbounded",
      "mulish": "Mulish",
      "bebas-neue": "Bebas Neue",
      "inter": "Inter"
     },
     "borderRadius": {
      "none": "0",
      "xs": "0.3125rem",
      "sm": "0.53125rem",
      "default": "0.625rem",
      "lg": "0.65625rem",
      "xl": "0.9375rem",
      "2xl": "1rem",
      "3xl": "1.25rem",
      "4xl": "1.375rem",
      "5xl": "1.5625rem",
      "6xl": "1.625rem",
      "7xl": "1.78125rem",
      "8xl": "2.0625rem",
      "9xl": "2.09375rem",
      "10xl": "2.25rem",
      "11xl": "2.5rem",
      "12xl": "2.625rem",
      "13xl": "2.84375rem",
      "14xl": "2.9375rem",
      "15xl": "3.3125rem",
      "16xl": "3.375rem",
      "17xl": "3.4375rem",
      "18xl": "3.5rem",
     },

    extend: {},
  },
  plugins: [],
}