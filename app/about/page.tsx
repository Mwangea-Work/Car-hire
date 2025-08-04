import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, MapPin, Shield, ThumbsUp, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-4 text-4xl font-bold">About Premium Cars</h1>
            <p className="mb-6 text-lg text-gray-300">
              Your trusted partner for premium car rental services since 2010. We provide exceptional vehicles and
              service for all your transportation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <Badge className="mb-2 w-fit">Our Story</Badge>
              <h2 className="mb-4 text-3xl font-bold text-navy-800">A Decade of Excellence</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2010, Premium Cars began with a simple mission: to provide travelers with exceptional
                vehicles and service that exceeds expectations. What started as a small fleet of luxury cars has grown
                into a comprehensive collection of vehicles to suit every need and occasion.
              </p>
              <p className="mb-4 text-gray-600">
                Our founder, John Smith, recognized a gap in the market for a car rental service that truly understood
                the needs of discerning clients. With a background in hospitality and a passion for automobiles, he
                established Premium Cars with a commitment to quality, reliability, and personalized service.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of satisfied customers each year, from business travelers to tourists and
                local residents. Our dedication to excellence remains at the core of everything we do.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Premium Cars showroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-2">Our Purpose</Badge>
            <h2 className="mb-8 text-3xl font-bold text-navy-800">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-navy-800">Our Mission</h3>
                <p className="text-gray-600">
                  To provide our customers with premium vehicles and exceptional service that make every journey
                  memorable. We strive to exceed expectations through attention to detail, personalized care, and a
                  commitment to safety and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-navy-800">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading premium car rental service, recognized for our exceptional fleet, outstanding
                  customer experience, and innovative approach to transportation solutions. We aim to set the standard
                  for excellence in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-2">What We Stand For</Badge>
            <h2 className="mb-4 text-3xl font-bold text-navy-800">Our Core Values</h2>
            <p className="mb-12 text-gray-600">
              These principles guide every decision we make and every interaction we have with our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-navy-100 p-4">
                <Award className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-navy-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from the quality of our vehicles to the
                professionalism of our staff.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-navy-100 p-4">
                <Shield className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-navy-800">Safety</h3>
              <p className="text-gray-600">
                The safety of our customers is our top priority. All our vehicles undergo rigorous maintenance and
                safety checks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-navy-100 p-4">
                <ThumbsUp className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-navy-800">Customer Focus</h3>
              <p className="text-gray-600">
                We put our customers at the center of everything we do, tailoring our services to meet their unique
                needs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-navy-100 p-4">
                <Users className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-navy-800">Teamwork</h3>
              <p className="text-gray-600">
                Our dedicated team works together seamlessly to deliver a consistent and exceptional experience for
                every customer.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-navy-100 p-4">
                <Clock className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-navy-800">Reliability</h3>
              <p className="text-gray-600">
                We understand the importance of punctuality and dependability in transportation services and strive to
                be consistently reliable.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-navy-100 p-4">
                <MapPin className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-navy-800">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new ways to improve our services and embrace technology to enhance the customer
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-2">Meet Our Team</Badge>
            <h2 className="mb-4 text-3xl font-bold text-navy-800">The People Behind Premium Cars</h2>
            <p className="mb-12 text-gray-600">
              Our dedicated team of professionals is committed to providing you with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="relative mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="John Smith - CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">John Smith</h3>
              <p className="text-navy-600">Founder & CEO</p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sarah Johnson - Operations Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">Sarah Johnson</h3>
              <p className="text-navy-600">Operations Director</p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Michael Brown - Customer Service Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">Michael Brown</h3>
              <p className="text-navy-600">Customer Service Manager</p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Emily Davis - Fleet Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy-800">Emily Davis</h3>
              <p className="text-navy-600">Fleet Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Premium Cars office" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy-900/80"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Ready to Experience Premium Car Rental?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-200">
            Join thousands of satisfied customers who trust Premium Cars for their transportation needs.
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
