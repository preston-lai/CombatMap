import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find Your Perfect BJJ Gym
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover local BJJ gyms, book trial classes, and start your journey today. 
            We make it easy to find the right gym for your skill level and goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="/gyms">
                Find Gyms
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">
                Learn more
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 