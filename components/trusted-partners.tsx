import Image from "next/image"

export default function TrustedPartners() {
  const partners = [
    { name: "Sarova Hotels", logo: "/sarova-hotels.svg?height=60&width=120" },
    { name: "Kenya Railways", logo: "/logo_krc.png?height=60&width=120" },
    { name: "KAA", logo: "/kaa_logo.jpg?height=60&width=120" },
    { name: "Bonfire Adventures", logo: "/bonfire.png?height=60&width=120" },
    { name: "AMREF", logo: "/amref.webp?height=60&width=120" },
    { name: "Jambojet", logo: "/jambojet.svg?height=60&width=120" },
    { name: "KPLC", logo: "/kplc.png?height=60&width=120" },
    { name: "Pollmans Tours", logo: "/POLLMANS_logo.jpg?height=60&width=120" },
    { name: "Sarova Hotels", logo: "/sarova-hotels.svg?height=60&width=120" },
    { name: "Kenya Railways", logo: "/logo_krc.png?height=60&width=120" },
    { name: "KAA", logo: "/kaa_logo.jpg?height=60&width=120" },
    { name: "Bonfire Adventures", logo: "/bonfire.png?height=60&width=120" },
    { name: "AMREF", logo: "/amref.webp?height=60&width=120" },
    { name: "Jambojet", logo: "/jambojet.svg?height=60&width=120" },
    { name: "KPLC", logo: "/kplc.png?height=60&width=120" },
    { name: "Pollmans Tours", logo: "/POLLMANS_logo.jpg?height=60&width=120" },
  ]

  return (
    <div className="relative overflow-hidden py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
       

        {/* Logo Marquee - Fixed to prevent overlapping */}
        <div className="relative overflow-x-hidden">
          <div className="flex animate-infinite-scroll">
            {/* First set of partners */}
            <div className="flex items-center min-w-full px-4">
              <div className="flex items-center gap-8 md:gap-12 flex-shrink-0">
                {partners.map((partner, index) => (
                  <div 
                    key={`first-${index}`} 
                    className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center"
                  >
                    <Image 
                      src={partner.logo || "/placeholder.svg"} 
                      alt={partner.name} 
                      width={128} 
                      height={64} 
                      className="object-contain w-full h-full  hover:grayscale-0 transition-all duration-300" 
                      priority={index < 4}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center min-w-full px-4">
              <div className="flex items-center gap-8 md:gap-12 flex-shrink-0">
                {partners.map((partner, index) => (
                  <div 
                    key={`second-${index}`} 
                    className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center"
                  >
                    <Image 
                      src={partner.logo || "/placeholder.svg"} 
                      alt={partner.name} 
                      width={128} 
                      height={64} 
                      className="object-contain w-full h-full  hover:grayscale-0 transition-all duration-300" 
                      priority={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-infinite-scroll {
          display: flex;
          width: 200%;
          animation: scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-infinite-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  )
}