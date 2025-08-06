import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, MapPin, Shield, Users, Target, Eye, Heart, Zap, Car, Check, Leaf, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section (unchanged) */}
      <section className="relative bg-navy-800 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/premium1.jpg?height=800&width=1920"
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

      {/* Our Story - Updated Clean Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/industrial.jpg?height=600&width=800"
                  alt="Premium Cars showroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <Badge className="mb-4 w-fit bg-navy-100 text-navy-700">Our Journey</Badge>
              <h2 className="mb-6 text-4xl font-bold text-navy-800">Redefining Luxury Mobility</h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Since our inception in 2010, Premium Cars has transformed from a local luxury car provider to a regional leader in premium mobility solutions.
                </p>
                <div className="space-y-4 mt-6">
                  {[
                    "Founded with just 5 luxury vehicles",
                    "First to introduce concierge rental services",
                    "Pioneered eco-friendly premium fleet options",
                    "Developed proprietary booking technology"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="leading-relaxed mt-6">
                  Our growth has been fueled by an unwavering commitment to quality and innovation, earning us recognition as the most trusted premium rental service in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-gold-100 text-gold-700">Why Choose Us</Badge>
            <h2 className="mb-4 text-4xl font-bold text-navy-800">The Premium Difference</h2>
            <p className="text-gray-600">
              What sets us apart in a competitive industry is our dedication to going beyond expectations at every touchpoint.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Curated Fleet",
                description: "Each vehicle undergoes a 150-point inspection and meets our strict quality standards.",
                color: "text-gold-500"
              },
              {
                icon: Leaf,
                title: "Sustainable Luxury",
                description: "Our green initiative includes hybrid and electric options with carbon offset programs.",
                color: "text-green-500"
              },
              {
                icon: Shield,
                title: "Peace of Mind",
                description: "24/7 roadside assistance and comprehensive insurance options included.",
                color: "text-blue-500"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`${item.color} mb-4`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

     

      {/* CTA Section (unchanged) */}
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
          <div className="flex flex-row items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
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