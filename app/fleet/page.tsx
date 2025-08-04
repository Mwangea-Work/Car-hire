import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Users, Shield, MapPin } from "lucide-react"

export default function FleetPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-4 text-4xl font-bold">Our Premium Fleet</h1>
            <p className="mb-6 text-lg text-gray-300">
              Explore our wide range of premium vehicles to find the perfect match for your journey. From economical
              options to luxury cars, we have something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-2xl grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="economy">Economy</TabsTrigger>
                <TabsTrigger value="suv">SUVs</TabsTrigger>
                <TabsTrigger value="luxury">Luxury</TabsTrigger>
                <TabsTrigger value="vans">Vans</TabsTrigger>
              </TabsList>
            </div>

            {/* All Vehicles */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Economy Cars */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Economy Car"
                      fill
                      className="object-cover"
                    />
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

                {/* SUV */}
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

                {/* Luxury */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Luxury Sedan"
                      fill
                      className="object-cover"
                    />
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

                {/* Van */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Passenger Van"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-navy-600">Van</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">Mercedes V-Class</h3>
                      <p className="font-bold text-navy-600">$180/day</p>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" /> 8 Seats
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
                      <Link href="/booking?vehicle=mercedes-v-class">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Economy 2 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Economy Car"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-navy-600">Economy</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">Honda Civic</h3>
                      <p className="font-bold text-navy-600">$65/day</p>
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
                      <Link href="/booking?vehicle=honda-civic">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Luxury 2 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Luxury Sedan"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-navy-600">Luxury</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">Audi A6</h3>
                      <p className="font-bold text-navy-600">$130/day</p>
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
                      <Link href="/booking?vehicle=audi-a6">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Economy Vehicles */}
            <TabsContent value="economy">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Economy 1 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Economy Car"
                      fill
                      className="object-cover"
                    />
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

                {/* Economy 2 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Economy Car"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-navy-600">Economy</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">Honda Civic</h3>
                      <p className="font-bold text-navy-600">$65/day</p>
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
                      <Link href="/booking?vehicle=honda-civic">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Economy 3 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Economy Car"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-navy-600">Economy</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">Ford Focus</h3>
                      <p className="font-bold text-navy-600">$58/day</p>
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
                      <Link href="/booking?vehicle=ford-focus">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* SUV Vehicles */}
            <TabsContent value="suv">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* SUV 1 */}
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

                {/* SUV 2 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image src="/placeholder.svg?height=400&width=600" alt="Luxury SUV" fill className="object-cover" />
                    <Badge className="absolute left-3 top-3 bg-navy-600">SUV</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">Audi Q7</h3>
                      <p className="font-bold text-navy-600">$160/day</p>
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
                      <Link href="/booking?vehicle=audi-q7">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* SUV 3 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image src="/placeholder.svg?height=400&width=600" alt="Luxury SUV" fill className="object-cover" />
                    <Badge className="absolute left-3 top-3 bg-navy-600">SUV</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">Range Rover Sport</h3>
                      <p className="font-bold text-navy-600">$180/day</p>
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
                      <Link href="/booking?vehicle=range-rover-sport">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Luxury Vehicles */}
            <TabsContent value="luxury">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Luxury 1 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Luxury Sedan"
                      fill
                      className="object-cover"
                    />
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

                {/* Luxury 2 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Luxury Sedan"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-navy-600">Luxury</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">Audi A6</h3>
                      <p className="font-bold text-navy-600">$130/day</p>
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
                      <Link href="/booking?vehicle=audi-a6">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Luxury 3 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Luxury Sedan"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-navy-600">Luxury</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">BMW 7 Series</h3>
                      <p className="font-bold text-navy-600">$170/day</p>
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
                      <Link href="/booking?vehicle=bmw-7-series">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Vans */}
            <TabsContent value="vans">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Van 1 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Passenger Van"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-navy-600">Van</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">Mercedes V-Class</h3>
                      <p className="font-bold text-navy-600">$180/day</p>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" /> 8 Seats
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
                      <Link href="/booking?vehicle=mercedes-v-class">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Van 2 */}
                <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Passenger Van"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute left-3 top-3 bg-navy-600">Van</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-navy-800">VW Transporter</h3>
                      <p className="font-bold text-navy-600">$140/day</p>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" /> 9 Seats
                      </div>
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4" /> Manual
                      </div>
                      <div className="flex items-center">
                        <Shield className="mr-2 h-4 w-4" /> Insurance
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" /> GPS
                      </div>
                    </div>
                    <Button asChild className="w-full bg-navy-600 hover:bg-navy-700">
                      <Link href="/booking?vehicle=vw-transporter">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Book Your Perfect Vehicle?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Contact our team for personalized assistance or special requirements.
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
