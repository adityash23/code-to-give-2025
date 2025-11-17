export function OtherWaysToHelp() {
  const items = [
    {
      title: "Buy a Painting",
      description: "Purchase a work of art and help fund our programs. 100% of proceeds go toward supporting women and children.",
      link: "https://shield-of-athenas-art-sale-more.myshopify.com/collections/recipes-and-stories-from-athenas-kitchen/products/recipes-and-stories-from-athenas-kitchen"
    },
    {
      title: "Buy Our Cookbook",
      description: "Enjoy a collection of recipes. All sales support essential services.",
      link: "https://shield-of-athenas-art-sale-more.myshopify.com/collections/recipes-and-stories-from-athenas-kitchen/products/recipes-and-stories-from-athenas-kitchen"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4">Support Our Mission by Buying Our Goods</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Every purchase brings us closer to a safer community!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 space-y-4"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="opacity-90">{item.description}</p>
              
              <button
                onClick={() => window.open(item.link, '_blank')}
                className="px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 border border-white/40 transition-colors"
              >
                Buy here
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
