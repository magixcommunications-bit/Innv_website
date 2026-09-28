import React from 'react'
import balloon from 'assets/balloon/banner-img.png'
import './styles/index.css'

export default function Banner() {
  return (
    <section
      className="bg-transparent bg-[url('assets/balloon/bg.png')] lg:h-screen bg-cover 
    xl:min-h-[650px] lg:pt-5 pt-14 pb-10 bg-bottom bg-no-repeat flex items-center"
    >
      <div className="balloon-banner-wrapper flex flex-col items-center 2xl:max-w-4xl max-w-3xl w-container h-auto">
        <h3 className="text-black text-center font-medium 2xl:pt-20 xl:pt-28 pt-16">
          Coronary <span className="text-orange">Balloon Catheters</span>
        </h3>

        <h5 className="text-center font-regular text-black leading-snug md:mt-5 mt-2">
          Take control in your hands
        </h5>

        <img
          className="h-full w-full object-cover"
          src={balloon}
          alt="cross sectional view of a ballon catheter"
        />
      </div>
    </section>
  )
}
