import React, { useState, useRef } from 'react'
import image_1 from 'assets/sapphire3-1.5mm/design-features/image-1.webp'
import image_2 from 'assets/sapphire3-1.5mm/design-features/image-2.webp'
import image_3 from 'assets/sapphire3-1.5mm/design-features/image-3.webp'
import image_4 from 'assets/sapphire3-1.5mm/design-features/image-4.webp'

import '../balloonCaths/styles/designFeature.css'

import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { CarouselBtn } from 'atoms/buttons'

const data = [
  {
    title: 'eXcellent Rewrap',
    productImg: image_1,
    description: [
      <>
        <span className="text-[#F69A4D] font-medium">XR</span> (e
        <span className="text-[#F69A4D] font-medium">X</span>cellent{' '}
        <span className="text-[#F69A4D] font-medium">R</span>ewrap) balloon
        material with ultra thin marker bands facilitate best-in-class
        crossability and re-crossability
      </>,
    ],
  },
  {
    title: 'Hydro-X/Invio',
    productImg: image_2,
    description: [
      <>
        <span className="text-[#F69A4D] font-medium">Hydro-X</span> hydrophilic
        coating (distal tip to exit port) and{' '}
        <span className="text-[#F69A4D] font-medium">Invio</span> inner lumen
        coating for enhanced crossability and trackability
      </>,
    ],
  },
  {
    title: 'Sub-zero Flex Tip',
    productImg: image_3,
    description: [
      <>
        <span className="text-[#F69A4D] font-medium">Sub-zero Flex Tip</span>{' '}
        tapered tip with “zero guidewire transition” for the smoothest lesion
      </>,
    ],
  },
  {
    title: 'P-TECH',
    productImg: image_4,
    description: [
      <>
        <span className="text-[#F69A4D] font-medium">P-TECH</span> hypotube
        intelligently constructed with excellent transitional balance,
        pushability, and exceptional kink resistance{' '}
      </>,
    ],
  },
]
export default function DesignFeatures() {
  let userExeperienceRef = useRef<HTMLDivElement>(null)
  let userExeperienceRefText = useRef<HTMLDivElement>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const moveNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length)
  }
  const movePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="bg-dark-gradient">
      <h3 className="gsap-opacity-trans-appear blade-top-padding-lg font-medium hidde lg:block text-center leading-tight md:-mt-2 2xl:-mt-3 text-white">
        Key design features
      </h3>
      <div className="gsap-opacity-trans-appear grid md:grid-cols-5 md:gap-10 w-container-sm lg:px-16 balloon-design-features mt-2 blade-bottom-padding-lg items-center flex-col md:pb-0 lg:pb-4">
        <div className="col-span-3">
          <SwitchTransition>
            <CSSTransition
              nodeRef={userExeperienceRef}
              key={activeIndex}
              timeout={500}
              classNames="designFeatures-image"
            >
              <div
                className="2xl:h-[35rem] xl:h-[29rem] md:h-[20rem] sm:h-[25rem] h-[14rem] mx-auto"
                ref={userExeperienceRef}
              >
                <img
                  className="h-full w-full object-cover object-center"
                  src={data[activeIndex].productImg}
                  alt={data[activeIndex].title}
                />
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="col-span-2">
          <SwitchTransition>
            <CSSTransition
              nodeRef={userExeperienceRefText}
              key={activeIndex}
              timeout={500}
              classNames="designFeatures"
            >
              <div
                ref={userExeperienceRefText}
                className="grid md:gap-4 gap-2 max-w-[300px] transition-text-wrapper"
              >
                <h4 className=" text-white opacity-0 translate-y-4 font-regular">
                  {data[activeIndex].title}
                </h4>

                {data[activeIndex].description.map((ele, index) => {
                  return (
                    <h6
                      key={index}
                      className="text-white opacity-0 translate-y-4 font-light"
                    >
                      {ele}
                    </h6>
                  )
                })}
              </div>
            </CSSTransition>
          </SwitchTransition>

          <div className="flex gap-4 items-center font-light lg:mt-8 mt-5 mb-2">
            <CarouselBtn
              activeIndex={activeIndex}
              color="white"
              onClick={movePrev}
              index={0}
              text="Move to previous slide"
              size="base"
              type="button"
              extraClasses={
                'border-white bg-transparent enabled:hover:bg-white fill-white enabled:hover:fill-orange 2xl:p-5 outline-orange outline-offset-4 disabled:cursor-not-allowed'
              }
            />
            <h5 className="text-white">
              <span className="text-orange "> 0{activeIndex + 1} </span>/ 0
              {data.length}
            </h5>
            <CarouselBtn
              activeIndex={activeIndex}
              color="white"
              onClick={moveNext}
              index={data.length - 1}
              text="Move to next slide"
              size="base"
              type="button"
              isRotated
              extraClasses={
                'border-white bg-transparent enabled:hover:bg-white fill-white enabled:hover:fill-orange 2xl:p-5 outline-orange outline-offset-4 disabled:cursor-not-allowed'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
