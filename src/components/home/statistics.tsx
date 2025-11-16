import { Users, Clock, Globe } from 'lucide-react';

export function Statistics() {
  const stats = [
    {
      icon: Users,
      number: '1,200+',
      label: 'Women & Children Supported Annually',
      description: '100+ sheltered at Athena\'s House'
    },
    {
      icon: Clock,
      number: '30+',
      label: 'Years of Service',
      description: 'Since 1991, serving Montreal and Laval'
    },
    {
      icon: Globe,
      number: '12+',
      label: 'Languages Spoken',
      description: 'Culturally adapted services for diverse communities'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Context Stats */}
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-2">In 2024, Canada had</p>
          <div className="space-y-1">
            <p className="text-2xl lg:text-3xl text-[#5B4B7A]">
              <span className="font-semibold">142,724</span> victims of family violence
            </p>
            <p className="text-2xl lg:text-3xl text-[#5B4B7A]">
              <span className="font-semibold">128,175</span> victims of intimate partner violence
            </p>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B7BA8]/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-[#5B4B7A]" />
              </div>
              <div className="text-4xl lg:text-5xl text-[#5B4B7A] mb-2">{stat.number}</div>
              <div className="text-gray-900 mb-1">{stat.label}</div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
