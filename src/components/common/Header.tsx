import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                ? 'bg-brand-blue/95 backdrop-blur-md shadow-lg h-16 py-0' 
                : 'bg-transparent h-20 py-2'
            }`}
        >
            <div className="container mx-auto px-6 h-full flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className={`text-2xl font-black font-heading tracking-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
                        CAMPAMENTO <span className="text-brand-yellow group-hover:text-brand-orange transition-colors">GAUDETE</span>
                    </div>
                </a>
                
                <nav className="hidden md:flex items-center space-x-8">
                    {['Sobre Nosotros', 'Actividades', 'Noticias'].map((item, idx) => {
                        const href = ['#about', '#activities', '#news'][idx];
                        return (
                            <a 
                                key={item} 
                                href={href} 
                                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 hover:text-brand-yellow ${
                                    scrolled ? 'text-gray-200' : 'text-white drop-shadow-md'
                                }`}
                            >
                                {item}
                            </a>
                        )
                    })}
                    <a href="#register" className="px-5 py-2 bg-brand-yellow text-brand-blue font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 shadow-md text-sm uppercase">
                        Inscribirse
                    </a>
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${scrolled ? 'text-white' : 'text-white'} focus:outline-none`}>
                        <svg className="w-8 h-8 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-brand-blue absolute top-full left-0 w-full shadow-xl border-t border-brand-yellow/20">
                    <a href="#about" onClick={handleLinkClick} className="block px-6 py-4 text-white hover:bg-brand-dark border-b border-brand-dark">Sobre Nosotros</a>
                    <a href="#activities" onClick={handleLinkClick} className="block px-6 py-4 text-white hover:bg-brand-dark border-b border-brand-dark">Actividades</a>
                    <a href="#news" onClick={handleLinkClick} className="block px-6 py-4 text-white hover:bg-brand-dark border-b border-brand-dark">Noticias</a>
                    <a href="#register" onClick={handleLinkClick} className="block px-6 py-4 text-brand-yellow font-bold hover:bg-brand-dark">¡Inscribirse Ahora!</a>
                </nav>
            )}
        </header>
    );
};

export default Header;