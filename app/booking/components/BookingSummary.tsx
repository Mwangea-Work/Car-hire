// booking/components/BookingSummary.tsx
import Image from "next/image"
import { format } from "date-fns"
import { Card, CardContent } from "@/components/ui/card"
import { Vehicle } from "./types"

interface BookingSummaryProps {
  vehicle: Vehicle | undefined
  pickupDate: Date | undefined
  returnDate: Date | undefined
  pickupTime: string
  returnTime: string
  pickupLocation: string
  returnLocation: string
  days: number
  basePrice: number
  addOnsPrice: number
  total: number
}

export default function BookingSummary({
  vehicle,
  pickupDate,
  returnDate,
  pickupTime,
  returnTime,
  pickupLocation,
  returnLocation,
  days,
  basePrice,
  addOnsPrice,
  total,
}: BookingSummaryProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="mb-4 text-xl font-semibold text-navy-800">Booking Summary</h3>

        {vehicle && (
          <div className="mb-4">
            <div className="relative h-32 w-full overflow-hidden rounded-md">
              <Image
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.name}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="mt-2 text-lg font-semibold text-navy-800">{vehicle.name}</h4>
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
            <span className="font-medium">{days} days</span>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span>Base Rate:</span>
            <span className="font-medium">${basePrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Add-ons:</span>
            <span className="font-medium">${addOnsPrice}</span>
          </div>
          <div className="mt-2 flex justify-between border-t border-gray-200 pt-2 text-lg font-bold">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}