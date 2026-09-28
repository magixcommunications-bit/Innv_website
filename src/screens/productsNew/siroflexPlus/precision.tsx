import React from 'react'
import img from 'assets/productsNew/eternia/scroeflex-precision.png'

export default function EterniaPrecision() {
  return (
    <section className="bg-[#EDEDED]">
      {' '}
      <div className="w-container text-center font-regular blade-top-padding ">
        <h2 className="font-medium">
          Restore Circulation with Eternia’s Precision
        </h2>
        <h4 className="text-orange">Specs Speak!</h4>

        <div className="">
          <img src={img} alt="" className="w-full object-contain" />
        </div>
      </div>
    </section>
  )
}
