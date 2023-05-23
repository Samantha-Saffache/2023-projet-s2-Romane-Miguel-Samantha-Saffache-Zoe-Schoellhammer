/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
 "colors": {
  "Vert": "#bcd46e",
  "orange": "#be7015",
  "jaune fonce": "#efdd7d",
  "beige": "#f7f8c4",
  "FOND": "#faebda",
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

    extend: {},
  },
  plugins: [],
}