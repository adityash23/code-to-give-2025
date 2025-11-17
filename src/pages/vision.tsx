export function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Vision & Mission</h1>
          <p className="text-xl opacity-95">
            Our commitment to protecting and supporting victims of family violence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] mb-8">
            <h2 className="text-3xl text-[#5B4B7A] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Shield of Athena Family Services is committed to raising awareness and protecting victims against family violence. We offer a safe haven for women and children, providing free, confidential support for victims of family and conjugal violence in Montreal and Laval.
            </p>
            <p className="text-lg text-gray-700">
              We raise awareness and protect victims against family violence. Shield of Athena offers a safe haven for women and children.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
            <h2 className="text-3xl text-[#5B4B7A] mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-4">
              We envision a world where all individuals and families can live free from violence, fear, and abuse. Through our comprehensive services, community outreach, and advocacy efforts, we strive to create a society where every person has access to safety, support, and the resources needed to build a better future.
            </p>
            <p className="text-lg text-gray-700">
              Our vision extends beyond immediate crisis intervention to long-term empowerment, helping survivors rebuild their lives with dignity, strength, and hope.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Safety First</h3>
              <p className="text-gray-700">
                The safety and well-being of victims and their children is our highest priority.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Confidentiality</h3>
              <p className="text-gray-700">
                We provide a safe, confidential environment where victims can seek help without fear.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Cultural Sensitivity</h3>
              <p className="text-gray-700">
                We respect and honor the diverse cultural backgrounds of those we serve.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Empowerment</h3>
              <p className="text-gray-700">
                We empower survivors to make informed decisions and rebuild their lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

