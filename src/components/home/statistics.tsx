import { Users, Clock, Globe } from 'lucide-react';

export function Statistics() {
  const stats = [
    {
      icon: Users,
      number: '1,200+',
      label: 'Women & Children Supported Annually',
      description: "100+ sheltered at Athena's House",
    },
    {
      icon: Clock,
      number: '30+',
      label: 'Years of Service',
      description: 'Since 1991, serving Montreal and Laval',
    },
    {
      icon: Globe,
      number: '12+',
      label: 'Languages Spoken',
      description: 'Culturally adapted services for diverse communities',
    },
  ];

  return (
    <section className="relative py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* CONTINUING THE FLOW FROM HERO */}
        <h2 className="text-3xl lg:text-4xl font-bold text-[#5B4B7A] mb-6">
          The need for safe spaces has never been greater.
        </h2>

        <p className="text-xl text-[#5B4B7A] font-medium mb-8 leading-relaxed">
          In 2024, over{" "}
          <span className="font-semibold text-[#402C5A]">142,000</span>{" "}
          women, children, and families across Canada experienced family
          violence — including{" "}
          <span className="font-semibold text-[#402C5A]">128,000</span>{" "}
          victims of intimate partner abuse.
        </p>
        <h2 className="text-lg text-[#5B4B7A] font-medium mb-10 leading-relaxed">
          Behind these numbers are thousands of women and children who found safety,
          more than thirty years of dedicated service, and a promise carried out in
          over twelve languages to make sure help is never out of reach for any
          family in need.
        </h2>

        {/* Mini stats section */}
        <div className="grid sm:grid-cols-3 gap-8 mt-6">
          {stats.map(({ icon: Icon, number, label, description }) => (
            <div key={label} className="flex flex-col items-center space-y-2">
              <Icon className="w-8 h-8 text-[#8B7BA8]" />
              <h3 className="text-2xl font-bold text-[#402C5A]">{number}</h3>
              <p className="text-[#5B4B7A] font-medium">{label}</p>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* top gradient overlap fade for smooth transition from Hero */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#B5A3D4]/30 to-white" />
    </section>
  );
}