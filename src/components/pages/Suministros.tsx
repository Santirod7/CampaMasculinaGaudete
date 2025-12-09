import React, { useState } from 'react';
import { Flag, Image, Gamepad2, BrainCircuit, ExternalLink, Calendar, MapPin, CheckCircle } from 'lucide-react';
import Header from '../common/Header';   
import Footer from '../common/Footer';
import SplashScreen from './SplashScreen';
import PaymentModal from '../ui/PaymentModal';

const Suministros: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Links del modal
  const LINK_PLATAFORMA_PAGO = "https://link-a-tu-plataforma-de-pago.com"; 
  const LINK_FORMULARIO = "https://docs.google.com/forms/d/e/1FAIpQLSfIjhcHaiOwHOWcrbJ9SIZ2Iw9RWsfkz9q6xig81ArrI8Sjpg/viewform";

  // DATOS: CAMINO ESPIRITUAL (4 EVENTOS)
  const eventos = [
    {
      fecha: "10 de Noviembre",
      titulo: "El Llamado",
      desc: "Lanzamiento oficial del lema y la mística.",
      estado: "completado" // 'completado', 'proximo', 'futuro'
    },
    {
      fecha: "5 de Diciembre",
      titulo: "Alistamiento",
      desc: "Revisión de equipo y formación de escuadras.",
      estado: "proximo"
    },
    {
      fecha: "20 de Enero",
      titulo: "Vigilia de Armas",
      desc: "Adoración Eucarística simultánea en cada ciudad.",
      estado: "futuro"
    },
    {
      fecha: "15 de Febrero",
      titulo: "El Despliegue",
      desc: "Inicio del Campamento Regional 2026.",
      estado: "futuro"
    }
  ];

  // DATOS: DESAFÍOS (LINKS EXTERNOS)
  const desafios = [
    {
      titulo: "Trivia Táctica",
      desc: "¿Cuánto sabes de supervivencia? Ponlo a prueba.",
      icon: BrainCircuit,
      color: "text-purple-400",
      border: "hover:border-purple-500",
      link: "https://kahoot.it", // Link Kahoot
      btnText: "Jugar Kahoot"
    },
    {
      titulo: "Archivo Histórico",
      desc: "Revive la gloria de los regionales pasados.",
      icon: Image,
      color: "text-blue-400",
      border: "hover:border-blue-500",
      link: "https://drive.google.com", // Link Drive
      btnText: "Ver Fotos"
    },
    {
      titulo: "Desafío de Ingenio",
      desc: "Resuelve los acertijos para desbloquear pistas.",
      icon: Gamepad2,
      color: "text-green-400",
      border: "hover:border-green-500",
      link: "https://canva.com", // Link Juego
      btnText: "Iniciar Misión"
    },
    {
      titulo: "Protocolos",
      desc: "Documentación oficial y reglamentos.",
      icon: Flag,
      color: "text-amber-400",
      border: "hover:border-amber-500",
      link: "/protocolo.pdf", // Link PDF
      btnText: "Descargar PDF"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-200 font-sans animate-main-fade-in">    
      <Header />
      
      <main className="flex-grow pt-24 px-4 pb-20">
        
        {/* --- TÍTULO PRINCIPAL --- */}
        <div className="container mx-auto max-w-5xl text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white font-heading uppercase tracking-tight mb-4">
                Centro de <span className="text-amber-500">Suministros</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Aquí encontrarás las herramientas necesarias para tu preparación, desafíos para templar el ingenio y el mapa de ruta hacia nuestra meta.
            </p>
        </div>

        {/* --- CAMINO ESPIRITUAL (TIMELINE) --- */}
        <section className="container mx-auto max-w-4xl mb-24">
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                {/* Fondo decorativo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="flex items-center gap-4 mb-10 relative z-10">
                    <MapPin className="text-amber-500" size={32} />
                    <h2 className="text-2xl font-bold text-white uppercase font-heading">El Camino al Campamento</h2>
                </div>

                {/* LINEA DE TIEMPO */}
                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12 pb-4">
                    {eventos.map((evento, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12 group">
                            {/* Punto del Timeline */}
                            <div className={`absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                                evento.estado === 'completado' ? 'bg-amber-500 border-amber-900' :
                                evento.estado === 'proximo' ? 'bg-slate-900 border-amber-500 animate-pulse' :
                                'bg-slate-800 border-slate-600'
                            }`}></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                <h3 className={`text-xl font-bold font-heading uppercase ${
                                    evento.estado === 'futuro' ? 'text-slate-500' : 'text-white'
                                }`}>
                                    {evento.titulo}
                                </h3>
                                <div className="flex items-center gap-2 text-sm font-mono text-amber-500/80 bg-amber-500/10 px-2 py-1 rounded w-fit">
                                    <Calendar size={14} />
                                    {evento.fecha}
                                </div>
                            </div>
                            
                            <p className={`${evento.estado === 'futuro' ? 'text-slate-600' : 'text-slate-400'}`}>
                                {evento.desc}
                            </p>

                            {evento.estado === 'completado' && (
                                <div className="mt-2 flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-wider">
                                    <CheckCircle size={14} /> Misión Cumplida
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- DESAFÍOS Y RECURSOS (GRID CARDS) --- */}
        <section className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white font-heading uppercase mb-8 text-center flex items-center justify-center gap-3">
                <Gamepad2 className="text-amber-500"/> Zona de Desafíos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {desafios.map((item, idx) => (
                    <a 
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`bg-slate-800 rounded-xl p-6 border border-slate-700 hover:-translate-y-2 transition-all duration-300 group shadow-lg flex flex-col justify-between h-full ${item.border}`}
                    >
                        <div>
                            <div className={`w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 transition-colors group-hover:bg-slate-950 ${item.color}`}>
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 font-heading uppercase">{item.titulo}</h3>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors border-t border-slate-700 pt-4 mt-auto">
                            {item.btnText}
                            <ExternalLink size={14} />
                        </div>
                    </a>
                ))}
            </div>
        </section>

      </main>
      
      <Footer />

      <PaymentModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        paymentLink={LINK_PLATAFORMA_PAGO}
        formLink={LINK_FORMULARIO}
      />
    </div>
  );
};

export default Suministros;