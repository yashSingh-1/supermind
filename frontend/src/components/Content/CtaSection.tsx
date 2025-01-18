import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-gray-900 via-slate-950 to-black">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-accent-foreground">Start Presenting Your App Idea Today</h2>
        <p className="text-xl mb-8 text-accent-foreground/90">
          Join thousands of successful app creators who have brought their ideas to life
        </p>
        <Button size="lg" variant="secondary">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

