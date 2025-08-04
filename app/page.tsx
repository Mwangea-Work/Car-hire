import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Users, Calendar, Shield, Award, ThumbsUp, MapPin } from "lucide-react"
import BookingForm from "@/components/booking-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import TrustedPartners from "@/components/trusted-partners"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-r from-navy-900 to-navy-800 pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Luxury car on road"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 text-center text-white">
          <Badge className="mb-4 bg-gold-500 text-navy-900 hover:bg-gold-600">Premium Experience</Badge>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Drive Your Dreams with <span className="text-gold-400">Premium</span> Cars
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            Experience the ultimate in luxury and comfort with our premium fleet of vehicles. Whether for business or
            leisure, we have the perfect car for your journey.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-gold-500 text-navy-900 hover:bg-gold-600">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/fleet">View Our Fleet</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-lg lg:p-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-navy-800">Quick Booking</h2>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-2">Our Services</Badge>
            <h2 className="mb-4 text-3xl font-bold text-navy-800">Premium Car Rental Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We offer a range of premium services to meet all your transportation needs, from self-drive rentals to
              chauffeur services and more.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Service 1 */}
            <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-navy-100 p-3">
                  <Car className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-800">Self-drive Rentals</h3>
                <p className="text-gray-600">
                  Take control of your journey with our premium self-drive rental options.
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-navy-100 p-3">
                  <Users className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-800">Chauffeur Services</h3>
                <p className="text-gray-600">Sit back and relax with our professional chauffeur services.</p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-navy-100 p-3">
                  <MapPin className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-800">Airport Pickup</h3>
                <p className="text-gray-600">Start your journey smoothly with our convenient airport pickup service.</p>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-navy-100 p-3">
                  <Calendar className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-800">Long-Term Rentals</h3>
                <p className="text-gray-600">Flexible long-term rental options for extended stays and projects.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-2">Featured Fleet</Badge>
            <h2 className="mb-4 text-3xl font-bold text-navy-800">Our Premium Vehicles</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Explore our selection of premium vehicles, from economical options to luxury cars.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Vehicle 1 */}
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative h-56 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Luxury Sedan" fill className="object-cover" />
                <Badge className="absolute left-3 top-3 bg-navy-600">Luxury</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-navy-800">Mercedes E-Class</h3>
                  <p className="font-bold text-navy-600">$120/day</p>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" /> 5 Seats
                  </div>
                  <div className="flex items-center">
                    <Car className="mr-2 h-4 w-4" /> Automatic
                  </div>
                  <div className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" /> Insurance
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> GPS
                  </div>
                </div>
                <Button asChild className="w-full bg-navy-600 hover:bg-navy-700">
                  <Link href="/booking?vehicle=mercedes-e-class">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Vehicle 2 */}
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative h-56 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Luxury SUV" fill className="object-cover" />
                <Badge className="absolute left-3 top-3 bg-navy-600">SUV</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-navy-800">BMW X5</h3>
                  <p className="font-bold text-navy-600">$150/day</p>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" /> 7 Seats
                  </div>
                  <div className="flex items-center">
                    <Car className="mr-2 h-4 w-4" /> Automatic
                  </div>
                  <div className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" /> Insurance
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> GPS
                  </div>
                </div>
                <Button asChild className="w-full bg-navy-600 hover:bg-navy-700">
                  <Link href="/booking?vehicle=bmw-x5">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Vehicle 3 */}
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative h-56 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Economy Car" fill className="object-cover" />
                <Badge className="absolute left-3 top-3 bg-navy-600">Economy</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-navy-800">Toyota Corolla</h3>
                  <p className="font-bold text-navy-600">$60/day</p>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" /> 5 Seats
                  </div>
                  <div className="flex items-center">
                    <Car className="mr-2 h-4 w-4" /> Automatic
                  </div>
                  <div className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" /> Insurance
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> GPS
                  </div>
                </div>
                <Button asChild className="w-full bg-navy-600 hover:bg-navy-700">
                  <Link href="/booking?vehicle=toyota-corolla">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-navy-600 text-navy-600 hover:bg-navy-50 bg-transparent">
              <Link href="/fleet">View All Vehicles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-2 bg-gold-500 text-navy-900">Our Advantages</Badge>
            <h2 className="mb-4 text-3xl font-bold">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              We pride ourselves on providing exceptional service and premium vehicles to ensure your journey is
              comfortable and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Advantage 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-navy-700 p-4">
                <Award className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Premium Fleet</h3>
              <p className="text-gray-300">
                Our vehicles are regularly maintained and cleaned to ensure your comfort and safety.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-navy-700 p-4">
                <Shield className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Comprehensive Insurance</h3>
              <p className="text-gray-300">
                All our rentals come with comprehensive insurance coverage for your peace of mind.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-navy-700 p-4">
                <ThumbsUp className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-300">
                Our customer support team is available 24/7 to assist you with any queries or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-2">Testimonials</Badge>
            <h2 className="mb-4 text-3xl font-bold text-navy-800">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Don't just take our word for it. Here's what our customers have to say about their experience with us.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800">Trusted By</h2>
          </div>

          <TrustedPartners />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Luxury car interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy-900/80"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Ready to Experience Premium Car Rental?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-200">
            Book your premium vehicle today and enjoy a comfortable, luxurious journey.
          </p>
          <Button asChild size="lg" className="bg-gold-500 text-navy-900 hover:bg-gold-600">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
