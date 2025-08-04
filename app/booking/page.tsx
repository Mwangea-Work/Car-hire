"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format, addDays } from "date-fns"
import { CalendarIcon, Clock, Car, Users, Shield, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BookingPage() {
  const searchParams = useSearchParams()

  // Form state
  const [pickupDate, setPickupDate] = useState<Date | undefined>(new Date())
  const [returnDate, setReturnDate] = useState<Date | undefined>(addDays(new Date(), 3))
  const [pickupTime, setPickupTime] = useState("10:00")
  const [returnTime, setReturnTime] = useState("10:00")
  const [pickupLocation, setPickupLocation] = useState("")
  const [returnLocation, setReturnLocation] = useState("")
  const [selectedVehicle, setSelectedVehicle] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [addOns, setAddOns] = useState({
    insurance: true,
    gps: false,
    childSeat: false,
    additionalDriver: false,
  })
  const [currentStep, setCurrentStep] = useState(1)

  // Get URL parameters
  useEffect(() => {
    if (searchParams) {
      const vehicle = searchParams.get("vehicle")
      const pLocation = searchParams.get("pickupLocation")
      const rLocation = searchParams.get("returnLocation")
      const pDate = searchParams.get("pickupDate")
      const rDate = searchParams.get("returnDate")
      const pTime = searchParams.get("pickupTime")
      const rTime = searchParams.get("returnTime")

      if (vehicle) setSelectedVehicle(vehicle)
      if (pLocation) setPickupLocation(pLocation)
      if (rLocation) setReturnLocation(rLocation)
      if (pDate) setPickupDate(new Date(pDate))
      if (rDate) setReturnDate(new Date(rDate))
      if (pTime) setPickupTime(pTime)
      if (rTime) setReturnTime(rTime)
    }
  }, [searchParams])

  // Sample vehicle data
  const vehicles = [
    {
      id: "toyota-corolla",
      name: "Toyota Corolla",
      category: "Economy",
      price: 60,
      image: "/placeholder.svg?height=400&width=600",
      seats: 5,
      transmission: "Automatic",
      features: ["Air Conditioning", "Bluetooth", "USB Port", "Cruise Control"],
    },
    {
      id: "honda-civic",
      name: "Honda Civic",
      category: "Economy",
      price: 65,
      image: "/placeholder.svg?height=400&width=600",
      seats: 5,
      transmission: "Automatic",
      features: ["Air Conditioning", "Bluetooth", "USB Port", "Cruise Control"],
    },
    {
      id: "bmw-x5",
      name: "BMW X5",
      category: "SUV",
      price: 150,
      image: "/placeholder.svg?height=400&width=600",
      seats: 7,
      transmission: "Automatic",
      features: ["Leather Seats", "Navigation", "Panoramic Roof", "Premium Sound System"],
    },
    {
      id: "mercedes-e-class",
      name: "Mercedes E-Class",
      category: "Luxury",
      price: 120,
      image: "/placeholder.svg?height=400&width=600",
      seats: 5,
      transmission: "Automatic",
      features: ["Leather Seats", "Navigation", "Heated Seats", "Premium Sound System"],
    },
    {
      id: "mercedes-v-class",
      name: "Mercedes V-Class",
      category: "Van",
      price: 180,
      image: "/placeholder.svg?height=400&width=600",
      seats: 8,
      transmission: "Automatic",
      features: ["Leather Seats", "Navigation", "Climate Control", "Electric Sliding Doors"],
    },
  ]

  // Calculate rental duration in days
  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 1
    const diffTime = Math.abs(returnDate.getTime() - pickupDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays || 1
  }

  // Calculate total price
  const calculateTotal = () => {
    const selectedVehicleData = vehicles.find((v) => v.id === selectedVehicle)
    const basePrice = selectedVehicleData ? selectedVehicleData.price : 0
    const days = calculateDays()

    let addOnsPrice = 0
    if (addOns.insurance) addOnsPrice += 15 * days
    if (addOns.gps) addOnsPrice += 5 * days
    if (addOns.childSeat) addOnsPrice += 10 * days
    if (addOns.additionalDriver) addOnsPrice += 20 * days

    return {
      basePrice: basePrice * days,
      addOnsPrice,
      total: basePrice * days + addOnsPrice,
    }
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the booking to a server
    setCurrentStep(4) // Move to confirmation step
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-navy-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-bold text-white">Book Your Vehicle</h1>
          <div className="mx-auto mt-6 max-w-3xl">
            <div className="flex justify-between">
              <div
                className={`flex flex-1 flex-col items-center ${currentStep >= 1 ? "text-gold-400" : "text-gray-400"}`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 1 ? "bg-gold-500 text-navy-900" : "bg-gray-700 text-gray-300"}`}
                >
                  1
                </div>
                <span className="mt-2 text-sm">Select Vehicle</span>
              </div>
              <div
                className={`flex flex-1 flex-col items-center ${currentStep >= 2 ? "text-gold-400" : "text-gray-400"}`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 2 ? "bg-gold-500 text-navy-900" : "bg-gray-700 text-gray-300"}`}
                >
                  2
                </div>
                <span className="mt-2 text-sm">Add Options</span>
              </div>
              <div
                className={`flex flex-1 flex-col items-center ${currentStep >= 3 ? "text-gold-400" : "text-gray-400"}`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 3 ? "bg-gold-500 text-navy-900" : "bg-gray-700 text-gray-300"}`}
                >
                  3
                </div>
                <span className="mt-2 text-sm">Your Details</span>
              </div>
              <div
                className={`flex flex-1 flex-col items-center ${currentStep >= 4 ? "text-gold-400" : "text-gray-400"}`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 4 ? "bg-gold-500 text-navy-900" : "bg-gray-700 text-gray-300"}`}
                >
                  4
                </div>
                <span className="mt-2 text-sm">Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Step 1: Select Vehicle */}
        {currentStep === 1 && (
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-2xl font-bold text-navy-800">Select Your Vehicle</h2>

            {/* Booking Details Form */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {/* Pickup Location */}
                  <div className="space-y-2">
                    <Label htmlFor="pickup-location">Pickup Location</Label>
                    <Input
                      id="pickup-location"
                      placeholder="Enter pickup location"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      required
                    />
                  </div>

                  {/* Return Location */}
                  <div className="space-y-2">
                    <Label htmlFor="return-location">Return Location</Label>
                    <Input
                      id="return-location"
                      placeholder="Enter return location"
                      value={returnLocation}
                      onChange={(e) => setReturnLocation(e.target.value)}
                      required
                    />
                  </div>

                  {/* Pickup Date */}
                  <div className="space-y-2">
                    <Label htmlFor="pickup-date">Pickup Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="pickup-date"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !pickupDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {pickupDate ? format(pickupDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={pickupDate}
                          onSelect={setPickupDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Pickup Time */}
                  <div className="space-y-2">
                    <Label htmlFor="pickup-time">Pickup Time</Label>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-gray-500" />
                      <Select value={pickupTime} onValueChange={setPickupTime} required>
                        <SelectTrigger id="pickup-time" className="w-full">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }).map((_, hour) =>
                            [0, 30].map((minute) => {
                              const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
                              return (
                                <SelectItem key={timeString} value={timeString}>
                                  {timeString}
                                </SelectItem>
                              )
                            }),
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Return Date */}
                  <div className="space-y-2">
                    <Label htmlFor="return-date">Return Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="return-date"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !returnDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          initialFocus
                          disabled={(date) => date < (pickupDate || new Date())}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Return Time */}
                  <div className="space-y-2">
                    <Label htmlFor="return-time">Return Time</Label>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-gray-500" />
                      <Select value={returnTime} onValueChange={setReturnTime} required>
                        <SelectTrigger id="return-time" className="w-full">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }).map((_, hour) =>
                            [0, 30].map((minute) => {
                              const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
                              return (
                                <SelectItem key={timeString} value={timeString}>
                                  {timeString}
                                </SelectItem>
                              )
                            }),
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Selection */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-navy-800">Available Vehicles</h3>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6 grid w-full max-w-md grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="economy">Economy</TabsTrigger>
                  <TabsTrigger value="suv">SUVs</TabsTrigger>
                  <TabsTrigger value="luxury">Luxury</TabsTrigger>
                  <TabsTrigger value="van">Vans</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {vehicles.map((vehicle) => (
                      <Card
                        key={vehicle.id}
                        className={`cursor-pointer overflow-hidden border-2 transition-all duration-200 ${selectedVehicle === vehicle.id ? "border-navy-600" : "border-transparent"}`}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                      >
                        <div className="relative h-48 w-full">
                          <Image
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="mb-2 flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-navy-800">{vehicle.name}</h4>
                            <p className="font-bold text-navy-600">${vehicle.price}/day</p>
                          </div>
                          <div className="mb-3 flex items-center text-sm text-gray-600">
                            <Car className="mr-1 h-4 w-4" />
                            <span className="mr-3">{vehicle.category}</span>
                            <Users className="mr-1 h-4 w-4" />
                            <span>{vehicle.seats} Seats</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {vehicle.features.map((feature, index) => (
                              <span key={index} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="economy">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {vehicles
                      .filter((v) => v.category === "Economy")
                      .map((vehicle) => (
                        <Card
                          key={vehicle.id}
                          className={`cursor-pointer overflow-hidden border-2 transition-all duration-200 ${selectedVehicle === vehicle.id ? "border-navy-600" : "border-transparent"}`}
                          onClick={() => setSelectedVehicle(vehicle.id)}
                        >
                          <div className="relative h-48 w-full">
                            <Image
                              src={vehicle.image || "/placeholder.svg"}
                              alt={vehicle.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-navy-800">{vehicle.name}</h4>
                              <p className="font-bold text-navy-600">${vehicle.price}/day</p>
                            </div>
                            <div className="mb-3 flex items-center text-sm text-gray-600">
                              <Car className="mr-1 h-4 w-4" />
                              <span className="mr-3">{vehicle.category}</span>
                              <Users className="mr-1 h-4 w-4" />
                              <span>{vehicle.seats} Seats</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.features.map((feature, index) => (
                                <span key={index} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                {/* Similar TabsContent for other categories */}
                <TabsContent value="suv">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {vehicles
                      .filter((v) => v.category === "SUV")
                      .map((vehicle) => (
                        <Card
                          key={vehicle.id}
                          className={`cursor-pointer overflow-hidden border-2 transition-all duration-200 ${selectedVehicle === vehicle.id ? "border-navy-600" : "border-transparent"}`}
                          onClick={() => setSelectedVehicle(vehicle.id)}
                        >
                          <div className="relative h-48 w-full">
                            <Image
                              src={vehicle.image || "/placeholder.svg"}
                              alt={vehicle.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-navy-800">{vehicle.name}</h4>
                              <p className="font-bold text-navy-600">${vehicle.price}/day</p>
                            </div>
                            <div className="mb-3 flex items-center text-sm text-gray-600">
                              <Car className="mr-1 h-4 w-4" />
                              <span className="mr-3">{vehicle.category}</span>
                              <Users className="mr-1 h-4 w-4" />
                              <span>{vehicle.seats} Seats</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.features.map((feature, index) => (
                                <span key={index} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="luxury">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {vehicles
                      .filter((v) => v.category === "Luxury")
                      .map((vehicle) => (
                        <Card
                          key={vehicle.id}
                          className={`cursor-pointer overflow-hidden border-2 transition-all duration-200 ${selectedVehicle === vehicle.id ? "border-navy-600" : "border-transparent"}`}
                          onClick={() => setSelectedVehicle(vehicle.id)}
                        >
                          <div className="relative h-48 w-full">
                            <Image
                              src={vehicle.image || "/placeholder.svg"}
                              alt={vehicle.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-navy-800">{vehicle.name}</h4>
                              <p className="font-bold text-navy-600">${vehicle.price}/day</p>
                            </div>
                            <div className="mb-3 flex items-center text-sm text-gray-600">
                              <Car className="mr-1 h-4 w-4" />
                              <span className="mr-3">{vehicle.category}</span>
                              <Users className="mr-1 h-4 w-4" />
                              <span>{vehicle.seats} Seats</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.features.map((feature, index) => (
                                <span key={index} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="van">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {vehicles
                      .filter((v) => v.category === "Van")
                      .map((vehicle) => (
                        <Card
                          key={vehicle.id}
                          className={`cursor-pointer overflow-hidden border-2 transition-all duration-200 ${selectedVehicle === vehicle.id ? "border-navy-600" : "border-transparent"}`}
                          onClick={() => setSelectedVehicle(vehicle.id)}
                        >
                          <div className="relative h-48 w-full">
                            <Image
                              src={vehicle.image || "/placeholder.svg"}
                              alt={vehicle.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-navy-800">{vehicle.name}</h4>
                              <p className="font-bold text-navy-600">${vehicle.price}/day</p>
                            </div>
                            <div className="mb-3 flex items-center text-sm text-gray-600">
                              <Car className="mr-1 h-4 w-4" />
                              <span className="mr-3">{vehicle.category}</span>
                              <Users className="mr-1 h-4 w-4" />
                              <span>{vehicle.seats} Seats</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.features.map((feature, index) => (
                                <span key={index} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                onClick={handleNextStep}
                disabled={!selectedVehicle || !pickupLocation || !returnLocation}
                className="bg-navy-600 hover:bg-navy-700"
              >
                Continue to Options
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Add Options */}
        {currentStep === 2 && (
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-2xl font-bold text-navy-800">Add Options</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-navy-800">Additional Options</h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="insurance"
                          checked={addOns.insurance}
                          onCheckedChange={(checked) => setAddOns({ ...addOns, insurance: checked as boolean })}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="insurance" className="text-base font-medium">
                            Premium Insurance ($15/day)
                          </Label>
                          <p className="text-sm text-gray-500">
                            Full coverage with zero excess in case of damage or theft.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="gps"
                          checked={addOns.gps}
                          onCheckedChange={(checked) => setAddOns({ ...addOns, gps: checked as boolean })}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="gps" className="text-base font-medium">
                            GPS Navigation ($5/day)
                          </Label>
                          <p className="text-sm text-gray-500">
                            Advanced GPS navigation system with real-time traffic updates.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="childSeat"
                          checked={addOns.childSeat}
                          onCheckedChange={(checked) => setAddOns({ ...addOns, childSeat: checked as boolean })}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="childSeat" className="text-base font-medium">
                            Child Seat ($10/day)
                          </Label>
                          <p className="text-sm text-gray-500">
                            Safety-certified child seat suitable for children aged 1-4 years.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="additionalDriver"
                          checked={addOns.additionalDriver}
                          onCheckedChange={(checked) => setAddOns({ ...addOns, additionalDriver: checked as boolean })}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="additionalDriver" className="text-base font-medium">
                            Additional Driver ($20/day)
                          </Label>
                          <p className="text-sm text-gray-500">Add an extra driver to your rental agreement.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-navy-800">Booking Summary</h3>

                    {selectedVehicle && (
                      <div className="mb-4">
                        <div className="relative h-32 w-full overflow-hidden rounded-md">
                          <Image
                            src={vehicles.find((v) => v.id === selectedVehicle)?.image || ""}
                            alt={vehicles.find((v) => v.id === selectedVehicle)?.name || ""}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="mt-2 text-lg font-semibold text-navy-800">
                          {vehicles.find((v) => v.id === selectedVehicle)?.name}
                        </h4>
                      </div>
                    )}

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Pickup:</span>
                        <span className="font-medium">
                          {pickupDate ? format(pickupDate, "MMM d, yyyy") : ""} at {pickupTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Return:</span>
                        <span className="font-medium">
                          {returnDate ? format(returnDate, "MMM d, yyyy") : ""} at {returnTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{calculateDays()} days</span>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <div className="flex justify-between">
                        <span>Base Rate:</span>
                        <span className="font-medium">${calculateTotal().basePrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Add-ons:</span>
                        <span className="font-medium">${calculateTotal().addOnsPrice}</span>
                      </div>
                      <div className="mt-2 flex justify-between border-t border-gray-200 pt-2 text-lg font-bold">
                        <span>Total:</span>
                        <span>${calculateTotal().total}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button onClick={handleNextStep} className="bg-navy-600 hover:bg-navy-700">
                Continue to Personal Details
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {currentStep === 3 && (
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-2xl font-bold text-navy-800">Your Details</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input
                            id="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-6 space-y-2">
                        <Label htmlFor="payment">Payment Method</Label>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="card" name="payment" defaultChecked />
                            <Label htmlFor="card" className="flex items-center">
                              <CreditCard className="mr-2 h-4 w-4" /> Credit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="paypal" name="payment" />
                            <Label htmlFor="paypal">PayPal</Label>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-start space-x-3">
                          <Checkbox id="terms" required />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="terms" className="text-sm">
                              I agree to the{" "}
                              <Link href="/terms" className="text-navy-600 underline">
                                Terms and Conditions
                              </Link>{" "}
                              and{" "}
                              <Link href="/privacy" className="text-navy-600 underline">
                                Privacy Policy
                              </Link>
                            </Label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-navy-800">Booking Summary</h3>

                    {selectedVehicle && (
                      <div className="mb-4">
                        <div className="relative h-32 w-full overflow-hidden rounded-md">
                          <Image
                            src={vehicles.find((v) => v.id === selectedVehicle)?.image || ""}
                            alt={vehicles.find((v) => v.id === selectedVehicle)?.name || ""}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="mt-2 text-lg font-semibold text-navy-800">
                          {vehicles.find((v) => v.id === selectedVehicle)?.name}
                        </h4>
                      </div>
                    )}

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Pickup:</span>
                        <span className="font-medium">
                          {pickupDate ? format(pickupDate, "MMM d, yyyy") : ""} at {pickupTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Return:</span>
                        <span className="font-medium">
                          {returnDate ? format(returnDate, "MMM d, yyyy") : ""} at {returnTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{calculateDays()} days</span>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <div className="flex justify-between">
                        <span>Base Rate:</span>
                        <span className="font-medium">${calculateTotal().basePrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Add-ons:</span>
                        <span className="font-medium">${calculateTotal().addOnsPrice}</span>
                      </div>
                      <div className="mt-2 flex justify-between border-t border-gray-200 pt-2 text-lg font-bold">
                        <span>Total:</span>
                        <span>${calculateTotal().total}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="bg-navy-600 hover:bg-navy-700"
                disabled={!firstName || !lastName || !email || !phone}
              >
                Complete Booking
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-green-100 p-4">
                <Shield className="h-16 w-16 text-green-600" />
              </div>
            </div>

            <h2 className="mb-4 text-3xl font-bold text-navy-800">Booking Confirmed!</h2>
            <p className="mb-6 text-lg text-gray-600">
              Thank you for your booking. We have sent a confirmation email to {email}.
            </p>

            <Card className="mb-8">
              <CardContent className="p-6 text-left">
                <h3 className="mb-4 text-xl font-semibold text-navy-800">Booking Details</h3>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold">Vehicle</h4>
                    <p>{vehicles.find((v) => v.id === selectedVehicle)?.name}</p>

                    <h4 className="mb-2 mt-4 font-semibold">Pickup</h4>
                    <p>{pickupLocation}</p>
                    <p>
                      {pickupDate ? format(pickupDate, "MMMM d, yyyy") : ""} at {pickupTime}
                    </p>

                    <h4 className="mb-2 mt-4 font-semibold">Return</h4>
                    <p>{returnLocation}</p>
                    <p>
                      {returnDate ? format(returnDate, "MMMM d, yyyy") : ""} at {returnTime}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold">Customer</h4>
                    <p>
                      {firstName} {lastName}
                    </p>
                    <p>{email}</p>
                    <p>{phone}</p>

                    <h4 className="mb-2 mt-4 font-semibold">Payment</h4>
                    <p>Total: ${calculateTotal().total}</p>
                    <p>Booking Reference: REF-{Math.floor(100000 + Math.random() * 900000)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild className="bg-navy-600 hover:bg-navy-700">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
