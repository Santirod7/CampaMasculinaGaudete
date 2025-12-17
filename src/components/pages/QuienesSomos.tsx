import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  ArrowRight, 
  Backpack, 
  ShieldCheck, 
  CreditCard,
  FileCheck,
  Shield,
  ChevronRight,
  ExternalLink,
  Tent,
  Users,
  Sword,
  Crown
} from 'lucide-react';
import heroheader from '../../assets/DSCN7382.jpg';
import convocatoriaImg from '../../assets/IMG_2875.jpg';
import logisticaImg from '../../assets/DSCN6659.jpg';
import { url } from 'inspector';

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 overflow-x-hidden">
      
      {/* --- HERO HEADER --- */}
      <div className="relative w-full h-[50vh] min-h-[450px] flex items-center justify-center mb-16">
        <div className="absolute inset-0 z-0">
          <img 
          src={heroheader}
            alt="Comunidad Campamento" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 mt-8">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-fade-in-up">
            <Tent size={14} /> Información General
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-2xl">
            Centro de Información
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Todo lo que necesitas saber sobre logística, ubicación y preparación. 
            <br className="hidden md:block"/>
            <span className="text-slate-400 text-base">Diseñado para milicianos y familias.</span>
          </p>
        </div>
      </div>

      {/* --- SECCIÓN 1: GRILLA INFORMATIVA --- */}
      <div className="max-w-7xl mx-auto px-4 mb-24 relative z-10 -mt-10">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* TARJETA 1: CONVOCATORIA (DARK) */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700 group hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="h-40 overflow-hidden relative shrink-0">
              <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/20 transition-all"></div>
              <img 
                src={convocatoriaImg}
                alt="Convocatoria" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute bottom-3 left-4 z-20">
                <h3 className="text-xl font-bold text-white font-serif drop-shadow-md">Convocatoria</h3>
                <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">Edades y Secciones</p>
              </div>
            </div>
            
            <div className="p-4 space-y-2 bg-slate-800 flex-grow flex flex-col justify-center">
                <h4 className="text-center text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Depende tu edad, esta es tu sección:</h4>
              {/* Rango 1 */}
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-600">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/10 p-2 rounded text-blue-400"><Shield size={16}/></div>
                  <span className="text-sm font-bold text-slate-200">Sección Escuderos</span>
                </div>
                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">9 - 12 años</span>
              </div>

              {/* Rango 2 */}
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-600">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500/10 p-2 rounded text-amber-400"><Shield size={16}/></div>
                  <span className="text-sm font-bold text-slate-200">Templarios Menores</span>
                </div>
                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">13 - 16 años</span>
              </div>

              {/* Rango 3 */}
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-600">
                <div className="flex items-center gap-3">
                  <div className="bg-red-500/10 p-2 rounded text-red-400"><Shield size={16}/></div>
                  <span className="text-sm font-bold text-slate-200">Templarios Mayores</span>
                </div>
                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">17 - 18 años</span>
              </div>
            </div>
          </div>

          {/* TARJETA 2: LOGÍSTICA Y UBICACIÓN (DARK) */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700 group hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="h-40 overflow-hidden relative shrink-0">
              <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/20 transition-all"></div>
              <img 
                src={logisticaImg}
                alt="Logística" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute bottom-3 left-4 z-20">
                <h3 className="text-xl font-bold text-white font-serif drop-shadow-md">Logística y Ubicación</h3>
                <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">Fechas Clave</p>
              </div>
            </div>
            
            <div className="p-5 space-y-4 bg-slate-800 flex-grow">
              <div className="space-y-3 pb-3 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <Clock className="text-green-500 shrink-0" size={18} />
                  <div>
                    <p className="text-slate-300 text-sm font-bold">IDA: 9 Enero - 13:00hs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-red-500 shrink-0" size={18} />
                  <div>
                    <p className="text-slate-300 text-sm font-bold">VUELTA: 14 Enero - 16:00hs</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-amber-500" size={18}/>
                  <span className="text-slate-200 text-sm font-bold">San Pedro de Colalao</span>
                </div>
                <p className="text-slate-500 text-xs mb-3 ml-6">Provincia de Tucumán. Finca "El Chula".</p>
                <a href="https://maps.google.com/?q=San+Pedro+de+Colalao+Tucuman" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-yellow-900 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg w-full justify-center">
                  VER MAPA (GOOGLE MAPS)
                </a>
              </div>
            </div>
          </div>

          {/* TARJETA 3: PREPARACIÓN (WHITE / LIGHT) */}
          {/* CAMBIO CLAVE: bg-white, textos negros, diseño distinto */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 group hover:-translate-y-1 transition-all duration-300 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-20 shadow-md">
              EXCLUSIVO
            </div>
            
            <div className="h-40 overflow-hidden relative shrink-0">
              <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-slate-900/5 transition-all"></div>
              <img 
                src="https://as01.epimg.net/deporteyvida/imagenes/2018/06/17/portada/1529248676_745290_1529249202_noticia_normal_recorte1.jpg" 
                alt="Mochila" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute bottom-3 left-4 z-20">
                <h3 className="text-xl font-bold text-white font-serif drop-shadow-md">Mochila</h3>
                {/* Mantengo texto blanco AQUI sobre la imagen por contraste */}
                <p className="text-slate-100 text-xs font-bold uppercase tracking-wider drop-shadow">Camino al Campamento</p>
              </div>
            </div>
            
            {/* Cuerpo Blanco con letras Negras/Grises */}
            <div className="p-6 bg-white flex-grow flex flex-col items-center justify-center text-center space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">¿Cómo me preparo?</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Hicimos un portal exclusivo para que puedas llegar en clima al campamento.
                </p>
              </div>
              <Link 
                to="/preparacion" 
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg w-full justify-center"
              >
                CAMINO AL CAMPAMENTO <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* --- SECCIÓN 2: EL PUENTE (GUÍA DE INSCRIPCIÓN) --- */}
      <section className="py-8 relative mb-16">
        <h2 className='text-2xl text-center font-bold mb-20 text-white font-serif leading-tight'>Proximamente adjuntaremos la ficha médica a llenar...</h2>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1 border border-slate-700 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>
            <div className="bg-slate-900/90 rounded-[22px] p-8 md:p-12 relative h-full">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                
                {/* Lado Izquierdo */}
                <div className="lg:w-2/5 text-center lg:text-left space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20 uppercase tracking-wider">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Trámite Online
                  </div>
                  <h2 className="text-3xl font-bold text-white font-serif leading-tight">
                    ¿Cómo me inscribo?
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Hemos preparado un instructivo interactivo fácil de seguir para realizar el pago e Inscripción.
                  </p>
                  <Link to="/pagos" className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-amber-600/20 transform hover:-translate-y-1 transition-all w-full lg:w-auto text-lg">
                    ABRIR GUÍA DE INSCRIPCIÓN <ArrowRight size={22} />
                  </Link>
                </div>

                {/* Lado Derecho: Diagrama */}
                <div className="lg:w-3/5 w-full">
                  <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 relative">
                    <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-slate-700 -z-10"></div>
                    <StepPreview icon={<CreditCard className="text-amber-500" />} label="1. Pago" />
                    <ChevronRight className="text-slate-600 md:hidden" />
                    <StepPreview icon={<FileCheck className="text-blue-500" />} label="2. Comprobante" />
                    <ChevronRight className="text-slate-600 md:hidden" />
                    <StepPreview icon={<ShieldCheck className="text-green-500" />} label="3. Inscripción" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: MAPA DETALLADO --- */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-700 flex flex-col md:flex-row">
            <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center items-start">
              <div className="flex items-center gap-2 text-amber-500 mb-4">
                <MapPin size={24} /> <span className="font-bold tracking-wider text-sm uppercase">Lugar del campamento</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-serif">Finca "Los Chulcas" </h2>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Ubicado en San Pedro de Colalao, Tucumán.<br/>
                Consulta a tu jefe de ruca, para ver la llegada al lugar.
              </p>
              <a 
                href="https://maps.app.goo.gl/F11DA7ZDhkSz3dHg8?g_st=iw" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2 border border-slate-600 hover:border-slate-500 w-full md:w-auto justify-center"
              >
                ABRIR GPS (GOOGLE MAPS) <ExternalLink size={16} />
              </a>
            </div>
            <div className="md:w-2/3 bg-slate-900 relative h-80 md:h-auto group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2988.322693226966!2d-65.51057542458543!3d-26.18389537708904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDExJzAyLjAiUyA2NcKwMzAnMjguOCJX!5e1!3m2!1ses-419!2sar!4v1765806325417!5m2!1ses-419!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
              ></iframe>
            </div>
        </div>
      </div>

    </div>
  );
};

// --- COMPONENTE AUXILIAR ---
const StepPreview = ({ icon, label }: any) => (
  <div className="flex flex-col items-center text-center gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800 w-full md:w-32 shadow-xl z-10 hover:border-slate-600 transition-colors">
    <div className="p-3 bg-slate-800 rounded-full shadow-inner">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div className="font-bold text-white text-sm">{label}</div>
  </div>
);

export default QuienesSomos;