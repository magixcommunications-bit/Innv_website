import React from 'react'
import eterniaCirculation from 'assets/productsNew/eternia/ciculation/preview-viens.png'
import eterniaCirculationSM from 'assets/productsNew/eternia/ciculation/preview-viens-sm.png'
import eterniafeatures from 'assets/productsNew/eternia/ciculation/eternia-circualtion-feature.svg'

export default function EterniaCirculation() {
  return (
    <section className="bg-gray">
      <div className="w-container font-regular blade-top-padding blade-bottom-padding-lg">
        <h2 className="font-medium text-center ">
          Restore Circulation with Eternia
        </h2>
        <h4 className="text-center text-orange mt-5">
          Crafted for Superior Delivery and Safety
        </h4>
        <div className="w-full md:py-12 py-4 overflow-hidden">
          <div className="relative mx-auto">
            <div className="relative">
              <img
                src={eterniaCirculation}
                alt="Stent"
                className="w-full h-auto hidden md:block"
              />
              <div className="md:hidden block max-w-sm mx-auto">
                <img
                  src={eterniaCirculationSM}
                  alt="Stent"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute inset-0 md:block hidden">
              <img
                src={eterniafeatures}
                alt="Stent"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="md:hidden block max-w-sm mx-auto">
          <div className="flex flex-col 2xl:gap-10 gap-4 ">
            <div className="md:px-4  ">
              <h6 className="font-bold text-orange">60 µm Thin Struts</h6>
            </div>

            <div className=" md:px-4  ">
              <h6 className="font-bold text-orange">Everolimus</h6>

              <ul className="mt-2 list-disc list-outside pl-5">
                <li>Enabling rapid absorption into the arterial wall</li>
              </ul>
            </div>

            <div className=" md:px-4  ">
              <h6 className="font-bold text-orange">1 mm Crossing Profile</h6>
              <ul className="mt-2 list-disc list-outside pl-5">
                <li>Improved deliverability with minimal injury</li>
              </ul>
            </div>

            <div className=" md:px-4  ">
              <h6 className="font-bold text-orange">L605 Cobalt Chromium</h6>
              <ul className="mt-2 list-disc list-outside pl-5">
                <li>High radial strength of 1.50 N/mm </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:gap-10 gap-6 lg:flex-nowrap justify-between md:max-w-screen-xl max-w-sm md:mt-5 blade-top-padding mx-auto ">
          <div className="">
            <h5 className="font-bold ">Next-generation DES</h5>
            <h6 className="">Ensuring the well-being of your CAD patients!</h6>
          </div>

          <div className="">
            <h6 className="font-bold ">
              CAD = Coronary Artery Disease; DES = Drug-eluting Stent
            </h6>
          </div>
        </div>
      </div>
    </section>
  )
}
