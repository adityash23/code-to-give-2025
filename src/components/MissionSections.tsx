type MissionSection = {
  id: string
  eyebrow: string
  title: string
  description: string
  imageLabel: string
  reverse?: boolean
}

const sections: MissionSection[] = [
  {
    id: 'mission',
    eyebrow: 'Mission',
    title:
      'Shield of Athena works “to play a leadership role in helping women and their children, as well as communities, break the cycle of psychological, emotional, verbal, economic, and physical violence”.​',
    description:
      'Every shelter stay, counseling session, and outreach presentation exists to restore agency and dignity. Our vision centers survivors while partnering with communities to change the systems that enable abuse.',
    imageLabel: 'Mission placeholder image',
  },
  {
    id: 'about',
    eyebrow: 'About Us',
    title: 'Holistic care that feels personal—every step of the way.',
    description:
      'Shield of Athena (Bouclier d’Athéna) was founded in 1991 to address conjugal and family violence, initially focused on Montreal’s Greek community, but it has since expanded to serve diverse ethnocultural and immigrant communities in Montreal and Laval. Its services are free of charge, confidential, and require no documentation or status proof.',
    imageLabel: 'About placeholder image',
    reverse: true,
  },
]

const PlaceholderImage = ({ label }: { label: string }) => (
  <div className="relative h-80 w-full rounded-[2.5rem] bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl shadow-slate-400/30 sm:h-[28rem]">
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold tracking-wide text-slate-500">
      {label}
    </span>
  </div>
)

const MissionSections = () => {
  return (
    <section className="bg-white px-6 py-24" aria-labelledby="mission-heading">
      <div className="mx-auto flex max-w-6xl flex-col gap-24">
        {sections.map((section) => (
          <article
            key={section.id}
            className={`flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center ${
              section.reverse ? 'lg:text-right' : ''
            }`}
          >
            <div className={`${section.reverse ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-purple">
                {section.eyebrow}
              </p>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-6 text-lg text-slate-600">{section.description}</p>
            </div>
            <div className={section.reverse ? 'lg:order-1' : ''}>
              <PlaceholderImage label={section.imageLabel} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MissionSections
