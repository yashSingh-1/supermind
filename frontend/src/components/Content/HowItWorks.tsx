import { ArrowRight } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: " 01",
      title: "Sign Up",
      description: "Create your account in just a few clicks"
    },
    {
      number: " 02",
      title: "Upload Content",
      description: "Add your app details and presentation materials"
    },
    {
      number: " 03",
      title: "Customize",
      description: "Personalize your presentation with our tools"
    },
    {
      number: " 04",
      title: "Present",
      description: "Share your app idea with the world"
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-bl from-gray-900 via-slate-950 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Follow these simple steps to create your app presentation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative border-r p-4">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">

                    Step 
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary ">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {/* {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-12 -right-4 text-muted-foreground" />
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

