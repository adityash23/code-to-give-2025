import React from 'react';
import { Users } from 'lucide-react';

export function GovernancePage() {
  const boardMembers = [
    'Chris Ann Nakis, President',
    'Melpa Kamateros, Executive Director',
    'Eramelinda Boquer',
    'Elizabeth Condax',
    'Christine Ghakis',
    'Mark Grinberg',
    'Sotiria Klironomos',
    'Nahal Nasseri',
    'Litsa Pelonis',
    'Angie Petrogiannis',
    'Amal Saleh',
    'Barbara Vokral',
    'Qian Wang'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl mb-6">Governance and Board of Directors</h1>
          <p className="text-xl opacity-95">
            Leadership dedicated to our mission of ending family violence
          </p>
        </div>
      </section>

      {/* Emeritus Chairperson */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0] mb-12">
            <h2 className="text-2xl text-[#5B4B7A] mb-4">Emeritus Chairperson</h2>
            <p className="text-xl text-gray-700">
              Chris-Ann Nakis
            </p>
            <p className="text-gray-600 mt-2">
              Athena's House and Phase II Shelter Committee
            </p>
          </div>

          {/* Board of Directors */}
          <h2 className="text-3xl text-[#5B4B7A] mb-8">Board of Directors</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {boardMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-[#E8E3F0] hover:shadow-lg transition-shadow"
              >
                <p className="text-lg text-gray-700">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8 text-center">Commitment to Victims</h2>
          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <p className="text-lg text-gray-700 mb-6">The Shield of Athena is committed to:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">•</span>
                <span>Welcome its clients in a warm environment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">•</span>
                <span>Be respectful and support women in their rehabilitation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">•</span>
                <span>Promote and use interdisciplinary and multi-sectoral methods</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">•</span>
                <span>Provide secure and confidential services for our clients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">•</span>
                <span>Provide equal access and social justice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">•</span>
                <span>Ensure integrity and professionalism in our interventions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7BA8] mt-1">•</span>
                <span>Provide a culturally appropriate approach that advocates that violence is unacceptable and non-negotiable, regardless of ethnic origin, education, religion and socio-economic background</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Complaints Procedure */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8">Complaints Procedure</h2>
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Person responsible for receiving complaints:</span> Hasmik Manucharyan (Liaison Agent)
            </p>
            <p className="text-gray-700 mb-6">
              To file a complaint about dissatisfaction with the Shield of Athena Family Services' external services, please send an email to <a href="mailto:basf.hasmik@gmail.com" className="text-[#8B7BA8] hover:underline">basf.hasmik@gmail.com</a> and include your information (and phone number) and a statement of the situation.
            </p>
            <p className="text-gray-700 mb-6">
              It is also possible to lodge a complaint over the phone (514-274-8117) or in person (please call us for more information on this process).
            </p>
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200 mb-6">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Response time:</span> A complaint will be acknowledged to the complainant within 7 workable days.
              </p>
              <p className="text-gray-700">
                Processing time varies depending on circumstances but should not exceed 30 workable days.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              Our opening hours are from 9 to 5 Monday to Friday excluding holidays.
            </p>
            <a
              href="http://shieldofathena.com/sites/shieldofathena.com/files/complaint_form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8B7BA8] hover:bg-[#7A6A97] text-white px-6 py-3 rounded-lg transition-colors"
            >
              Download Complaint Form (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
