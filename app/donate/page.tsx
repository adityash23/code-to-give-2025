"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Heart, Check, Share2, Mail } from 'lucide-react';

type DonationStep = 'why' | 'amount' | 'details' | 'thank-you';

interface DonationAmount {
  value: number;
  impact: string;
}

export default function DonationPage() {
  const [step, setStep] = useState<DonationStep>('why');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const donationAmounts: DonationAmount[] = [
    { value: 25, impact: 'Provides essential supplies for one shelter resident' },
    { value: 50, impact: 'Funds one day of crisis counseling services' },
    { value: 100, impact: 'Supports one week of safe housing at Athena\'s House' },
    { value: 250, impact: 'Helps sustain multilingual support services' },
  ];

  const handleAmountNext = () => {
    if (customAmount || selectedAmount) {
      setStep('details');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('thank-you');
  };

  const amount = customAmount || selectedAmount || 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      {/* Progress Indicator */}
      {step !== 'thank-you' && (
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <div className={`flex items-center gap-2 ${step === 'why' ? 'text-purple-600' : step !== 'why' ? 'text-purple-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step !== 'why' ? 'bg-purple-600 text-white' : step === 'why' ? 'border-2 border-purple-600 text-purple-600' : 'border-2 border-gray-300 text-gray-400'}`}>
                  {step !== 'why' ? <Check size={16} /> : '1'}
                </div>
                <span className="hidden sm:inline">Why Donate</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 mx-2">
                <div className={`h-full transition-all duration-300 ${step !== 'why' ? 'bg-purple-600' : 'bg-transparent'}`} />
              </div>
              <div className={`flex items-center gap-2 ${step === 'amount' ? 'text-purple-600' : step === 'details' || step === 'thank-you' ? 'text-purple-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'details' || step === 'thank-you' ? 'bg-purple-600 text-white' : step === 'amount' ? 'border-2 border-purple-600 text-purple-600' : 'border-2 border-gray-300 text-gray-400'}`}>
                  {step === 'details' || step === 'thank-you' ? <Check size={16} /> : '2'}
                </div>
                <span className="hidden sm:inline">Choose Amount</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 mx-2">
                <div className={`h-full transition-all duration-300 ${step === 'details' || step === 'thank-you' ? 'bg-purple-600' : 'bg-transparent'}`} />
              </div>
              <div className={`flex items-center gap-2 ${step === 'details' ? 'text-purple-600' : step === 'thank-you' ? 'text-purple-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'thank-you' ? 'bg-purple-600 text-white' : step === 'details' ? 'border-2 border-purple-600 text-purple-600' : 'border-2 border-gray-300 text-gray-400'}`}>
                  {step === 'thank-you' ? <Check size={16} /> : '3'}
                </div>
                <span className="hidden sm:inline">Complete</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Why Donate */}
          {step === 'why' && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <Heart className="text-purple-600" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Every Donation Makes a Difference</h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Shield of Athena relies on donors like you to provide free, life-saving services to 
                women and children fleeing violence. Your support sustains our shelters and programs.
              </p>

              <Card className="p-8 mb-8 text-left max-w-2xl mx-auto bg-white">
                <h2 className="text-2xl mb-6 text-center text-gray-900">How Your Donation Helps</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Check className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-gray-900">24/7 Emergency Shelter</h3>
                      <p className="text-gray-700">
                        Provide safe, confidential housing at Athena's House and our Laval facility
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Check className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-gray-900">Multilingual Counseling</h3>
                      <p className="text-gray-700">
                        Fund trauma-informed therapy in 12+ languages with cultural sensitivity
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Check className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-gray-900">Free Legal Clinics</h3>
                      <p className="text-gray-700">
                        Support legal assistance with family law, divorce, and immigration matters
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Check className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-gray-900">Life Skills & Independence</h3>
                      <p className="text-gray-700">
                        Help survivors gain job training, French classes, and financial literacy
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <button
                onClick={() => setStep('amount')}
                className="px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                style={{ 
                  backgroundColor: 'var(--donate-orange)', 
                  color: 'white',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--donate-orange-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--donate-orange)'}
              >
                Continue to Donate
              </button>
            </div>
          )}

          {/* Step 2: Choose Amount */}
          {step === 'amount' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Choose Your Donation</h1>
                <p className="text-xl text-gray-700">
                  Select an amount or enter your own
                </p>
              </div>

              <Card className="p-8 max-w-2xl mx-auto bg-white">
                {/* Donation Type */}
                <div className="mb-8">
                  <Label className="mb-3 block text-gray-900">Donation Frequency</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        donationType === 'one-time'
                          ? 'border-purple-600 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-purple-300 text-gray-900'
                      }`}
                    >
                      One-Time Gift
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        donationType === 'monthly'
                          ? 'border-purple-600 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-purple-300 text-gray-900'
                      }`}
                    >
                      Monthly Support
                    </button>
                  </div>
                </div>

                {/* Suggested Amounts with Impact */}
                <div className="mb-6">
                  <Label className="mb-4 block text-gray-900">Select Amount</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {donationAmounts.map((donation) => (
                      <button
                        key={donation.value}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(donation.value);
                          setCustomAmount('');
                        }}
                        className={`p-5 rounded-lg border-2 transition-all text-left ${
                          selectedAmount === donation.value && !customAmount
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                        }`}
                      >
                        <div className={`text-2xl mb-2 ${selectedAmount === donation.value && !customAmount ? 'text-purple-700' : 'text-gray-900'}`}>
                          ${donation.value}
                          {donationType === 'monthly' && <span className="text-base">/mo</span>}
                        </div>
                        <div className="text-sm text-gray-700">{donation.impact}</div>
                      </button>
                    ))}
                  </div>

                  <div>
                    <Label htmlFor="custom-amount" className="mb-2 block text-gray-900">
                      Or enter a custom amount
                    </Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 text-lg">$</span>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        min="1"
                        className="pl-8 text-lg h-14"
                      />
                    </div>
                  </div>
                </div>

                {donationType === 'monthly' && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-purple-900">
                      <strong>Monthly giving creates lasting change.</strong> Your recurring support helps us 
                      plan sustainable programs and provide consistent care for survivors.
                    </p>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('why')}
                    className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-gray-900"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleAmountNext}
                    disabled={!customAmount && !selectedAmount}
                    className="flex-1 px-6 py-3 rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
                    style={{ 
                      backgroundColor: customAmount || selectedAmount ? 'var(--donate-orange)' : '#ccc',
                      color: 'white',
                    }}
                    onMouseEnter={(e) => {
                      if (customAmount || selectedAmount) {
                        e.currentTarget.style.backgroundColor = 'var(--donate-orange-hover)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (customAmount || selectedAmount) {
                        e.currentTarget.style.backgroundColor = 'var(--donate-orange)';
                      }
                    }}
                  >
                    Continue to Payment
                  </button>
                </div>
              </Card>
            </div>
          )}

          {/* Step 3: Details & Payment */}
          {step === 'details' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Complete Your Donation</h1>
                <p className="text-xl text-gray-700">
                  You're donating ${amount} {donationType === 'monthly' ? 'per month' : ''}
                </p>
              </div>

              <Card className="p-8 max-w-2xl mx-auto bg-white">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <Label htmlFor="name" className="mb-2 block text-gray-900">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="h-12"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="email" className="mb-2 block text-gray-900">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="h-12"
                    />
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="mb-4 text-gray-900">Payment Information</h3>
                    <p className="text-gray-700 mb-4">
                      In a production environment, secure payment processing would be handled here via 
                      a service like Stripe or PayPal.
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Card number" className="h-12" disabled />
                      <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="MM/YY" className="h-12" disabled />
                        <Input placeholder="CVV" className="h-12" disabled />
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-700">
                      Your donation is <strong>secure and tax-deductible</strong>. You'll receive a receipt 
                      via email for your records.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('amount')}
                      className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-gray-900"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                      style={{ 
                        backgroundColor: 'var(--donate-orange)', 
                        color: 'white',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--donate-orange-hover)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--donate-orange)'}
                    >
                      Complete Donation of ${amount}
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          )}

          {/* Step 4: Thank You */}
          {step === 'thank-you' && (
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Check className="text-green-600" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Thank You for Your Generosity!</h1>
              <p className="text-xl text-gray-700 mb-8">
                Your {donationType === 'monthly' ? 'monthly ' : ''}donation of ${amount} has been received.
              </p>

              <Card className="p-8 mb-8 bg-purple-50 border-purple-200">
                <h2 className="text-2xl mb-4 text-gray-900">Your Impact</h2>
                <p className="text-gray-700 mb-4">
                  {donationType === 'monthly' 
                    ? `With your monthly commitment of $${amount}, you'll provide ongoing support that helps survivors rebuild their lives with dignity and hope.`
                    : `Your generous gift of $${amount} will directly help survivors of domestic violence access critical resources they need.`
                  }
                </p>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="text-sm text-gray-700">
                    A confirmation email with your tax receipt has been sent to <strong className="text-gray-900">{formData.email}</strong>
                  </p>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card className="p-6">
                  <Share2 className="text-purple-600 mb-3 mx-auto" size={32} />
                  <h3 className="mb-2 text-gray-900">Share Your Support</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Help spread awareness by sharing our mission with your network
                  </p>
                  <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    Share on Social Media
                  </button>
                </Card>

                <Card className="p-6">
                  <Mail className="text-purple-600 mb-3 mx-auto" size={32} />
                  <h3 className="mb-2 text-gray-900">Stay Updated</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Receive updates about how your donation is making a difference
                  </p>
                  <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    Subscribe to Newsletter
                  </button>
                </Card>
              </div>

              <div className="space-y-3">
                <Link
                  href="/"
                  className="block w-full px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors text-center"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

