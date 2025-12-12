import React from 'react';
import Logo from '../pages/Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-brand-yellow/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
             <div className="w-16 h-16 mb-4">
                 <Logo className="w-full h-full" />
             </div>
            <h3 className="text-xl font-black font-heading text-brand-yellow mb-2 uppercase">Campamento Gaudete</h3>
            <p className="text-gray-400 text-sm">Campamento Regional 26</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white font-heading uppercase tracking-wide">Explora</h4>
            <ul className="space-y-2">
              <li><Link to="/centro-de-informacion" className="text-gray-400 hover:text-brand-yellow transition-colors">Centro de información</Link></li>
              <li><Link to="/preparacion" className="text-gray-400 hover:text-brand-yellow transition-colors">Camino al campamento</Link></li>
              <li><Link to="/pagos" className="text-gray-400 hover:text-brand-yellow transition-colors">Inscripción</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white font-heading uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Protocolo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Ficha Medica</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white font-heading uppercase tracking-wide">Conecta</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/region_norte?igsh=Z2xzeHg3NTR0aW14" aria-label="Instagram" className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-blue transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-yellow/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Campamento Gaudete - Regional 26. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;