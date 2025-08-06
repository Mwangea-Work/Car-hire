import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Users } from "lucide-react"
import { Vehicle } from "./types"

interface VehicleCardProps {
  vehicle: Vehicle
  isSelected: boolean
  onClick: () => void
}

export default function VehicleCard({ vehicle, isSelected, onClick }: VehicleCardProps) {
  return (
    <Card
      className={`cursor-pointer overflow-hidden border-2 transition-all duration-200 group ${
        isSelected ? "border-navy-600" : "border-transparent hover:border-navy-400"
      }`}
      onClick={onClick}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute left-3 top-3 bg-navy-600/90 backdrop-blur-sm capitalize">
          {vehicle.category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-lg font-semibold text-navy-800">{vehicle.name}</h4>
          <p className="font-bold text-navy-600">${vehicle.price}/day</p>
        </div>
        <div className="mb-3 flex items-center text-sm text-gray-600">
          <Car className="mr-1 h-4 w-4" />
          <span className="mr-3">{vehicle.transmission}</span>
          <Users className="mr-1 h-4 w-4" />
          <span>{vehicle.seats} Seats</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {vehicle.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}