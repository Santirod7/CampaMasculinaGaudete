// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Pagos from './components/pages/Pagos';
// Importaremos las otras páginas a medida que las creemos
// import Pagos from './pages/Pagos'; 

function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">

      <Header />  

      <main className="flex-grow">
      <Routes>
        {/* Cuando la ruta es "/", muestra tu diseño de Inicio */}
      <Route path="/" element={<Inicio />} />
      <Route path="/pagos" element={<Pagos />} />
        {/* Aquí agregaremos las otras secciones en el futuro */}
        {/* <Route path="/pagos" element={<Pagos />} /> */}
      </Routes>
      </main>
      <Footer />
    </div>      
    </Router>
  );
}

export default App;