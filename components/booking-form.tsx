"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock, MapPin } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

// Location data with categories
const locationData = {
  airports: [
    { value: "jomo-kenyatta", label: "Jomo Kenyatta International Airport (NBO)" },
    { value: "mombasa-airport", label: "Moi International Airport (MBA)" },
    { value: "kisumu-airport", label: "Kisumu International Airport (KIS)" },
    { value: "eldoret-airport", label: "Eldoret International Airport (EDL)" },
  ],
  cities: [
    { value: "nairobi", label: "Nairobi" },
    { value: "mombasa", label: "Mombasa" },
    { value: "kisumu", label: "Kisumu" },
    { value: "nakuru", label: "Nakuru" },
    { value: "eldoret", label: "Eldoret" },
    { value: "thika", label: "Thika" },
    { value: "kakamega", label: "Kakamega" },
    { value: "nanyuki", label: "Nanyuki" },
  ],
  hotels: [
    { value: "safari-park", label: "Safari Park Hotel, Nairobi" },
    { value: "serena-nairobi", label: "Nairobi Serena Hotel" },
    { value: "fairmont-nairobi", label: "Fairmont The Norfolk, Nairobi" },
    { value: "sarova-stanley", label: "Sarova Stanley, Nairobi" },
    { value: "serena-mombasa", label: "Mombasa Serena Beach Resort" },
    { value: "voyager-mombasa", label: "Voyager Beach Resort, Mombasa" },
  ],
  landmarks: [
    { value: "kenyatta-conference", label: "Kenyatta International Convention Centre" },
    { value: "westlands", label: "Westlands, Nairobi" },
    { value: "kilimani", label: "Kilimani, Nairobi" },
    { value: "lavington", label: "Lavington, Nairobi" },
    { value: "karen", label: "Karen, Nairobi" },
    { value: "nyali", label: "Nyali, Mombasa" },
    { value: "bamburi", label: "Bamburi, Mombasa" },
  ],
  other: [
    { value: "custom", label: "Custom Location (Specify)" },
  ]
}

