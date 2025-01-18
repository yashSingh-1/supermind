import { CheckCircle, Smartphone, Zap, Users } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Some Feature",
      description: "Describe the feature well, in a orderly fashing in a few words!"
    },
    {
      icon: Zap,
      title: "Some Feature",
      description: "Describe the feature well, in a orderly fashing in a few words!"
    },
    {
      icon: Users,
      title: "Some Feature",
      description: "Describe the feature well, in a orderly fashing in a few words!"
    },
    {
      icon: CheckCircle,
      title: "Some Feature",
      description: "Describe the feature well, in a orderly fashing in a few words!"
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-black via-slate-950 to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">Powerful Features</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to present your app idea professionally
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border bg-muted">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

