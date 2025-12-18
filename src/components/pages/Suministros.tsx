import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flag, 
  Image, 
  Gamepad2, 
  BrainCircuit, 
  ExternalLink, 
  MapPin, 
  CheckCircle, 
  Cross, 
  Music,
  Tent,
  Utensils,
  Shirt,
  Flashlight,
  BriefcaseMedical,
  Check,
  Backpack,
Video
} from 'lucide-react';

const Suministros = () => {

  // --- LÓGICA AUTOMÁTICA DE FECHAS (CEREBRO) ---
  const cronogramaBase = [
    {
      fechaObj: new Date(2025, 11, 12), // 12 Dic
      dia: "12", mes: "Dic",
      titulo: "Adoración Eucarística", sub: "Viernes 12/12",
      desc: "Nos juntamos todos los milicianos que van al campamento, regalando un momento con Jesús."
    },
    {
      fechaObj: new Date(2025, 11, 19), // 19 Dic
      dia: "19", mes: "Dic",
      titulo: "Santa Misa", sub: "Viernes 19/12",
      desc: "Objetivo: Llegar en Gracia y mantenerla. Pedimos por los frutos del regional."
    },
    {
      fechaObj: new Date(2025, 11, 25), // 25 Dic
      dia: "25", mes: "Dic",
      titulo: "Misa de Navidad", sub: "Jueves 25/12",
      desc: "Nos unimos en Espíritu pidiendo por el campamento desde nuestras familias."
    },
    {
      fechaObj: new Date(2026, 0, 2),   // 02 Ene
      dia: "02", mes: "Ene",
      titulo: "Santa Misa", sub: "Viernes 02/01",
      desc: "Nos volvemos a juntar para celebrar Misa unidos en un mismo Espíritu."
    },
    {
      fechaObj: new Date(2026, 0, 7),   // 07 Ene
      dia: "07", mes: "Ene",
      titulo: "Adoración Eucarística", sub: "Miércoles 07/01",
      desc: "Previos al campamento, entregamos y dejamos todo en manos de Jesús."
    }
  ];

  const eventosProcesados = useMemo(() => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    let proximoEncontrado = false;

    return cronogramaBase.map((evento) => {
      let estado = "futuro";
      if (evento.fechaObj < hoy) {
        estado = "completado";
      } else if (!proximoEncontrado) {
        estado = "activo";
        proximoEncontrado = true;
      } 
      return { ...evento, estado };
    });
  }, []);

  // --- GRILLA DE RECURSOS (CON MILICANT) ---
  const desafios = [
    {
      titulo: "Nivel de estilo miliciano",
      desc: "¿Cuánto sabes de nuestro estilo? Ponlo a prueba.",
      icon: BrainCircuit,
      color: "text-purple-400",
      bgHover: "group-hover:bg-purple-500/10",
      border: "hover:border-purple-500/50",
      link: "/QuizEstilo",
      btnText: "Jugar Quizz"
    },
    {
      titulo: "Drive de fotos",
      desc: "Revive la gloria del regional Ciudadela 2025.",
      icon: Image,
      color: "text-blue-400",
      bgHover: "group-hover:bg-blue-500/10",
      border: "hover:border-blue-500/50",
      link: "https://drive.google.com/drive/folders/1i4FAKIQOYurkpTRkytJR7BNRYdIRO8hh?usp=drive_link",
      btnText: "Ver Fotos"
    },
    {
      titulo: "Milican",
      desc: "Aprende sobre nuestras marchas",
      icon: Music, // Ícono musical
      color: "text-cyan-400",
      bgHover: "group-hover:bg-cyan-500/10",
      border: "hover:border-cyan-500/50",
      link: "https://wmil.heladeradragon.com.ar/training", // O link a la app store
      btnText: "Ir a las Marchas"
    },
    {
      titulo: "Video semanal",
      desc: "Aprende algo nuevo y útil para el campamento.",
      icon: Video,
      color: "text-green-400",
      bgHover: "group-hover:bg-green-500/10",
      border: "hover:border-green-500/50",
      link: "https://youtu.be/HywASqUu5oE?si=hoOIG1RRnFTwBjJI",
      btnText: "Iniciar Misión"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans animate-fade-in overflow-x-hidden">    
      
      {/* HEADER Bicolor sobre Imagen */}
      <div className="relative w-full h-[50vh] min-h-[450px] flex items-center justify-center mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnKmofEH0LSqxWJ4UvVKib6aCJE8vHZwxwQ&s" 
            alt="Ambiente de Oración" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 mt-8">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md shadow-lg">
            <Cross size={14} /> Vida Eucarística
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tight mb-4 drop-shadow-2xl">
            <span className="text-white">Camino al </span>
            <span className="text-yellow-500">campamento</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            "Empezaremos este camino de preparación comunitaria con los siguientes HITOS."
          </p>
          <div className="mt-6 inline-block bg-slate-950/80 backdrop-blur border border-slate-700 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 shadow-xl">
            Aclaración: Todos serán por jurisdicción
          </div>
        </div>
      </div>

      
      {/* TIMELINE */}
      <section className="max-w-3xl mx-auto px-4 mb-24 relative z-10 -mt-6">
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-10 pb-4">
              {eventosProcesados.map((evento, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-12 group">
                      {/* Punto Fecha */}
                      <div className={`absolute -left-[26px] md:-left-[30px] top-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center border-4 bg-slate-900 transition-all duration-300 z-10 ${
                          evento.estado === 'completado' ? 'border-green-600 text-green-500' :
                          evento.estado === 'activo' ? 'border-amber-500 text-amber-500 scale-110 shadow-[0_0_15px_rgba(245,158,11,0.5)]' :
                          'border-slate-700 text-slate-500'
                      }`}>
                          <span className="text-lg font-black leading-none font-sans">{evento.dia}</span>
                          <span className="text-[10px] uppercase font-bold">{evento.mes}</span>
                      </div>

                      {/* Tarjeta */}
                      <div className={`p-6 rounded-2xl border transition-all duration-500 group-hover:-translate-y-1 ${
                          evento.estado === 'activo' ? 'border-amber-500/50 bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg shadow-amber-900/20' : 
                          'border-slate-800 bg-slate-900 hover:border-slate-700'
                      }`}>
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                              <h3 className={`text-xl font-bold font-serif uppercase tracking-wide ${
                                  evento.estado === 'futuro' ? 'text-slate-500' : 'text-white'
                              }`}>
                                  {evento.titulo}
                              </h3>
                              {evento.estado === 'activo' && (
                                  <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-500 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider animate-pulse border border-amber-500/20">
                                      <MapPin size={12} /> Próximo Encuentro
                                  </span>
                              )}
                          </div>
                          <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                            {evento.estado === 'activo' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>}
                            {evento.sub}
                          </p>
                          <p className={`leading-relaxed text-sm ${evento.estado === 'futuro' ? 'text-slate-600' : 'text-slate-300'}`}>
                              {evento.desc}
                          </p>
                          {evento.estado === 'completado' && (
                              <div className="mt-3 flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-wider opacity-80">
                                  <CheckCircle size={14} /> Realizado
                              </div>
                          )}
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* ZONA DE DESAFÍOS (GRAN RECUADRO) */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="flex items-center justify-center gap-4 mb-12 opacity-80">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-600"></div>
              <h2 className="text-2xl font-bold text-white text-center font-serif uppercase tracking-wider flex items-center gap-3">
                  <Gamepad2 size={50} className="text-amber-500 md:text-amber-500" /> Zona de Desafíos
              </h2>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-600"></div>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {desafios.map((item, idx) => {
                // Verificamos si el link es interno (empieza con "/")
                const isInternalLink = item.link.startsWith('/');

                // Contenido de la tarjeta (es el mismo para ambos casos)
                const cardContent = (
                    <>
                        <div>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 shadow-inner bg-slate-800 ${item.bgHover} ${item.color} group-hover:scale-110`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 font-serif uppercase">{item.titulo}</h3>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-200 transition-colors border-t border-slate-800/50 pt-4 mt-auto">
                            {item.btnText}
                            <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity"/>
                        </div>
                    </>
                );

                // Si es interno, usamos <Link>. Si es externo, usamos <a>.
                return isInternalLink ? (
                  <Link 
                    key={idx} 
                    to={item.link} 
                    className={`bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:-translate-y-2 transition-all duration-300 group shadow-lg flex flex-col justify-between h-full ${item.border}`}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <a 
                    key={idx} 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:-translate-y-2 transition-all duration-300 group shadow-lg flex flex-col justify-between h-full ${item.border}`}
                  >
                    {cardContent}
                  </a>
                );
              })}
          </div>
      </section>

      {/* --- SECCIÓN FINAL: ¿QUÉ DEBO LLEVAR? (LA LISTA DE ROPA) --- */}
      <section id="equipamiento" className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Cabecera de la Sección Equipamiento */}
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 mb-10 text-center border border-slate-700 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10">
             <div className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-full mb-6 border border-slate-600 shadow-lg">
               <Backpack size={32} className="text-amber-500" />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">¿Qué debo llevar?</h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
               Una lista ayuda de lo necesario para cada experiencia y actividad del campamento. 
               <br/><span className="text-sm italic opacity-70">Haz clic en los elementos para marcarlos.</span>
             </p>
           </div>
        </div>

        {/* GRILLA DE CHECKLISTS (INTEGRADA AQUÍ) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard 
            title="Zona de Descanso" icon={<Tent className="text-amber-500" size={24} />}
            items={["Bolsa de dormir (Abrigada)", "Aislante térmico", "Manta extra"]}
          />
          <CategoryCard 
            title="Rancho (Comida)" icon={<Utensils className="text-blue-500" size={24} />}
            items={["Plato hondo (No vidrio)", "Jarro metálico", "Cubiertos completos", "Repasador", "Botella agua (1L)"]}
          />
          <CategoryCard 
            title="Indumentaria" icon={<Shirt className="text-green-500" size={24} />}
            items={["Uniforme completo", "Ropa fajina (Resistente)", "Abrigo y campera impermeable", "Pares zapatillas", "Ropa interior", "Gorra"]}
          />
          <CategoryCard 
            title="Higiene" icon={<BriefcaseMedical className="text-red-500" size={24} />}
            items={["Necesario personal", "Toallón y ojotas", "Repelente (x2)", "Protector Solar"]}
          />
          <CategoryCard 
            title="Táctico / Varios" icon={<Flashlight className="text-slate-400" size={24} />}
            items={["Linterna (+pilas)", "Cuaderno y lapicera", "Rosario", "Bolsas consorcio"]}
          />
        </div>

      </section>

    </div>
  );
};

// --- COMPONENTES AUXILIARES PARA CHECKLIST ---

const CheckItem = ({ text }: { text: string }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div onClick={() => setChecked(!checked)} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-300 select-none ${checked ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900/50 border-slate-700/50 text-slate-400 hover:bg-slate-800'}`}>
      <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border transition-colors ${checked ? 'bg-amber-500 border-amber-500' : 'border-slate-600 bg-slate-800'}`}>
        {checked && <Check size={14} className="text-slate-900 stroke-[3]" />}
      </div>
      <span className={`text-sm ${checked ? 'line-through opacity-70' : ''}`}>{text}</span>
    </div>
  );
};

const CategoryCard = ({ title, icon, items }: any) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-colors">
    <div className="p-4 bg-slate-900 border-b border-slate-700 flex items-center gap-3">
      <div className="p-2 bg-slate-800 rounded-lg shadow-inner">{icon}</div>
      <h3 className="font-bold text-white text-lg font-serif">{title}</h3>
    </div>
    <div className="p-4 space-y-2">
      {items.map((item: string, idx: number) => <CheckItem key={idx} text={item} />)}
    </div>
  </div>
);

export default Suministros;