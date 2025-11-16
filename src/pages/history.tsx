import { Calendar } from 'lucide-react';

export function HistoryPage() {
  const milestones = [
    {
      year: '1991',
      title: 'Founding of the Shield',
      description: 'The Shield of Athena was founded to provide the Greek community, and particularly women, with information through a family and public awareness campaign in their language of origin. This successful approach demonstrated its potential for other communities.'
    },
    {
      year: '1997',
      title: 'Ethnic Media Community Outreach Program',
      description: 'In partnership with the federal government through its National Strategy against Family Violence and Montreal-area ethnic media, the Shield initiated its Ethnic Media Community Outreach Program.'
    },
    {
      year: '2002',
      title: '"Violence Hurts Us All" PSA',
      description: 'Co-produced an award-winning public service announcement with Rogers CFMT. The PSA was broadcast in 14 languages and distributed to 30 ethnic broadcasters and specialty channels across Canada.'
    },
    {
      year: '2003',
      title: 'Police Procedures Video Series',
      description: 'Launched a second series of audio-visual tools in collaboration with the Montreal Police Service (SPVM) outlining police procedures and resources available to women victims of conjugal violence in 14 languages.'
    },
    {
      year: '2004',
      title: 'Athena\'s House Opens',
      description: 'Opened an emergency shelter where women and their children victims of conjugal and family violence can stay from one day to two months, with free, culturally adapted intervention services in many languages.'
    },
    {
      year: '2007',
      title: 'Sexual Assault PSA and Help Lines',
      description: 'Launched a second PSA on sexual assault in 15 languages. Began offering 2 Multilingual Sexual Assault Referral and Help Lines offering information about existing resources in Montreal and Laval.'
    },
    {
      year: '2009',
      title: '"Do You Have a Secret?" Campaign',
      description: 'Launched a vast public awareness campaign on sexual violence including PSA, multilingual help lines, booklets in 15 languages and Braille, newspaper articles, and media interviews.'
    },
    {
      year: '2024',
      title: 'Expanded Capacity',
      description: 'Opened a new shelter in Laval with 17 apartments for long-term support (up to 2 years) to help women rebuild independence. Serving 1,200+ women and children annually.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl mb-6">Our History</h1>
          <p className="text-xl opacity-95">
            Over 30 years of leadership in supporting victims of family violence
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-[#8B7BA8]">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-[#8B7BA8] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0] ml-4">
                  <div className="text-3xl text-[#8B7BA8] mb-2">{milestone.year}</div>
                  <h3 className="text-2xl text-[#5B4B7A] mb-3">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Services */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Our Service Network Today</h2>
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              The Shield of Athena Family Services is a not-for-profit, community-based organization that provides professional support, culturally and linguistically adapted interventions and prevention to the needs of women victims of family and/or conjugal violence and their children, as well as members of ethnocultural communities.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              A leader in this field, The Shield helps women and children, as well as cultural communities, to break the cycle of psychological, verbal, economic, sexual and physical violence. All our services are free for our clients.
            </p>
            <h3 className="text-xl text-[#5B4B7A] mb-4">Our service network has three integrated components:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">1.</span>
                <p className="text-gray-700">Multilingual services offered by professional social workers, assisted by cultural intermediaries trained for this purpose at our offices in Laval and Montreal</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">2.</span>
                <p className="text-gray-700">Our shelter, La Maison d'Athena, provides 24/7 emergency shelter services in a safe and rehabilitative environment for women and children who are victims of family violence</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">3.</span>
                <p className="text-gray-700">Our multilingual community awareness program informs the population of Greater Montreal and Laval in their mother tongue about issues of family and/or spousal violence, including honour-based violence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
