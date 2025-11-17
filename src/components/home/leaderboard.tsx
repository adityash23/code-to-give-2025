import { useState, useMemo } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Trophy, Star, Search as SearchIcon } from 'lucide-react';
import { cn } from '../ui/utils';
import type { Sponsor } from './podium';

interface LeaderboardProps {
  sponsors: Sponsor[];
}

export function Leaderboard({ sponsors }: LeaderboardProps) {
  const [search, setSearch] = useState("");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const rest = useMemo(() => sponsors.slice(3), [sponsors]);

  const matchingSponsors = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) {
      return [];
    }
    return sponsors.filter(sponsor => 
      sponsor.name.toLowerCase().includes(query)
    ).slice(0, 8);
  }, [sponsors, search]);

  const handleSuggestionSelect = (sponsorId: string) => {
    const target = document.getElementById(`sponsor-card-${sponsorId}`);
    if (target) {
      setSearch("");
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      setHighlightedId(sponsorId);
      window.setTimeout(() => {
        setHighlightedId(prev => (prev === sponsorId ? null : prev));
      }, 1600);
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) return null;
    return <span className="text-lg font-bold text-gray-500">#{rank}</span>;
  };

  const defaultLogo = "https://placehold.co/120x120?text=Logo";

  return (
    <div className="relative">
      <div className="relative z-20 mb-6">
        <div className="relative w-full max-w-md mx-auto">
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sponsors..."
            className="w-full border-2 border-gray-200 bg-white pl-10 pr-4 py-3 text-sm text-gray-700 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-[#8B7BA8] focus:border-transparent"
          />
          {matchingSponsors.length > 0 && search && (
            <div className="absolute top-full left-0 mt-2 w-full overflow-hidden border-2 border-gray-200 bg-white rounded-lg shadow-lg z-30">
              <ul className="divide-y divide-gray-100">
                {matchingSponsors.map(sponsor => (
                  <li key={sponsor.id}>
                    <button
                      type="button"
                      onClick={() => handleSuggestionSelect(sponsor.id)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-gray-50"
                    >
                      <span className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden border-2 border-gray-200 bg-gray-50 rounded">
                          <img
                            src={sponsor.logoUrl ?? defaultLogo}
                            alt=""
                            className="h-8 w-8 object-contain"
                          />
                        </span>
                        <span className="font-medium text-gray-900">{sponsor.name}</span>
                      </span>
                      <span className="text-sm font-semibold text-[#8B7BA8]">
                        #{sponsor.rank}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 scroll-smooth">
        {rest.map((sponsor, index) => {
          const rank = index + 4;
          const logo = sponsor.logoUrl ?? defaultLogo;

          return (
            <Card
              key={sponsor.id}
              id={`sponsor-card-${sponsor.id}`}
              className={cn(
                "border-2 border-gray-200 bg-white transition-all duration-200 hover:shadow-md",
                highlightedId === sponsor.id &&
                  "ring-2 ring-[#8B7BA8] ring-offset-2 ring-offset-white"
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 flex justify-center">
                    {getRankIcon(rank)}
                  </div>
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 border-2 border-gray-200 bg-gray-50 rounded-lg flex items-center justify-center">
                      <img
                        src={logo}
                        alt={sponsor.name}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-[#5B4B7A]">
                        {sponsor.name}
                      </h3>
                      {sponsor.tier && (
                        <Badge variant="secondary" className="text-xs">
                          {sponsor.tier}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-[#8B7BA8]" />
                        <span className="font-semibold text-[#5B4B7A]">
                          Rank: #{rank}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-[#8B7BA8]">
                          ${sponsor.amount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

