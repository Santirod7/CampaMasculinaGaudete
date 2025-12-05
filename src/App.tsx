import React, { useState } from 'react';
import Header from './components/common/Header';
import CountdownTimer from './components/pages/CountdownTimer';
import NewsCarousel from './components/pages/NewsCarousel';
import Footer from './components/common/Footer';
import SplashScreen from './components/pages/SplashScreen';
import type { NewsItem } from '../types';

// Mock data for the news carousel
const MOCK_NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "¡Inscripciones Abiertas!",
    description: "Asegura tu lugar para el Campamento Regional 26. ¡Cupos limitados!",
    imageUrl: "https://picsum.photos/1200/800?random=1",
  },
  {
    id: 2,
    title: "Ruta de Montaña",
    description: "Hemos diseñado una nueva ruta de senderismo que te dejará sin aliento.",
    imageUrl: "https://picsum.photos/1200/800?random=2",
  },
  {
    id: 3,
    title: "Equipo de Guías",
    description: "Conoce a quienes te acompañarán en esta experiencia Gaudete.",
    imageUrl: "https://picsum.photos/1200/800?random=3",
  },
];

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Set the target date to January 9th of the next year.
  const now = new Date();
  const targetYear = now.getMonth() === 0 && now.getDate() < 9 ? now.getFullYear() : now.getFullYear() + 1;
  const targetDate = new Date(targetYear, 0, 9);

  if (showSplash) {
    return <SplashScreen onFinished={() => setShowSplash(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-light dark:bg-gray-900 text-brand-dark dark:text-gray-200 animate-main-fade-in font-sans">
      <Header />
      
      <main className="flex-grow pt-16">
        <section 
          className="
    relative 
    flex items-center justify-center text-center 
    bg-cover bg-center bg-no-repeat
    
    /* ALTURA: 80% en celular, Pantalla completa en PC */
    h-[80vh] md:h-screen
    
    /* IMAGEN DE FONDO: Usando sintaxis de Tailwind */
    bg-[url('https://picsum.photos/1920/1080?random=hero')]
    
    /* CAPA OSCURA (Overlay): Para que el texto blanco se lea bien */
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-black/50
    before:z-0
  "
>
          <div className="absolute inset-0 bg-brand-blue/70 mix-blend-multiply"></div>
          <div className="relative z-10 p-6 flex flex-col items-center">
            <h2 className="text-brand-yellow font-bold tracking-[0.2em] uppercase mb-2 text-sm md:text-lg">Campamento de Masculina Regional 2026</h2>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-6 font-heading drop-shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 stroke-text">GAUDETE</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light">
              Donde la aventura y el espíritu se encuentran.
            </p>
            <div className="p-6 bg-brand-blue/40 backdrop-blur-md rounded-xl border border-brand-yellow/30 shadow-2xl">
                <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-800 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-brand-blue dark:text-white mb-6 font-heading uppercase">
              Espíritu <span className="text-brand-yellow">Gaudete</span>
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto mb-10"></div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Campamento Gaudete no es solo un lugar, es una experiencia transformadora. Bajo el lema del Campamento Regional 26, buscamos fortalecer lazos, superar límites y celebrar la alegría de la hermandad scout.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-brand-blue transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src="https://picsum.photos/800/600?random=about1" alt="Campers around a fire" className="w-full h-full object-cover" />
                </div>
                <div className="text-left space-y-6">
                    <div className="bg-brand-light dark:bg-gray-700 p-6 rounded-xl border-l-4 border-brand-blue">
                        <h3 className="text-2xl font-bold mb-2 font-heading text-brand-yellow dark:text-brand-yellow">Nuestra Misión</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Inspirar el crecimiento personal a través de la naturaleza y el servicio comunitario.
                        </p>
                    </div>
                    <div className="bg-brand-light dark:bg-gray-700 p-6 rounded-xl border-l-4 border-brand-white">
                        <h3 className="text-2xl font-bold mb-2 font-heading text-brand-yellow dark:text-brand-white">La Experiencia</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Desafíos técnicos, fogatas llenas de mística y la construcción de un mundo mejor.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-20 md:py-32 bg-brand-blue text-white relative">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4 font-heading text-white uppercase">Nuestras Actividades</h2>
            <p className="text-center text-brand-yellow mb-16 font-semibold tracking-wider">AVENTURA SIN LÍMITES</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Pionerismo', 'Tiro con Arco', 'Senderismo Nocturno', 'Fogata Mística', 'Rastreo', 'Cocina Rústica'].map((activity, index) => (
                <div key={activity} className="group bg-brand-dark rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-brand-yellow/50">
                  <div className="relative h-48 overflow-hidden">
                    <img src={`https://picsum.photos/600/400?random=act${index}`} alt={activity} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-heading text-brand-yellow">{activity}</h3>
                    <p className="text-gray-400 text-sm">Desarrolla tus habilidades y supera tus propios límites en esta actividad diseñada para el crecimiento.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20 md:py-32 bg-brand-light dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-brand-blue dark:text-white font-heading uppercase">
                  Boletín <span className="text-brand-orange">Informativo</span>
                </h2>
                <NewsCarousel items={MOCK_NEWS_ITEMS} />
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;