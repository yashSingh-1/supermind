import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-gray-900 via-slate-950 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold tracking-tight text-primary">
              Create Ads That Truly Connect
            </h1>
            <p className="text-xl text-muted-foreground">
              Unleash the power of data-driven insights to craft impactful,
              audience-focused advertisements
            </p>
            <div className="flex gap-4">
              <Link href={"/dashboard/home"}>
                <Button size="lg">Get Started</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://s7d9.scene7.com/is/image/lamar/Hero%20-%20Billboards-1:Desktop?ts=1716227406208&fit=fit,1&dpr=on,2.625"
              alt="App presentation preview"
              className="rounded-lg shadow-2xl"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
