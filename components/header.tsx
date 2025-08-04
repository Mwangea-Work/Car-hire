"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 shadow backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-navy-700 dark:text-white">
              Premium<span className="text-gold-500">Cars</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            <Link href="/" className="text-sm font-medium text-gray-700 transition-colors hover:text-navy-600">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-navy-600">
                Our Fleet <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/fleet/economy" className="w-full">
                    Economy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/fleet/suv" className="w-full">
                    SUVs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/fleet/luxury" className="w-full">
                    Luxury
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/fleet/vans" className="w-full">
                    Vans
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="text-sm font-medium text-gray-700 transition-colors hover:text-navy-600">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 transition-colors hover:text-navy-600">
              Contact
            </Link>
            <Link href="/faqs" className="text-sm font-medium text-gray-700 transition-colors hover:text-navy-600">
              FAQs
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="bg-navy-600 hover:bg-navy-700">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 flex flex-col space-y-4 pb-4 lg:hidden">
            <Link href="/" className="text-sm font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <div className="space-y-2 pl-4">
              <p className="text-sm font-medium text-gray-700">Our Fleet</p>
              <Link href="/fleet/economy" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>
                Economy
              </Link>
              <Link href="/fleet/suv" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>
                SUVs
              </Link>
              <Link href="/fleet/luxury" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>
                Luxury
              </Link>
              <Link href="/fleet/vans" className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>
                Vans
              </Link>
            </div>
            <Link href="/about" className="text-sm font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/faqs" className="text-sm font-medium text-gray-700" onClick={() => setIsOpen(false)}>
              FAQs
            </Link>
            <Button asChild className="w-full bg-navy-600 hover:bg-navy-700" onClick={() => setIsOpen(false)}>
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
