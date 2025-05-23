import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sayfa değiştiğinde mobil menüyü kapat
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/about', label: 'Ben Kimim?' },
    { path: '/skills', label: 'Neler Yapabilirim?' },
    { path: '/portfolio', label: 'Portfolyo' },
    { path: '/contact', label: 'İletişim' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center relative h-16 md:h-20">
          {/* Mobil Menü Butonu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text hover:text-primary focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menü - Ortalandı */}
          <div className="hidden md:flex justify-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobil Menü */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen 
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-3 space-y-1">
            <div className="px-4 py-2 text-primary font-medium border-b border-primary/10 mb-2">
              Mücahit Mehmet Yıldız
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 