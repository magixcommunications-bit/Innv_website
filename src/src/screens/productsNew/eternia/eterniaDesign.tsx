import React from 'react'
import eterniaDesign from 'assets/productsNew/eternia/eternia-circulation.jpg'
import pointer from 'assets/productsNew/eternia/pointer.png'
import pointerLg from 'assets/productsNew/eternia/pointer-big.png'
import circulationOpendesign from 'assets/productsNew/eternia/ciculation-open-design.png'
import circulationv2v from 'assets/productsNew/eternia/ciculation-v2v.png'
import circulationwavflo from 'assets/productsNew/eternia/circulation-wavflo.png'

export default function EterniaDesign() {
  return (
    <section className="">
      <div className=" font-regular blade-top-padding blade-bottom-padding-lg">
        <div className="w-container">
          <h2 className="font-medium text-center">
            Restore Circulation with Eternia’s
            <br className="md:block hidden" /> Design Crafted Platform
          </h2>
          {/* <h4 className="text-center text-orange mt-5">
            Crafted for Superior Delivery and Safety
          </h4> */}
        </div>
        <div className="md:w-container relative 2xl:min-h-[40rem] xxl:min-h-[34rem] lg:min-h-[30rem] lg:flex  items-end w-full lg:pt-20 pt-5 bg-gradient-to-r from-orange-100 via-white to-orange-100">
          <div className="lg:absolute inset-0 top-0 w-full">
            <img
              src={eterniaDesign}
              alt="Product"
              className="lg:object-contain object-cover w-full mx-auto min-h-[10rem]"
            />
          </div>

          <div className=" relative ml-auto md:px-0 px-4 2xl:pl-44 xl:pl-20 font-regular">
            <div className="flex flex-wrap 2xl:gap-10 gap-4 lg:flex-nowrap justify-between">
              <div className=" mb-8 md:mb-0 md:px-4 2xl:max-w-xs xl:max-w-[300px] lg:max-w-[250px] max-w-md">
                <div className="mb-4 relative w-fit h-fit overflow-visible">
                  <img
                    src={circulationOpendesign}
                    alt="Open Cell Design"
                    className="2xl:h-20 h-16 w-auto"
                  />
                  <div className="xl:block hidden absolute 2xl:w-32 xxl:w-20 w-16 2xl:-left-32 xxl:-left-20 -left-16 bottom-[50%]">
                    <img
                      src={pointer}
                      alt="pointer"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <h6 className="font-bold font-regular text-orange">
                  Open Cell Design
                </h6>
                <p className="mt-2">
                  Providing enhanced side branch access, better endothelial
                  coverage and conforms best to angulated vessels
                </p>
              </div>

              <div className=" mb-8 md:mb-0 md:px-4 2xl:max-w-xs xl:max-w-[300px] lg:max-w-[250px] max-w-md">
                <div className="mb-4 relative w-fit h-fit overflow-visible">
                  <img
                    src={circulationwavflo}
                    alt="Proprietary WavFlo Struts"
                    className="2xl:h-20 h-16 w-auto "
                  />
                  <div className="xl:block hidden absolute 2xl:w-32 xxl:w-20 w-16 2xl:-left-32 xxl:-left-20 -left-16 bottom-[50%]">
                    <img
                      src={pointerLg}
                      alt="pointer"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <h6 className="font-bold font-regular text-orange">
                  Proprietary WavFlo Struts
                </h6>

                <ul className="mt-2 list-disc list-outside pl-5">
                  <li>DES with thin struts up to 60 μm</li>
                  <li>
                    Enhancing trackability, crossability, and radial force,
                    while reducing the risk of restenosis and thrombosis
                    <sup>1</sup>
                  </li>
                </ul>
              </div>

              <div className=" md:px-4 max-w-xs ">
                <div className="mb-4 relative w-fit h-fit overflow-visible">
                  <img
                    src={circulationv2v}
                    alt="Proprietary V2V S-connectors"
                    className="2xl:h-20 h-16 w-auto "
                  />
                  <div className="xl:block hidden absolute 2xl:w-32 xxl:w-20 w-16 2xl:-left-32 xxl:-left-20 -left-16 bottom-[50%]">
                    <img
                      src={pointer}
                      alt="pointer"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <h6 className="font-bold font-regular text-orange">
                  Proprietary V2V S-connectors
                </h6>
                <ul className="mt-2 list-disc list-outside pl-5">
                  <li>Valley-to-valley long 'S' Connectors</li>
                  <li>
                    For higher flexibility, deliverability, radial strength, and
                    conformability<sup>1</sup>
                  </li>
                  <li>
                    Lowering stent dislodgement force to minimum 6N in 12 mm
                    stents<sup>2</sup>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
