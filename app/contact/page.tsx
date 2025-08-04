"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
            <p className="mb-6 text-lg text-gray-300">
              Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels
              below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-navy-100 p-3">
                  <Phone className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-800">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+1234567890" className="hover:text-navy-600">
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+1234567891" className="hover:text-navy-600">
                    +1 (234) 567-891
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-navy-100 p-3">
                  <Mail className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-800">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@premiumcars.com" className="hover:text-navy-600">
                    info@premiumcars.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:support@premiumcars.com" className="hover:text-navy-600">
                    support@premiumcars.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-navy-100 p-3">
                  <MapPin className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-800">Address</h3>
                <p className="text-gray-600">123 Business Avenue</p>
                <p className="text-gray-600">City Center, Country</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-navy-100 p-3">
                  <Clock className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-800">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8am - 8pm</p>
                <p className="text-gray-600">Saturday - Sunday: 9am - 6pm</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-2">Get in Touch</Badge>
              <h2 className="mb-6 text-3xl font-bold text-navy-800">Send Us a Message</h2>

              {isSubmitted ? (
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 rounded-full bg-green-100 p-3">
                        <MessageSquare className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-navy-800">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                      <Button
                        className="mt-4 bg-navy-600 hover:bg-navy-700"
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            subject: "",
                            message: "",
                          })
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Your email"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="Your phone number"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                          />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            rows={5}
                            required
                          />
                        </div>

                        <div className="md:col-span-2">
                          <Button type="submit" className="w-full bg-navy-600 hover:bg-navy-700">
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Badge className="mb-2">Our Location</Badge>
              <h2 className="mb-6 text-3xl font-bold text-navy-800">Find Us</h2>

              <div className="h-[400px] overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1628610193874!5m2!1sen!2suk"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Premium Cars Location"
                ></iframe>
              </div>

              <div className="mt-6">
                <h3 className="mb-2 text-xl font-semibold text-navy-800">Directions</h3>
                <p className="text-gray-600">
                  We are conveniently located in the city center, easily accessible by public transportation or car.
                  From the main highway, take exit 23 and follow the signs to Business Avenue.
                </p>
                <p className="mt-2 text-gray-600">Parking is available on-site for customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-2">Quick Answers</Badge>
            <h2 className="mb-4 text-3xl font-bold text-navy-800">Frequently Asked Questions</h2>
            <p className="mb-12 text-gray-600">Find answers to common questions about our services.</p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-navy-800">What documents do I need to rent a car?</h3>
                  <p className="text-gray-600">
                    You will need a valid driver's license, a credit card in your name, and a form of identification
                    (passport or ID card).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-navy-800">Is there a minimum age requirement?</h3>
                  <p className="text-gray-600">
                    Yes, the minimum age to rent a car is 21 years. Drivers under 25 may be subject to a young driver
                    surcharge.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-navy-800">Can I modify or cancel my reservation?</h3>
                  <p className="text-gray-600">
                    Yes, you can modify or cancel your reservation up to 24 hours before the pickup time without any
                    charge.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-navy-800">
                    Do you offer airport pickup and drop-off?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer airport pickup and drop-off services at all major airports in the area.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-navy-600 hover:bg-navy-700">
                <a href="/faqs">View All FAQs</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
