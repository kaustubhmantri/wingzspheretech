import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center group"
            aria-label="WingzSphere Tech Home"
          >
            <img
              src="/Logo (1).png"
              alt="WingzSphere Tech"
              className="h-16 md:h-20 w-auto transform group-hover:scale-105 transition-transform duration-300"
              style={{ maxHeight: '72px' }}
            />
          </button>

          <nav className="hidden md:flex items-center space-x-2" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-primary text-white shadow-lg shadow-primary-500/30'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-cyan/10'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-gradient-to-r hover:from-primary-100 hover:to-accent-cyan/20 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-2xl"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-cyan/10'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
