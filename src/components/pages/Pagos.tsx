import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Camera, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  ShoppingCart,
  User,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Users,
  Clock,
  CalendarCheck,
  MessageCircle
} from 'lucide-react';

const Pagos = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 overflow-x-hidden">
      
      {/* --- HERO HEADER (INTACTO) --- */}
      <div className="relative w-full h-[45vh] min-h-[400px] flex items-center justify-center mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070" 
            alt="Fondo Campamento" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 mt-8">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.3)] animate-fade-in-up">
            <Sparkles size={14} /> Campamento Regional 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif tracking-tight drop-shadow-2xl">
            Guía de Inscripción
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Tu lugar en la formación comienza aquí.
            <br />
            <span className="font-semibold text-white">Sigue los 3 pasos obligatorios.</span>
          </p>
        </div>
      </div>

      {/* --- LÍNEA DE TIEMPO (INTACTA) --- */}
      <div className="max-w-5xl mx-auto relative pb-8 mb-16 px-4">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-slate-700 to-green-500 transform md:-translate-x-1/2 rounded-full z-0 opacity-50"></div>

        {/* PASO 1 */}
        <PasoConFoto 
          numero="1" 
          color="amber"
          img="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000"
          lado="derecha"
        >
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <CreditCard className="text-amber-500" /> Realizar Pago
          </h3>
          <p className="text-slate-300 mb-6 text-sm">
            Ingresa a la web de "Actividades Fasta" y sigue esta secuencia:
          </p>
          <ul className="space-y-3 mb-8">
            <ItemLista icon={<CheckCircle2 size={18}/>} text="Selecciona la Cuota." />
            <ItemLista icon={<ShoppingCart size={18}/>} text='Clic en "Añadir al carrito".' />
            <ItemLista icon={<User size={18}/>} text="Usa el Nombre del Miliciano." />
            <ItemLista icon={<CheckCircle2 size={18}/>} text='Clic en "Finalizar Compra".' />
          </ul>
          <div className="flex justify-center">
            <a href="https://actividades.fasta.org.ar/producto/campamento-region-norte/" target="_blank" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-xl shadow-[0_10px_30px_rgba(217,119,6,0.3)] hover:scale-[1.02] transition-all inline-flex items-center gap-2 text-center w-full md:w-auto">
              IR A PAGAR AHORA <ExternalLink size={16} className="inline mb-0.5"/>
            </a>
          </div>
        </PasoConFoto>

        {/* PASO 2 */}
        <PasoConFoto 
          numero="2" 
          color="blue"
          img="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000"
          lado="izquierda"
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center md:justify-end gap-2">
            Captura de Pantalla <Camera className="text-blue-400" />
          </h3>
          <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-xl mb-4 backdrop-blur-md">
            <p className="text-blue-200 font-medium flex items-center gap-2 md:justify-end">
              <AlertTriangle size={20} /> ¡NO CIERRES LA PESTAÑA!
            </p>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed md:text-right drop-shadow-md">
            Es <strong>obligatorio</strong> guardar el comprobante (Screenshot o PDF). Sin esto, no podrás completar el paso 3.
          </p>
        </PasoConFoto>

        {/* PASO 3 */}
        <PasoConFoto 
          numero="3" 
          color="green"
          img="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000"
          lado="derecha"
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="text-green-500" /> Inscripción Final
          </h3>
          <p className="text-slate-300 mb-6 text-sm">
            Con tu comprobante guardado, completa el formulario oficial de Google.
          </p>
          <div className="flex flex-col items-center">
            <a href="https://forms.gle/nx2LagLjM2PgLVgd7" target="_blank" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-[0_10px_30px_rgba(22,163,74,0.3)] hover:scale-[1.02] transition-all inline-flex items-center gap-2 animate-pulse-slow text-center w-full md:w-auto">
              COMPLETAR FORMULARIO <ArrowRight size={16} className="inline mb-0.5"/>
            </a>
            <p className="text-slate-400 text-xs mt-3 font-medium">
              *Deberás adjuntar la foto del paso 2.
            </p>
          </div>
        </PasoConFoto>
      </div>


      {/* --- SECCIÓN ADMINISTRATIVA (INTACTA) --- */}
      <div className="bg-slate-950 py-20 border-t border-slate-800 relative overflow-hidden mb-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 space-y-16">
          
          {/* SECCIÓN A: CRONOGRAMA */}
          <div>
             <div className="flex justify-center mb-10">
                <span className="bg-amber-500 text-white px-6 py-3 rounded-lg font-serif font-bold text-xl md:text-2xl shadow-lg shadow-amber-500/20 uppercase tracking-wide">
                  Fechas de Pago Esenciales
                </span>
             </div>
            <div className="grid md:grid-cols-3 gap-6">
              <DateCard month="Noviembre" label="Cuota 1" detail="Inicio del plan de pagos" active={true}/>
              <DateCard month="Diciembre" label="Cuota 2" detail="Continuación" active={true}/>
              <DateCard month="Enero" label="Cuota 3" detail="Previo al inicio (Saldo Final)" isLast={true}/>
            </div>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-slate-950 px-2 text-slate-500">
                <Sparkles size={16} />
              </span>
            </div>
          </div>

          {/* SECCIÓN B: ALERTAS */}
          <div>
                <div className="flex  flex-col gap-4">
                    <p className="pb-7 pt-0 mb-6 text-slate-400 text-center">
                      Si tienes problemas administrativos con el pago o dudas específicas sobre la inscripción:
                    <a 
                      href="https://wa.me/+5493814780132" // Poner número real aquí
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center align-middle mx-3 gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors w-fit shadow-lg shadow-green-600/20"
                    >
                      <MessageCircle size={18} /> Contactar
                    </a>
                    </p>
                  </div>
            <div className="flex justify-center mb-10">
              <span className="bg-amber-500 text-white px-6 py-3 rounded-lg font-serif font-bold text-xl md:text-2xl shadow-lg shadow-amber-500/20 uppercase tracking-wide flex items-center gap-3">
                 <AlertTriangle size={24} className="text-white" /> Alertas Administrativas
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <AlertCard 
                icon={<Users size={24} />} 
                color="blue" 
                date="20 de Diciembre" 
                title="Atraso en las Cuotas" 
                text="Debes pagar las 2 cuotas pendientes (Noviembre y Diciembre) antes de esta fecha."
              />
              <AlertCard 
                icon={<CalendarCheck size={24} />} 
                color="amber" 
                date="31 de Diciembre" 
                title="Sin Recargo" 
                text={<>Pagos posteriores a esta fecha tendrán un <strong className="text-amber-500">10% de recargo</strong>.</>}
              />
              <AlertCard 
                icon={<Clock size={24} />} 
                color="red" 
                date="5 de Enero" 
                title="Cierre Definitivo" 
                text="Fecha límite absoluta. No se aceptan inscripciones posteriores."
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- DUDAS FRECUENTES (ACTUALIZADA CON 5 ITEMS) --- */}
      <div className="max-w-3xl mx-auto mb-20 px-4">
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-serif">
            <HelpCircle className="text-amber-500"/> Dudas Frecuentes
            </h2>
            
            <div className="space-y-4">
              
              {/* PREGUNTA 1 */}
              <Pregunta 
                  titulo="¿Qué pasa si me atrasé con las cuotas?" 
                  respuesta="Si no pagaste en noviembre, debes abonar las CUOTAS 1 y 2 juntas ahora en diciembre para regularizar y poder pagar la final en enero."
              />
              
              {/* PREGUNTA 2 */}
              <Pregunta 
                  titulo="¿Puedo pagar todo junto?" 
                  respuesta="Sí. La plataforma permite seleccionar el pago total del campamento en una sola transacción."
              />
              
              {/* PREGUNTA 3 */}
              <Pregunta 
                  titulo="No me llegó el comprobante al mail" 
                  respuesta="Revisa Spam. Si no está, contacta urgentemente a la administración con el comprobante de tu banco."
              />

              {/* PREGUNTA 4 - REDIRECCIÓN A PORTAL DE PADRES */}
              <Pregunta 
                titulo="¿A qué sección pertenece mi hijo?" 
                respuesta={
                  <div className="flex flex-col gap-4">
                    <p className="text-slate-300">
                      Las secciones dependen de la edad y el año de nacimiento.
                      Puedes ver esta información aquí en el <strong>Centro de información</strong>.
                    </p>
                    <Link to="/quienes-somos" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors w-fit border border-slate-600">
                      Centro de información <ExternalLink size={16} />
                    </Link>
                  </div>
                }
              />

              {/* PREGUNTA 5 - CONTACTO DIRECTO */}
              <Pregunta 
                titulo="¿Con quién me puedo contactar?" 
                respuesta={
                  <div className="flex flex-col gap-4">
                    <p className="text-slate-300">
                      Si tienes problemas técnicos con el pago o dudas específicas sobre la inscripción,
                      escribe directamente a nuestro soporte.
                    </p>
                    <a 
                      href="https://wa.me/+5493814780132" // Poner número real aquí
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors w-fit shadow-lg shadow-green-600/20"
                    >
                      <MessageCircle size={18} /> Contactar
                    </a>
                  </div>
                }
              />

            </div>
        </div>
      </div>

    </div>
  );
};

