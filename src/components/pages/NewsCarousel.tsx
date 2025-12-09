import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface NewsCarouselProps {
  onOpenModal: () => void; // Recibimos la función para abrir el modal desde el padre
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ onOpenModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // --- DATOS ESPECÍFICOS DEL CARRUSEL ---
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517178313056-6a2c531d041e?q=80&w=2070",
      title: "INSCRIPCIÓN ABIERTA",
      subtitle: "Asegura tu lugar en la fila. Cupos limitados.",
      action: "INSCRIBIRSE AHORA",
      type: "modal"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496545672479-7ac37b969871?q=80&w=2070",
      title: "CONOCIENDO EL TERRENO",
      subtitle: "Descubre dónde se librará la batalla.",
      action: "VER UBICACIÓN",
      type: "link_externo",
      url: "https://goo.gl/maps/tu-link-del-camping" // <--- PON TU LINK DE MAPS
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974",
      title: "PREPARACIÓN ESPIRITUAL",
      subtitle: "Revisa los suministros necesarios para el combate.",
      action: "VER SUMINISTROS",
      type: "link_interno",
      path: "/suministros"
    }
  ];

  // Loop automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Manejador de clics
  const handleSlideClick = (slide: any) => {
    if (slide.type === 'modal') {
      onOpenModal(); // Llama a la función del padre
    } else if (slide.type === 'link_externo') {
      window.open(slide.url, '_blank');
    } else if (slide.type === 'link_interno') {
      navigate(slide.path);
    }
  };

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-200 dark:border-gray-700 max-w-6xl mx-auto">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          onClick={() => handleSlideClick(slide)}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Imagen de fondo con efecto zoom */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-[2000ms]"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Textos */}
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 text-left">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded mb-4 shadow-lg uppercase tracking-wider">
              Novedad
            </span>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading leading-tight drop-shadow-md">
              {slide.title}
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-lg drop-shadow-sm">
              {slide.subtitle}
            </p>
            
            <button className="flex items-center gap-2 text-brand-yellow font-bold tracking-wider hover:text-white transition-colors group/btn">
              {slide.action} <ArrowRight className="group-hover/btn:translate-x-2 transition-transform"/>
            </button>
          </div>
        </div>
      ))}

      {/* Puntos indicadores */}
      <div className="absolute bottom-8 right-8 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-brand-yellow w-8' : 'bg-gray-400 w-2 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;