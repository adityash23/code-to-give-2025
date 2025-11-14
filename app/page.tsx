import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Browse Medical Fundraisers Section */}
        <section className="w-full bg-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Browse Whatever? 
            </h2>
            {/* Container for future fundraisers will go here */}
          </div>
        </section>
      </main>
    </div>
  );
}