// --- COMPONENTES AUXILIARES ---

const DateCard = ({ month, label, detail, isLast }: any) => (
  <div className={`relative flex flex-col items-center text-center p-6 rounded-xl border bg-slate-900 hover:bg-slate-800 transition-all duration-300 ${isLast ? 'border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]' : 'border-slate-800'} group`}>
    <div className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-bold group-hover:text-amber-500/80 transition-colors">{month}</div>
    <div className={`text-2xl font-serif font-bold mb-2 ${isLast ? 'text-amber-500' : 'text-white'}`}>{label}</div>
    <div className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">{detail}</div>
  </div>
);

const AlertCard = ({ icon, color, date, title, text }: any) => {
  const colors: any = {
    blue: "text-blue-500 border-blue-500/30 hover:border-blue-500/50",
    amber: "text-amber-500 border-amber-500/30 hover:border-amber-500/50",
    red: "text-red-500 border-red-500/30 hover:border-red-500/50"
  };
  
  return (
    <div className={`group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-300 ${colors[color].split(" ")[2]}`}>
      <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-slate-800">
        <span className={colors[color].split(" ")[0]}>{icon}</span>
      </div>
      <div className="mb-2">
        <span className={`${colors[color].split(" ")[0]} font-bold tracking-wider text-xs uppercase border ${colors[color].split(" ")[1]} px-2 py-1 rounded bg-slate-950`}>{date}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 font-serif">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
    </div>
  );
};

