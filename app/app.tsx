'use client';

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/footer';
import HomePage from './page';


export type PageType = 
  | 'home' 
  | 'vision-mission' 
  | 'history' 
  | 'governance' 
  | 'awards' 
  | 'news'
  | 'emergency'
  | 'donation'
  | 'donation-reasons'
  | 'donation-amount'
  | 'programs'
  | 'volunteer'
  | 'sponsor';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onDonateClick={() => setDonationModalOpen(true)} />;
      
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onDonateClick={() => setDonationModalOpen(true)}
        onLoginClick={() => setLoginModalOpen(true)}
      />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
      
    </div>
  );
}