import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PricingCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-950 via-black to-gray-950">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-accent-foreground">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-accent-foreground/90">
          Choose the perfect ads for your business and start earning more today
        </p>
        <div className="flex justify-center">
          <Link href={"/dashboard/home"}>
            <Button size="lg" variant="secondary">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
