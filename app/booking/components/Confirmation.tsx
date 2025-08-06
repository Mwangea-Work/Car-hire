// booking/components/Confirmation.tsx
import Link from "next/link"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { BookingFormState } from "./types"
import { vehicles } from "./data"

interface ConfirmationProps {
  formState: BookingFormState
}

export default function Confirmation({ formState }: ConfirmationProps) {
  const calculateDays = () => {
    if (!formState.pickupDate || !formState.returnDate) return 1
    const diffTime = Math.abs(formState.returnDate.getTime() - formState.pickupDate.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1
  }

  const calculateTotal = () => {
    const selectedVehicleData = vehicles.find((v) => v.id === formState.selectedVehicle)
    const basePrice = selectedVehicleData ? selectedVehicleData.price * calculateDays() : 0

    let addOnsPrice = 0
    if (formState.addOns.insurance) addOnsPrice += 15 * calculateDays()
    if (formState.addOns.gps) addOnsPrice += 5 * calculateDays()
    if (formState.addOns.childSeat) addOnsPrice += 10 * calculateDays()
    if (formState.addOns.additionalDriver) addOnsPrice += 20 * calculateDays()

    return {
      basePrice,
      addOnsPrice,
      total: basePrice + addOnsPrice,
    }
  }

  const { basePrice, addOnsPrice, total } = calculateTotal()

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-8 flex justify-center">
        <div className="rounded-full bg-green-100 p-4">
          <Shield className="h-16 w-16 text-green-600" />
        </div>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-navy-800">Booking Confirmed!</h2>
      <p className="mb-6 text-lg text-gray-600">
        Thank you for your booking. We have sent a confirmation email to {formState.email}.
      </p>

      <Card className="mb-8">
        <CardContent className="p-6 text-left">
          <h3 className="mb-4 text-xl font-semibold text-navy-800">Booking Details</h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold">Vehicle</h4>
              <p>{vehicles.find((v) => v.id === formState.selectedVehicle)?.name}</p>

              <h4 className="mb-2 mt-4 font-semibold">Pickup</h4>
              <p>{formState.pickupLocation}</p>
              <p>
                {formState.pickupDate ? format(formState.pickupDate, "MMMM d, yyyy") : ""} at{" "}
                {formState.pickupTime}
              </p>

              <h4 className="mb-2 mt-4 font-semibold">Return</h4>
              <p>{formState.returnLocation}</p>
              <p>
                {formState.returnDate ? format(formState.returnDate, "MMMM d, yyyy") : ""} at{" "}
                {formState.returnTime}
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold">Customer</h4>
              <p>
                {formState.firstName} {formState.lastName}
              </p>
              <p>{formState.email}</p>
              <p>{formState.phone}</p>

              <h4 className="mb-2 mt-4 font-semibold">Payment</h4>
              <p>Total: ${total}</p>
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
  )
}
