/// <reference types="vite/client" />

// --- ESTA ES LA PARTE MÁGICA ---
// Le decimos a TypeScript que cuando vea un archivo que termina en .jpg, .png, etc.,
// lo trate como un módulo que exporta un string (la ruta de la imagen).

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}