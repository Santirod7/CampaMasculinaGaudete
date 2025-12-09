import React from 'react';
import { AlertTriangle, X, CreditCard, FileText, ExternalLink } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentLink: string;
  formLink: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, paymentLink, formLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Fondo oscuro */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Ventana Modal */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md relative z-10 transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 text-center">
          {/* Icono */}
          <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500 animate-pulse">
            <AlertTriangle size={32} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 font-serif">Inscripción en 2 Pasos</h3>
          <p className="text-slate-300 mb-6 text-sm">
            Para asegurar tu lugar, completa las siguientes acciones en orden:
          </p>

          {/* CONTENEDOR DE BOTONES */}
          <div className="space-y-4">
            
            {/* BOTÓN 1: PAGAR */}
            <div className="relative group">
              <div className="absolute -left-3 -top-3 w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold border-2 border-slate-900 shadow-md z-20">1</div>
              <a 
                href={paymentLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white p-4 rounded-xl transition-all group-hover:border-amber-500/50"
              >
                <div className="flex items-center gap-3 ml-2">
                  <CreditCard className="text-amber-500" size={20}/>
                  <div className="text-left">
                    <span className="block font-bold text-sm">Plataforma de Pago</span>
                    <span className="block text-xs text-slate-400">Realizar transferencia</span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* CONECTOR VISUAL (Línea punteada) */}
            <div className="h-4 border-l-2 border-dashed border-slate-700 mx-auto w-0"></div>

            {/* BOTÓN 2: FORMULARIO */}
            <div className="relative group">
              <div className="absolute -left-3 -top-3 w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold border-2 border-slate-900 shadow-md z-20">2</div>
              <a 
                href={formLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={onClose} // Cerramos el modal aquí porque es el último paso
                className="w-full flex items-center justify-between bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-xl transition-all shadow-lg hover:shadow-amber-600/20"
              >
                <div className="flex items-center gap-3 ml-2">
                  <FileText className="text-white" size={20}/>
                  <div className="text-left">
                    <span className="block font-bold text-sm">Formulario de Inscripción</span>
                    <span className="block text-xs text-amber-100/80">Adjuntar comprobante</span>
                  </div>
                </div>
                <ExternalLink size={16} />
              </a>
            </div>

          </div>

          <p className="mt-6 text-xs text-slate-500">
            *No olvides descargar tu comprobante de pago antes de ir al paso 2.
          </p>

        </div>
      </div>
    </div>
  );
};

export default PaymentModal;