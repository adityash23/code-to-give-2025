export function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Our Programs</h1>
          <p className="text-xl opacity-95">
            Comprehensive services to support families in crisis
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Emergency Shelter Services</h2>
              <p className="text-gray-700 mb-4">
                Athena's House provides safe, temporary housing for women and children fleeing violence. Our emergency shelter offers:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Safe, secure accommodation for up to two months</li>
                <li>24/7 support and supervision</li>
                <li>Meals and basic necessities</li>
                <li>Multilingual support in over 15 languages</li>
                <li>Referral to long-term housing and support services</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Counseling Services</h2>
              <p className="text-gray-700 mb-4">
                Professional counseling and therapy services for survivors and their children:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Individual counseling sessions</li>
                <li>Family therapy and support</li>
                <li>Trauma-informed care</li>
                <li>Crisis intervention</li>
                <li>Long-term emotional support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Support Groups</h2>
              <p className="text-gray-700 mb-4">
                Confidential support groups that provide community and healing:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Women's support groups</li>
                <li>Children and teen support groups</li>
                <li>Parenting support programs</li>
                <li>Recovery and empowerment workshops</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Community Outreach</h2>
              <p className="text-gray-700 mb-4">
                Educational programs and awareness campaigns:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>School-based prevention programs</li>
                <li>Community workshops and training</li>
                <li>Public awareness campaigns</li>
                <li>Professional development for service providers</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
              <h2 className="text-2xl text-[#5B4B7A] mb-4">Second Step Resource</h2>
              <p className="text-gray-700 mb-4">
                Transitional housing and support for families moving from emergency shelter to independence:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Furnished apartments for families</li>
                <li>Ongoing case management</li>
                <li>Life skills training</li>
                <li>Employment assistance</li>
                <li>Long-term support and follow-up</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

