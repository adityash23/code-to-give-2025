import { Button } from '../ui/button';
import { Heart, TrendingUp, Share2, PlayCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface FundraisingSectionProps {
  onDonateClick: () => void;
}

export function FundraisingSection({ onDonateClick }: FundraisingSectionProps) {
  const [showAdPanel, setShowAdPanel] = useState(false);
  // Mock data - in real implementation, this would come from a database
  const goalAmount = 500000; // $500,000 goal for 2026
  const currentAmount = 287500; // Current raised amount
  const percentage = (currentAmount / goalAmount) * 100;
  const capacityIncrease = 17; // 17 new apartments

  return (
    <section className="pt-4 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B7BA8] rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-5xl text-[#5B4B7A] mb-6">
            To reach more women and children in need of safety, we’ve opened another shelter
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 mb-8">
            <p>
              Our new facility in Laval has{" "}
              <span className="text-[#8B7BA8] font-semibold">
                {capacityIncrease} apartments
              </span>
              , allowing us to house significantly more women and children who need safety
              and support.
            </p>
            <p>
              <span className="text-[#5B4B7A] font-semibold">But we need your help.</span>{" "}
              We're run completely on donations from our generous sponsors and people
              like you.
            </p>
            <p className="text-xl text-[#8B7BA8]">
              It's donations that make all this possible. And while we understand it's not always possible to give, we do encourage you to share our mission on social media
            </p>
          </div>

          {/* Donate + Share Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            {/* Donate Button */}
            <button
              onClick={onDonateClick}
              className="w-full sm:w-auto px-12 py-6 text-xl font-semibold text-white
                         bg-[#FF8C00] border border-[#FF8C00]
                         rounded-lg shadow-sm hover:bg-[#FF7C00]
                         hover:shadow-md transition-all duration-300"
            >
              Donate Now
            </button>

            {/* Share Button */}
            <button
              onClick={() => {
                const shareData = {
                  title: "Support Our Shelter",
                  text: "Help us reach our fundraising goal to support women and children in need.",
                  url: window.location.href,
                };
                if (navigator.share) {
                  navigator
                    .share(shareData)
                    .catch((err) => console.error("Error sharing:", err));
                } else {
                  navigator.clipboard.writeText(shareData.url);
                  alert("Link copied to clipboard! Share it with your friends 🧡");
                }
              }}
              className="w-full sm:w-auto px-12 py-6 text-xl font-semibold text-[#8B7BA8]
                         bg-gradient-to-br from-[#F3F0F8] to-white
                         border border-[#E8E3F0] rounded-lg shadow-sm
                         hover:shadow-md hover:brightness-105 transition-all duration-300
                         flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>

            {/* Watch Ad Button */}
            <button
              onClick={() => setShowAdPanel(true)}
              className="w-full sm:w-auto px-12 py-6 text-xl font-semibold text-[#0F172A]
                         bg-white border border-[#CBD5F5]
                         rounded-lg shadow-sm hover:shadow-md transition-all duration-300
                         flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5 text-[#8B7BA8]" />
              Watch an Ad to Support
            </button>
          </div>
        </div>

        {/* Impactful Progress Bar */}
        <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-xl p-10 lg:p-12 border border-[#E8E3F0] shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-[#8B7BA8]" />
            <h3 className="text-2xl font-semibold text-[#5B4B7A]">
              2026 Operating Fund Goal
            </h3>
          </div>

          <p className="text-gray-700 mb-6 italic text-center max-w-2xl mx-auto">
            Every percentage point raised keeps our doors open — giving families warmth,
            counseling, and a safe place to start again.
          </p>

          {/* Stylized progress bar */}
          <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4]
                         flex items-center justify-end pr-3 text-white font-bold text-sm rounded-full
                         transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            >
              <span className="drop-shadow-sm">{percentage.toFixed(0)}%</span>
            </div>
          </div>

          {/* Goal + Raised display */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-center sm:text-left gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Raised So Far</p>
              <p className="text-3xl font-semibold text-[#8B7BA8]">
                ${currentAmount.toLocaleString()}
              </p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#E8E3F0]" />
            <div>
              <p className="text-sm text-gray-600 mb-1">2026 Goal</p>
              <p className="text-3xl font-semibold text-[#5B4B7A]">
                ${goalAmount.toLocaleString()}
              </p>
            </div>
          </div>

          <p className="mt-10 text-gray-700 text-center max-w-2xl mx-auto">
            Help us reach our goal to keep our shelters operating and expand support
            programs throughout 2026. Every donation brings us closer to welcoming more
            families to safety.
          </p>
        </div>

        
      </div>

      {/* Watch Ad overlay */}
      {showAdPanel && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-5xl bg-white rounded-[40px] shadow-2xl p-6 sm:p-10 space-y-6">
            <button
              onClick={() => setShowAdPanel(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
              aria-label="Close"
            >
              ×
            </button>

            <div className="bg-gradient-to-r from-[#F7F4FC] to-white border border-[#E8E3F0] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-7 h-7 text-[#8B7BA8]" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.35em] text-[#8B7BA8] uppercase">Impact Tracker</p>
                <p className="text-2xl font-semibold text-gray-900 leading-snug mt-2">
                  Rome wasn't built in a day, just as a family isn't saved by one ad.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Every ad watched funds crisis response and emergency shelter.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#E8E3F0] bg-gradient-to-b from-white to-[#F9FAFB] text-[#1f1f1f] p-8 shadow-inner space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3F0F8] flex items-center justify-center text-[#8B7BA8]">
                    <PlayCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.4em] text-[#8B7BA8] uppercase">Ad Session</p>
                    <p className="text-3xl font-semibold text-[#1F1F1F]">Hope Stories</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">~30 seconds</span>
              </div>
              <div className="relative w-full h-72 bg-gray-100 rounded-[28px] flex items-center justify-center border border-[#E8E3F0]">
                <p className="text-gray-500">Ad content placeholder</p>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-sm text-gray-600">Watching ads keeps our shelters funded.</p>
                <Button
                  onClick={() => setShowAdPanel(false)}
                  className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-6"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
