"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Car, Users, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  const closeMenu = () => setIsOpen(false)

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
            <Link href="/" className="flex items-center z-50 relative">
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
            <button className="lg:hidden z-50 relative" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className={cn("h-6 w-6 transition-colors", isScrolled ? "text-gray-700" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-navy-900/95 backdrop-blur-md" onClick={closeMenu} />

        {/* Menu Content */}
        <div className="relative flex min-h-screen flex-col justify-center px-6">
          <nav className="space-y-8 text-center">
            <Link
              href="/"
              className="block text-2xl font-medium text-white hover:text-gold-400 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>

            <div className="space-y-4">
              <div className="text-2xl font-medium text-white mb-4">Our Fleet</div>
              <div className="space-y-3 pl-4">
                {fleetCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="flex items-center justify-center text-lg text-gray-300 hover:text-gold-400 transition-colors"
                    onClick={closeMenu}
                  >
                    <category.icon className="mr-3 h-5 w-5" />
                    {category.name}
                  </Link>
                ))}
                <Link
                  href="/fleet"
                  className="block text-lg font-medium text-gold-400 hover:text-gold-300 transition-colors"
                  onClick={closeMenu}
                >
                  View All Vehicles
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="block text-2xl font-medium text-white hover:text-gold-400 transition-colors"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-2xl font-medium text-white hover:text-gold-400 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/faqs"
              className="block text-2xl font-medium text-white hover:text-gold-400 transition-colors"
              onClick={closeMenu}
            >
              FAQs
            </Link>

            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium px-8"
                onClick={closeMenu}
              >
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
