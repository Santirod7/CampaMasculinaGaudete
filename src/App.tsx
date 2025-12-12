// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Pagos from './components/pages/Pagos';
import SplashScreen from './components/pages/SplashScreen';
import WhatsAppButton from './components/ui/WhatsAppButton';
import QuienesSomos from './components/pages/QuienesSomos';
import Suministros from './components/pages/Suministros';
import BackgroundMusicPlayer from './components/ui/BackgroundMusicPlayer';
// Importaremos las otras páginas a medida que las creemos
// import Pagos from './pages/Pagos'; 

function App() {
  const [showSplash, setShowSplash] = useState(true);


  if (showSplash) {
    return <SplashScreen onFinished={() => setShowSplash(false)} />;
  }
  return (
    
    <Router>
    <div className="flex flex-col min-h-screen">

      <Header />  

      <main className="flex-grow">
      <Routes>
        {/* Cuando la ruta es "/", muestra tu diseño de Inicio */}
      <Route path="/" element={<Inicio />} />
      <Route path="/centro-de-informacion" element={<QuienesSomos />} />
      <Route path="/pagos" element={<Pagos />} />
      <Route path="/preparacion" element={<Suministros />} />
        {/* Aquí agregaremos las otras secciones en el futuro */}
        {/* <Route path="/pagos" element={<Pagos />} /> */}
      </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackgroundMusicPlayer />
    </div>      
    </Router>
  );
}

export default App;