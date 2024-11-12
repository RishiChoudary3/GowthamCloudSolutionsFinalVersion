import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  isDark?: boolean;
}

export default function Navigation({ onNavigate, currentPage, isDark = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const textColorClass = isDark ? 'text-white' : 'text-gray-800';
  const hoverColorClass = isDark ? 'hover:text-blue-200' : 'hover:text-blue-600';

  const navItems = [
    { label: 'Home', href: '/', page: 'home' },
    { label: 'Services', href: '#services', page: 'services' },
    { label: 'About', href: '#about', page: 'about' },
    { label: 'Jobs', href: '#', page: 'jobs' },
    { label: 'Contact', href: '#contact', page: 'contact' }
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.page === 'jobs') {
      onNavigate('jobs');
    } else if (currentPage !== 'home') {
      window.location.href = `/${item.href}`;
    } else {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`container mx-auto px-6 py-4 ${textColorClass}`}>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">Gowtham Cloud Solutions</span>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item)}
              className={`${hoverColorClass} transition`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg absolute left-0 right-0 top-16 z-50 mx-4">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className="text-gray-800 hover:text-blue-600 transition text-left py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}