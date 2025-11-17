export function GovernancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Governance</h1>
          <p className="text-xl opacity-95">
            Our commitment to transparency, accountability, and excellence
          </p>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] mb-8">
            <h2 className="text-3xl text-[#5B4B7A] mb-6">Our Governance Structure</h2>
            <p className="text-lg text-gray-700 mb-4">
              Shield of Athena Family Services operates under a robust governance framework that ensures accountability, transparency, and effective management of our resources and programs.
            </p>
            <p className="text-lg text-gray-700">
              Our Board of Directors, composed of dedicated community members and professionals, provides strategic oversight and guidance to ensure we fulfill our mission while maintaining the highest standards of service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Board of Directors</h2>
          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0] mb-6">
            <p className="text-lg text-gray-700 mb-4">
              Our Board of Directors is responsible for setting the strategic direction of the organization, ensuring financial accountability, and overseeing the implementation of our programs and services.
            </p>
            <p className="text-lg text-gray-700">
              Board members bring diverse expertise in areas including social services, finance, law, healthcare, and community development, ensuring comprehensive oversight of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Policies and Procedures */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Policies and Procedures</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Financial Accountability</h3>
              <p className="text-gray-700">
                We maintain strict financial controls and regular audits to ensure all resources are used effectively and transparently.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Client Confidentiality</h3>
              <p className="text-gray-700">
                Comprehensive policies protect the privacy and confidentiality of all clients and their information.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Program Evaluation</h3>
              <p className="text-gray-700">
                Regular evaluation and assessment ensure our programs meet the highest standards of effectiveness and quality.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-3">Staff Development</h3>
              <p className="text-gray-700">
                Ongoing training and professional development ensure our staff are equipped with the latest knowledge and skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
            <h2 className="text-3xl text-[#5B4B7A] mb-6">Accountability and Transparency</h2>
            <p className="text-lg text-gray-700 mb-4">
              Shield of Athena is committed to maintaining the highest standards of accountability and transparency. We regularly report on our activities, financial status, and program outcomes to our stakeholders, funders, and the broader community.
            </p>
            <p className="text-lg text-gray-700">
              We welcome questions, feedback, and engagement from the community as we work together to address the critical issue of family violence and support those in need.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

