import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Team() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      avatar: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Emily Brown",
      role: "Head of Design",
      avatar: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Michael Lee",
      role: "Lead Developer",
      avatar: "/placeholder.svg?height=200&width=200"
    }
  ]

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground">
            The people behind the platform
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

