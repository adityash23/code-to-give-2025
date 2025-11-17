import { useState } from 'react';
import { X, Eye, EyeOff, Facebook, Apple } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import type { PageType } from '../App';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
  setLoggedIn: (loggedIn: boolean) => void; 
}


export function LoginModal({ isOpen, onClose, onNavigate, setLoggedIn }: LoginModalProps) {
  const [showPasscode, setShowPasscode] = useState(false);

  if (!isOpen) return null;

  const handleSignIn = () => {
    onNavigate('dashboard'); 
    setLoggedIn(true);
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8B7BA8]">Supporter Access</p>
            <h2 className="text-3xl font-semibold text-gray-900 mt-2">User Login</h2>
            <p className="text-gray-600 mt-2">
              Hey, enter your details to get signed in to your Shield of Athena account.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <Input placeholder="Enter Email / Phone No" className="h-12 rounded-2xl bg-gray-50 border-none" />
          <div className="relative">
            <Input
              placeholder="Passcode"
              type={showPasscode ? 'text' : 'password'}
              className="h-12 rounded-2xl bg-gray-50 border-none pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPasscode((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-sm font-semibold text-gray-500"
            >
              {showPasscode ? (
                <>
                  <EyeOff className="w-4 h-4 mr-1" /> Hide
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-1" /> Show
                </>
              )}
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-600">Having trouble signing in?</p>

        <Button onClick={handleSignIn} className="w-full h-12 rounded-2xl bg-[#FFB166] hover:bg-[#FFA24C] text-gray-900 text-lg font-semibold">
          Sign in
        </Button>

        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="flex-1 h-px bg-gray-200" />
          Or sign in with
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-3 gap-3 text-sm font-medium">
          <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3 hover:border-gray-300 transition">
            <span className="text-lg">G</span>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3 hover:border-gray-300 transition">
            <Apple className="w-4 h-4" />
            Apple ID
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-2xl py-3 hover:border-gray-300 transition">
            <Facebook className="w-4 h-4" />
            Facebook
          </button>
        </div>

        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{' '}
          <button className="text-[#8B7BA8] font-semibold hover:underline">Sign up</button>
        </p>
      </div>
    </div>
  );
}
