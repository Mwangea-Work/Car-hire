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
      <section className="bg-gradient-to-br from-navy-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-navy-100 text-navy-700 hover:bg-navy-200">Our Advantages</Badge>
            <h2 className="mb-6 text-4xl font-bold text-navy-800">Why Choose PremiumCars</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
              We pride ourselves on providing exceptional service and premium vehicles to ensure your journey is
              comfortable, safe, and memorable. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Advantage 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 opacity-20 transform translate-x-16 -translate-y-16"></div>
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-navy-800">Premium Fleet</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our meticulously maintained vehicles undergo regular inspections and professional detailing to ensure
                  the highest standards of comfort, safety, and luxury for every journey.
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-gold-600">
                  <span>Learn more</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-navy-100 to-navy-200 opacity-20 transform translate-x-16 -translate-y-16"></div>
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-navy-700 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-navy-800">Comprehensive Protection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every rental includes full comprehensive insurance coverage, 24/7 roadside assistance, and emergency
                  support to give you complete peace of mind throughout your journey.
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-navy-600">
                  <span>Learn more</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-green-100 to-green-200 opacity-20 transform translate-x-16 -translate-y-16"></div>
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                  <ThumbsUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-navy-800">Exceptional Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated customer service team is available around the clock to assist you. From booking to
                  return, we ensure a seamless and personalized experience every step of the way.
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-green-600">
                  <span>Learn more</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-800">10K+</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-800">500+</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Premium Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-800">50+</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-800">24/7</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="bg-navy-800 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-gold-500/20 text-gold-400 border-gold-500/30">Our Foundation</Badge>
            <h2 className="mb-6 text-4xl font-bold">Our Core Values</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              These fundamental principles guide everything we do and shape the exceptional experience we deliver to our
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="group text-center">
              <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We strive for perfection in every aspect of our service, from vehicle maintenance to customer
                interactions.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group text-center">
              <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Trust</h3>
              <p className="text-gray-300 leading-relaxed">
                Building lasting relationships through transparency, reliability, and consistent delivery of our
                promises.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group text-center">
              <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Customer Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Your satisfaction is our priority. We listen, adapt, and continuously improve to exceed your
                expectations.
              </p>
            </div>

            {/* Value 4 */}
            <div className="group text-center">
              <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Car className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Embracing new technologies and methods to enhance your rental experience and stay ahead of the curve.
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
