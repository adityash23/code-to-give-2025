export function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Our History</h1>
          <p className="text-xl opacity-95">
            A legacy of service and commitment to protecting families
          </p>
        </div>
      </section>

      {/* History Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] mb-8">
            <h2 className="text-3xl text-[#5B4B7A] mb-6">The Beginning</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Shield of Athena Family Services was founded with a clear mission: to provide support, protection, and resources to victims of family and conjugal violence. Since our establishment, we have been dedicated to creating safe spaces where women and children can find refuge, healing, and hope.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our organization was born from the recognition that family violence affects individuals across all communities, cultures, and backgrounds. We understood that victims needed not just immediate safety, but also comprehensive support services, counseling, and long-term assistance to rebuild their lives.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0] mb-8">
            <h2 className="text-3xl text-[#5B4B7A] mb-6">Growth and Expansion</h2>
            <p className="text-lg text-gray-700 mb-4">
              Over the years, Shield of Athena has expanded its services to meet the growing needs of our community. We have developed programs that address not only emergency situations but also provide ongoing support, education, and prevention initiatives.
            </p>
            <p className="text-lg text-gray-700">
              Our commitment to multilingual services has allowed us to serve diverse communities in Montreal and Laval, ensuring that language barriers never prevent someone from accessing the help they need.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
            <h2 className="text-3xl text-[#5B4B7A] mb-6">Today and Beyond</h2>
            <p className="text-lg text-gray-700 mb-4">
              Today, Shield of Athena continues to be a beacon of hope for those affected by family violence. We operate emergency shelters, provide counseling services, offer support groups, and work tirelessly to raise awareness about the issue of domestic violence.
            </p>
            <p className="text-lg text-gray-700">
              As we look to the future, we remain committed to our mission of protecting victims, raising awareness, and creating a world where every individual can live free from violence and fear.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Key Milestones</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-2">Emergency Shelter Services</h3>
              <p className="text-gray-700">
                Established Athena's House, providing emergency shelter for women and children in crisis situations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-2">Multilingual Support</h3>
              <p className="text-gray-700">
                Expanded services to support clients in over 15 languages, ensuring accessibility for diverse communities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-2">Community Outreach</h3>
              <p className="text-gray-700">
                Developed comprehensive outreach programs to raise awareness and provide education about family violence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

