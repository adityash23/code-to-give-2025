import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';
import { cn } from '../ui/utils';
import type { CSSProperties } from 'react';

export interface Sponsor {
  id: string;
  name: string;
  amount: number;
  logoUrl?: string;
  rank: number;
  tier?: string;
}

interface PodiumProps {
  sponsors: Sponsor[];
}

export function Podium({ sponsors }: PodiumProps) {
  const podium = sponsors.slice(0, 3);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6" style={{ color: '#FFD700' }} />;
      case 2:
        return <Medal className="h-6 w-6" style={{ color: '#C0C0C0' }} />;
      case 3:
        return <Award className="h-6 w-6" style={{ color: '#CD7F32' }} />;
      default:
        return null;
    }
  };

  const getRankStyle = (rank: number): { className: string; style?: CSSProperties } => {
    // Gold: hsl(48, 100%, 56%) - #FFD700
    // Silver: hsl(0, 0%, 75%) - #BFBFBF  
    // Bronze: hsl(25, 75%, 47%) - #CD7F32
    
    const getBorderColor = (r: number) => {
      if (r === 1) return '#FFD700'; // Gold
      if (r === 2) return '#C0C0C0'; // Silver
      return '#CD7F32'; // Bronze
    };
    
    const getBackground = (r: number) => {
      if (r === 1) return 'linear-gradient(to bottom right, rgba(255, 215, 0, 0.15), rgba(255, 215, 0, 0.05))';
      if (r === 2) return 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.15), rgba(192, 192, 192, 0.05))';
      return 'linear-gradient(to bottom right, rgba(205, 127, 50, 0.15), rgba(205, 127, 50, 0.05))';
    };

    switch (rank) {
      case 1:
        return {
          className: "shadow-lg",
          style: {
            border: `3px solid ${getBorderColor(rank)}`,
            background: getBackground(rank),
          }
        };
      case 2:
        return {
          className: "shadow-md",
          style: {
            border: `3px solid ${getBorderColor(rank)}`,
            background: getBackground(rank),
          }
        };
      case 3:
        return {
          className: "shadow-md",
          style: {
            border: `3px solid ${getBorderColor(rank)}`,
            background: getBackground(rank),
          }
        };
      default:
        return { className: "" };
    }
  };

  const getShineWrapperClass = (rank: number) => {
    switch (rank) {
      case 1:
        return "shine-wrapper shine-wrapper--gold";
      case 2:
        return "shine-wrapper shine-wrapper--silver";
      case 3:
        return "shine-wrapper shine-wrapper--bronze";
      default:
        return "";
    }
  };

  const defaultLogo = "https://placehold.co/120x120?text=Logo";

  const renderPodiumCard = (
    sponsor: Sponsor,
    displayRank: number,
    options?: {
      podiumRank?: number;
      cardHeightClass?: string;
      logoBoxClass?: string;
    }
  ) => {
    const { podiumRank, cardHeightClass = "min-h-[280px]", logoBoxClass = "h-20 w-20" } = options ?? {};
    const logo = sponsor.logoUrl ?? defaultLogo;

    return (
      <div
        key={sponsor.id}
        className={cn("w-full flex-1", displayRank === 1 && "md:order-2", displayRank === 2 && "md:order-1", displayRank === 3 && "md:order-3")}
      >
        <Card
          className={cn(
            "relative flex flex-col transition-all duration-200 hover:shadow-lg overflow-hidden border-0",
            getRankStyle(displayRank).className,
            cardHeightClass
          )}
          style={getRankStyle(displayRank).style}
        >
          {podiumRank && (
            <div
              className={cn(
                "shine-wrapper",
                getShineWrapperClass(podiumRank)
              )}
              aria-hidden="true"
            />
          )}
          <CardContent className="relative z-10 flex flex-1 flex-col items-center justify-between p-6 text-center">
            <div className="mb-4">
              {podiumRank ? (
                <div className="flex flex-col items-center">
                  {getRankIcon(podiumRank)}
                  <span 
                    className="text-xl font-bold mt-2" 
                    style={{ 
                      color: podiumRank === 1 ? '#FFD700' : 
                             podiumRank === 2 ? '#C0C0C0' : 
                             '#CD7F32' 
                    }}
                  >
                    {`#${podiumRank}`}
                  </span>
                </div>
              ) : (
                <Badge variant="outline" className="text-sm">
                  #{displayRank}
                </Badge>
              )}
            </div>

            <div
              className={cn(
                "mx-auto flex items-center justify-center border-2 border-gray-200 bg-white rounded-lg p-2",
                logoBoxClass
              )}
            >
              <img
                src={logo}
                alt={sponsor.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="space-y-3 mt-4">
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-base font-bold text-[#5B4B7A]">
                  {sponsor.name.toUpperCase()}
                </h3>
                {sponsor.tier && (
                  <Badge variant="secondary" className="text-xs">
                    {sponsor.tier}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold text-[#8B7BA8]">
                  ${sponsor.amount.toLocaleString()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="mb-12">
      <div className="grid grid-cols-3 gap-4 md:flex md:items-end md:justify-center md:space-x-6">
        {[
          {
            sponsor: podium[1],
            rank: 2,
            options: {
              podiumRank: 2,
              cardHeightClass: "min-h-[260px] md:min-h-[320px]",
              logoBoxClass: "h-16 w-16 md:h-20 md:w-20",
            },
          },
          {
            sponsor: podium[0],
            rank: 1,
            options: {
              podiumRank: 1,
              cardHeightClass: "min-h-[300px] md:min-h-[380px]",
              logoBoxClass: "h-20 w-20 md:h-24 md:w-24",
            },
          },
          {
            sponsor: podium[2],
            rank: 3,
            options: {
              podiumRank: 3,
              cardHeightClass: "min-h-[240px] md:min-h-[300px]",
              logoBoxClass: "h-14 w-14 md:h-16 md:w-16",
            },
          },
        ]
          .filter(slot => slot.sponsor)
          .map(slot => renderPodiumCard(slot.sponsor!, slot.rank, slot.options))}
      </div>
    </div>
  );
}

