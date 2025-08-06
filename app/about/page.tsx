import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, MapPin, Shield, Users, Target, Eye, Heart, Zap, Car } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Premium Cars headquarters"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-navy-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Badge className="mb-4 bg-gold-500/20 text-gold-400 border-gold-500/30">About Us</Badge>
            <h1 className="mb-6 text-5xl font-bold">About Premium Cars</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Your trusted partner for premium car rental services since 2010. We provide exceptional vehicles and
              service for all your transportation needs with a commitment to excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit bg-navy-100 text-navy-700">Our Story</Badge>
              <h2 className="mb-6 text-4xl font-bold text-navy-800">A Decade of Excellence</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Premium Cars began with a simple yet ambitious mission: to provide travelers with
                  exceptional vehicles and service that exceeds expectations. What started as a small fleet of luxury
                  cars has grown into a comprehensive collection of vehicles to suit every need and occasion.
                </p>
                <p>
                  Our founder, John Smith, recognized a gap in the market for a car rental service that truly understood
                  the needs of discerning clients. With a background in hospitality and a passion for automobiles, he
                  established Premium Cars with a commitment to quality, reliability, and personalized service.
                </p>
                <p>
                  Today, we serve thousands of satisfied customers each year, from business travelers to tourists and
                  local residents. Our dedication to excellence remains at the core of everything we do, driving us to
                  continuously improve and innovate in the car rental industry.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
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
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Our Purpose</Badge>
            <h2 className="mb-6 text-4xl font-bold text-navy-800">Mission & Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission and vision guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-600 to-navy-700 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-6 text-3xl font-bold text-navy-800">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To provide our customers with premium vehicles and exceptional service that make every journey
                  memorable. We strive to exceed expectations through attention to detail, personalized care, and a
                  commitment to safety and reliability that sets the standard in the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 shadow-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-6 text-3xl font-bold text-navy-800">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the leading premium car rental service, recognized for our exceptional fleet, outstanding
                  customer experience, and innovative approach to transportation solutions. We aim to set the standard
                  for excellence in the industry while expanding our reach globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Core Values - Updated Professional Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <Badge className="mb-4 bg-gold-100 text-gold-700">What We Stand For</Badge>
            <h2 className="mb-6 text-4xl font-bold text-navy-800">Our Core Values</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              These fundamental principles guide every decision we make and every interaction we have with our
              customers, shaping the exceptional experience we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service, from the quality of our vehicles to the professionalism of our staff and the attention to detail in every customer interaction.",
                gradient: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                icon: Shield,
                title: "Safety",
                description:
                  "The safety of our customers is our top priority. All our vehicles undergo rigorous maintenance and safety checks to ensure peace of mind on every journey.",
                gradient: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
              },
              {
                icon: Heart,
                title: "Customer Focus",
                description:
                  "We put our customers at the center of everything we do, tailoring our services to meet their unique needs and exceeding their expectations at every touchpoint.",
                gradient: "from-red-500 to-red-600",
                bgColor: "bg-red-50",
              },
              {
                icon: Users,
                title: "Teamwork",
                description:
                  "Our dedicated team works together seamlessly to deliver a consistent and exceptional experience for every customer, fostering collaboration and mutual support.",
                gradient: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                icon: Clock,
                title: "Reliability",
                description:
                  "We understand the importance of punctuality and dependability in transportation services and strive to be consistently reliable in all our commitments.",
                gradient: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "We continuously seek new ways to improve our services and embrace technology to enhance the customer experience while staying ahead of industry trends.",
                gradient: "from-yellow-500 to-yellow-600",
                bgColor: "bg-yellow-50",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div
                    className={`mb-6 mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-navy-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="bg-navy-800 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <Badge className="mb-4 bg-gold-500/20 text-gold-400 border-gold-500/30">Our Achievements</Badge>
            <h2 className="mb-6 text-4xl font-bold">Milestones & Recognition</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Over the years, we've achieved significant milestones and received recognition for our commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                number: "50,000+",
                label: "Satisfied Customers",
                description: "Happy customers served since 2010",
              },
              {
                icon: Car,
                number: "500+",
                label: "Premium Vehicles",
                description: "Diverse fleet of luxury cars",
              },
              {
                icon: MapPin,
                number: "25+",
                label: "Locations",
                description: "Service centers across the region",
              },
              {
                icon: Award,
                number: "15+",
                label: "Industry Awards",
                description: "Recognition for service excellence",
              },
            ].map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gold-400 mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <div className="text-gray-300 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/premium.jpg?height=600&width=1920" alt="Premium Cars office" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/90"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold">Ready to Experience Premium Car Rental?</h2>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-200 leading-relaxed">
            Join thousands of satisfied customers who trust Premium Cars for their transportation needs. Experience the
            difference that comes with our commitment to excellence.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <Button asChild size="lg" className="bg-gold-500 text-navy-900 hover:bg-gold-600 px-8 py-4 font-semibold">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 font-semibold"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
