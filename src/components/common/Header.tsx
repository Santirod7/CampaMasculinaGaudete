import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PaymentModal from '../ui/PaymentModal';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    // --- CONFIGURACIÓN DE LINKS ---
    // 1. Pon aquí el link a la plataforma de pago (MercadoPago, MacroClick, etc.)
    const LINK_PLATAFORMA_PAGO = "https://actividades.fasta.org.ar/producto/campamento-region-norte/"; 
    
    // 2. El link del formulario que ya tenías
    const LINK_FORMULARIO = "https://docs.google.com/forms/d/e/1FAIpQLSfIjhcHaiOwHOWcrbJ9SIZ2Iw9RWsfkz9q6xig81ArrI8Sjpg/viewform";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                    ? 'bg-brand-blue/95 backdrop-blur-md shadow-lg h-16 py-0' 
                    : 'bg-transparent h-20 py-2'
                }`}
            >
                <div className="container mx-auto px-6 h-full flex justify-between items-center">
                    
                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
                        <div className={`text-1xl font-black font-heading tracking-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
                            CAMPAMENTO <span className="text-brand-yellow group-hover:text-brand-orange transition-colors">GAUDETE</span>
                        </div>
                    </Link>
                    
                    {/* NAV DESKTOP */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'Inicio', path: '/' },
                            { name: 'Centro de información', path: '/centro-de-informacion' },
                            { name: 'Camino al campamento', path: '/preparacion' }
                        ].map((item) => (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 hover:text-brand-yellow ${
                                    isActive(item.path) ? 'text-brand-yellow' : (scrolled ? 'text-gray-200' : 'text-white drop-shadow-md')
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        <Link 
                            to="/pagos"
                            className="px-5 py-2 bg-brand-yellow text-brand-blue font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 shadow-md text-sm uppercase cursor-pointer"
                        >
                            Quiero sumarme
                        </Link>
                    </nav>

                    {/* HAMBURGUESA MÓVIL */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className={`${scrolled ? 'text-white' : 'text-white'} focus:outline-none transition-transform duration-300`}
                        >
                            {isMenuOpen ? <X className="w-8 h-8 drop-shadow-md" /> : <Menu className="w-8 h-8 drop-shadow-md" />}
                        </button>
                    </div>
                </div>

                {/* MENÚ MÓVIL */}
                <div className={`md:hidden absolute top-full left-0 right-0 bg-brand-blue/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out transform origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {[
                            { name: 'Inicio', path: '/' },
                            { name: 'Centro de información', path: '/centro-de-informacion' },
                            { name: 'Camino al campamento', path: '/preparacion' }
                        ].map((item) => (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                onClick={handleLinkClick}
                                className={`text-lg font-bold uppercase tracking-wide hover:text-brand-yellow transition-colors border-b border-white/10 pb-2 ${
                                    isActive(item.path) ? 'text-brand-yellow' : 'text-white'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        <Link 
                            to="/pagos"
                            className="px-5 py-2 bg-brand-yellow text-brand-blue font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 shadow-md text-sm uppercase cursor-pointer"
                        >
                            Quiero sumarme
                        </Link>
                    </div>
                </div>
            </header>

            {/* MODAL CON DOBLE LINK */}
            <PaymentModal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
                paymentLink={LINK_PLATAFORMA_PAGO} // Link 1
                formLink={LINK_FORMULARIO}         // Link 2
            />
        </>
    );
};

export default Header;