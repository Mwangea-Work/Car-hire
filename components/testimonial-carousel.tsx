"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Business Traveler",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The service was exceptional. The car was immaculate and the staff were very professional. I will definitely be using Premium Cars again for my business trips.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Tourist",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "We rented an SUV for our family vacation and it was perfect. The booking process was simple and the vehicle was in excellent condition. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Corporate Client",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "We've been using Premium Cars for our corporate transportation needs for over a year now. Their service is reliable and the vehicles are always top-notch.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Event Planner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "I organized transportation for a corporate event and Premium Cars delivered beyond expectations. The chauffeur service was impeccable and our guests were impressed.",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const indices = []
    for (let i = 0; i < itemsPerView; i++) {
      indices.push((currentIndex + i) % testimonials.length)
    }
    setVisibleTestimonials(indices)
  }, [currentIndex, itemsPerView])

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="flex w-full transition-transform duration-300">
          {visibleTestimonials.map((index, i) => (
            <div
              key={testimonials[index].id}
              className="w-full flex-shrink-0 px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <Card className="h-full border-none shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonials[index].image || "/placeholder.svg"}
                        alt={testimonials[index].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-navy-800">{testimonials[index].name}</h4>
                      <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonials[index].rating ? "fill-gold-500 text-gold-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-gray-600">{testimonials[index].content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-md"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-md"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
