import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                Twende<span className="text-gold-500">Rides</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your trusted partner for premium car rental services since 2024. We provide exceptional vehicles and
              service for all your transportation needs.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="h-8 w-8 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-gray-300 hover:text-navy-900" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Our Fleet", href: "/fleet" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "FAQs", href: "/faqs" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Self-drive Rentals", href: "/fleet" },
                { name: "Chauffeur Services", href: "/contact" },
                { name: "Airport Pickup", href: "/contact" },
                { name: "Long-term Rentals", href: "/contact" },
                { name: "Corporate Solutions", href: "/contact" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-gold-500 mr-3 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  123 Premium Street<br />
                  Business District<br />
                  City, State 12345
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gold-500 mr-3" />
                <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gold-500 mr-3" />
                <p className="text-gray-300 text-sm">info@twenderides.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 mt-8 pt-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 TwendeRides. All rights reserved.</p>
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="text-gray-400 hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
