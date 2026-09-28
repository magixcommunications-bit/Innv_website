export default function QualityDisposal() {
  return (
    <div className="relative bg-[#F8F9FA]">
      <div className="relative z-10 h-auto py-20 max-w-[1440px] mx-auto px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="p-10 bg-white shadow-2xl rounded-2xl">
          <h2 className="text-2xl font-bold  sm:text-3xl md:text-4xl text-[#0a2463] mb-16 text-center gsap-opacity-trans-appear">
            Quality & Disposal Commitment
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-[#F8F9FA] group hover:-translate-y-4 hover:bg-[linear-gradient(135deg,_#0A2463_0%,_#3E92CC_100%)] hover:text-white flex transition-all flex-col items-center justify-center gap-4 rounded-2xl p-6">
              <div className="w-full !text-4xl text-center transition-transform duration-500 group-hover:rotate-[360deg]">
                👥
              </div>
              <p className="text-base text-center sm:text-lg">
                Highly trained staff for custom-fit aprons
              </p>
            </div>
            <div className="bg-[#F8F9FA] group hover:-translate-y-4 hover:bg-[linear-gradient(135deg,_#0A2463_0%,_#3E92CC_100%)] hover:text-white flex transition-all flex-col items-center justify-center gap-4 rounded-2xl p-6">
              <div className="w-full !text-4xl text-center transition-transform duration-500 group-hover:rotate-[360deg]">
                💎
              </div>
              <p className="text-base text-center sm:text-lg">
                Durable, lightweight core materials
              </p>
            </div>
            <div className="bg-[#F8F9FA] group hover:-translate-y-4 hover:bg-[linear-gradient(135deg,_#0A2463_0%,_#3E92CC_100%)] hover:text-white flex transition-all flex-col items-center justify-center gap-4 rounded-2xl p-6">
              <div className="w-full !text-4xl text-center transition-transform duration-500 group-hover:rotate-[360deg]">
                ♻️
              </div>
              <p className="text-base text-center sm:text-lg">
                Safe disposal per government protocol
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
