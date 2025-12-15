import React from 'react';
import { Play, Film } from 'lucide-react';

const VideoSection = () => {
  // ACÁ PONES EL ID DE TU VIDEO DE YOUTUBE
  // El ID es lo que sale después de "v=" en la URL. 
  // Ejemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> El ID es dQw4w9WgXcQ
  const VIDEO_ID = "FBAqcTGT1PA"; // Reemplázalo por el tuyo

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Decoración de fondo (Luz ambiental) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-amber-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase text-xs mb-3">
            <Film size={14} /> Multimedia
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading uppercase mb-4">
           <span className='text-brand-yellow'>Reviví</span> la Mística miliciana
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Un vistazo a lo que vivimos en nuestros campamentos. Fraternidad, formación y aventura.
          </p>
        </div>

        {/* MARCO DEL VIDEO (Estilo Cine) */}
        <div className="relative group">
          {/* Borde brillante al pasar el mouse */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-slate-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            
            {/* Contenedor 16:9 para que sea responsive */}
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`} 
                title="Video Campamento Gaudete"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;