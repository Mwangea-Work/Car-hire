"use client"

import { X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useState, useEffect } from "react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [notificationDismissed, setNotificationDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
        // Show notification after widget appears with a delay
        if (!notificationDismissed) {
          setTimeout(() => setShowNotification(true), 2000)
        }
      } else {
        setIsVisible(false)
        setShowNotification(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [notificationDismissed])

  // Auto-hide notification after 10 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false)
        setNotificationDismissed(true)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  const handleNotificationClose = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowNotification(false)
    setNotificationDismissed(true)
  }

  const handleWhatsAppClick = () => {
    setShowNotification(false)
    setNotificationDismissed(true)
    // Open WhatsApp with pre-filled message
    window.open('https://wa.me/1234567890?text=Hi! I saw your notification and I\'m interested in your services.', '_blank')
  }

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
      
      {/* Notification Bubble - Increased width */}
      {showNotification && (
        <div className="absolute bottom-16 right-0 mb-2 animate-in slide-in-from-bottom-2 fade-in duration-300">
          <div className="relative bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 sm:w-72">
            {/* Close button */}
            <button
              onClick={handleNotificationClose}
              className="absolute -top-2 -right-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            
            {/* Notification content */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">Need help?</p>
                <p className="text-xs text-gray-600 mt-1">
                  Hi there!<br />
                  Chat with us now for instant support!
                </p>
              </div>
            </div>
            
            {/* Notification arrow */}
            <div className="absolute bottom-0 right-6 transform translate-y-1">
              <div className="w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] active:bg-[#075E54] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
          !notificationDismissed && !showNotification ? 'animate-bounce' : ''
        }`}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp icon */}
        <FaWhatsapp className={`h-6 w-6 sm:h-7 sm:w-7 text-white z-10 transition-transform duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`} />
        
        {/* Notification badge */}
        {!notificationDismissed && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center font-bold">
            1
          </div>
        )}

        {/* Hover tooltip */}
        {isHovered && (
          <div className="absolute bottom-14 right-0 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg whitespace-nowrap animate-in fade-in zoom-in-95 duration-200">
            Chat with us!
            <div className="absolute top-full right-4 transform -translate-x-1/2">
              <div className="w-2 h-2 bg-gray-800 transform rotate-45"></div>
            </div>
          </div>
        )}
      </button>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-8px);
          }
          70% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  )
}