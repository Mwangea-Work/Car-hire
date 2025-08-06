import Image from "next/image"

export default function BookingHeader({ currentStep }: { currentStep: number }) {
  return (
    <section className="relative bg-navy-800 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/car.jpg"
          alt="Luxury car rental"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-navy-900/90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="mb-6 text-5xl font-bold">Book Your Vehicle</h1>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            Reserve your perfect ride with our easy booking process
          </p>
          <div className="mx-auto max-w-3xl">
            <div className="flex justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex flex-1 flex-col items-center ${currentStep >= step ? "text-gold-400" : "text-gray-400"}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= step ? "bg-gold-500 text-navy-900" : "bg-gray-700 text-gray-300"}`}
                  >
                    {step}
                  </div>
                  <span className="mt-2 text-sm">
                    {step === 1 && "Select Vehicle"}
                    {step === 2 && "Add Options"}
                    {step === 3 && "Your Details"}
                    {step === 4 && "Confirmation"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}