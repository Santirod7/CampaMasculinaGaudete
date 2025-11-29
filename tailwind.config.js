export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",        // Busca dentro de src
    "./components/**/*.{js,ts,jsx,tsx}", // Busca dentro de components (por si acaso)
    "./*.{js,ts,jsx,tsx}",               // Busca archivos sueltos en la raíz (App.tsx, index.tsx)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}