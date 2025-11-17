import { useState } from 'react';
import { Podium, type Sponsor } from './podium';
import { Leaderboard } from './leaderboard';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Mock data for sponsors - in a real app, this would come from an API
const mockSponsors: Sponsor[] = [
  {
    id: '1',
    name: 'Morgan Stanley',
    amount: 50000,
    rank: 1,
    tier: 'Diamond Sponsor',
    logoUrl: '/logo.png',
  },
  {
    id: '2',
    name: 'TD Bank Group',
    amount: 35000,
    rank: 2,
    tier: 'Platinum Sponsor',
  },
  {
    id: '3',
    name: 'RBC Foundation',
    amount: 25000,
    rank: 3,
    tier: 'Gold Sponsor',
  },
  {
    id: '4',
    name: 'Desjardins Group',
    amount: 20000,
    rank: 4,
    tier: 'Gold Sponsor',
  },
  {
    id: '5',
    name: 'Bell Canada',
    amount: 18000,
    rank: 5,
    tier: 'Gold Sponsor',
  },
  {
    id: '6',
    name: 'Hydro-Québec',
    amount: 15000,
    rank: 6,
    tier: 'Silver Sponsor',
  },
  {
    id: '7',
    name: 'Loto-Québec',
    amount: 12000,
    rank: 7,
    tier: 'Silver Sponsor',
  },
  {
    id: '8',
    name: 'BMO Financial Group',
    amount: 10000,
    rank: 8,
    tier: 'Silver Sponsor',
  },
  {
    id: '9',
    name: 'CN Rail',
    amount: 8500,
    rank: 9,
    tier: 'Silver Sponsor',
  },
  {
    id: '10',
    name: 'Air Canada',
    amount: 7500,
    rank: 10,
    tier: 'Silver Sponsor',
  },
];

export function SponsorsLeaderboard() {
  const [isLeaderboardExpanded, setIsLeaderboardExpanded] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-[#F3F0F8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl text-[#5B4B7A] mb-4 font-bold">
            Top Sponsors & Donors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognizing our generous sponsors who make our mission possible. 
            Your support helps us provide safety, counseling, and hope to women and children in need.
          </p>
        </div>

        {/* Podium Section */}
        <Podium sponsors={mockSponsors} />

        {/* Leaderboard Section */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h3 className="text-2xl font-semibold text-[#5B4B7A]">
              All Sponsors
            </h3>
            <button
              onClick={() => setIsLeaderboardExpanded(!isLeaderboardExpanded)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8B7BA8] hover:bg-[#7A6A97] text-white transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8B7BA8] focus:ring-offset-2"
              aria-label={isLeaderboardExpanded ? "Collapse leaderboard" : "Expand leaderboard"}
            >
              {isLeaderboardExpanded ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {isLeaderboardExpanded && (
            <div className="transition-all duration-300 ease-in-out">
              <Leaderboard sponsors={mockSponsors} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

