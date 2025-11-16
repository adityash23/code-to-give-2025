import { Newspaper } from 'lucide-react';

export function NewsPage() {
  // This would typically fetch from the actual news feed
  // For now, using placeholder data
  const newsArticles = [
    {
      date: 'November 2024',
      title: '2025 Annual Lilac Gala Announced',
      excerpt: 'Join us on November 29th for our annual fundraising gala supporting women and children in crisis.',
      link: '#'
    },
    {
      date: 'November 2024',
      title: 'Raise Your Hand Campaign Launches',
      description: 'New campaign during designated days of action regarding violence against women, from November 25th until December 6th.',
      link: '#'
    },
    {
      date: 'October 2024',
      title: 'Expanded Shelter Capacity in Laval',
      excerpt: 'Our new Second Step Resource in Laval now provides 17 apartments for long-term support.',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Newspaper className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl mb-6">News & Updates</h1>
          <p className="text-xl opacity-95">
            Stay informed about our latest programs, events, and impact
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsArticles.map((article, index) => (
              <article 
                key={index}
                className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] hover:shadow-lg transition-shadow"
              >
                <div className="text-sm text-[#8B7BA8] mb-2">{article.date}</div>
                <h2 className="text-2xl text-[#5B4B7A] mb-3">{article.title}</h2>
                <p className="text-gray-700 mb-4">{article.excerpt || article.description}</p>
                <a 
                  href={article.link}
                  className="text-[#8B7BA8] hover:underline inline-flex items-center gap-2"
                >
                  Read more →
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              For more news and updates, visit our news archive:
            </p>
            <a
              href="http://shieldofathena.com/news"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8B7BA8] hover:bg-[#7A6A97] text-white px-8 py-3 rounded-lg transition-colors"
            >
              View All News
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0] text-center">
            <h3 className="text-2xl text-[#5B4B7A] mb-4">Stay Updated</h3>
            <p className="text-gray-700 mb-6">
              Subscribe to our newsletter to receive updates on our programs, events, and impact.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B7BA8]"
              />
              <button className="bg-[#8B7BA8] hover:bg-[#7A6A97] text-white px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