export default function BookingForm() {
  const router = useRouter()
  const [pickupDate, setPickupDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [pickupTime, setPickupTime] = useState("")
  const [returnTime, setReturnTime] = useState("")
  const [pickupLocation, setPickupLocation] = useState("")
  const [returnLocation, setReturnLocation] = useState("")
  const [customPickupLocation, setCustomPickupLocation] = useState("")
  const [customReturnLocation, setCustomReturnLocation] = useState("")
  const [carType, setCarType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Build query parameters
    const params = new URLSearchParams()
    if (pickupDate) params.append("pickupDate", pickupDate.toISOString())
    if (returnDate) params.append("returnDate", returnDate.toISOString())
    if (pickupTime) params.append("pickupTime", pickupTime)
    if (returnTime) params.append("returnTime", returnTime)
    
    // Handle location data
    const finalPickupLocation = pickupLocation === "custom" ? customPickupLocation : pickupLocation
    const finalReturnLocation = returnLocation === "custom" ? customReturnLocation : returnLocation
    
    if (finalPickupLocation) params.append("pickupLocation", finalPickupLocation)
    if (finalReturnLocation) params.append("returnLocation", finalReturnLocation)
    if (carType) params.append("carType", carType)
    
    // Navigate to booking page with parameters
    router.push(`/booking?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Pickup Location */}
      <div className="space-y-3">
        <Label htmlFor="pickup-location" className="text-sm font-medium text-gray-700">
          Pickup Location
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Select value={pickupLocation} onValueChange={setPickupLocation} required>
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
        
        {/* Custom pickup location input */}
        {pickupLocation === "custom" && (
          <Input
            placeholder="Enter custom pickup location"
            value={customPickupLocation}
            onChange={(e) => setCustomPickupLocation(e.target.value)}
            className="mt-2 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            required
          />
        )}
      </div>

      {/* Return Location */}
      <div className="space-y-3">
        <Label htmlFor="return-location" className="text-sm font-medium text-gray-700">
          Return Location
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Select value={returnLocation} onValueChange={setReturnLocation} required>
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
        
        {/* Custom return location input */}
        {returnLocation === "custom" && (
          <Input
            placeholder="Enter custom return location"
            value={customReturnLocation}
            onChange={(e) => setCustomReturnLocation(e.target.value)}
            className="mt-2 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            required
          />
        )}
      </div>

      {/* Pickup Date */}
      <div className="space-y-3">
        <Label htmlFor="pickup-date" className="text-sm font-medium text-gray-700">
          Pickup Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="pickup-date"
              variant="outline"
              className={cn(
                "w-full h-11 justify-start text-left font-normal bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200",
                !pickupDate && "text-gray-500"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {pickupDate ? format(pickupDate, "PPP") : "Choose pickup date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
            <Calendar
              mode="single"
              selected={pickupDate}
              onSelect={setPickupDate}
              initialFocus
              disabled={(date) => date < new Date()}
              className="rounded-lg"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Pickup Time */}
      <div className="space-y-3">
        <Label htmlFor="pickup-time" className="text-sm font-medium text-gray-700">
          Pickup Time
        </Label>
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Select value={pickupTime} onValueChange={setPickupTime} required>
            <SelectTrigger 
              id="pickup-time" 
              className="w-full pl-10 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            >
              <SelectValue placeholder="Choose pickup time" />
            </SelectTrigger>
            <SelectContent className="max-h-60 w-full min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg">
              {Array.from({ length: 24 }).map((_, hour) => (
                [0, 30].map((minute) => {
                  const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
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
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Return Date */}
      <div className="space-y-3">
        <Label htmlFor="return-date" className="text-sm font-medium text-gray-700">
          Return Date
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="return-date"
              variant="outline"
              className={cn(
                "w-full h-11 justify-start text-left font-normal bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200",
                !returnDate && "text-gray-500"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {returnDate ? format(returnDate, "PPP") : "Choose return date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg">
            <Calendar
              mode="single"
              selected={returnDate}
              onSelect={setReturnDate}
              initialFocus
              disabled={(date) => date < (pickupDate || new Date())}
              className="rounded-lg"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Return Time */}
      <div className="space-y-3">
        <Label htmlFor="return-time" className="text-sm font-medium text-gray-700">
          Return Time
        </Label>
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Select value={returnTime} onValueChange={setReturnTime} required>
            <SelectTrigger 
              id="return-time" 
              className="w-full pl-10 h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            >
              <SelectValue placeholder="Choose return time" />
            </SelectTrigger>
            <SelectContent className="max-h-60 w-full min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg">
              {Array.from({ length: 24 }).map((_, hour) => (
                [0, 30].map((minute) => {
                  const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
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
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Car Type */}
      <div className="space-y-3">
        <Label htmlFor="car-type" className="text-sm font-medium text-gray-700">
          Car Type
        </Label>
        <Select value={carType} onValueChange={setCarType} required>
          <SelectTrigger 
            id="car-type"
            className="w-full h-11 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
          >
            <SelectValue placeholder="Choose car type" />
          </SelectTrigger>
          <SelectContent className="w-full min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg">
            <SelectItem 
              value="economy"
              className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
            >
              Economy
            </SelectItem>
            <SelectItem 
              value="suv"
              className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
            >
              SUV
            </SelectItem>
            <SelectItem 
              value="luxury"
              className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
            >
              Luxury
            </SelectItem>
            <SelectItem 
              value="van"
              className="px-3 py-2.5 rounded-md hover:bg-gray-50 focus:bg-gray-50 cursor-pointer transition-colors"
            >
              Van
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Search Button */}
      <div className="flex items-end md:col-span-2 lg:col-span-1">
        <Button 
          type="submit" 
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Search Vehicles
        </Button>
      </div>
    </form>
  )
}
