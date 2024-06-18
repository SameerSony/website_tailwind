// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #f00, #f0f, #00f)', // Customize your gradient colors
      },
      backgroundClip: {
        text: 'text',
      },
    },
  },
  plugins: [],
}
