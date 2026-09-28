import { Check } from 'lucide-react'

export default function IndustryCertifications() {
  return (
    <div className="bg-white">
      <div className="relative z-10 h-auto py-20 max-w-[1440px] mx-auto px-4  md:px-10 lg:px-16 2xl:px-0">
        <div className="flex items-center justify-center w-full gsap-opacity-trans-appear">
          <span className="px-6 py-2 text-base bg-[linear-gradient(135deg,_#06D6A0_0%,_#3E92CC_100%)] text-white rounded-[50px] inline-block mx-auto mb-4">
            Trusted & Certified
          </span>
        </div>
        <div className="flex flex-col items-center gap-6 mb-16 gsap-opacity-trans-appear">
          <h2 className="text-2xl font-bold text-center sm:text-3xl md:text-4xl text-[#0a2463]">
            Industry Certifications & Standards
          </h2>
          <p className="text-lg text-center sm:text-xl md:text-2xl">
            Our products meet the highest international quality and safety
            standards.
          </p>
        </div>
        <div className="flex gap-5 sm:gap-10 max-w-[1200px] mx-auto flex-wrap justify-center items-center gsap-stagger-bounce-parent">
          {/* <div
            className="w-[160px] h-[160px] bg-white rounded-[20px] flex items-center flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]
 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]  gap-2 transition-shadow duration-700 gsap-stagger-bounce"
          >
            <span className="text-[40px]">🏆</span>
            <p className="text-base text-[#0A2463] font-bold">ISO Certified</p>
          </div> */}
          <div
            className="w-[160px] h-[160px] bg-white rounded-[20px] flex items-center flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]
 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]  gap-2 transition-shadow duration-700 gsap-stagger-bounce"
          >
            <span className="text-[40px]">🌿</span>
            <p className="text-base text-[#0A2463] font-bold">Lead Free</p>
          </div>
          {/* <div
            className="w-[160px] h-[160px] bg-white rounded-[20px] flex items-center flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]
 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]  gap-2 transition-shadow duration-700 gsap-stagger-bounce"
          >
            <span>
              <Check className="w-12 h-[60px]" />
            </span>
            <p className="text-base text-[#0A2463] font-bold">CE Marked</p>
          </div> */}
          <div
            className="w-[160px] h-[160px] bg-white rounded-[20px] flex items-center flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]
 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]  gap-2 transition-shadow duration-700 gsap-stagger-bounce"
          >
            <span className="text-[40px]">🇮🇳</span>
            <p className="text-base text-[#0A2463] font-bold">Made in India</p>
          </div>
          <div
            className="w-[160px] h-[160px] bg-white rounded-[20px] flex items-center flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]
 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]  gap-2 transition-shadow duration-700 gsap-stagger-bounce"
          >
            <span className="text-[40px]">⚛️</span>
            <p className="text-base text-[#0A2463] font-bold">BARC Approved</p>
          </div>
        </div>
      </div>
    </div>
  )
}
