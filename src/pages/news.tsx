export function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">News & Updates</h1>
          <p className="text-xl opacity-95">
            Stay informed about our latest initiatives and community impact
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
              <div className="text-sm text-[#8B7BA8] mb-2">December 2024</div>
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Annual Fundraising Campaign Success</h2>
              <p className="text-gray-700 mb-4">
                We are thrilled to announce that our annual fundraising campaign exceeded all expectations, raising over $500,000 to support families in need. This incredible achievement would not have been possible without the generosity of our community.
              </p>
              <p className="text-gray-700">
                These funds will directly support our emergency shelter services, counseling programs, and community outreach initiatives throughout the coming year.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
              <div className="text-sm text-[#8B7BA8] mb-2">November 2024</div>
              <h2 className="text-2xl text-[#5B4B7A] mb-4">New Multilingual Support Services</h2>
              <p className="text-gray-700 mb-4">
                Shield of Athena has expanded its multilingual support services to include three additional languages, bringing our total to 18 languages. This expansion ensures that even more members of our diverse community can access the help they need.
              </p>
              <p className="text-gray-700">
                Our team of dedicated interpreters and counselors are now available to serve clients in their preferred language, removing barriers to accessing critical support services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
              <div className="text-sm text-[#8B7BA8] mb-2">October 2024</div>
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Community Awareness Workshop Series</h2>
              <p className="text-gray-700 mb-4">
                We launched a new series of community awareness workshops focused on recognizing the signs of family violence and knowing how to help. Over 200 community members participated in these educational sessions.
              </p>
              <p className="text-gray-700">
                These workshops are part of our ongoing commitment to prevention and early intervention, empowering community members to be allies in the fight against family violence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

