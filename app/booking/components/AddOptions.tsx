// booking/components/AddOptions.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Shield, CreditCard, Clock, Car } from "lucide-react"
import BookingSummary from "./BookingSummary"
import { BookingFormState } from "./types"
import { vehicles } from "./data"

interface AddOptionsProps {
  formState: BookingFormState
  setFormState: React.Dispatch<React.SetStateAction<BookingFormState>>
  onPrev: () => void
  onNext: () => void
}

export default function AddOptions({ formState, setFormState, onPrev, onNext }: AddOptionsProps) {
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
                    checked={formState.addOns.insurance}
                    onCheckedChange={(checked) =>
                      setFormState({
                        ...formState,
                        addOns: { ...formState.addOns, insurance: checked as boolean },
                      })
                    }
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
                    checked={formState.addOns.gps}
                    onCheckedChange={(checked) =>
                      setFormState({
                        ...formState,
                        addOns: { ...formState.addOns, gps: checked as boolean },
                      })
                    }
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
                    checked={formState.addOns.childSeat}
                    onCheckedChange={(checked) =>
                      setFormState({
                        ...formState,
                        addOns: { ...formState.addOns, childSeat: checked as boolean },
                      })
                    }
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
                    checked={formState.addOns.additionalDriver}
                    onCheckedChange={(checked) =>
                      setFormState({
                        ...formState,
                        addOns: { ...formState.addOns, additionalDriver: checked as boolean },
                      })
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="additionalDriver" className="text-base font-medium">
                      Additional Driver ($20/day)
                    </Label>
                    <p className="text-sm text-gray-500">
                      Add an extra driver to your rental agreement.
                    </p>
                  </div>
                </div>
              </div>
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
        <Button onClick={onNext} className="bg-navy-600 hover:bg-navy-700">
          Continue to Personal Details
        </Button>
      </div>
    </div>
  )
}
