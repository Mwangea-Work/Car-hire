import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Premium Cars headquarters"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-navy-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Badge className="mb-4 bg-gold-500/20 text-gold-400 border-gold-500/30">Frequently Asked Questions</Badge>
            <h1 className="mb-6 text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
            Find answers to common questions about our services, policies, and procedures.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <Badge className="mb-2">Rental Requirements</Badge>
              <h2 className="mb-6 text-2xl font-bold text-navy-800">Booking & Requirements</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What documents do I need to rent a car?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>To rent a car from Premium Cars, you will need:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1">
                      <li>A valid driver's license (held for at least 1 year)</li>
                      <li>A credit card in the main driver's name for the security deposit</li>
                      <li>A form of identification (passport or ID card)</li>
                      <li>Proof of address (for certain vehicle categories)</li>
                    </ul>
                    <p className="mt-2">
                      International customers will need to provide a valid passport and an international driving permit
                      along with their original driver's license.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Is there a minimum age requirement?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      Yes, the minimum age to rent a car is 21 years. Drivers under 25 may be subject to a young driver
                      surcharge. For luxury and premium vehicles, the minimum age requirement is 25 years.
                    </p>
                    <p className="mt-2">
                      The maximum age for renting is 75 years, but this can be extended with a valid medical certificate
                      confirming fitness to drive.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    How far in advance should I book?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      We recommend booking as early as possible, especially during peak seasons, to ensure availability
                      of your preferred vehicle. For standard vehicles, booking 1-2 weeks in advance is usually
                      sufficient. For luxury vehicles or during holiday periods, we recommend booking 3-4 weeks in
                      advance.
                    </p>
                    <p className="mt-2">Last-minute bookings are also possible based on availability.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Can I rent a car without a credit card?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      A credit card in the main driver's name is required for the security deposit. We do not accept
                      debit cards, cash, or credit cards belonging to someone else for the deposit.
                    </p>
                    <p className="mt-2">
                      However, you can pay for your rental with a debit card, cash, or another credit card after the
                      security deposit has been authorized on the main driver's credit card.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-12">
              <Badge className="mb-2">Insurance & Coverage</Badge>
              <h2 className="mb-6 text-2xl font-bold text-navy-800">Insurance & Protection</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What insurance is included in the rental?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>All our rentals include:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1">
                      <li>Collision Damage Waiver (CDW) with an excess amount</li>
                      <li>Third Party Liability Insurance</li>
                      <li>Theft Protection (TP) with an excess amount</li>
                    </ul>
                    <p className="mt-2">
                      The excess amount varies depending on the vehicle category. You can reduce or eliminate this
                      excess by purchasing our Premium Insurance package.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What is the Premium Insurance package?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>Our Premium Insurance package provides comprehensive coverage that:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1">
                      <li>Reduces the excess to zero for damage and theft</li>
                      <li>Covers damage to tires, windshield, undercarriage, and roof</li>
                      <li>Includes personal accident insurance for driver and passengers</li>
                      <li>Provides coverage for personal belongings in the vehicle</li>
                    </ul>
                    <p className="mt-2">
                      This package costs $15 per day and provides peace of mind during your rental period.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What happens if I have an accident?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>In case of an accident, please:</p>
                    <ol className="ml-6 mt-2 list-decimal space-y-1">
                      <li>Ensure the safety of all parties involved</li>
                      <li>Contact local authorities if there are injuries or significant damage</li>
                      <li>Call our 24/7 emergency number immediately</li>
                      <li>Fill out the accident report form found in the vehicle's glove compartment</li>
                      <li>Take photos of the damage and the scene</li>
                      <li>Collect contact information from any witnesses</li>
                    </ol>
                    <p className="mt-2">
                      Our roadside assistance will guide you through the process and arrange for a replacement vehicle
                      if necessary.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-12">
              <Badge className="mb-2">Cancellation Policies</Badge>
              <h2 className="mb-6 text-2xl font-bold text-navy-800">Changes & Cancellations</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Can I modify or cancel my reservation?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>Yes, you can modify or cancel your reservation as follows:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1">
                      <li>Modifications and cancellations made more than 48 hours before pickup: No charge</li>
                      <li>Modifications and cancellations made 24-48 hours before pickup: 25% of the rental cost</li>
                      <li>
                        Modifications and cancellations made less than 24 hours before pickup: 50% of the rental cost
                      </li>
                      <li>No-shows: 100% of the rental cost</li>
                    </ul>
                    <p className="mt-2">
                      For modifications, any price difference will be charged or refunded accordingly.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What if I return the car early?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      If you return the vehicle earlier than scheduled, we do not provide refunds for unused days. The
                      full amount of the original reservation will be charged.
                    </p>
                    <p className="mt-2">
                      We recommend contacting us as soon as possible if your plans change to discuss possible options.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What if I need to extend my rental?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      If you wish to extend your rental period, please contact us at least 24 hours before your
                      scheduled return time. Extensions are subject to vehicle availability and will be charged at the
                      current rate.
                    </p>
                    <p className="mt-2">
                      Unauthorized late returns will incur an additional charge of one day's rental plus a late fee of
                      $50.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-12">
              <Badge className="mb-2">Rental Terms</Badge>
              <h2 className="mb-6 text-2xl font-bold text-navy-800">Rental Conditions</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What is included in the rental price?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>Our standard rental price includes:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1">
                      <li>Unlimited mileage</li>
                      <li>Basic insurance coverage (CDW, TP, Third Party Liability)</li>
                      <li>24/7 roadside assistance</li>
                      <li>Local taxes and fees</li>
                      <li>Vehicle cleaning</li>
                    </ul>
                    <p className="mt-2">
                      Additional services such as GPS, child seats, additional drivers, and premium insurance are
                      available for an extra charge.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Is there a mileage limit?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      Most of our rentals come with unlimited mileage. However, certain luxury and premium vehicles may
                      have a daily mileage limit of 200 miles. Additional miles will be charged at $0.50 per mile.
                    </p>
                    <p className="mt-2">The mileage policy will be clearly stated in your rental agreement.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What is your fuel policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      We operate a "full-to-full" fuel policy. This means you'll receive the vehicle with a full tank of
                      fuel and are expected to return it with a full tank.
                    </p>
                    <p className="mt-2">
                      If you return the vehicle with less fuel than at pickup, you will be charged for the missing fuel
                      plus a refueling service fee of $25.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Can I take the rental car across state lines or international borders?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      Domestic travel across state lines is generally permitted within the continental United States
                      without additional fees.
                    </p>
                    <p className="mt-2">
                      International travel to Canada or Mexico requires prior authorization and an additional
                      cross-border fee. Not all vehicles are eligible for international travel, and additional insurance
                      may be required.
                    </p>
                    <p className="mt-2">
                      Please contact us at least 72 hours before your trip if you plan to cross international borders.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-navy-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Still Have Questions?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Our customer service team is available to assist you with any questions or concerns you may have.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-gold-500 text-navy-900 hover:bg-gold-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <a href="tel:+1234567890">Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
