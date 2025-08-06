"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Users, Shield, MapPin } from "lucide-react"

export default function FleetPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setActiveTab(category)
    }
  }, [searchParams])

  const vehicles = [
    {
      id: "toyota-corolla",
      name: "Toyota Corolla",
      category: "economy",
      price: "$60/day",
      seats: 5,
      transmission: "Automatic",
      image: "/toyota.jpg?height=400&width=600",
    },
    {
      id: "honda-civic",
      name: "Honda Civic",
      category: "economy",
      price: "$65/day",
      seats: 5,
      transmission: "Automatic",
      image: "/Honda.jpg?height=400&width=600",
    },
    {
      id: "ford-focus",
      name: "Ford Focus",
      category: "economy",
      price: "$58/day",
      seats: 5,
      transmission: "Automatic",
      image: "/ford.jpg?height=400&width=600",
    },
    {
      id: "bmw-x5",
      name: "BMW X5",
      category: "suv",
      price: "$150/day",
      seats: 7,
      transmission: "Automatic",
      image: "/BMW.webp?height=400&width=600",
    },
    {
      id: "audi-q7",
      name: "Audi Q7",
      category: "suv",
      price: "$160/day",
      seats: 7,
      transmission: "Automatic",
      image: "/q7.jpg?height=400&width=600",
    },
    {
      id: "range-rover-sport",
      name: "Range Rover Sport",
      category: "suv",
      price: "$180/day",
      seats: 5,
      transmission: "Automatic",
      image: "/sport.jpg?height=400&width=600",
    },
    {
      id: "mercedes-e-class",
      name: "Mercedes E-Class",
      category: "luxury",
      price: "$120/day",
      seats: 5,
      transmission: "Automatic",
      image: "/E-class.jpg?height=400&width=600",
    },
    {
      id: "audi-a6",
      name: "Audi A6",
      category: "luxury",
      price: "$130/day",
      seats: 5,
      transmission: "Automatic",
      image: "/A6.avif?height=400&width=600",
    },
    {
      id: "bmw-7-series",
      name: "BMW 7 Series",
      category: "luxury",
      price: "$170/day",
      seats: 5,
      transmission: "Automatic",
      image: "/7series.avif?height=400&width=600",
    },
    {
      id: "mercedes-v-class",
      name: "Mercedes V-Class",
      category: "vans",
      price: "$180/day",
      seats: 8,
      transmission: "Automatic",
      image: "/vclass.jpg?height=400&width=600",
    },
    {
      id: "vw-transporter",
      name: "VW Transporter",
      category: "vans",
      price: "$140/day",
      seats: 9,
      transmission: "Manual",
      image: "/vw.webp?height=400&width=600",
    },
  ]

  const getFilteredVehicles = (category: string) => {
    if (category === "all") return vehicles
    return vehicles.filter((vehicle) => vehicle.category === category)
  }

  const VehicleCard = ({ vehicle }: { vehicle: (typeof vehicles)[0] }) => (
    <Card className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute left-3 top-3 bg-navy-600/90 backdrop-blur-sm capitalize">{vehicle.category}</Badge>
      </div>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-navy-800">{vehicle.name}</h3>
          <p className="text-xl font-bold text-gold-600">{vehicle.price}</p>
        </div>
        <div className="mb-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" /> {vehicle.seats} Seats
          </div>
          <div className="flex items-center">
            <Car className="mr-2 h-4 w-4" /> {vehicle.transmission}
          </div>
          <div className="flex items-center">
            <Shield className="mr-2 h-4 w-4" /> Insurance
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" /> GPS
          </div>
        </div>
        <Button asChild className="w-full bg-navy-600 hover:bg-navy-700 font-semibold">
          <Link href={`/booking?vehicle=${vehicle.id}`}>Book Now</Link>
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fleet.jpg?height=600&width=1920"
            alt="Premium car fleet"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-navy-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Badge className="mb-4 bg-gold-500/20 text-gold-400 border-gold-500/30">Premium Fleet</Badge>
            <h1 className="mb-6 text-5xl font-bold">Our Premium Fleet</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Explore our extensive collection of premium vehicles to find the perfect match for your journey. From
              economical options to luxury cars, we have something for every occasion and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-12 flex justify-center">
              <TabsList className="grid w-full max-w-2xl grid-cols-5 h-12 bg-gray-100 rounded-xl">
                <TabsTrigger value="all" className="font-semibold">
                  All
                </TabsTrigger>
                <TabsTrigger value="economy" className="font-semibold">
                  Economy
                </TabsTrigger>
                <TabsTrigger value="suv" className="font-semibold">
                  SUVs
                </TabsTrigger>
                <TabsTrigger value="luxury" className="font-semibold">
                  Luxury
                </TabsTrigger>
                <TabsTrigger value="vans" className="font-semibold">
                  Vans
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {getFilteredVehicles("all").map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="economy">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {getFilteredVehicles("economy").map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="suv">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {getFilteredVehicles("suv").map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="luxury">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {getFilteredVehicles("luxury").map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vans">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {getFilteredVehicles("vans").map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/premium.jpg?height=600&width=1920" alt="Luxury car interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/90"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold">Ready to Book Your Perfect Vehicle?</h2>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-200 leading-relaxed">
            Contact our team for personalized assistance or special requirements. We're here to make your rental
            experience exceptional.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">

          <Button
            asChild
            size="lg"
            className="bg-gold-500 text-navy-900 hover:bg-gold-600 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <a href="tel:+254758311071">Call Us</a>
            </Button>
            </div>
        </div>
      </section>
    </div>
  )
}
