export function Locations() {
    const locations = [
      {
        city: "San Francisco",
        address: "123 Market Street, CA 94105",
        phone: "+1 (555) 123-4567"
      },
      {
        city: "London",
        address: "456 Oxford Street, London W1C 1AP",
        phone: "+44 20 7123 4567"
      }
    ]
  
    return (
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-muted-foreground">
              Visit us at our offices
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{location.city}</h3>
                <p className="text-muted-foreground mb-2">{location.address}</p>
                <p className="text-muted-foreground">{location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  