const PasoConFoto = ({ numero, color, img, lado, children }: any) => {
  const isRight = lado === "derecha";
  const borderColors: any = { amber: "border-amber-500", blue: "border-slate-500", green: "border-green-500" };
  const shadowColors: any = { amber: "shadow-amber-500/20", blue: "shadow-blue-500/20", green: "shadow-green-500/20" };

  return (
    <div className="relative mb-24 last:mb-0">
      <div className="flex flex-col md:flex-row items-center">
        <div className={`absolute left-0 md:left-1/2 md:-ml-8 w-16 h-16 bg-slate-900 border-4 ${borderColors[color]} rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
          <span className="text-2xl font-bold text-white">{numero}</span>
        </div>
        <div className={`md:w-1/2 w-full ${isRight ? "md:pl-16 pl-20 ml-auto" : "md:pr-16 pl-20 md:pl-0 mr-auto"}`}>
          <div className={`relative overflow-hidden bg-slate-800 border border-slate-600 p-8 rounded-3xl shadow-2xl hover:${shadowColors[color]} transition-all duration-500 group transform hover:-translate-y-1`}>
            <div className="absolute inset-0 z-0">
              <img src={img} alt="Fondo paso" className="w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/80"></div>
            </div>
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemLista = ({ icon, text }: any) => (
  <li className="flex items-start gap-3 bg-slate-950/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50 hover:border-slate-500 transition-colors">
    <div className="text-amber-500 mt-0.5 shrink-0">{icon}</div>
    <span className="text-sm text-slate-200">{text}</span>
  </li>
);

const Pregunta = ({ titulo, respuesta }: any) => (
  <details className="group bg-slate-900/50 rounded-lg border border-slate-700 open:border-amber-500/50 transition-all">
    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-200 hover:text-amber-500 list-none">
      <span>{titulo}</span>
      <ChevronDown className="transition-transform group-open:rotate-180 text-slate-500" />
    </summary>
    <div className="px-4 pb-4 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-2">
      {respuesta}
    </div>
  </details>
);

export default Pagos;