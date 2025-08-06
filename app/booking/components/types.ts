export interface Vehicle {
    id: string
    name: string
    category: string
    price: number
    seats: number
    transmission: string
    image: string
    features: string[]
  }
  
  export interface AddOns {
    insurance: boolean
    gps: boolean
    childSeat: boolean
    additionalDriver: boolean
  }
  
  export interface BookingFormState {
    pickupDate: Date | undefined
    returnDate: Date | undefined
    pickupTime: string
    returnTime: string
    pickupLocation: string
    returnLocation: string
    selectedVehicle: string
    firstName: string
    lastName: string
    email: string
    phone: string
    addOns: AddOns
    currentStep: number
    activeTab: string
  }