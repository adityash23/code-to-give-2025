import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import type { PageType } from '../App';
import logoImage  from '../assets/react.svg';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#E8E3F0] text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={logoImage} alt="Shield of Athena" className="h-12" />
            </div>
            <p className="text-gray-600 mb-6">
              Free, confidential support for victims of family and conjugal violence in Montreal and Laval.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-[#5B4B7A] mb-4">Subscribe to our newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get updates on our work and impact.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="flex-1"
                />
                <Button className="bg-[#8B7BA8] hover:bg-[#7A6A97] text-white">
                  →
                </Button>
              </div>
            </div>
          </div>

          {/* Opening Hours - Montreal */}
          <div>
            <h3 className="text-[#5B4B7A] mb-4">Opening Hours</h3>
            <div className="space-y-1 text-gray-600 text-sm">
              <p>Monday: 9h00-17h00</p>
              <p>Tuesday: 9h00-17h00</p>
              <p>Wednesday: 9h00-17h00</p>
              <p>Thursday: 9h00-17h00</p>
              <p>Friday: 9h00-17h00</p>
              <p>Saturday: CLOSED</p>
              <p>Sunday: CLOSED</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-[#5B4B7A] mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="space-y-2">
                <h4 className="text-[#5B4B7A]">Montreal</h4>
                <div className="flex items-start gap-2 text-gray-600">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>514-274-8117 or</p>
                    <p>1-855-274-8117</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>Multilingual Sexual Violence Referral and Ligne Libre</p>
                </div>
                <p className="text-gray-600">514-270-2806</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[#5B4B7A]">Laval</h4>
                <p className="text-gray-600">450-6584</p>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>Multilingual Sexual Violence Referral and Ligne Libre</p>
                </div>
                <p className="text-gray-600">514-270-2806</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[#5B4B7A]">Mailing Address</h4>
                <p className="text-gray-600">
                  4126 Saint-Laurent Boulevard, Suite 300<br />
                  Street Royal Station<br />
                  Mount Royal, QC, H2W 1Y7
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:bouclierathena@bellnet.ca" className="text-gray-600 hover:text-[#5B4B7A]">
                    bouclierathena@bellnet.ca
                  </a>
                </div>
                <p className="text-gray-600">Fax: 514-274-7591</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Donate Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#D0C7E0]">
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#5B4B7A] hover:text-[#8B7BA8] transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#5B4B7A] hover:text-[#8B7BA8] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#5B4B7A] hover:text-[#8B7BA8] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#5B4B7A] hover:text-[#8B7BA8] transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-8">
            Donate
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 pt-8">
          <p>© {new Date().getFullYear()} Shield of Athena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}