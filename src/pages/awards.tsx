import { Award } from 'lucide-react';

export function AwardsPage() {
  const awards = [
    {
      year: '2000',
      title: 'Retail Comp Awards',
      description: 'Recipient of the 1999 Retail Comp Awards for the Violence Hurts Us All! PSA'
    },
    {
      year: '2008',
      title: 'DECA Award for Community Involvement',
      description: 'Recipient of the 2008 DECA Award for Community Involvement from the Hellenic Board of Trade of Metropolitan Montreal'
    },
    {
      year: '2009',
      title: 'Prix Plaidoyer Victimes',
      description: 'Recipient of the Prix Plaidoyer Victimes from l\'Association québécoise Plaidoyer-Victimes'
    },
    {
      year: '2012',
      title: 'Prix D\'Excellence',
      description: 'Recipient of the Prix D\'Excellence from the Réseau de la santé et des services sociaux for our community outreach and support to vulnerable persons and groups'
    },
    {
      year: '2013',
      title: 'Queen Elizabeth II\'s Diamond Jubilee Medal',
      description: 'Executive Director Melpa Kamateros was the recipient of Her Majesty Queen Elizabeth II\'s Diamond Jubilee Medal for her pioneering work in the field of conjugal violence. Twenty-five individuals in the categories of volunteerism, philanthropy, community outreach & services delivery and media partnership also received this honor for their outstanding contribution to the Shield of Athena Family Services\' mission.'
    },
    {
      year: '2014',
      title: 'DECA Award for Community Involvement',
      description: 'Recipient of the 2014 DECA Award for Community Involvement from the Hellenic Board of Trade of Metropolitan Montreal'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl mb-6">Awards and Recognition</h1>
          <p className="text-xl opacity-95">
            Recognized for our leadership and impact in supporting victims of family violence
          </p>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-[#FFB84D]">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-[#FFB84D] rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gradient-to-br from-[#FFF9F0] to-white rounded-lg p-6 border border-[#FFE5B4] ml-4 hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-[#FF8C00] mb-2">{award.year}</div>
                  <h3 className="text-2xl text-[#5B4B7A] mb-3">{award.title}</h3>
                  <p className="text-gray-700">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Statement */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <h2 className="text-3xl text-[#5B4B7A] mb-6">Our Commitment Continues</h2>
            <p className="text-xl text-gray-700">
              These awards reflect the dedication of our staff, volunteers, and supporters who work tirelessly to provide critical services to women and children in need. We remain committed to our mission of ending family violence and supporting survivors on their journey to safety and independence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
