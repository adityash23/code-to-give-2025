import { Clock, Globe, Users } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '1,200+',
    title: 'Women & Children Supported Annually',
    description: "100+ sheltered at Athena's House",
  },
  {
    icon: Clock,
    value: '30+',
    title: 'Years of Service',
    description: 'Since 1991, serving Montreal and Laval',
  },
  {
    icon: Globe,
    value: '12+',
    title: 'Languages Spoken',
    description: 'Culturally adapted services for diverse communities',
  },
]

const ImpactStats = () => {
  return (
    <section className="bg-white px-6 py-20" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-base font-semibold uppercase tracking-[0.3em] text-lavender-600/70">
          In 2024, Canada had
        </p>
        <h2 id="impact-heading" className="mt-4 text-3xl font-semibold text-lavender-600">
          142,724 victims of family violence
        </h2>
        <p className="text-2xl font-semibold text-lavender-500">
          128,175 victims of intimate partner violence
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
        {stats.map(({ icon: Icon, value, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 text-lavender-600">
              <Icon className="h-7 w-7" />
            </div>
            <p className="text-4xl font-semibold text-lavender-600">{value}</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{title}</p>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImpactStats
