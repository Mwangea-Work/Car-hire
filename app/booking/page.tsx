"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import BookingHeader from "./components/BookingHeader"
import AddOptions from "./components/AddOptions"
import PersonalDetails from "./components/PersonalDetails"
import Confirmation from "./components/Confirmation"
import { BookingFormState, Vehicle } from "./components/types"
import VehicleSelection from "./components/VehicleSelection"

export default function BookingPage() {
  const searchParams = useSearchParams()

  // Initial form state
  const initialFormState: BookingFormState = {
    pickupDate: new Date(),
    returnDate: addDays(new Date(), 3),
    pickupTime: "10:00",
    returnTime: "10:00",
    pickupLocation: "",
    returnLocation: "",
    selectedVehicle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addOns: {
      insurance: true,
      gps: false,
      childSeat: false,
      additionalDriver: false,
    },
    currentStep: 1,
    activeTab: "all"
  }

  const [formState, setFormState] = useState<BookingFormState>(initialFormState)

  // Update form state from URL params
  useEffect(() => {
    if (searchParams) {
      const updates: Partial<BookingFormState> = {}
      const vehicle = searchParams.get("vehicle")
      const pLocation = searchParams.get("pickupLocation")
      const rLocation = searchParams.get("returnLocation")
      const pDate = searchParams.get("pickupDate")
      const rDate = searchParams.get("returnDate")
      const pTime = searchParams.get("pickupTime")
      const rTime = searchParams.get("returnTime")
      const category = searchParams.get("category")

      if (vehicle) updates.selectedVehicle = vehicle
      if (pLocation) updates.pickupLocation = pLocation
      if (rLocation) updates.returnLocation = rLocation
      if (pDate) updates.pickupDate = new Date(pDate)
      if (rDate) updates.returnDate = new Date(rDate)
      if (pTime) updates.pickupTime = pTime
      if (rTime) updates.returnTime = rTime
      if (category) updates.activeTab = category

      setFormState(prev => ({ ...prev, ...updates }))
    }
  }, [searchParams])

  const handleNextStep = () => {
    setFormState(prev => ({
      ...prev,
      currentStep: prev.currentStep + 1
    }))
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setFormState(prev => ({
      ...prev,
      currentStep: prev.currentStep - 1
    }))
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState(prev => ({
      ...prev,
      currentStep: 4
    }))
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen">
      <BookingHeader currentStep={formState.currentStep} />
      
      <div className="container mx-auto px-4 py-12">
        {formState.currentStep === 1 && (
          <VehicleSelection
            formState={formState}
            setFormState={setFormState}
            onNext={handleNextStep}
          />
        )}
        
        {formState.currentStep === 2 && (
          <AddOptions
            formState={formState}
            setFormState={setFormState}
            onPrev={handlePrevStep}
            onNext={handleNextStep}
          />
        )}
        
        {formState.currentStep === 3 && (
          <PersonalDetails
            formState={formState}
            setFormState={setFormState}
            onPrev={handlePrevStep}
            onSubmit={handleSubmit}
          />
        )}
        
        {formState.currentStep === 4 && (
          <Confirmation formState={formState} />
        )}
      </div>
    </div>
  )
}

// Utility function
function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}