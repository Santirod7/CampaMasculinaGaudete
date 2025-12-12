import React from 'react';
import { MessageCircleMore } from 'lucide-react';

const WhatsAppButton = () => {
  // Reemplaza XXXXXXXXXX con tu número real (ej: 5493512345678)
  const phoneNumber = "+5403813566953"; 
  const message = "Hola, tengo una consulta sobre el Campamento Gaudete.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircleMore size={32} />
    </a>
  );
};

export default WhatsAppButton;