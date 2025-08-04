import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">PremiumCars</h3>
            <p className="mb-4 text-gray-300">
              Your trusted partner for premium car rental services. We offer a wide range of vehicles for all your
              needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-gray-300 hover:text-white">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Self-drive Rentals</li>
              <li className="text-gray-300">Chauffeur Services</li>
              <li className="text-gray-300">Airport Pickup</li>
              <li className="text-gray-300">Long-Term Rentals</li>
              <li className="text-gray-300">Corporate Accounts</li>
              <li className="text-gray-300">Event Transportation</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">123 Business Avenue, City Center, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-300" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-300" />
                <a href="mailto:info@premiumcars.com" className="text-gray-300 hover:text-white">
                  info@premiumcars.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">
                  Mon-Fri: 8am-8pm
                  <br />
                  Sat-Sun: 9am-6pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} PremiumCars. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
