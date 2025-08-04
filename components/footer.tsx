import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Car,
  Shield,
  Award,
  Users,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-6">
                <span className="text-3xl font-bold">
                  Premium<span className="text-gold-500">Cars</span>
                </span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for premium car rental services since 2010. We provide exceptional vehicles and
                service for all your transportation needs.
              </p>

              {/* Key Features */}
              <div className="space-y-3 mb-8">
                {[
                  { icon: Shield, text: "Comprehensive Insurance" },
                  { icon: Award, text: "Premium Fleet" },
                  { icon: Users, text: "24/7 Support" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <feature.icon className="h-4 w-4 mr-3 text-gold-500" />
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="group h-10 w-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-navy-900 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gold-400">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "Our Fleet", href: "/fleet" },
                  { name: "About Us", href: "/about" },
                  { name: "Contact", href: "/contact" },
                  { name: "FAQs", href: "/faqs" },
                  { name: "Terms & Conditions", href: "/terms" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gold-400">Our Services</h3>
              <ul className="space-y-4">
                {[
                  { name: "Self-drive Rentals", href: "/fleet" },
                  { name: "Chauffeur Services", href: "/contact" },
                  { name: "Airport Pickup", href: "/contact" },
                  { name: "Long-term Rentals", href: "/contact" },
                  { name: "Corporate Solutions", href: "/contact" },
                  { name: "Wedding Cars", href: "/contact" },
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group"
                    >
                      <Car className="h-4 w-4 mr-3 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info & Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gold-400">Get In Touch</h3>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-gold-500/20 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      123 Premium Street
                      <br />
                      Business District
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-gold-500/20 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-gold-500/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">info@premiumcars.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-gold-500/20 flex items-center justify-center mr-4 mt-1">
                    <Clock className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Mon - Fri: 8:00 AM - 8:00 PM
                      <br />
                      Sat - Sun: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-navy-800/50 rounded-xl p-6 backdrop-blur-sm border border-navy-700/50">
                <h4 className="text-lg font-semibold mb-3 text-gold-400">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe to our newsletter for exclusive offers and updates.
                </p>
                <div className="flex flex-col space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-navy-700/50 border-navy-600 text-white placeholder:text-gray-400 focus:border-gold-500"
                  />
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">© 2024 PremiumCars. All rights reserved.</p>
                <div className="flex items-center space-x-4 text-sm">
                  <Link href="/terms" className="text-gray-400 hover:text-gold-400 transition-colors">
                    Privacy Policy
                  </Link>
                  <span className="text-gray-600">•</span>
                  <Link href="/terms" className="text-gray-400 hover:text-gold-400 transition-colors">
                    Terms of Service
                  </Link>
                  <span className="text-gray-600">•</span>
                  <Link href="/contact" className="text-gray-400 hover:text-gold-400 transition-colors">
                    Support
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="border-gold-500/30 text-gold-400 bg-gold-500/10">
                  Premium Service
                </Badge>
                <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
                  24/7 Support
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
