"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function BookingForm() {
  const router = useRouter()
  const [pickupDate, setPickupDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [pickupTime, setPickupTime] = useState("")
  const [returnTime, setReturnTime] = useState("")
  const [pickupLocation, setPickupLocation] = useState("")
  const [returnLocation, setReturnLocation] = useState("")
  const [carType, setCarType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Build query parameters
    const params = new URLSearchParams()
    if (pickupDate) params.append("pickupDate", pickupDate.toISOString())
    if (returnDate) params.append("returnDate", returnDate.toISOString())
    if (pickupTime) params.append("pickupTime", pickupTime)
    if (returnTime) params.append("returnTime", returnTime)
    if (pickupLocation) params.append("pickupLocation", pickupLocation)
    if (returnLocation) params.append("returnLocation", returnLocation)
    if (carType) params.append("carType", carType)
    
    // Navigate to booking page with parameters
    router.push(`/booking?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                !pickupDate && "text-muted-foreground"
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
              {Array.from({ length: 24 }).map((_, hour) => (
                [0, 30].map((minute) => {
                  const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
                  return (
                    <SelectItem key={timeString} value={timeString}>
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
      <div className="space-y-2">
        <Label htmlFor="return-date">Return Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="return-date"
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !returnDate && "text-muted-foreground"
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
              {Array.from({ length: 24 }).map((_, hour) => (
                [0, 30].map((minute) => {
                  const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
                  return (
                    <SelectItem key={timeString} value={timeString}>
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
      <div className="space-y-2">
        <Label htmlFor="car-type">Car Type</Label>
        <Select value={carType} onValueChange={setCarType} required>
          <SelectTrigger id="car-type">
            <SelectValue placeholder="Select car type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="economy">Economy</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="luxury">Luxury</SelectItem>
            <SelectItem value="van">Van</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Search Button */}
      <div className="flex items-end md:col-span-2 lg:col-span-1">
        <Button type="submit" className="w-full bg-navy-600 hover:bg-navy-700">
          Search Vehicles
        </Button>
      </div>
    </form>
  )
}
