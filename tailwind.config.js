/** @type {import('tailwindcss').Config} */


const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'army': {
          '50': '#f4f4f1',
          '100': '#e8e8df',
          '200': '#d3d3c3',
          '300': '#b7b79f',
          '400': '#9b9c7f',
          DEFAULT: '#717257',
          '600': '#63654b',
          '700': '#4e4f3c',
          '800': '#404133',
          '900': '#38392e',
          '950': '#1d1d16',
        },
        'peach': {
          '50': '#fef4ee',
          '100': '#fee4d6',
          '200': '#fbc6ad',
          '300': '#f89f79',
          DEFAULT: '#f5724a',
          '500': '#f1461e',
          '600': '#e32d13',
          '700': '#bc1f12',
          '800': '#951b17',
          '900': '#781a16',
          '950': '#410909',
        },
        'beige': {
          '50': '#f8f7f4',
          '100': '#efeee5',
          '200': '#dfdbc9',
          DEFAULT: '#cac3a6',
          '400': '#b4a783',
          '500': '#a5936a',
          '600': '#98835e',
          '700': '#7f6b4f',
          '800': '#685844',
          '900': '#554839',
          '950': '#2d261d',
        },
        'mist': {
          '50': '#f6f6ef',
          DEFAULT: '#e2e4cd',
          '200': '#d7dabc',
          '300': '#bcc393',
          '400': '#a3ab70',
          '500': '#869052',
          '600': '#68713f',
          '700': '#515833',
          '800': '#42472d',
          '900': '#393e29',
          '950': '#1d2013',
        },
        'fog': {
          '50': '#f3f6f4',
          '100': '#e3e8e3',
          '200': '#c8d2c9',
          DEFAULT: '#a1b1a4',
          '400': '#798e7d',
          '500': '#5a6f5f',
          '600': '#445749',
          '700': '#36463a',
          '800': '#2d3830',
          '900': '#252f28',
          '950': '#141a16',
        },
      },
      textShadow: {
        sm: '1px 1px 1px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 2px var(--tw-shadow-color)',
        lg: '8px 8px 16px var(--tw-shadow-color)',
      }
    },
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
