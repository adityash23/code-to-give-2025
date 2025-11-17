import React, { useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { DonationModal } from "./components/donationModal";
import { LoginModal } from "./components/loginModal";
import { HomePage } from "./pages/home";
import { VisionMissionPage } from "./pages/vision";
import { HistoryPage } from "./pages/history";
import { GovernancePage } from "./pages/governance";
import { NewsPage } from "./pages/news";
import { EmergencyPage } from "./pages/emergency";
import { DonationPage } from "./pages/donation";
import { DonationReasonsPage } from "./pages/donationReasons";
import { DonationAmountPage } from "./pages/donationAmount";
import { ProgramsPage } from "./pages/programs";
import { VolunteerPage } from "./pages/volunteer";
import { SponsorPage } from "./pages/sponsor";
import { Dashboard } from "./pages/dashboard";

export type PageType =
  | "home"
  | "vision-mission"
  | "history"
  | "governance"
  | "awards"
  | "news"
  | "emergency"
  | "donation"
  | "donation-reasons"
  | "donation-amount"
  | "programs"
  | "volunteer"
  | "dashboard"
  | "sponsor";

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
            onNavigate={setCurrentPage}
            onDonateClick={() => setDonationModalOpen(true)}
          />
        );
      
      case "vision-mission":
        return <VisionMissionPage />;
      case "history":
        return <HistoryPage />;
      case "governance":
        return <GovernancePage />;
      case "news":
        return <NewsPage />;
      case "emergency":
        return <EmergencyPage />;
      case "donation":
        return <DonationPage onNavigate={setCurrentPage} />;
      case "donation-reasons":
        return (
          <DonationReasonsPage onNavigate={setCurrentPage} />
        );
      case "donation-amount":
        return (
          <DonationAmountPage onNavigate={setCurrentPage} />
        );
      case "programs":
        return <ProgramsPage />;
      case "volunteer":
        return <VolunteerPage />;
      case "sponsor":
        return <SponsorPage />;
      case "dashboard":
        return <Dashboard onNavigate={setCurrentPage} />
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
        onNavigate={setCurrentPage}
      />
    </div>
  );
}
