import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gold-400 mb-2">PremiumCars</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full"></div>
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Your trusted partner for premium car rental services. We deliver exceptional experiences with our luxury
              fleet and professional service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="group h-10 w-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-300 group-hover:text-navy-900 transition-colors" />
              </a>
              <a
                href="#"
                className="group h-10 w-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-navy-900 transition-colors" />
              </a>
              <a
                href="#"
                className="group h-10 w-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-300 group-hover:text-navy-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/fleet", label: "Our Fleet" },
                { href: "/booking", label: "Book Now" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/faqs", label: "FAQs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-gold-400 transition-colors duration-200"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Self-drive Rentals",
                "Chauffeur Services",
                "Airport Pickup",
                "Long-Term Rentals",
                "Corporate Accounts",
                "Event Transportation",
              ].map((service) => (
                <li key={service} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 flex-shrink-0"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="h-10 w-10 rounded-lg bg-navy-800 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-gray-300 group-hover:text-navy-900 transition-colors" />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    123 Business Avenue
                    <br />
                    City Center, Country
                  </p>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="h-10 w-10 rounded-lg bg-navy-800 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-gray-300 group-hover:text-navy-900 transition-colors" />
                </div>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-gold-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center group">
                <div className="h-10 w-10 rounded-lg bg-navy-800 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-gray-300 group-hover:text-navy-900 transition-colors" />
                </div>
                <a href="mailto:info@premiumcars.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                  info@premiumcars.com
                </a>
              </li>
              <li className="flex items-start group">
                <div className="h-10 w-10 rounded-lg bg-navy-800 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
                  <Clock className="h-5 w-5 text-gray-300 group-hover:text-navy-900 transition-colors" />
                </div>
                <div className="text-gray-300">
                  <p>Mon-Fri: 8am-8pm</p>
                  <p>Sat-Sun: 9am-6pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-navy-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for exclusive offers and updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:min-w-96">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} PremiumCars. All rights reserved. Crafted with excellence.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
