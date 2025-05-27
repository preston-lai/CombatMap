import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users } from "lucide-react";

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Find Your Path</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to start your BJJ journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've built the tools you need to find the perfect BJJ gym, book trial classes,
            and start your training journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <Card>
                <CardHeader>
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <CardTitle>Find Local Gyms</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Discover BJJ gyms in your area with detailed information about locations,
                    prices, and schedules.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col">
              <Card>
                <CardHeader>
                  <Calendar className="h-6 w-6 text-indigo-600" />
                  <CardTitle>Easy Trial Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Book your trial class with ease. We'll guide you through what to bring
                    and what to expect.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col">
              <Card>
                <CardHeader>
                  <Users className="h-6 w-6 text-indigo-600" />
                  <CardTitle>Join the Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with other practitioners, get notified about events, and be part
                    of the BJJ community.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 