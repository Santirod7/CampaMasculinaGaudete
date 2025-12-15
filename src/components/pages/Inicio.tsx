import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import NewsCarousel from './NewsCarousel'; // Importamos el componente renovado
import PaymentModal from '../ui/PaymentModal';
import VideoSection from '../ui/VideoSection';

const Inicio: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // Estado para el Modal

  // Links para el Modal
  const LINK_PLATAFORMA_PAGO = "https://link-a-tu-plataforma-de-pago.com"; 
  const LINK_FORMULARIO = "https://docs.google.com/forms/d/e/1FAIpQLSfIjhcHaiOwHOWcrbJ9SIZ2Iw9RWsfkz9q6xig81ArrI8Sjpg/viewform";

  // Configuración Fecha Contador
  const now = new Date();
  const targetYear = now.getMonth() === 0 && now.getDate() < 9 ? now.getFullYear() : now.getFullYear() + 1;
  const targetDate = new Date(targetYear, 0, 9);


  return (
    <div className="flex flex-col min-h-screen bg-brand-light dark:bg-gray-900 text-brand-dark dark:text-gray-200 animate-main-fade-in font-sans">    
      <main className="flex-grow pt-16">
        
        {/* --- HERO SECTION --- */}
        <section 
          className="
            relative 
            flex items-center justify-center text-center 
            bg-cover bg-center bg-no-repeat
            h-[80vh] md:h-screen
            bg-[url('https://img.freepik.com/foto-gratis/altas-montanas-colinas-cubiertas-bosques_181624-15442.jpg?semt=ais_hybrid&w=740&q=80')]
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

        {/* --- BOLETÍN INFORMATIVO (USANDO EL COMPONENTE) --- */}
        <section id="news" className="py-20 md:py-32 bg-brand-light dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-brand-blue dark:text-white font-heading uppercase">
                  Boletín <span className="text-brand-orange">Informativo</span>
                </h2>
                
                {/* Aquí usamos el componente y le pasamos la función para abrir el modal */}
                <NewsCarousel onOpenModal={() => setShowModal(true)} />
            </div>
        </section>

        {/* --- ESPÍRITU GAUDETE --- */}
        <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-brand-blue dark:text-white mb-6 font-heading uppercase">
              Espíritu <span className="text-brand-yellow">Gaudete</span>
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto mb-10"></div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Campamento Gaudete no es solo un lugar, es una experiencia transformadora. En este tan esperado Campamento Regional 26, buscamos fortalecer la amistad regional, superar límites personales y celebrar la alegría en comunidad.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-brand-blue transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src="https://www.escolaioga.com/wp-content/uploads/2018/07/morning-2243465_1280.jpg" alt="Campers" className="w-full h-full object-cover" />
                </div>
                <div className="text-left space-y-6">
                    <div className="bg-brand-light dark:bg-gray-700 p-6 rounded-xl border-l-4 border-brand-blue">
                        <h3 className="text-2xl font-bold mb-2 font-heading text-brand-yellow dark:text-brand-yellow">Nuestra Misión</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Llevar la Palabra de Jesús, bajo la mejor experiencia de nuestro estilo: Los campamentos milicianos.
                        </p>
                    </div>
                    <div className="bg-brand-light dark:bg-gray-700 p-6 rounded-xl border-l-4 border-brand-white">
                        <h3 className="text-2xl font-bold mb-2 font-heading text-brand-yellow dark:text-brand-white">La Experiencia</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Arduos desafíos, fogatas amicales llenas de mística y actividades que renuevan el fervor del corazón.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>

<section id="video-section">
          {/* Aquí incluimos la sección de video */}
          <VideoSection />
        </section>
        {/* --- ACTIVIDADES --- */}
        <section id="activities" className="py-20 md:py-32 bg-brand-blue text-white relative">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4 font-heading text-white uppercase">Actividades <span className="text-brand-yellow">extraordinarias</span></h2>
            <p className="text-center text-brand-yellow mb-16 font-semibold tracking-wider">AVENTURAS IMPERDIBLES</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Kayak en El Cadillal', 'Airelibrismo sin igual', 'Pileta exclusiva'].map((activity, index) => (
                <div key={activity} className="group bg-brand-dark rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-white/10 hover:border-brand-yellow/50">
                  <div className="relative h-48 overflow-hidden">
                    <img src={`https://picsum.photos/600/400?random=act${index}`} alt={activity} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-heading text-brand-yellow">{activity}</h3>
                    <p className="text-gray-400 text-sm">Desarrolla tus habilidades y supera tus propios límites.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* MODAL (Vive aquí para poder abrirse sobre todo) */}
      <PaymentModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        paymentLink={LINK_PLATAFORMA_PAGO}
        formLink={LINK_FORMULARIO}
      />
    </div>
  );
};

export default Inicio;