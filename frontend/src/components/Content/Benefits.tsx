export function Benefits() {
    const benefits = [
      {
        title: "Save Time",
        description: "Create professional presentations in minutes, not hours"
      },
      {
        title: "Look Professional",
        description: "Impress your audience with polished, modern designs"
      },
      {
        title: "Stay Organized",
        description: "Keep all your presentation materials in one place"
      }
    ]
  
    return (
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-slate-950 to-blue-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Benefits</h2>
            <p className="text-xl text-muted-foreground">
              Why choose our platform for your app presentation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-muted rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  