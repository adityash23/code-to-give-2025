"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300
    backdrop-blur-xl backdrop-saturate-150
    ${
      isScrolled
        ? "bg-white/10 border-b border-gray-10 shadow-xs" // change bg-white/number to change the transparency of the forsted glass effect
        : "bg-transparent"
    }
  `}
    >
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

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              What We Do
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Causes
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Team
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Blogs
            </Link>
          </div>

          {/* Donate Now Button */}
          <div className="shrink-0">
            <Link
              href="/donate"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7C3AED] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Donate Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
