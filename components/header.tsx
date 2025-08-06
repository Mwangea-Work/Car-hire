"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Car, Users, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFleetSubmenu, setShowFleetSubmenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
    setShowFleetSubmenu(false)
  }

  const fleetCategories = [
    { name: "Economy", href: "/fleet?category=economy", icon: Car },
    { name: "SUVs", href: "/fleet?category=suv", icon: Users },
    { name: "Luxury", href: "/fleet?category=luxury", icon: Calendar },
    { name: "Vans", href: "/fleet?category=vans", icon: MapPin },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center z-50 relative" onClick={closeMenu}>
              <span
                className={cn(
                  "text-2xl font-bold transition-colors duration-300",
                  isScrolled ? "text-navy-700" : "text-white",
                )}
              >
                Twende<span className="text-gold-500">Rides</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 lg:flex">
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-500",
                  isScrolled ? "text-gray-700" : "text-white",
                )}
              >
                Home
              </Link>

              <div className="relative group">
                <button
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-gold-500",
                    isScrolled ? "text-gray-700" : "text-white",
                  )}
                >
                  Our Fleet <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {fleetCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gold-600 transition-colors"
                      >
                        <category.icon className="mr-3 h-4 w-4" />
                        {category.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        href="/fleet"
                        className="block px-4 py-2 text-sm font-medium text-navy-600 hover:bg-gray-50 hover:text-gold-600 transition-colors"
                      >
                        View All Vehicles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-500",
                  isScrolled ? "text-gray-700" : "text-white",
                )}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-500",
                  isScrolled ? "text-gray-700" : "text-white",
                )}
              >
                Contact
              </Link>
              <Link
                href="/faqs"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-500",
                  isScrolled ? "text-gray-700" : "text-white",
                )}
              >
                FAQs
              </Link>
            </nav>

            <div className="hidden lg:block">
              <Button asChild className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium">
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <button 
              className="lg:hidden z-50 relative" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className={cn("h-6 w-6 transition-colors", isScrolled ? "text-gray-700" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 z-40 lg:hidden">
          {/* Menu content starts below header */}
          <div className="pt-20 px-4">
            <nav className="space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-lg font-medium text-white hover:bg-white/10 hover:text-gold-400 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>

              {/* Fleet Menu with Submenu */}
              <div>
                <button
                  onClick={() => setShowFleetSubmenu(!showFleetSubmenu)}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-white hover:bg-white/10 hover:text-gold-400 rounded-lg transition-colors"
                >
                  Our Fleet
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      showFleetSubmenu && "rotate-180"
                    )} 
                  />
                </button>
                
                {showFleetSubmenu && (
                  <div className="ml-4 mt-2 space-y-1">
                    {fleetCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center px-4 py-2 text-base text-gray-300 hover:bg-white/10 hover:text-gold-400 rounded-lg transition-colors"
                        onClick={closeMenu}
                      >
                        <category.icon className="mr-3 h-4 w-4" />
                        {category.name}
                      </Link>
                    ))}
                    <Link
                      href="/fleet"
                      className="block px-4 py-2 text-base font-medium text-gold-400 hover:bg-white/10 hover:text-gold-300 rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      View All Vehicles
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-4 py-3 text-lg font-medium text-white hover:bg-white/10 hover:text-gold-400 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-3 text-lg font-medium text-white hover:bg-white/10 hover:text-gold-400 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>

              <Link
                href="/faqs"
                className="block px-4 py-3 text-lg font-medium text-white hover:bg-white/10 hover:text-gold-400 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                FAQs
              </Link>

              {/* Mobile Book Now Button */}
              <div className="pt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium"
                >
                  <Link href="/booking" onClick={closeMenu}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}