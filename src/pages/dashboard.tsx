import { useState } from 'react';
import { User, Bell, LogOut } from 'lucide-react';
import type { PageType } from '../App';

interface DashboardProps {
  onNavigate: (page: PageType) => void;
  setLoggedIn: (value: boolean) => void;
}

export function Dashboard({ onNavigate, setLoggedIn }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#f5f3f8]">
      {/* Header */}
      <header className="bg-[#5f599b] text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#ff8400] flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Welcome back, Sarah</h1>
                <p className="text-[#c1c1e1] text-sm">Member since 2020</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-[#69589c] rounded-full transition-colors">
                <Bell className="w-6 h-6" />
              </button>
              {/* Sign Out */}
              <button
                onClick={() => {
                  setLoggedIn(false);   
                  onNavigate('home');    
                }}
                className="p-2 hover:bg-[#69589c] rounded-full transition-colors"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {['overview', 'history', 'messages', 'documents'].map((tab) => (
            <TabButton
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'overview'
                ? 'Overview'
                : tab === 'history'
                ? 'Donation History'
                : tab === 'messages'
                ? 'Messages'
                : 'Tax Documents'}
            </TabButton>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Impact Overview</h2>
              <p className="text-gray-600">
                See how your donations have made a difference. Your contributions help fund programs, support families, and change lives.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Your Badges</h2>
              <div className="flex gap-4">
                <div className="bg-[#ffb166] text-white px-4 py-2 rounded-full">Bronze Donor</div>
                <div className="bg-[#8b7ba8] text-white px-4 py-2 rounded-full">Volunteer</div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Quick Donate</h2>
              <p className="text-gray-600 mb-4">Make a quick donation to support ongoing programs.</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-[#5f599b] text-white rounded-lg hover:bg-[#4b4380] transition">$10</button>
                <button className="px-4 py-2 bg-[#5f599b] text-white rounded-lg hover:bg-[#4b4380] transition">$25</button>
                <button className="px-4 py-2 bg-[#5f599b] text-white rounded-lg hover:bg-[#4b4380] transition">$50</button>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'history' && (
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Donation History</h2>
            <ul className="text-gray-600 space-y-2">
              <li>March 2025 – $50 – General Donation</li>
              <li>January 2025 – $25 – General Donation</li>
              <li>November 2024 – $10 – General Donation</li>
            </ul>
          </section>
        )}

        {activeTab === 'messages' && (
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Messages</h2>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Admin:</strong> Thank you for your contribution!</li>
              <li><strong>Volunteer Coord:</strong> Upcoming event on Nov 20th.</li>
              <li><strong>Finance:</strong> Your receipt for donation #12345.</li>
            </ul>
          </section>
        )}

        {activeTab === 'documents' && (
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Tax Documents</h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="text-[#5f599b] hover:underline">
                  Donation Receipt – March 2025
                </a>
              </li>
              <li>
                <a href="#" className="text-[#5f599b] hover:underline">
                  Donation Receipt – January 2025
                </a>
              </li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full transition-colors whitespace-nowrap ${
        active
          ? 'bg-[#5f599b] text-white'
          : 'bg-white text-[#5f599b] hover:bg-[#ddd3ee]'
      }`}
    >
      {children}
    </button>
  );
}
