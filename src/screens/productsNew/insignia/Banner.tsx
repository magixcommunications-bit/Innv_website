import React from 'react'
import stentsImage from 'assets/insignia/banner_device.png'
import logo from 'assets/insignia/logo.svg'

export function Banner() {
  return (
    <div
      className="min-h-[520px] h-[70vh] sm:h-[90vh] md:h-[70vh] md:min-h-[600px] xl:h-screen insignia-banner-image 
    bg-cover bg-center text-black flex flex-col items-center justify-center
    gap-7 xl:gap-[20px] 2xl:gap-[38px] relative overflow-hidden"
    >
      <img
        className="text-appear-anim w-full sm:h-auto sm:w-full stent-image"
        src={stentsImage}
        alt="stent product view"
      />
      <div
        className="flex flex-col gap-y-4 md:flex-row absolute bottom-10 xl:bottom-6  px-4 sm:px-12 left-0 right-0 mx-auto
      2xl:bottom-12 items-center gap-x-12 justify-center"
      >
        <div className="w-[140px] sm:w-[140px] md:w-[180px] xl:w-auto">
          <img
            src={logo}
            alt="insignia logo"
            className="text-appear-anim-delayed "
          />
        </div>
        <div className="text-appear-anim-delayed w-full max-w-[180px] h-[1px] md:w-[1px] md:h-[100px] xl:h-[110px] 2xl:h-[140px] bg-black" />
        <div className="">
          <h2 className="text-appear-anim-delayed font-bold text-center md:text-left text-[32px] md:text-[42px] 2xl:text-[48px] leading-none">
            Insignia
          </h2>
          <p className="text-appear-anim-delayed font-regular mt-2 2xl:mt-3 text-center md:text-left text-sm md:text-base 2xl:text-xl tracking-wide leading-none">
            {' '}
            A Sirolimus Eluting Stent
          </p>
        </div>
      </div>
    </div>
  )
}
