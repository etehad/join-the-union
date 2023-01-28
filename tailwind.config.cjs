const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      sans: ['IRANSansX', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {
      width: {
        a4: '210mm',
        a5: '148mm',
      },
      height: {
        a4: '297mm',
        a5: '210mm',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 'bold',
              fontSize: '1.9em',
            },
            ol: {
              paddingLeft: 0,
              paddingRight: '1.625em',
              li: {
                paddingLeft: 0,
                paddingRight: '0.375em'
              }
            },
            ul: {
              paddingLeft: 0,
              paddingRight: '1.625em',
              li: {
                paddingLeft: 0,
                paddingRight: '0.375em'
              }
            },
          },
        },
      },
    },
  },

  plugins: [forms, typography],
}

module.exports = config
