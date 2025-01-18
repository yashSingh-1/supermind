import Image from "next/image"

export function ClientLogos() {
  const logos = [
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120"
  ]

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
          <p className="text-xl text-muted-foreground">
            Companies that have used our platform
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

