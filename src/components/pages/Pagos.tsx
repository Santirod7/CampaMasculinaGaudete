import React from 'react';
import { Check, Tent, Utensils, Shirt, Flashlight, Shield, Map, ArrowRight, ExternalLink } from 'lucide-react';

const Pagos = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 py-12 pt-28 px-4 sm:px-6 lg:px-8">
      
      {/* --- SECCIÓN 1: TÍTULO Y PRECIOS --- */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          {/* CAMBIO 1: Título en Amarillo/Ámbar */}
          <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4 font-serif tracking-tight">
            Inscripción y Costos
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Visualiza las modalidades disponibles. El pago se realiza a través de la plataforma oficial de Fasta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* CARD CÓRDOBA (Solo Info) */}
          <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300 group">
            <div className="bg-slate-950 p-8 text-white relative overflow-hidden border-b border-slate-700">
              <div className="absolute top-0 right-0 p-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                <Shield size={120} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider relative z-10 text-amber-500">Milicianos Córdoba</h3>
              <div className="mt-4 flex items-baseline gap-1 relative z-10">
                <span className="text-5xl font-bold text-white">$45.000</span>
              </div>
              <p className="text-slate-500 text-sm mt-2 relative z-10">Costo total del campamento</p>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="bg-green-900/30 p-1 rounded-full mt-0.5"><Check size={14} className="text-green-500"/></div>
                  <span className="font-medium">Transporte ida y vuelta (Sede)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="bg-green-900/30 p-1 rounded-full mt-0.5"><Check size={14} className="text-green-500"/></div>
                  <span className="font-medium">Pensión completa (4 comidas)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="bg-green-900/30 p-1 rounded-full mt-0.5"><Check size={14} className="text-green-500"/></div>
                  <span className="font-medium">Seguro de vida y accidentes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CARD OTRAS JURISDICCIONES (Solo Info) */}
          <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all duration-300 group relative">
            <div className="absolute top-5 right-0 bg-slate-600 text-white text-xs font-bold px-4 py-1 rounded-l-full shadow-md z-20 border-l border-b border-slate-400">
              VISITANTES
            </div>
            <div className="bg-slate-950 p-8 text-white relative overflow-hidden border-b border-slate-700">
               <div className="absolute top-0 right-0 p-4 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                <Map size={120} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider relative z-10 text-slate-400">Otras Jurisdicciones</h3>
              <div className="mt-4 flex items-baseline gap-1 relative z-10">
                <span className="text-5xl font-bold text-white">$35.000</span>
              </div>
              <p className="text-slate-500 text-sm mt-2 relative z-10">Precio bonificado</p>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-500 opacity-50">
                  <div className="bg-slate-800 p-1 rounded-full mt-0.5"><Check size={14} className="text-slate-600"/></div>
                  <span className="line-through decoration-slate-600">Transporte incluido</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="bg-green-900/30 p-1 rounded-full mt-0.5"><Check size={14} className="text-green-500"/></div>
                  <span className="font-medium">Pensión completa (4 comidas)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="bg-green-900/30 p-1 rounded-full mt-0.5"><Check size={14} className="text-green-500"/></div>
                  <span className="font-medium">Seguro de vida y accidentes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECCIÓN 2: BOTÓN DE ACCIÓN (NUEVO) --- */}
      <div className="max-w-3xl mx-auto mb-24 text-center">
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-600 shadow-2xl relative overflow-hidden">
          {/* Efecto de brillo de fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent skew-x-12"></div>
          
          <h2 className="text-2xl font-bold text-white mb-2 relative z-10">¿Listo para el combate?</h2>
          <p className="text-slate-400 mb-8 text-sm relative z-10">
            Serás redirigido a la plataforma de pagos de Fasta. <br/>
            <span className="text-amber-500 font-semibold">Paso 1: Pago</span> <ArrowRight size={14} className="inline mx-1"/> <span className="text-amber-500 font-semibold">Paso 2: Formulario</span>
          </p>

          <a 
            href="LINK_A_LA_PLATAFORMA_DE_PAGO" 
            target="_blank" 
            className="inline-flex items-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-700 hover:scale-105 transition-all shadow-lg shadow-amber-600/30 relative z-10"
          >
            IR A PAGAR E INSCRIBIRSE <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* --- SECCIÓN 3: EQUIPAMIENTO (IGUAL QUE ANTES) --- */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-slate-700 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-white font-serif">Equipamiento Táctico</h2>
            <p className="text-slate-400 mt-2">Lista de suministros obligatorios para la supervivencia y formación.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-900/30 text-amber-400 border border-amber-700/50">
              Revisión Obligatoria
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CATEGORÍA 1: DESCANSO */}
          <div className="bg-slate-800 rounded-xl shadow-lg hover:shadow-amber-900/20 transition-all duration-300 border-t-4 border-amber-600 group">
            <div className="p-6">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-amber-500 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors border border-slate-700">
                <Tent size={24} />
              </div>
              <h3 className="font-bold text-lg text-white mb-4">Zona de Descanso</h3>
              <ul className="space-y-3">
                {['Bolsa de dormir', 'Aislante térmico', 'Carpa (por patrulla)', 'Manta extra'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CATEGORÍA 2: RANCHO */}
          <div className="bg-slate-800 rounded-xl shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border-t-4 border-blue-600 group">
            <div className="p-6">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-700">
                <Utensils size={24} />
              </div>
              <h3 className="font-bold text-lg text-white mb-4">Rancho y Comida</h3>
              <ul className="space-y-3">
                {['Plato hondo (No vidrio)', 'Jarro metálico', 'Cubiertos completos', 'Repasador', 'Cantimplora/Botella'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CATEGORÍA 3: INDUMENTARIA */}
          <div className="bg-slate-800 rounded-xl shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 border-t-4 border-emerald-600 group">
            <div className="p-6">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors border border-slate-700">
                <Shirt size={24} />
              </div>
              <h3 className="font-bold text-lg text-white mb-4">Indumentaria</h3>
              <ul className="space-y-3">
                {['Ropa de fajina', 'Abrigo polar', 'Calzado cómodo (x2)', 'Uniforme completo', 'Gorra/Sombrero'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CATEGORÍA 4: VARIOS */}
          <div className="bg-slate-800 rounded-xl shadow-lg hover:shadow-slate-900/50 transition-all duration-300 border-t-4 border-slate-500 group">
            <div className="p-6">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 mb-4 group-hover:bg-slate-500 group-hover:text-white transition-colors border border-slate-700">
                <Flashlight size={24} />
              </div>
              <h3 className="font-bold text-lg text-white mb-4">Elementos Varios</h3>
              <ul className="space-y-3">
                {['Linterna (+ pilas)', 'Elementos de higiene', 'Repelente / Protector', 'Rosario', 'Cuaderno y lapicera'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pagos;