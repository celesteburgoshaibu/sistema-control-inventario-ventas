module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        // Agrega colores personalizados
        primary: '#FF4500',
        secondary: '#008080',
      },
      fontSize: {
        // Agrega tamaños de fuente adicionales
        '7xl': '5rem',
      },
      spacing: {
        // Agrega márgenes personalizados
        '72': '18rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // ...
    fontSize: true,
    // ...
  }
}

