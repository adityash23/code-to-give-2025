import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import  type { PageType } from '../App';

const logoImage = '/logo.png';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onDonateClick: () => void;
  onLoginClick: () => void;
}

export function Header({ currentPage, onNavigate, onDonateClick, onLoginClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const navLinks: Array<{ label: string; page: PageType }> = [
    { label: 'Home', page: 'home' },
    { label: 'Are You a Victim?', page: 'emergency' },
    { label: 'Collabration', page: 'volunteer' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={logoImage} alt="Shield of Athena" className="h-12" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavigation(link.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.page ? 'text-[#5B4B7A]' : 'text-gray-700 hover:text-[#5B4B7A]'
                }`}
              >
                {link.label.toUpperCase()}
              </button>
            ))}

            <Button 
              onClick={onDonateClick}
              className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-6"
            >
              DONATE NOW
            </Button>
            <Button
              onClick={onLoginClick}
              variant="outline"
              className="border-[#8B7BA8] text-[#5B4B7A] hover:bg-[#F3F0F8] px-6"
            >
              Sign in
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavigation(link.page)}
                  className="text-left text-gray-700 hover:text-[#5B4B7A] font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={onDonateClick}
                className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white w-full"
              >
                DONATE NOW
              </Button>
              <Button 
                onClick={onLoginClick}
                variant="outline"
                className="border-[#8B7BA8] text-[#5B4B7A] hover:bg-[#F3F0F8] w-full"
              >
                Sign in
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
