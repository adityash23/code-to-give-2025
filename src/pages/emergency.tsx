import { Home, MessageCircle, Users, AlertTriangle } from 'lucide-react';

export function EmergencyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#8B7BA8] via-[#9B89BC] to-[#B5A3D4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl mb-6">Are You a Victim?</h1>
          <p className="text-xl opacity-95">
            You are not alone. Help is available 24/7. Your safety is our priority.
          </p>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-y-4 border-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-red-900 mb-8 text-center">Is it an emergency situation?</h2>
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-red-600">
            <div className="text-center mb-6">
              <h3 className="text-5xl text-red-600 mb-4">Call 9-1-1</h3>
              <p className="text-lg text-gray-700 mb-4">
                Conjugal violence is illegal in Canada and you have the right to live in a violence-free home environment. The police are equipped to deal with violent situations and will not blame you.
              </p>
            </div>
            <div className="border-t pt-6">
              <h4 className="text-xl text-gray-900 mb-3">S.O.S. Violence conjugale</h4>
              <p className="text-2xl text-[#5B4B7A] mb-3">
                514-873-9010 or 1-800-363-9010
              </p>
              <p className="text-gray-700">
                This is an anonymous, free and confidential service available throughout Québec designed to help victims of conjugal violence. They can provide guidance and direction so that you can get to safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Shelter */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Home className="w-8 h-8 text-[#5B4B7A]" />
            <h2 className="text-3xl text-[#5B4B7A]">Do you need emergency shelter?</h2>
          </div>
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
            <p className="text-lg text-gray-700 mb-6">
              If you are a victim of family or conjugal violence, the Shield of Athena can offer you and your children emergency shelter. From Monday to Friday, 9 am to 5 pm, we can refer you to our shelter, Athena's House, where you can stay up to two months.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-[#5B4B7A] mb-2">Montreal office</h4>
                <p className="text-xl text-gray-900">514-274-8117 or 1-877-274-8117</p>
              </div>
              <div>
                <h4 className="text-[#5B4B7A] mb-2">Laval office</h4>
                <p className="text-xl text-gray-900">450-688-6584</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[#D0C7E0]">
              <h4 className="text-[#5B4B7A] mb-3">At the shelter, we can serve you in the following languages:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
                {['Arabic', 'Armenian', 'Creole', 'English', 'Farsi', 'French', 'Greek', 'Hindi', 'Italian', 'Polish', 'Punjabi', 'Romanian', 'Russian', 'Spanish', 'Turkish', 'Urdu'].map((lang) => (
                  <div key={lang}>• {lang}</div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-gray-700">
                <span className="font-semibold">At all other times,</span> we invite you to call S.O.S. Violence conjugale at 514-873-9010 or 1-800-363-9010. This is an anonymous, free and confidential service available throughout Québec. You and your children can be referred to an emergency shelter where you will be safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Planning */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B4B7A] mb-8">How to plan in case of an emergency</h2>
          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0] mb-8">
            <p className="text-gray-700 mb-6">
              Ensuring the safety of you and your children is essential. When living in an abusive relationship, you may minimize the violence, but you need to know that abuse often becomes more intense and dangerous over time.
            </p>
            <p className="text-gray-700">
              This is why it is important to have a protection plan – whether you live with your partner or are separated. Women who were victims of abuse by their ex-partners can still be harassed or experience new acts of violence after separation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-4">If you are no longer with your partner:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Notify your neighbours and landlord that your partner does not live with you anymore</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Change the locks if you haven't moved</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Secure all entry points to your house</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Get a confidential phone number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Meet ex-partner only in public places</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Inform school/daycare about authorized pick-ups</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-[#E8E3F0]">
              <h3 className="text-xl text-[#5B4B7A] mb-4">If you are with your partner:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Have a plan about where to go if you are in danger</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Create a code with someone you trust for emergencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Open a secret bank account if possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Remember shelter phone numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Be aware of signs leading to violence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B7BA8] mt-1">•</span>
                  <span>Don't leave without your children if possible</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg p-8 border border-[#E8E3F0]">
            <h3 className="text-xl text-[#5B4B7A] mb-4">Prepare a departure kit</h3>
            <p className="text-gray-700 mb-4">
              Hide these items in a safe place such as a neighbour's, relative's or friend's house:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• Legal documents & certificates</li>
                <li>• Bank books & credit cards</li>
                <li>• Social insurance & medicare cards</li>
                <li>• Immigration papers</li>
                <li>• Keys for home and car</li>
              </ul>
              <ul className="space-y-2">
                <li>• Medication for you and children</li>
                <li>• Money</li>
                <li>• Clothing</li>
                <li>• Favorite toys for children</li>
                <li>• Important phone numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Counseling Services */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MessageCircle className="w-8 h-8 text-[#5B4B7A]" />
            <h2 className="text-3xl text-[#5B4B7A]">Do you need someone to talk to?</h2>
          </div>
          <div className="bg-gradient-to-br from-[#F3F0F8] to-white rounded-lg p-8 border border-[#E8E3F0]">
            <p className="text-lg text-gray-700 mb-6">
              In addition to our emergency shelter, Athena's House, we can offer you counseling and other individual support services in multiple languages, as well as a variety of support groups where you can share your story in a confidential and secure environment.
            </p>
            <div className="mb-6">
              <p className="text-gray-900 mb-2">Contact us Monday to Friday, 9 am to 5 pm:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[#5B4B7A]">Montreal office</p>
                  <p className="text-xl text-gray-900">514-274-8117 or 1-877-274-8117</p>
                </div>
                <div>
                  <p className="text-[#5B4B7A]">Laval office</p>
                  <p className="text-xl text-gray-900">450-688-6584</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-6">
              <p className="text-gray-700">
                Email: <a href="mailto:bouclierdathena@bellnet.ca" className="text-[#5B4B7A] hover:underline">bouclierdathena@bellnet.ca</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Services */}
      <section className="py-16 bg-[#F3F0F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-[#5B4B7A]" />
            <h2 className="text-3xl text-[#5B4B7A]">Are your children suffering from the situation?</h2>
          </div>
          <div className="bg-white rounded-lg p-8 border border-[#E8E3F0]">
            <p className="text-lg text-gray-700 mb-6">
              Exposure to violence may be affecting your children in a number of ways ranging from emotional instability to severe behavioural problems.
            </p>
            <p className="text-gray-700 mb-6">
              We offer confidential support groups for children and teens who have witnessed domestic violence. The support groups provide a safe environment for children and teens where they have the opportunity to meet others with similar experiences.
            </p>
            <p className="text-gray-700">
              If you think your children could benefit from these groups, please contact us at 514-274-8117 or email bouclierathena@bellnet.ca
            </p>
          </div>
        </div>
      </section>

      {/* Important Numbers */}
      <section className="py-16 bg-gradient-to-br from-[#8B7BA8] to-[#9B89BC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center">Important Numbers - Keep These at Reach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl mb-2">Police</h3>
              <p className="text-3xl">9-1-1</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl mb-2">S.O.S. Violence conjugale</h3>
              <p className="text-2xl">514-873-9010</p>
              <p className="text-2xl">1-800-363-9010</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl mb-2">Shield of Athena Montreal</h3>
              <p className="text-2xl">514-274-8117</p>
              <p className="text-2xl">1-877-274-8117</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl mb-2">Shield of Athena Laval</h3>
              <p className="text-3xl">450-688-6584</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 md:col-span-2">
              <h3 className="text-xl mb-2">Multilingual Sexual Violence Referral and Help Lines</h3>
              <p className="text-2xl">Montreal: 514-270-2900</p>
              <p className="text-2xl">Laval: 450-688-2117</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-[#5B4B7A] mb-6">Remember: You are not alone</h2>
          <p className="text-xl text-gray-700">
            Wife abuse is a crime in Canada. Help is available, and you deserve to live in safety.
          </p>
        </div>
      </section>
    </div>
  );
}
