import React from 'react'
import mainImg from 'assets/numen/Asset 17.png'
import subImg from 'assets/numen/Asset_1.png'

export default function NumenSoftnessBox() {
  return (
    <div className="flex flex-col w-full gap-6 px-4 py-8 mx-auto max-w-7xl md:py-12 md:gap-12 lg:gap-16">
      <div className="flex flex-col gap-3">
        <h3 className="text-[#00568f] text-3xl md:text-4xl lg:text-[48px] font-medium">
          Softness<sup>*</sup>
        </h3>
        <p className="font-regular md:text-xl lg:text-[24px]">
          High-level coil softness ensures stable, low forces against the
          aneurysm wall.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-0">
        <div className="lg:w-[100%] md:w-[70%] sm:w-[70%] w-[100%] gsap-opacity-trans-appear">
          <img
            src={mainImg}
            alt="Softness main image"
            className="object-contain lg:h-full lg:w-full"
          />
        </div>

        <div className="lg:ml-[100px] lg:w-[100%] md:w-[70%] sm:w-[70%] w-[100%] ml-0 gsap-opacity-trans-appear">
          <img
            src={subImg}
            alt="Softness sub image"
            className="object-contain lg:w-[72%] lg:h-[72%]"
          />
          <p className="font-light md:text-lg lg:text-xl text-[#595b61] mt-2">
            <sup>*</sup>Data on file.
          </p>
        </div>
      </div>
    </div>
  )
}
