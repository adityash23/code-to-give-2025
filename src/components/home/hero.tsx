import { Button } from '../ui/button';

interface HeroProps {
  onDonateClick?: () => void;
}

export function Hero({ onDonateClick }: HeroProps) {
  const handleDonate = onDonateClick || (() => {});

  return (
    <section className="bg-gradient-to-b from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-10 lg:py-14 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-semibold leading-snug tracking-tight">
          Every woman deserves safety.
          <br />
          Every child deserves joy.
          <br />
          Every future deserves hope.
        </h1>

        <p className="text-lg lg:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
          At <span className="font-semibold">The Shield of Athena</span>, we are a non-profit that
          open our doors to women and children escaping violence. Here, they
          find safety, counseling, and long‑term support to rebuild their lives
          with dignity. But we can only keep those doors open with help from
          people like you.
        </p>

        <Button
          size="lg"
          onClick={handleDonate}
          className="bg-[#FF8C00] hover:bg-[#FF7C00] text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Open the Door for Someone Tonight
        </Button>
      </div>
    </section>
  );
}
