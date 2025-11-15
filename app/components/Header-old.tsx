import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="block">
              <Image
                src="/images/ShieldOfAthenaLogo.jpg"
                alt="Shield of Athena Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Search
            </Link>
            <Link 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Donate
            </Link>
            <Link 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Fundraise
            </Link>
            <Link 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </Link>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors cursor-pointer">
              <span className="text-sm">AA</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

