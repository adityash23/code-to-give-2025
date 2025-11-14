export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* stack vertically on mobile */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"> 
              Discover Shield of Athena
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl">
              Description goes here.
            </p>

            <div className="pt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Donate Button
              </button>
            </div>
          </div>

          {/* a gray box meant to hold an image later */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg 
                className="w-24 h-24 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                
              </svg>
              <p className="text-sm">Image placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

