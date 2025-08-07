"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Linkedin, Instagram, Video } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* Hero Section */}

      <section className="relative bg-navy-800 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.jpg?height=800&width=1920"
            alt="Premium Cars headquarters"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-navy-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Badge className="mb-4 bg-gold-500/20 text-gold-400 border-gold-500/30">
              Contact Us
            </Badge>
            <h1 className="mb-6 text-5xl font-bold">Contact Premium Cars</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Have questions or need assistance? Our team is here to help. Reach
              out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <p className="text-gray-500 mb-2">
          Reach out anytime, we respond within minutes
        </p>
        <h1 className="text-4xl font-bold text-gray-900">Contact us</h1>
      </section>

      {/* Main Contact Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="border relative border-gray-300 mt-16 flex flex-col md:flex-row gap-x-10 rounded-[40px] p-3 md:pr-12 h-full md:h-[65vh]">
            {/* Left Column - Contact Info (Reduced to 1/4 of total) */}
            <div className="w-full md:w-1/4 p-4 flex justify-center">
              <div className="bg-gold-500 rounded-3xl p-4 text-center relative overflow-visible h-full flex flex-col justify-end items-center w-full">
                <div className="relative z-10 flex items-end justify-center h-full w-full">
                  <div className="w-full h-full flex items-end justify-center">
                    <Image
                      src="/contact.webp"
                      alt="Contact person"
                      width={500} // Set appropriate width
                      height={500} // Set appropriate height
                      className="object-contain w-[140%] sm:w-[160%] md:w-[180%] lg:w-[200%] max-h-[90%]"
                      style={{
                        transform: "translateY(15px)",
                        maxWidth: "none",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form (Expanded to 3/4 of total) */}
            <div className="w-full md:w-3/4 p-8 border-l border-gray-200">
              {isSubmitted ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="mb-4 rounded-full bg-green-100 p-3">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for contacting us. We will get back to you
                    shortly.
                  </p>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-2"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-600">
                        First name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 focus:border-orange-500 focus:ring-0"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-600">
                        Last name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 focus:border-orange-500 focus:ring-0"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-600">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 focus:border-orange-500 focus:ring-0"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-600">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        className="border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 focus:border-orange-500 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-600">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="border-0 border-b-2 border-gray-200 rounded-none bg-transparent px-0 resize-none focus:border-orange-500 focus:ring-0"
                      required
                    />
                  </div>

                  {/* Contact Info Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 rounded-full p-2">
                        <Mail className="h-4 w-4 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-600">
                        info@twenderides.co.ke
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 rounded-full p-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-600">
                        Nairobi, Kenya
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 rounded-full p-2">
                        <Phone className="h-4 w-4 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-600">
                        +254 758 311 071
                      </span>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-4 pt-4">
                    <div className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                      <Video className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                      <Linkedin className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                      <Instagram className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      onClick={handleSubmit}
                      className="bg-gold-500 hover:bg-gold-600 text-white rounded-lg px-8 py-2 ml-auto block lg:mt-[-70px]"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Map section */}
      <section className="pb-16">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="border relative border-gray-300 mt-16 rounded-[40px] overflow-hidden p-0 h-[70vh] md:h-[65vh] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808477395873!2d36.8211593147539!3d-1.2883858359807728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664fecf0f%3A0x7c0f6f6e8e3a6b5d!2sNairobi%20City%20Centre!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="rounded-[40px]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>
    </div>
  );
}
