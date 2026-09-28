import React from 'react'
import img from 'assets/productsNew/eternia/scroeflex-precision.png'
import imgSM from 'assets/productsNew/eternia/eternia-top-perspective.png'

export default function EterniaPrecision() {
  return (
    <section className="bg-[#EDEDED]">
      {' '}
      <div className="w-container text-center font-regular blade-top-padding md:pb-0 blade-bottom-padding-lg">
        <h2 className="font-medium">
          Restore Circulation with Eternia’s Precision
        </h2>
        <h5 className="text-orange">Specs Speak!</h5>

        <div className="md:block hidden">
          <img
            src={img}
            alt="Eternia Circulation"
            className="w-full object-contain"
          />
        </div>

        <div className="md:hidden grid gap-4">
          <img
            src={imgSM}
            alt="Eternia Circulation"
            className="w-full object-contain max-w-sm mx-auto"
          />

          <div className="relative 2xl:pl-44 xl:pl-20 font-regular text-left">
            <div className="flex flex-wrap 2xl:gap-10 gap-4 lg:flex-nowrap ">
              <div className="md:px-4 max-w-xs ">
                <h6 className="font-bold text-orange">
                  5-Fr Compatible Guiding Catheter
                </h6>
                <p className="mt-2">
                  Prevents the occurrence of bleeding, pseudoaneurysm etc., and
                  reduces pain at access site
                </p>
              </div>

              <div className=" md:px-4 max-w-xs ">
                <h6 className="font-bold text-orange">
                  Nearly Zero Foreshortening
                </h6>

                <ul className="mt-2 list-disc list-outside pl-5">
                  <li>Minimize operational injury and overexpansion</li>
                </ul>
              </div>

              <div className=" md:px-4 max-w-xs ">
                <h6 className="font-bold text-orange">
                  Excellent Radial Strength{' '}
                </h6>
                <ul className="mt-2 list-disc list-outside pl-5">
                  <li>Caps lesion resistance and elastic recoil </li>
                </ul>
              </div>

              <div className=" md:px-4 max-w-xs ">
                <h6 className="font-bold text-orange">Open Cell</h6>
                <ul className="mt-2 list-disc list-outside pl-5">
                  <li>Enhanced side branch access </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
