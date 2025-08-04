import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-4 text-4xl font-bold">Terms & Conditions</h1>
            <p className="mb-6 text-lg text-gray-300">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2>1. Rental Agreement</h2>
              <p>
                These Terms and Conditions, together with the Rental Agreement provided at the time of rental, form the
                entire agreement between the customer ("You") and Premium Cars ("We", "Us", "Our") regarding the rental
                of a vehicle.
              </p>

              <h2>2. Definitions</h2>
              <p>
                "Vehicle" means the car, van, or other vehicle described in the Rental Agreement, including all parts,
                components, accessories, and documents.
              </p>
              <p>
                "Rental Period" means the period from the pickup date and time to the return date and time specified in
                the Rental Agreement.
              </p>

              <h2>3. Driver Requirements</h2>
              <p>
                3.1. The driver must be at least 21 years old (25 for luxury vehicles) and have held a valid driver's
                license for at least one year.
              </p>
              <p>
                3.2. The driver must present a valid driver's license, credit card in their name, and a form of
                identification at the time of pickup.
              </p>
              <p>
                3.3. Additional drivers must be present at the time of rental to complete the necessary paperwork and
                must meet the same requirements as the main driver.
              </p>

              <h2>4. Rental Charges</h2>
              <p>
                4.1. You agree to pay the rental charges specified in the Rental Agreement, including the base rental
                rate, insurance, optional extras, and applicable taxes.
              </p>
              <p>
                4.2. You are responsible for all fines, penalties, and charges incurred during the Rental Period,
                including parking tickets, traffic violations, and toll fees.
              </p>
              <p>
                4.3. A security deposit will be authorized on your credit card at the time of pickup and will be
                released upon return of the Vehicle in the same condition as at pickup, subject to any deductions for
                damages, missing fuel, or other charges.
              </p>

              <h2>5. Vehicle Use</h2>
              <p>5.1. The Vehicle must only be driven by the authorized drivers listed in the Rental Agreement.</p>
              <p>5.2. You agree to use the Vehicle in a careful and proper manner, and not to:</p>
              <ul>
                <li>Use the Vehicle for hire or reward</li>
                <li>Use the Vehicle for racing, speed testing, or teaching someone to drive</li>
                <li>
                  Use the Vehicle while under the influence of alcohol, drugs, or any other substance that may impair
                  driving ability
                </li>
                <li>Use the Vehicle to transport goods in violation of customs regulations or in any illegal manner</li>
                <li>Overload the Vehicle beyond its specified capacity</li>
                <li>Drive the Vehicle off-road or on unsuitable surfaces</li>
              </ul>
              <p>
                5.3. You agree not to take the Vehicle outside the permitted geographical area specified in the Rental
                Agreement without Our prior written consent.
              </p>

              <h2>6. Insurance and Liability</h2>
              <p>
                6.1. Basic insurance coverage is included in the rental charges, subject to the terms, conditions,
                limitations, and exclusions of Our insurance policy.
              </p>
              <p>
                6.2. You are responsible for any damage to or loss of the Vehicle during the Rental Period up to the
                excess amount specified in the Rental Agreement, unless such damage or loss is covered by Our insurance
                policy.
              </p>
              <p>
                6.3. Insurance coverage may be void if the damage or loss occurs while the Vehicle is being used in
                breach of these Terms and Conditions.
              </p>
              <p>
                6.4. You can reduce or eliminate your liability for damage or loss by purchasing additional insurance
                coverage at the time of rental.
              </p>

              <h2>7. Accidents and Breakdowns</h2>
              <p>7.1. In the event of an accident, you must:</p>
              <ul>
                <li>Notify Us immediately</li>
                <li>Obtain the names, addresses, and contact details of all parties involved, including witnesses</li>
                <li>Report the accident to the police if required by law or if there are injuries</li>
                <li>Complete an accident report form</li>
                <li>Not admit liability or fault</li>
              </ul>
              <p>
                7.2. In the event of a breakdown, you must contact Our roadside assistance service using the number
                provided in the Vehicle.
              </p>
              <p>
                7.3. You are not authorized to order or pay for any repairs to the Vehicle without Our prior consent.
              </p>

              <h2>8. Return of Vehicle</h2>
              <p>
                8.1. You must return the Vehicle to the agreed location on the date and time specified in the Rental
                Agreement, unless otherwise agreed in writing.
              </p>
              <p>
                8.2. The Vehicle must be returned with a full tank of fuel, in the same condition as at pickup, with all
                documents, keys, and accessories.
              </p>
              <p>8.3. Late returns will incur additional charges as specified in the Rental Agreement.</p>
              <p>
                8.4. We reserve the right to repossess the Vehicle at any time at Your expense if it is found illegally
                parked, used in violation of the law, or in breach of these Terms and Conditions.
              </p>

              <h2>9. Cancellations and Modifications</h2>
              <p>9.1. Cancellations and modifications are subject to the policies specified in the Rental Agreement.</p>
              <p>9.2. No refunds will be given for early returns or unused days.</p>

              <h2>10. Privacy</h2>
              <p>
                10.1. We collect and process your personal information in accordance with Our Privacy Policy, which is
                available on Our website.
              </p>
              <p>
                10.2. You consent to Us using your personal information for purposes related to your rental, including
                processing your payment, verifying your identity, and contacting you regarding your rental.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of the state in which the rental takes place, and
                any disputes will be subject to the exclusive jurisdiction of the courts of that state.
              </p>

              <h2>12. Changes to Terms and Conditions</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. The most current version will be
                available on Our website.
              </p>

              <p className="mt-8 text-sm text-gray-500">Last updated: August 1, 2023</p>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild className="bg-navy-600 hover:bg-navy-700">
                <Link href="/contact">Contact Us with Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
