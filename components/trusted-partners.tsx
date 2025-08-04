import Image from "next/image"

export default function TrustedPartners() {
  const partners = [
    { name: "Company 1", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 2", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 3", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 4", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 5", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Company 6", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {partners.map((partner, index) => (
        <div key={index} className="relative h-12 w-32 grayscale transition-all duration-300 hover:grayscale-0">
          <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
        </div>
      ))}
    </div>
  )
}
