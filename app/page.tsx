"use client"

import { useEffect, useRef } from "react"
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
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        heroRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative flex min-h-[115vh] items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 z-0 will-change-transform">
          <Image
            src="/car.jpg"
            alt="Luxury car on scenic road"
            fill
            priority
            className="object-cover scale-100 sm:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-navy-900/90"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-32 text-center text-white">
          <Badge className="mb-6 bg-gold-500/20 text-gold-400 border-gold-500/30 backdrop-blur-sm">
            Premium Experience
          </Badge>
          <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Drive Your Dreams with{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Twende </span>{" "}
            Rides
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-200 leading-relaxed">
            Experience the ultimate in luxury and comfort with our premium fleet of vehicles. Whether for business or
            leisure, we have the perfect car for your journey.
          </p>
          <div className="flex flex-row items-center justify-center space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-gold-500 text-navy-900 hover:bg-gold-600 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
            >
              <Link href="/fleet">View Our Fleet</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className="bg-white py-16 relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-2xl border border-gray-100">
            <h2 className="mb-8 text-center text-3xl font-bold text-navy-800">Quick Booking</h2>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Our Services</Badge>
            <h2 className="mb-6 text-4xl font-bold text-navy-800">Premium Car Rental Services</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
              We offer a comprehensive range of premium services to meet all your transportation needs, from self-drive
              rentals to chauffeur services and specialized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Car,
                title: "Self-drive Rentals",
                description:
                  "Take control of your journey with our premium self-drive rental options featuring the latest models.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Users,
                title: "Chauffeur Services",
                description: "Sit back and relax with our professional chauffeur services and experienced drivers.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: MapPin,
                title: "Airport Pickup",
                description: "Start your journey smoothly with our convenient and punctual airport pickup service.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Calendar,
                title: "Long-Term Rentals",
                description:
                  "Flexible long-term rental options for extended stays, business projects, and special occasions.",
                color: "from-orange-500 to-orange-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div
                    className={`mb-6 rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-navy-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-gold-100 text-gold-700">Featured Fleet</Badge>
            <h2 className="mb-6 text-4xl font-bold text-navy-800">Our Premium Vehicles</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
              Explore our carefully curated selection of premium vehicles, from economical options to luxury cars, each
              maintained to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/E-class.jpg?height=400&width=600",
                category: "Luxury",
                name: "Mercedes E-Class",
                price: "$120/day",
                features: ["5 Seats", "Automatic", "Insurance", "GPS"],
              },
              {
                image: "/BMW.webp?height=400&width=600",
                category: "SUV",
                name: "BMW X5",
                price: "$150/day",
                features: ["7 Seats", "Automatic", "Insurance", "GPS"],
              },
              {
                image: "/toyota.jpg?height=400&width=600",
                category: "Economy",
                name: "Toyota Corolla",
                price: "$60/day",
                features: ["5 Seats", "Automatic", "Insurance", "GPS"],
              },
            ].map((vehicle, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute left-4 top-4 bg-navy-600/90 backdrop-blur-sm">{vehicle.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-navy-800">{vehicle.name}</h3>
                    <p className="text-xl font-bold text-gold-600">{vehicle.price}</p>
                  </div>
                  <div className="mb-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
                    {vehicle.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-gold-500"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-navy-600 hover:bg-navy-700 font-semibold">
                    <Link href={`/booking?vehicle=${vehicle.name.toLowerCase().replace(" ", "-")}`}>Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-navy-600 text-navy-600 hover:bg-navy-50 bg-transparent px-8 py-3 font-semibold"
            >
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
            {[
              {
                icon: Award,
                title: "Premium Fleet",
                description:
                  "Our meticulously maintained vehicles undergo regular inspections and professional detailing to ensure the highest standards of comfort, safety, and luxury for every journey.",
                gradient: "from-gold-500 to-gold-600",
                accent: "gold",
              },
              {
                icon: Shield,
                title: "Comprehensive Protection",
                description:
                  "Every rental includes full comprehensive insurance coverage, 24/7 roadside assistance, and emergency support to give you complete peace of mind throughout your journey.",
                gradient: "from-navy-600 to-navy-700",
                accent: "navy",
              },
              {
                icon: ThumbsUp,
                title: "Exceptional Service",
                description:
                  "Our dedicated customer service team is available around the clock to assist you. From booking to return, we ensure a seamless and personalized experience every step of the way.",
                gradient: "from-green-500 to-green-600",
                accent: "green",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-20 transform translate-x-16 -translate-y-16"></div>
                <div className="relative">
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${advantage.gradient} shadow-lg`}
                  >
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-navy-800">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{advantage.description}</p>
                  <div className={`flex items-center text-sm font-medium text-${advantage.accent}-600`}>
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
            ))}
          </div>

          
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Testimonials</Badge>
            <h2 className="mb-6 text-4xl font-bold text-navy-800">What Our Customers Say</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
              Don't just take our word for it. Here's what our customers have to say about their experience with us.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-navy-800">Trusted By Leading Companies</h2>
          </div>

          <TrustedPartners />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/premium.jpg?height=600&width=1920" alt="Luxury car interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/90"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold">Ready to Experience Premium Car Rental?</h2>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-200 leading-relaxed">
            Book your premium vehicle today and enjoy a comfortable, luxurious journey with our exceptional service.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold-500 text-navy-900 hover:bg-gold-600 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
