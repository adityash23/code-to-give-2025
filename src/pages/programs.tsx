import { Users, Home, Heart, Scale, Building, GraduationCap, Globe } from 'lucide-react';

export function ProgramsPage() {
  const programs = [
    {
      icon: Users,
      title: 'Support Groups',
      description: 'Closed, confidential support groups for women victims of abuse provide a safe environment to discuss and listen. Available in English and Greek, with other languages based on demand.',
      details: [
        'Weekly meetings for eight weeks',
        'Pre-screened participants',
        'Led by trained social workers',
        'Focus on breaking the cycle of violence',
        'Specialized groups for marital sexual violence'
      ]
    },
    {
      icon: Heart,
      title: 'Parenting Classes',
      description: 'Support for mothers who have survived experiences of conjugal violence and are looking for information and support on parenting after a child\'s exposure to violence.',
      details: [
        'Understanding impact of violence on children',
        'Developing positive parenting strategies',
        'Rebuilding confidence as parents',
        'Safety planning for families',
        '7-week program'
      ]
    },
    {
      icon: Heart,
      title: 'Individual Consultations',
      description: 'Confidential consultations, crisis intervention, counseling and referral services at our Montreal and Laval offices and at Athena\'s House.',
      details: [
        'Available in 12+ languages',
        'Crisis intervention',
        'Counseling and support',
        'Referrals to other services',
        'Free of charge'
      ]
    },
    {
      icon: Scale,
      title: 'Legal Clinic',
      description: 'Free and confidential legal information supervised by a lawyer. Law students provide general legal information about rights, family law, and criminal law.',
      details: [
        'September to April',
        'Family law information',
        'Criminal law guidance',
        'Immigration assistance',
        'Supervised by licensed lawyers'
      ]
    },
    {
      icon: Home,
      title: 'Athena\'s House',
      description: 'Emergency shelter providing safe housing in an empowering environment. Residents develop long-term strategies for survival with professional support.',
      details: [
        '24/7 emergency services',
        'Multilingual staff',
        'Individual consultations',
        'Art therapy and family sessions',
        'Children\'s programs',
        'Follow-up services after leaving'
      ]
    },
    {
      icon: Building,
      title: 'Home Visits',
      description: 'For women unable to come to our offices due to pregnancy, illness, injury, lack of childcare, or transportation issues.',
      details: [
        'Available in Montreal and Laval',
        'At social worker\'s discretion',
        'Free of charge',
        'Culturally sensitive'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Integration & Self-Sufficiency Workshops',
      description: 'Workshops providing tools and skills to increase independence and knowledge of available services.',
      details: [
        'Computer literacy',
        'Self-esteem development',
        'Presentation skills',
        'Job readiness',
        'Free sessions with gift packages'
      ]
    },
    {
      icon: Globe,
      title: 'Free French Language Courses',
      description: 'In collaboration with the Ministère de l\'Immigration, de la Francisation et de l\'Intégration (MIFI).',
      details: [
        'Sponsored by Government of Quebec',
        'Free for all participants',
        'Call 514-274-8117 for information'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Our Programs & Services</h1>
          <p className="text-xl opacity-95">
            Comprehensive, multilingual support for women and children at every stage of healing
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] mb-16">
            <p className="text-xl text-gray-700 mb-6">
              The Shield of Athena employs trained social workers, caseworkers, educators and cultural intermediaries who offer multidisciplinary, multilingual services to women who are victims of conjugal or family violence.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              All services are confidential and offered free of charge.
            </p>
            <p className="text-gray-700">
              Services are offered at our Montreal and Laval offices, at our shelter Athena's House and, in certain cases, at clients' homes.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-[#E8E3F0] hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#8B7BA8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-[#5B4B7A] mb-3">{program.title}</h3>
                      <p className="text-gray-700 mb-4">{program.description}</p>
                      <div className="bg-[#F3F0F8] rounded-lg p-4">
                        <ul className="space-y-2">
                          {program.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-[#8B7BA8] mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Community Outreach & Awareness</h2>
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              The Shield of Athena is a leader in raising awareness in ethnic communities on the issues of conjugal and family violence. Taking into account cultural and linguistic differences, we ensure communities have equal access to information and services.
            </p>
            <p className="text-gray-700 mb-6">
              We offer "made to measure" information sessions to ethnic communities in their language of origin on topics including:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Cycle of violence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Types and repercussions of abuse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Police procedure</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Canadian and Québec laws</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Resources for victims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Children as witnesses</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mb-6">
              Sessions are offered in: Arabic, Armenian, Creole, English, Farsi, French, Greek, Italian, Romanian, and Spanish.
            </p>
            <p className="text-gray-700">
              For more information or to book a session, please contact us at <span className="text-[#8B7BA8]">514-274-8117</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl text-[#5B4B7A] mb-6">Ready to Access Our Services?</h3>
          <p className="text-lg text-gray-700 mb-8">
            Contact us Monday to Friday, 9 am to 5 pm
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h4 className="text-lg text-[#5B4B7A] mb-2">Montreal Office</h4>
              <p className="text-xl text-gray-900">514-274-8117</p>
              <p className="text-gray-600">1-877-274-8117</p>
            </div>
            <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
              <h4 className="text-lg text-[#5B4B7A] mb-2">Laval Office</h4>
              <p className="text-xl text-gray-900">450-688-6584</p>
            </div>
          </div>
          <p className="text-gray-700 mt-6">
            Email: <a href="mailto:bouclierdathena@bellnet.ca" className="text-[#8B7BA8] hover:underline">bouclierdathena@bellnet.ca</a>
          </p>
        </div>
      </section>
    </div>
  );
}
