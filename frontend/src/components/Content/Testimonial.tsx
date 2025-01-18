import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      quote: "This platform made presenting my app idea so much easier. The professional look really impressed potential investors.",
      author: "Alex Morgan",
      role: "Startup Founder",
      avatar: "https://placehold.co/600x400"
    },
    {
      quote: "The tools and features provided helped us create a compelling presentation that got our message across clearly.",
      author: "Sarah Chen",
      role: "Product Manager",
      avatar: "https://placehold.co/600x400"
    },
    {
      quote: "Outstanding platform that simplified our app presentation process. Highly recommended!",
      author: "James Wilson",
      role: "Tech Entrepreneur",
      avatar: "https://placehold.co/600x400"
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-slate-950 to-yellow-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground">
            Hear from people who have successfully presented their app ideas
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <p className="mb-6 text-card-foreground">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

