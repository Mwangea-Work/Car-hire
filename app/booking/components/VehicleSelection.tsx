"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import VehicleCard from "./VehicleCard"
import BookingSummary from "./BookingSummary"
import { BookingFormState, Vehicle } from "./types"
import { vehicles } from "./data"
import { locationData } from "@/lib/locations"

interface VehicleSelectionProps {
  formState: BookingFormState
  setFormState: React.Dispatch<React.SetStateAction<BookingFormState>>
  onNext: () => void
}

export default function VehicleSelection({ formState, setFormState, onNext }: VehicleSelectionProps) {
  const [activeTab, setActiveTab] = useState(formState.activeTab)
  const [customPickupLocation, setCustomPickupLocation] = useState("")
  const [customReturnLocation, setCustomReturnLocation] = useState("")

  const getFilteredVehicles = (category: string) => {
    if (category === "all") return vehicles
    return vehicles.filter((vehicle) => vehicle.category === category)
  }

  const calculateDays = () => {
    if (!formState.pickupDate || !formState.returnDate) return 1
    const diffTime = Math.abs(formState.returnDate.getTime() - formState.pickupDate.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1
  }

  const calculateTotal = () => {
    const selectedVehicleData = vehicles.find((v) => v.id === formState.selectedVehicle)
    const basePrice = selectedVehicleData ? selectedVehicleData.price * calculateDays() : 0
    return { basePrice, total: basePrice }
  }

  const { basePrice, total } = calculateTotal()

  const handlePickupLocationChange = (value: string) => {
    setFormState({ ...formState, pickupLocation: value })
  }

  const handleReturnLocationChange = (value: string) => {
    setFormState({ ...formState, returnLocation: value })
  }

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-6 text-2xl font-bold text-navy-800">Select Your Vehicle</h2>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Pickup Location */}
            <div className="space-y-3">
              <Label htmlFor="pickup-location">Pickup Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Select 
                  value={formState.pickupLocation} 
                  onValueChange={handlePickupLocationChange} 
                  required
                >
                  <SelectTrigger 
                    id="pickup-location" 
                    className="w-full pl-10 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    <SelectValue placeholder="Choose pickup location" />
                  </SelectTrigger>
                  <SelectContent className="max-h-80 w-full min-w-[280px] sm:min-w-[320px] bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="p-2">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                        🛫 Airports
                      </div>
                      {locationData.airports.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4 px-2">
                        � Cities
                      </div>
                      {locationData.cities.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4 px-2">
                        🏨 Hotels
                      </div>
                      {locationData.hotels.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4 px-2">
                        🏛️ Landmarks
                      </div>
                      {locationData.landmarks.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4 px-2">
                        📍 Other
                      </div>
                      {locationData.other.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>
              
              {formState.pickupLocation === "custom" && (
                <Input
                  placeholder="Enter custom pickup location"
                  value={customPickupLocation}
                  onChange={(e) => {
                    setCustomPickupLocation(e.target.value)
                    setFormState({ ...formState, pickupLocation: e.target.value })
                  }}
                  className="mt-2 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  required
                />
              )}
            </div>

            {/* Return Location */}
            <div className="space-y-3">
              <Label htmlFor="return-location">Return Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Select 
                  value={formState.returnLocation} 
                  onValueChange={handleReturnLocationChange} 
                  required
                >
                  <SelectTrigger 
                    id="return-location" 
                    className="w-full pl-10 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    <SelectValue placeholder="Choose return location" />
                  </SelectTrigger>
                  <SelectContent className="max-h-80 w-full min-w-[280px] sm:min-w-[320px] bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="p-2">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                        🛫 Airports
                      </div>
                      {locationData.airports.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4 px-2">
                        🏙️ Cities
                      </div>
                      {locationData.cities.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4 px-2">
                        🏨 Hotels
                      </div>
                      {locationData.hotels.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4 px-2">
                        🏛️ Landmarks
                      </div>
                      {locationData.landmarks.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                      
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4 px-2">
                        📍 Other
                      </div>
                      {locationData.other.map((location) => (
                        <SelectItem 
                          key={location.value} 
                          value={location.value}
                          className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                        >
                          {location.label}
                        </SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>
              
              {formState.returnLocation === "custom" && (
                <Input
                  placeholder="Enter custom return location"
                  value={customReturnLocation}
                  onChange={(e) => {
                    setCustomReturnLocation(e.target.value)
                    setFormState({ ...formState, returnLocation: e.target.value })
                  }}
                  className="mt-2 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  required
                />
              )}
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
                      "w-full h-11 justify-start text-left font-normal bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200",
                      !formState.pickupDate && "text-gray-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formState.pickupDate ? format(formState.pickupDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Calendar
                    mode="single"
                    selected={formState.pickupDate}
                    onSelect={(date) => setFormState({ ...formState, pickupDate: date })}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="rounded-lg"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Pickup Time */}
            <div className="space-y-2">
              <Label htmlFor="pickup-time">Pickup Time</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Select
                  value={formState.pickupTime}
                  onValueChange={(value) => setFormState({ ...formState, pickupTime: value })}
                  required
                >
                  <SelectTrigger 
                    id="pickup-time" 
                    className="w-full pl-10 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 w-full min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg">
                    {Array.from({ length: 24 }).map((_, hour) =>
                      [0, 30].map((minute) => {
                        const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
                        return (
                          <SelectItem 
                            key={timeString} 
                            value={timeString}
                            className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                          >
                            {timeString}
                          </SelectItem>
                        )
                      })
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
                      "w-full h-11 justify-start text-left font-normal bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200",
                      !formState.returnDate && "text-gray-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formState.returnDate ? format(formState.returnDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Calendar
                    mode="single"
                    selected={formState.returnDate}
                    onSelect={(date) => setFormState({ ...formState, returnDate: date })}
                    initialFocus
                    disabled={(date) => date < (formState.pickupDate || new Date())}
                    className="rounded-lg"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Return Time */}
            <div className="space-y-2">
              <Label htmlFor="return-time">Return Time</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Select
                  value={formState.returnTime}
                  onValueChange={(value) => setFormState({ ...formState, returnTime: value })}
                  required
                >
                  <SelectTrigger 
                    id="return-time" 
                    className="w-full pl-10 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 w-full min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg">
                    {Array.from({ length: 24 }).map((_, hour) =>
                      [0, 30].map((minute) => {
                        const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
                        return (
                          <SelectItem 
                            key={timeString} 
                            value={timeString}
                            className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
                          >
                            {timeString}
                          </SelectItem>
                        )
                      })
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-navy-800">Available Vehicles</h3>

        <Tabs
          defaultValue={activeTab}
          value={activeTab}
          onValueChange={(tab) => {
            setActiveTab(tab)
            setFormState({ ...formState, activeTab: tab })
          }}
          className="w-full"
        >
          <TabsList className="mb-6 grid w-full max-w-md grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
            <TabsTrigger value="suv">SUVs</TabsTrigger>
            <TabsTrigger value="luxury">Luxury</TabsTrigger>
            <TabsTrigger value="vans">Vans</TabsTrigger>
          </TabsList>

          {["all", "economy", "suv", "luxury", "vans"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {getFilteredVehicles(category).map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    isSelected={formState.selectedVehicle === vehicle.id}
                    onClick={() => setFormState({ ...formState, selectedVehicle: vehicle.id })}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          onClick={onNext}
          disabled={!formState.selectedVehicle || !formState.pickupLocation || !formState.returnLocation}
          className="bg-navy-600 hover:bg-navy-700"
        >
          Continue to Options
        </Button>
      </div>
    </div>
  )
}