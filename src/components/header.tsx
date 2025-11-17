import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import type { PageType } from '../App';

const logoImage = '/logo.png';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: Record<string, unknown>,
          elementId: string
        ) => void;
      };
    };
  }
}

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh-CN', name: 'Chinese (Simplified)' },
  { code: 'zh-TW', name: 'Chinese (Traditional)' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'ur', name: 'Urdu' },
  { code: 'tr', name: 'Turkish' },
  { code: 'pl', name: 'Polish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'th', name: 'Thai' },
  { code: 'el', name: 'Greek' },
  { code: 'he', name: 'Hebrew' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ms', name: 'Malay' },
];

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onDonateClick: () => void;
  onLoginClick: () => void;
}

export function Header({
  currentPage,
  onNavigate,
  onDonateClick,
  onLoginClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const navLinks: Array<{ label: string; page: PageType }> = [
    { label: 'Home', page: 'home' },
    { label: 'Are You a Victim?', page: 'emergency' },
    { label: 'Collaboration', page: 'volunteer' },
  ];

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function () {
        new window.google!.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setLanguageMenuOpen(false);

    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
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
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavigation(link.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-[#5B4B7A]'
                    : 'text-gray-700 hover:text-[#5B4B7A]'
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

            {/* 🌐 Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Globe className="w-4 h-4" />
                {currentLang.toUpperCase()}
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md max-h-64 overflow-y-auto z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        currentLang === lang.code
                          ? 'bg-gray-50 font-semibold'
                          : ''
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
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

              {/* 🌐 Mobile Language Selector */}
              <div className="relative mt-2">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center justify-between w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <span>{currentLang.toUpperCase()}</span>
                  <Globe className="w-4 h-4" />
                </button>
                {languageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-full bg-white shadow-lg border border-gray-200 rounded-md max-h-64 overflow-y-auto z-50">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          currentLang === lang.code
                            ? 'bg-gray-50 font-semibold'
                            : ''
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Hidden Google Translate container */}
      <div id="google_translate_element" className="hidden" />
    </header>
  );
}