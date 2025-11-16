import React, { useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { DonationModal } from "./components/donationModal";
import { HomePage } from "./pages/home";
/*
import { VisionMissionPage } from "./pages/VisionMissionPage";
import { HistoryPage } from "./pages/HistoryPage";
import { GovernancePage } from "./pages/GovernancePage";
import { AwardsPage } from "./pages/awards";
import { NewsPage } from "./pages/NewsPage";
import { EmergencyPage } from "./pages/EmergencyPage";
import { DonationPage } from "./pages/DonationPage";
import { DonationReasonsPage } from "./pages/DonationReasonsPage";
import { DonationAmountPage } from "./pages/DonationAmountPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { VolunteerPage } from "./pages/VolunteerPage";
import { SponsorPage } from "./pages/SponsorPage";
*/

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
      
      /*  case "vision-mission":
        return <VisionMissionPage />;
      case "history":
        return <HistoryPage />;
      case "governance":
        return <GovernancePage />;
      case "awards":
        return <AwardsPage />;
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
      */
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
    </div>
  );
}