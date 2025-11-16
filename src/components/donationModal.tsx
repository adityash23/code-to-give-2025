import React, { useState } from 'react';
import { X, Check, Heart, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

type DonationStep = 'amount' | 'details' | 'payment' | 'complete';

export function DonationModal({ isOpen, onClose, onLoginClick }: DonationModalProps) {
  const [step, setStep] = useState<DonationStep>('amount');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [createAccount, setCreateAccount] = useState<boolean | null>(null);

  if (!isOpen) return null;

  const handleClose = () => {
    setStep('amount');
    setSelectedAmount(null);
    setCustomAmount('');
    onClose();
  };

  const suggestedAmounts = [35, 50, 100, 250, 500, 1000];

  const ShareButtons = () => (
    <div className="flex gap-3 justify-center">
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
        <Share2 className="w-4 h-4" />
        Facebook
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors">
        <Share2 className="w-4 h-4" />
        Instagram
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors">
        <Share2 className="w-4 h-4" />
        LinkedIn
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#8B7BA8] to-[#9B89BC] text-white p-6 flex items-center justify-between rounded-t-xl">
          <div>
            <h2 className="text-2xl lg:text-3xl">Make Your Donation</h2>
            <p className="text-sm opacity-90 mt-1">Every gift makes a difference</p>
          </div>
          <button onClick={handleClose} className="hover:bg-white/20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {step === 'amount' && (
            <div className="space-y-6">
              {/* Donation Type Toggle - One-Time Priority */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`flex-1 px-6 py-4 rounded-lg transition-all ${
                    donationType === 'one-time'
                      ? 'bg-[#FF8C00] text-white shadow-lg ring-2 ring-[#FF8C00] ring-offset-2'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-xl mb-1">One-Time Gift</div>
                    <div className="text-sm opacity-80">Immediate Impact</div>
                  </div>
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 px-6 py-4 rounded-lg transition-all ${
                    donationType === 'monthly'
                      ? 'bg-[#8B7BA8] text-white shadow-lg ring-2 ring-[#8B7BA8] ring-offset-2'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-xl mb-1">Monthly Support</div>
                    <div className="text-sm opacity-80">Sustained Change</div>
                  </div>
                </button>
              </div>

              {/* Suggested Amounts */}
              <div>
                <h3 className="text-xl text-[#5B4B7A] mb-4 text-center">Select Your Donation Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`relative p-4 rounded-lg border-2 transition-all ${
                        selectedAmount === amount
                          ? 'border-[#FF8C00] bg-[#FF8C00]/10 ring-2 ring-[#FF8C00] ring-offset-2'
                          : 'border-gray-200 hover:border-[#8B7BA8]/50'
                      }`}
                    >
                      {selectedAmount === amount && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-[#FF8C00] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className="text-2xl text-[#5B4B7A]">${amount}</div>
                      {donationType === 'monthly' && (
                        <div className="text-xs text-gray-600 mt-1">per month</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <Label htmlFor="customAmount" className="text-lg text-[#5B4B7A] mb-2 block">
                  Or enter a custom amount
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">$</span>
                  <Input
                    id="customAmount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-8 text-xl py-6"
                  />
                </div>
              </div>

              {/* Impact Statement */}
              {(selectedAmount || customAmount) && (
                <div className="bg-[#8B7BA8]/10 rounded-lg p-4 border border-[#8B7BA8]/30">
                  <p className="text-[#5B4B7A] text-center">
                    {donationType === 'monthly' ? (
                      <>Your monthly gift of ${selectedAmount || customAmount} provides ongoing support to families rebuilding their lives.</>
                    ) : (
                      <>Your donation of ${selectedAmount || customAmount} makes an immediate impact on families in crisis.</>
                    )}
                  </p>
                </div>
              )}

              <Button
                size="lg"
                onClick={() => setStep('details')}
                disabled={!selectedAmount && !customAmount}
                className="w-full bg-[#FF8C00] hover:bg-[#FF7C00] text-white text-lg py-6"
              >
                Continue
              </Button>
            </div>
          )}

          {step === 'details' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-2xl text-[#5B4B7A]">
                  ${selectedAmount || customAmount} {donationType === 'monthly' ? '/ month' : ''}
                </p>
              </div>

              {/* Account Option */}
              {createAccount === null && (
                <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
                  <h3 className="text-xl text-[#5B4B7A] mb-4 text-center">Create an Account?</h3>
                  <p className="text-gray-700 mb-6 text-center">
                    Track your impact, earn badges, and see how your donations help families
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => setCreateAccount(true)}
                      className="bg-[#8B7BA8] hover:bg-[#7A6A97] text-white"
                    >
                      Create Account
                    </Button>
                    <Button
                      onClick={() => setCreateAccount(false)}
                      variant="outline"
                      className="border-[#8B7BA8] text-[#8B7BA8] hover:bg-[#F3F0F8]"
                    >
                      Continue as Guest
                    </Button>
                  </div>
                  <button
                    onClick={onLoginClick}
                    className="text-[#8B7BA8] hover:underline text-sm mt-4 block mx-auto"
                  >
                    Already have an account? Log in
                  </button>
                </div>
              )}

              {createAccount === true && (
                <div className="space-y-4">
                  <h3 className="text-xl text-[#5B4B7A] mb-4">Create Your Account</h3>
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" className="mt-1" />
                  </div>
                  <div className="bg-[#F3F0F8] rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-2">With an account you can:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#8B7BA8] mt-0.5 flex-shrink-0" />
                        <span>Track your donation history and impact</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#8B7BA8] mt-0.5 flex-shrink-0" />
                        <span>Earn badges for milestones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#8B7BA8] mt-0.5 flex-shrink-0" />
                        <span>Receive personalized updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#8B7BA8] mt-0.5 flex-shrink-0" />
                        <span>Access tax receipts anytime</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {createAccount === false && (
                <div className="bg-[#F3F0F8] rounded-lg p-6 text-center">
                  <p className="text-gray-700 mb-4">Continuing as guest</p>
                  <p className="text-sm text-gray-600">
                    You can create an account later to track your impact
                  </p>
                </div>
              )}

              {createAccount !== null && (
                <Button
                  size="lg"
                  onClick={() => setStep('payment')}
                  className="w-full bg-[#FF8C00] hover:bg-[#FF7C00] text-white"
                >
                  Continue to Payment
                </Button>
              )}

              <button
                onClick={() => {
                  setStep('amount');
                  setCreateAccount(null);
                }}
                className="text-gray-600 hover:text-[#5B4B7A] text-sm mx-auto block"
              >
                ← Back
              </button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-2xl text-[#5B4B7A]">
                  ${selectedAmount || customAmount} {donationType === 'monthly' ? '/ month' : ''}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Doe" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="billingAddress">Billing Address</Label>
                  <Input id="billingAddress" placeholder="123 Main St, Montreal, QC" className="mt-1" />
                </div>
              </div>

              <div className="bg-[#F3F0F8] rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">
                  🔒 Secure payment processing • Tax receipt provided
                </p>
              </div>

              <Button
                size="lg"
                onClick={() => setStep('complete')}
                className="w-full bg-[#FF8C00] hover:bg-[#FF7C00] text-white text-lg py-6"
              >
                Complete Donation
              </Button>

              <button
                onClick={() => setStep('details')}
                className="text-gray-600 hover:text-[#5B4B7A] text-sm mx-auto block"
              >
                ← Back
              </button>
            </div>
          )}

          {step === 'complete' && (
            <div className="text-center space-y-6 py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-green-600 fill-current" />
              </div>
              <div>
                <h3 className="text-3xl text-[#5B4B7A] mb-2">Thank You!</h3>
                <p className="text-xl text-gray-700 mb-4">
                  Your donation of ${selectedAmount || customAmount} will change lives
                </p>
                <p className="text-gray-600">
                  You will receive a tax receipt by email shortly
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
                <p className="text-[#5B4B7A] mb-4">Share your impact with others!</p>
                <ShareButtons />
              </div>

              {createAccount && (
                <div className="bg-[#8B7BA8]/10 rounded-lg p-6">
                  <p className="text-[#5B4B7A] mb-2">🎉 You've earned your first badge!</p>
                  <p className="text-gray-700 text-sm">
                    Check your account to see your impact and track future donations
                  </p>
                </div>
              )}

              <Button
                size="lg"
                onClick={handleClose}
                className="bg-[#8B7BA8] hover:bg-[#7A6A97] text-white"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
