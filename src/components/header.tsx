import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import  type { PageType } from '../App';
import logoImage from '../assets/react.svg';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onDonateClick: () => void;
  onLoginClick: () => void;
}

export function Header({ currentPage, onNavigate, onDonateClick, onLoginClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

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
            {/* Who Are We Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('who')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#5B4B7A] transition-colors py-2">
                WHO ARE WE?
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'who' && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg border border-gray-200">
                  <button
                    onClick={() => handleNavigation('vision-mission')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A]"
                  >
                    Vision, Mission and Values
                  </button>
                  <button
                    onClick={() => handleNavigation('history')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A]"
                  >
                    History
                  </button>
                  <button
                    onClick={() => handleNavigation('governance')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A]"
                  >
                    Governance and Board of Directors
                  </button>
                  <button
                    onClick={() => handleNavigation('awards')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A]"
                  >
                    Awards and Recognition
                  </button>
                  <button
                    onClick={() => handleNavigation('news')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A] rounded-b-lg"
                  >
                    News
                  </button>
                </div>
              )}
            </div>

            {/* Are You a Victim Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('victim')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#5B4B7A] transition-colors py-2">
                ARE YOU A VICTIM?
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'victim' && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg border border-gray-200">
                  <button
                    onClick={() => handleNavigation('emergency')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A] rounded-b-lg"
                  >
                    Get Help Now
                  </button>
                </div>
              )}
            </div>

            {/* Programs & Events */}
            <button
              onClick={() => handleNavigation('programs')}
              className="text-gray-700 hover:text-[#5B4B7A] transition-colors"
            >
              PROGRAMS & EVENTS
            </button>

            {/* Get Involved Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('involved')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#5B4B7A] transition-colors py-2">
                GET INVOLVED
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'involved' && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg border border-gray-200">
                  <button
                    onClick={() => handleNavigation('donation')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A]"
                  >
                    Donations
                  </button>
                  <button
                    onClick={() => handleNavigation('volunteer')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A]"
                  >
                    Volunteering
                  </button>
                  <button
                    onClick={() => handleNavigation('volunteer')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A]"
                  >
                    Student Internships
                  </button>
                  <button
                    onClick={() => handleNavigation('sponsor')}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#F3F0F8] hover:text-[#5B4B7A] rounded-b-lg"
                  >
                    Become a Sponsor
                  </button>
                </div>
              )}
            </div>

            <Button 
              onClick={onDonateClick}
              className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-6"
            >
              DONATE NOW
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
              <div>
                <p className="text-gray-900 mb-2">WHO ARE WE?</p>
                <div className="pl-4 space-y-2">
                  <button 
                    onClick={() => handleNavigation('vision-mission')}
                    className="block text-left text-gray-700 hover:text-[#5B4B7A]"
                  >
                    Vision, Mission and Values
                  </button>
                  <button 
                    onClick={() => handleNavigation('history')}
                    className="block text-left text-gray-700 hover:text-[#5B4B7A]"
                  >
                    History
                  </button>
                  <button 
                    onClick={() => handleNavigation('governance')}
                    className="block text-left text-gray-700 hover:text-[#5B4B7A]"
                  >
                    Governance
                  </button>
                  <button 
                    onClick={() => handleNavigation('awards')}
                    className="block text-left text-gray-700 hover:text-[#5B4B7A]"
                  >
                    Awards
                  </button>
                  <button 
                    onClick={() => handleNavigation('news')}
                    className="block text-left text-gray-700 hover:text-[#5B4B7A]"
                  >
                    News
                  </button>
                </div>
              </div>
              <button 
                onClick={() => handleNavigation('emergency')}
                className="text-left text-gray-700 hover:text-[#5B4B7A]"
              >
                ARE YOU A VICTIM?
              </button>
              <button 
                onClick={() => handleNavigation('programs')}
                className="text-left text-gray-700 hover:text-[#5B4B7A]"
              >
                PROGRAMS & EVENTS
              </button>
              <div>
                <p className="text-gray-900 mb-2">GET INVOLVED</p>
                <div className="pl-4 space-y-2">
                  <button 
                    onClick={() => handleNavigation('donation')}
                    className="block text-left text-gray-700 hover:text-[#5B4B7A]"
                  >
                    Donations
                  </button>
                  <button 
                    onClick={() => handleNavigation('volunteer')}
                    className="block text-left text-gray-700 hover:text-[#5B4B7A]"
                  >
                    Volunteering
                  </button>
                  <button 
                    onClick={() => handleNavigation('sponsor')}
                    className="block text-left text-gray-700 hover:text-[#5B4B7A]"
                  >
                    Become a Sponsor
                  </button>
                </div>
              </div>
              <Button 
                onClick={onDonateClick}
                className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white w-full"
              >
                DONATE NOW
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}