// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      customBlue: '#1E40AF',
      customGreen: '#10B981',
      customGray: '#1D1D1D',
      customWhite:'#CCCBCB',
    },
    transitionProperty: {
      'flex-grow': 'flex-grow',
    },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #f00, #f0f, #00f)', // Customize your gradient colors
      },
      backgroundClip: {
        text: 'text',
      },
    },
    variants: {
      extend: {
        flexGrow: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
}
