import { Heart, GraduationCap, Users } from 'lucide-react';

export function VolunteerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl mb-6">Get Involved</h1>
          <p className="text-xl opacity-95">
            Join our community of volunteers and interns making a real difference
          </p>
        </div>
      </section>

      {/* Volunteering Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#8B7BA8] rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl text-[#5B4B7A]">Volunteering</h2>
          </div>

          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] mb-12">
            <p className="text-xl text-gray-700 mb-6">
              Our volunteers are our most valued resources. The Shield has been very lucky to find wonderful people who choose to give their time to support our cause.
            </p>
            <div className="bg-white rounded-lg p-6 border border-[#D0C7E0] mb-6">
              <p className="text-lg text-[#8B7BA8] mb-2">In 2008:</p>
              <p className="text-2xl text-[#5B4B7A] mb-1">196 volunteers</p>
              <p className="text-xl text-gray-700">5,885 volunteer hours</p>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              The Shield of Athena Family Services would like everyone to know that their time is greatly appreciated.
            </p>

            <div className="bg-[#8B7BA8]/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl text-[#5B4B7A] mb-4">Volunteer Opportunities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Administrative support at our Montreal and Laval offices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Event planning and coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Fundraising activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Community outreach programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Translation and interpretation (if qualified)</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                If you are interested in volunteering at our offices or at our events, or would like to take part in our volunteer training session:
              </p>
              <a
                href="tel:514-274-8117"
                className="inline-block bg-[#8B7BA8] hover:bg-[#7A6A97] text-white px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Call us at 514-274-8117
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Student Internships Section */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#8B7BA8] rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl text-[#5B4B7A]">Student Internships</h2>
          </div>

          <div className="bg-white rounded-lg p-8 lg:p-12 border border-[#E8E3F0] shadow-lg">
            <p className="text-xl text-gray-700 mb-8">
              For more than 10 years, The Shield has helped students advance their careers through a number of service learning opportunities in various fields.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
                <h3 className="text-xl text-[#5B4B7A] mb-4">Fields of Study</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7BA8] mt-1">•</span>
                    <span>Social Work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7BA8] mt-1">•</span>
                    <span>Law</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7BA8] mt-1">•</span>
                    <span>Art History</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7BA8] mt-1">•</span>
                    <span>Marketing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-6 border border-[#E8E3F0]">
                <h3 className="text-xl text-[#5B4B7A] mb-4">Partner Institutions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7BA8] mt-1">•</span>
                    <span>McGill University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7BA8] mt-1">•</span>
                    <span>Concordia University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7BA8] mt-1">•</span>
                    <span>Université de Montréal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7BA8] mt-1">•</span>
                    <span>Ahuntsic College</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7BA8] mt-1">•</span>
                    <span>Dawson College</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#8B7BA8]/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl text-[#5B4B7A] mb-4">Special Programs</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-[#5B4B7A] mb-2">McGill Law Faculty Legal Clinic</h4>
                  <p>Law students participate through McGill's Legal Clinic program, providing supervised legal information to our clients.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#5B4B7A] mb-2">Pro Bono Students Program</h4>
                  <p>Students from McGill University and Université de Montréal contribute their time and expertise through pro bono work.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Interested in an internship opportunity?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:514-274-8117"
                  className="inline-block bg-[#8B7BA8] hover:bg-[#7A6A97] text-white px-8 py-4 rounded-lg transition-colors"
                >
                  Call 514-274-8117
                </a>
                <a
                  href="mailto:bouclierdathena@bellnet.ca"
                  className="inline-block bg-white border-2 border-[#8B7BA8] text-[#8B7BA8] hover:bg-[#F3F0F8] px-8 py-4 rounded-lg transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#8B7BA8] to-[#9B89BC] rounded-lg p-12 text-white">
            <h2 className="text-3xl mb-4">Make a Difference Today</h2>
            <p className="text-xl opacity-95 mb-8">
              Whether through volunteering or an internship, you can be part of our mission to end family violence and support survivors.
            </p>
            <p className="text-lg">
              Contact us at <span className="font-semibold">514-274-8117</span> to get started
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
