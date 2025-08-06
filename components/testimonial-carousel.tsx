"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Kamau Wanjiku",
    role: "Business Traveler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "The service was exceptional. The car was immaculate and the staff were very professional. I will definitely be using Premium Cars again for my business trips.",
    rating: 5,
  },
  {
    id: 2,
    name: "Amina Ochieng",
    role: "Tourist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "We rented an SUV for our family vacation and it was perfect. The booking process was simple and the vehicle was in excellent condition. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Kiprop Muthoni",
    role: "Corporate Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "We've been using Premium Cars for our corporate transportation needs for over a year now. Their service is reliable and the vehicles are always top-notch.",
    rating: 4,
  },
  {
    id: 4,
    name: "Wanjiru Odhiambo",
    role: "Event Planner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "I organized transportation for a corporate event and Premium Cars delivered beyond expectations. The chauffeur service was impeccable and our guests were impressed.",
    rating: 5,
  },
  {
    id: 5,
    name: "Otieno Akinyi",
    role: "Frequent Traveler",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "As someone who travels frequently for work, I appreciate the reliability and comfort that Premium Cars provides. Their fleet is always well-maintained.",
    rating: 5,
  },
  {
    id: 6,
    name: "Njeri Kipchoge",
    role: "Family Vacationer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    content: "Perfect for our family trips! The spacious vehicles and friendly service made our journey comfortable and enjoyable. We'll definitely book again.",
    rating: 4,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(3)

  // Clone testimonials to create infinite loop effect
  const extendedTestimonials = [...testimonials, ...testimonials]

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

  const next = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      // When we reach the original length, reset to 0 without animation
      if (nextIndex >= testimonials.length) {
        setTimeout(() => {
          setCurrentIndex(0)
          setIsTransitioning(false)
        }, 500)
        return nextIndex
      }
      return nextIndex
    })
    
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const prev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1
      // When we go below 0, jump to the cloned section
      if (nextIndex < 0) {
        setTimeout(() => {
          setCurrentIndex(testimonials.length - 1)
          setIsTransitioning(false)
        }, 500)
        return nextIndex + testimonials.length
      }
      return nextIndex
    })
    
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [next])

  // Get the visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % extendedTestimonials.length
      visible.push(extendedTestimonials[index])
    }
    return visible
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <div className="relative max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="flex overflow-hidden">
        <div 
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-full flex-shrink-0 px-4"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gray-200">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-navy-800 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "fill-gold-500 text-gold-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-gray-600 leading-relaxed">{testimonial.content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        onClick={prev}
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        onClick={next}
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex % testimonials.length === index
                ? "bg-navy-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setIsTransitioning(true)
              setCurrentIndex(index)
              setTimeout(() => setIsTransitioning(false), 500)
            }}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}