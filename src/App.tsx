import React, { useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { DonationModal } from "./components/donationModal";
import { LoginModal } from "./components/loginModal";
import { HomePage } from "./pages/home";
import { EmergencyPage } from "./pages/emergency";

export type PageType =
  | "home"
  | "emergency";

export default function App() {
  const [currentPage, setCurrentPage] =
    useState<PageType>("home");
  const [donationModalOpen, setDonationModalOpen] =
    useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onDonateClick={() => setDonationModalOpen(true)}
          />
        );
      
      case "emergency":
        return <EmergencyPage />;
      default:
        return (
          <HomePage
            onDonateClick={() => setDonationModalOpen(true)}
          />
        );
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
      <Footer onDonateClick={() => setDonationModalOpen(true)} />
      <DonationModal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        onLoginClick={() => {
          setDonationModalOpen(false);
          setLoginModalOpen(true);
        }}
      />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
}
