import React, { useState } from 'react';
import { Tent, Music, Users, MapPin, Flame, Shield, ArrowDown } from 'lucide-react';
import SplashScreen from './SplashScreen';
import PaymentModal from '../ui/PaymentModal';

const QuienesSomos: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Links (Mismos que en inicio)
  const LINK_PLATAFORMA_PAGO = "https://link-a-tu-plataforma-de-pago.com"; 
  const LINK_FORMULARIO = "https://docs.google.com/forms/d/e/1FAIpQLSfIjhcHaiOwHOWcrbJ9SIZ2Iw9RWsfkz9q6xig81ArrI8Sjpg/viewform";

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-200 font-sans animate-main-fade-in">          
      <main className="flex-grow pt-16">
        
        {/* --- HERO SECTION: IDENTIDAD --- */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=2069')" }} // Foto de montañas/norte
          >
             <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
            <span className="inline-block py-1 px-3 border border-amber-500 rounded-full text-amber-500 text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in-down">
              Fasta - Agrupación Masculina
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading tracking-tight drop-shadow-2xl">
              REGIÓN NORTE
            </h1>
            <p className="text-xl text-slate-200 font-light max-w-2xl mx-auto italic">
              "Herederos de una tradición, constructores del futuro. La fuerza del norte unida bajo una misma bandera."
            </p>
            
            <div className="mt-8 animate-bounce">
                <ArrowDown className="text-amber-500 mx-auto" />
            </div>
          </div>
        </section>

        {/* --- INTRODUCCIÓN: QUIÉNES SOMOS --- */}
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-black text-white font-heading uppercase mb-6 leading-tight">
                            La Milicia del <span className="text-amber-500">Norte Argentino</span>
                        </h2>
                        <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                            <p>
                                Somos la comunidad de agrupaciones masculinas de Fasta ubicadas en el histórico norte de nuestra patria. 
                                Desde Tucumán, Salta y Jujuy, unimos nuestras fuerzas para formar hombres de bien, católicos y comprometidos.
                            </p>
                            <p>
                                Nuestra pedagogía se basa en la exigencia, la vida al aire libre y la formación del carácter. 
                                No somos un simple club de amigos; somos una milicia espiritual que busca la santidad a través del servicio.
                            </p>
                        </div>
                        
                        {/* Pequeños datos */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-800 rounded-lg text-amber-500"><MapPin size={20}/></div>
                                <span className="text-sm font-bold text-white">Tucumán, Salta, Jujuy</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-800 rounded-lg text-amber-500"><Shield size={20}/></div>
                                <span className="text-sm font-bold text-white">Estilo Miliciano</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                            <img 
                                src="https://images.unsplash.com/photo-1526638684360-95eb6291d731?q=80&w=2070" 
                                alt="Formación Fasta" 
                                className="w-full h-[400px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 to-transparent p-6">
                                <p className="text-white font-bold text-lg">"A tus órdenes, Señor."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- LA VIDA CAMPAMENTERA (CORE) --- */}
        <section className="py-24 bg-slate-900 relative">
            {/* Decoración de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white font-heading uppercase">Nuestro Estilo de Vida</h2>
                    <p className="text-amber-500 font-bold tracking-widest mt-2">MÍSTICA Y DISCIPLINA</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* CARD 1: CIUDAD DE LONA */}
                    <div className="bg-slate-800 rounded-xl p-8 border-t-4 border-amber-500 hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                            <Tent size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-heading">La Ciudad de Lona</h3>
                        <p className="text-slate-400 leading-relaxed">
                            No vamos de "camping", vamos a fundar una ciudad. Cada carpa levantada es un hogar, cada rincón cuidado es un acto de servicio. 
                            En la precariedad de la lona aprendemos que lo esencial no está en las comodidades, sino en con quién las compartes.
                        </p>
                    </div>

                    {/* CARD 2: CANTAR MARCHAS */}
                    <div className="bg-slate-800 rounded-xl p-8 border-t-4 border-amber-600 hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                            <Music size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-heading">El Canto Miliciano</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Nuestras gargantas no callan. Cantar marchas no es solo ruido; es elevar el espíritu cuando el cuerpo está cansado. 
                            Es la mística hecha voz que une a la escuadra y le recuerda que, incluso en la marcha más dura, la alegría es innegociable.
                        </p>
                    </div>

                    {/* CARD 3: FOGÓN Y HERMANDAD */}
                    <div className="bg-slate-800 rounded-xl p-8 border-t-4 border-amber-700 hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                            <Flame size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-heading">El Fuego que Une</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Al final del día, el fuego nos reúne. Es el momento de la verdad, de las risas y de la reflexión profunda. 
                            Frente a las brasas, las diferencias desaparecen y se forja esa amistad viril y duradera que caracteriza al miliciano de Fasta.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        {/* --- LLAMADO A LOS PADRES (SEGURIDAD) --- */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">¿Por qué este campamento?</h3>
                        <p className="text-slate-300 mb-4">
                            En un mundo cómodo, ofrecemos desafío. En un mundo individualista, ofrecemos comunidad. 
                            Este campamento regional es la oportunidad perfecta para que sus hijos vivan los valores del Evangelio 
                            en un entorno seguro, formativo y lleno de aventura.
                        </p>
                        <div className="flex items-center gap-6 mt-6">
                            <div className="flex items-center gap-2 text-amber-500 font-bold">
                                <Users size={20} />
                                <span>Contención</span>
                            </div>
                            <div className="flex items-center gap-2 text-amber-500 font-bold">
                                <Shield size={20} />
                                <span>Seguridad</span>
                            </div>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => setShowModal(true)}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg hover:shadow-amber-600/20 transition-all whitespace-nowrap"
                    >
                        Sumarse a la Fila
                    </button>
                </div>
            </div>
        </section>

      </main>
      
      {/* Modal para inscribirse desde el botón de abajo */}
      <PaymentModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        paymentLink={LINK_PLATAFORMA_PAGO}
        formLink={LINK_FORMULARIO}
      />
    </div>
  );
};

export default QuienesSomos;