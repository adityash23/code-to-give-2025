import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import type { PageType } from '../App';
import { Check } from 'lucide-react';

interface DonationAmountPageProps {
  onNavigate: (page: PageType) => void;
}

export function DonationAmountPage({ onNavigate }: DonationAmountPageProps) {
  const [donationType, setDonationType] = useState<'monthly' | 'one-time'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const suggestedAmounts = [35, 50, 100, 250, 500, 1000];

  const handleContinue = () => {
    // In a real implementation, this would proceed to payment
    alert('Payment processing would continue here');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Make Your Donation</h1>
          <p className="text-xl opacity-95">
            Your support changes lives
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Donation Type Toggle */}
          <div className="flex gap-4 mb-12 justify-center">
            <button
              onClick={() => setDonationType('monthly')}
              className={`px-8 py-4 rounded-lg transition-all ${
                donationType === 'monthly'
                  ? 'bg-[#8B7BA8] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-center">
                <div className="text-xl mb-1">Monthly Donation</div>
                <div className="text-sm opacity-80">Sustained Impact</div>
              </div>
            </button>
            <button
              onClick={() => setDonationType('one-time')}
              className={`px-8 py-4 rounded-lg transition-all ${
                donationType === 'one-time'
                  ? 'bg-[#8B7BA8] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-center">
                <div className="text-xl mb-1">One-Time Donation</div>
                <div className="text-sm opacity-80">Immediate Help</div>
              </div>
            </button>
          </div>

          {/* Suggested Amounts */}
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] mb-8">
            <h3 className="text-2xl text-[#5B4B7A] mb-6 text-center">Select Your Donation Amount</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {suggestedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`relative p-6 rounded-lg border-2 transition-all ${
                    selectedAmount === amount
                      ? 'border-[#8B7BA8] bg-[#8B7BA8]/10'
                      : 'border-gray-200 hover:border-[#8B7BA8]/50'
                  }`}
                >
                  {selectedAmount === amount && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-[#8B7BA8] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-3xl text-[#5B4B7A]">${amount}</div>
                  {donationType === 'monthly' && (
                    <div className="text-sm text-gray-600 mt-1">per month</div>
                  )}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="border-t border-gray-200 pt-6">
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
          </div>

          {/* Impact Statement */}
          {(selectedAmount || customAmount) && (
            <div className="bg-[#8B7BA8]/10 rounded-lg p-6 border border-[#8B7BA8]/30 mb-8">
              <p className="text-lg text-[#5B4B7A] text-center">
                {donationType === 'monthly' ? (
                  <>Your monthly gift of ${selectedAmount || customAmount} will provide ongoing support to women and children rebuilding their lives.</>
                ) : (
                  <>Your donation of ${selectedAmount || customAmount} will make an immediate impact on families in crisis.</>
                )}
              </p>
            </div>
          )}

          {/* Continue Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleContinue}
              disabled={!selectedAmount && !customAmount}
              className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-12"
            >
              Continue to Payment
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              Secure payment processing • Tax receipt provided
            </p>
          </div>

          {/* Other Ways to Give */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h3 className="text-2xl text-[#5B4B7A] mb-6 text-center">Other Ways to Give</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-[#E8E3F0] text-center">
                <h4 className="text-lg text-[#5B4B7A] mb-2">By Phone</h4>
                <p className="text-gray-700">Call us at<br/>514-274-8117</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#E8E3F0] text-center">
                <h4 className="text-lg text-[#5B4B7A] mb-2">By Mail</h4>
                <p className="text-sm text-gray-700">
                  Shield of Athena<br/>
                  P.O. Box 25<br/>
                  Mount Royal, QC<br/>
                  H3P 3B8
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#E8E3F0] text-center">
                <h4 className="text-lg text-[#5B4B7A] mb-2">Planned Giving</h4>
                <p className="text-gray-700">Through your will or insurance policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
