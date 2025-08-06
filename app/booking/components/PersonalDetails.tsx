// booking/components/PersonalDetails.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard } from "lucide-react"
import BookingSummary from "./BookingSummary"
import { BookingFormState } from "./types"
import { vehicles } from "./data"

interface PersonalDetailsProps {
  formState: BookingFormState
  setFormState: React.Dispatch<React.SetStateAction<BookingFormState>>
  onPrev: () => void
  onSubmit: (e: React.FormEvent) => void
}

export default function PersonalDetails({
  formState,
  setFormState,
  onPrev,
  onSubmit,
}: PersonalDetailsProps) {
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
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-6 text-2xl font-bold text-navy-800">Your Details</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      value={formState.firstName}
                      onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      value={formState.lastName}
                      onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Label htmlFor="payment">Payment Method</Label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="card" name="payment" title="payment" defaultChecked />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4" /> Credit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="paypal" name="payment" title="payment" />
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
          <BookingSummary
            vehicle={vehicles.find((v) => v.id === formState.selectedVehicle)}
            pickupDate={formState.pickupDate}
            returnDate={formState.returnDate}
            pickupTime={formState.pickupTime}
            returnTime={formState.returnTime}
            pickupLocation={formState.pickupLocation}
            returnLocation={formState.returnLocation}
            days={calculateDays()}
            basePrice={basePrice}
            addOnsPrice={addOnsPrice}
            total={total}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onPrev}>
          Back
        </Button>
        <Button
          onClick={onSubmit}
          className="bg-navy-600 hover:bg-navy-700"
          disabled={
            !formState.firstName ||
            !formState.lastName ||
            !formState.email ||
            !formState.phone
          }
        >
          Complete Booking
        </Button>
      </div>
    </div>
  )
}

