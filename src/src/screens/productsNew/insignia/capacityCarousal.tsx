import './index.css'
import React, { useState, useRef } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import stentDelivery from 'assets/insignia/features/stent &delivery.png'
import drugAndPolymer from 'assets/insignia/features/drug&polymers.png'
import StentDeliveryTablet from 'assets/insignia/features/stent&delivery-tablet.png'
import drugAndPolymerTablet from 'assets/insignia/features/drug&polymers-tablet.png'
import stentDeliveryMobile from 'assets/insignia/features/stent&delivery-mobile.png'
import drugAndPolymerMobile from 'assets/insignia/features/drug&polymers-mobile.png'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'
import insigniaLogo from 'assets/insignia/logo.svg'

import logo from 'assets/productsNew/insignia/insignia-logo-white.png'

const windowWidth = window.innerWidth

const data = [
  {
    tab: 'Stent & delivery system',
    features: [
      'Material - L605 Cobalt chromium',
      'Low balloon overhang to reduce the injury',
      'Stent geometry - Hybrid cell',
      'Low strut thickness - 73 microns',
      'Low crossing and tip entry profile with <br class="hidden sm:block"/> hydrophilic coating',
    ],
    coverImage:
      windowWidth < 640
        ? stentDeliveryMobile
        : windowWidth < 1024
        ? StentDeliveryTablet
        : stentDelivery,
  },
  {
    tab: 'Drug & polymers',
    features: [
      'Blend of PLA & PLGA Polymer with high <br class="hidden sm:block" /> Purity (>99.99%)',
      'Fully Biodegradable & Biocompatible Polymers',
      'The Lactate, produced after degradation of the polymer blend will increase the VEGF & VEGF promotes the Endothelial Cell growth',
      'The Loading dose of Sirolimus is 1.4 microgram/Sq.mm surface area of the stent',
      'The Uniform Circumferential Coating of Drug & Polymer on the stent with a Unique Spraycoating technology maintains its integrity in in-vitro tortuous path',
    ],
    coverImage:
      windowWidth < 640
        ? drugAndPolymerMobile
        : windowWidth < 1024
        ? drugAndPolymerTablet
        : drugAndPolymer,
  },
]

export function CapacityCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleTabClick = (update: number) => {
    setActiveIndex(update)
  }

  const imageRef = useRef<any>()
  const textRef = useRef<any>()

  return (
    <div className="features-wrapper capacity-wrapper blade-bottom-padding-lg">
      <div className="blade-top-padding">
        <div className="w-container max-w-screen-lg font-regular">
          <div className="gsap-opacity-trans-appear mx-auto w-fit md:h-24 h-14">
            <img
              src={logo}
              className="w-full h-full object-contain"
              alt="insignia logo"
            />
          </div>
          <h4 className="gsap-opacity-trans-appear text-center text-white md:mt-10 mt-6 leading-snug">
            <span className="text-orange">INSIGNIA</span>{' '}
            {/* <span className="inline-flex">
              <img
                src={insigniaLogo}
                alt="eternia-brio-logo"
                className="lg:h-12 h-5 mr-3"
              />
            </span> */}
            Sirolimus Eluting Stent System elutes Sirolimus from a biodegradable
            polymer matrix. The drug is coated on both abluminal and luminal
            surfaces of the stent and is released in a controlled manner. This
            gives the device superior safety and efficacy.
          </h4>
        </div>
        <h3 className="gsap-opacity-trans-appear font-medium text-white text-center mt-14">
          Best-in-class features
        </h3>
        <div className="gsap-opacity-trans-appear md:flex justify-center gap-2 hidden w-container-lg 2xl:max-w-screen-lg max-w-7xl blade-top-padding-sm">
          <div className="flex gap-5  xl:gap-7">
            {data.map((elem, index: number) => {
              const key = `tab-0${index}`
              return (
                <React.Fragment key={key}>
                  <button
                    aria-label={elem.tab}
                    type="button"
                    onClick={() => handleTabClick(index)}
                    className={`flex 2xl:text-xl whitespace-nowrap text-base border-[2px] transition-all duration-300 
                    border-solid 
                    rounded-md font-medium px-5 py-2 focus:outline-orange place-content-center flex-1 items-center 
                    2xl:gap-3 xl:gap-2 gap-1 ${
                      activeIndex === index
                        ? 'text-orange !border-orange bg-white'
                        : 'text-white !border-transparent bg-transparent'
                    }`}
                  >
                    <svg
                      className={`${
                        activeIndex === index ? 'fill-[#F69A4D]' : 'fill-white'
                      }  transition-all duration-300`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.92743 1.77182C8.92743 0.79327 8.13416 0 7.15561 0C6.17706 0 5.38379 0.79327 5.38379 1.77182V2.69455C5.38379 4.18124 4.17859 5.38644 2.69189 5.38644H1.77182C0.79327 5.38644 0 6.17971 0 7.15826C0 8.13681 0.79327 8.93008 1.77182 8.93008H2.69189C4.17859 8.93008 5.38379 10.1353 5.38379 11.622V12.5446C5.38379 13.5231 6.17706 14.3164 7.15561 14.3164C8.13416 14.3164 8.92743 13.5231 8.92743 12.5446V11.6232C8.92743 10.1358 10.1332 8.93008 11.6206 8.93008H12.5446C13.5231 8.93008 14.3164 8.13681 14.3164 7.15826C14.3164 6.17971 13.5231 5.38644 12.5446 5.38644H11.6206C10.1332 5.38644 8.92743 4.18065 8.92743 2.69322V1.77182Z"
                        fill=""
                      />
                    </svg>
                    {elem.tab}
                  </button>
                  <div className="h-3/4 my-auto w-[2px] bg-white opacity-60 last-of-type:hidden"></div>
                </React.Fragment>
              )
            })}
          </div>
        </div>

        <div className="gsap-opacity-trans-appear lg:grid grid-cols-12 w-container-lg 2xl:max-w-screen-xl xl:max-w-[1336px] blade-top-padding-sm">
          <div
            className="col-start-1 bg-lightorange rounded-t-md lg:rounded-l-md lg:rounded-tr-none flex flex-col justify-end xl:justify-center col-end-6 relative"
            // style={{
            //   background:
            //     'linear-gradient(132deg, #F69A4D 54.75%, #FF7400 108.01%), linear-gradient(180deg, #F0F4F5 23.59%, #FFF 100%)',
            // }}
          >
            <div className="absolute  left-0 top-0 bottom-0 items-center lg:flex hidden">
              <CarouselBtn
                activeIndex={activeIndex}
                color="orange"
                onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
                index={0}
                text="Move to previous slide"
                size="base"
                type="button"
                extraClasses={extraClasses + ' -translate-x-1/2 z-10 !border-1'}
              />
            </div>
            <SwitchTransition>
              <CSSTransition
                key={activeIndex}
                nodeRef={imageRef}
                timeout={500}
                classNames="feature-img"
              >
                <div
                  ref={imageRef}
                  className="h-[200px] overflow-hidden md:h-[300px] lg:h-[30rem] 2xl:h-[33rem]  
                  "
                >
                  <img
                    src={data[activeIndex].coverImage}
                    alt={data[activeIndex].tab}
                    className="h-full w-auto mx-auto xl:mx-0 object-contain lg:object-cover object-center md:scale-105"
                  />
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div
            className="relative lg:rounded-tr-md lg:rounded-br-md col-start-6 col-end-13  blade-top-padding-sm 
          lg:blade-bottom-padding-sm 
         lg:h-[34rem] xl:h-[30rem] 2xl:h-[33rem] overflowhidden bg-white capacity-text-wrapper"
          >
            <div className="absolute left-auto right-0 top-0 bottom-0 items-center lg:flex hidden ">
              <CarouselBtn
                activeIndex={activeIndex}
                color="orange"
                onClick={() => setActiveIndex((prev) => Math.min(prev + 1, 2))}
                index={data.length - 1}
                text="Move to next slide"
                size="base"
                type="button"
                isRotated
                extraClasses={extraClasses + 'translate-x-1/2 z-10 !border-1'}
              />
            </div>
            <div
              className="md:w-11/12 mx-auto  
            lg:max-w-screen-sm 2xl:max-w-screen-md h-full"
            >
              <SwitchTransition>
                <CSSTransition
                  key={activeIndex}
                  nodeRef={textRef}
                  timeout={500}
                  classNames="features"
                >
                  <div
                    ref={textRef}
                    className="pr-4 pl-5 md:pl-8 lg:pl-12 flex flex-col items-start max-w-2xl justify-center h-full"
                  >
                    <ul className="text-black leading-tight font-regular flex flex-col pt-6 md:pt-6 lg:pt-8 2xl:pt-10 w-11/12 max-w-lg">
                      {data[activeIndex].features.map((elem, idx: number) => {
                        const key = `tab-1${idx}`
                        return (
                          <React.Fragment key={key}>
                            <li className="flex gap-3">
                              <div className="flex items-center flex-col">
                                <div className="flex-0 grid place-content-center">
                                  <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className=""
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.5938 3.53024C14.5938 1.99934 13.3528 0.758301 11.8219 0.758301V0.758301C10.291 0.758301 9.04996 1.99934 9.04996 3.53024V4.97159C9.04996 7.29853 7.16361 9.18488 4.83667 9.18488H3.39491C1.86401 9.18488 0.622971 10.4259 0.622971 11.9568V11.9568C0.622971 13.4877 1.86401 14.7288 3.39491 14.7288H4.83647C7.16352 14.7288 9.04996 16.6152 9.04996 18.9423V20.3838C9.04996 21.9147 10.291 23.1558 11.8219 23.1558V23.1558C13.3528 23.1558 14.5938 21.9147 14.5938 20.3838V18.942C14.5938 16.6151 16.4802 14.7288 18.8071 14.7288H20.2485C21.7794 14.7288 23.0204 13.4877 23.0204 11.9568V11.9568C23.0204 10.4259 21.7794 9.18488 20.2485 9.18488H18.8071C16.4802 9.18488 14.5938 7.29852 14.5938 4.97159V3.53024Z"
                                      fill="#FEC89A"
                                    />
                                  </svg>
                                </div>
                                <div className="flex-1 h-full">
                                  <div className="h-full w-[2px] dash-line"></div>
                                </div>
                              </div>
                              <span
                                className="text-sm md:text-lg font-regular leading-7"
                                dangerouslySetInnerHTML={{ __html: elem }}
                              />
                            </li>
                            <div className="flex mt-1  pl-[10px] items-center">
                              <div className="h-6 w-[2px] dash-line"></div>
                            </div>
                          </React.Fragment>
                        )
                      })}
                    </ul>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-container lg:hidden -mt-1">
          <div
            className="flex rounded-b-md lg:rounded-none w-full bg-white justify-center py-5  
          gap-4 xl:gap-6  2xl:gap-8"
          >
            <CarouselBtn
              activeIndex={activeIndex}
              color="orange"
              onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
              index={0}
              text="Move to previous slide"
              size="base"
              type="button"
              extraClasses={extraClasses + ' px-3'}
            />
            <CarouselBtn
              activeIndex={activeIndex}
              color="orange"
              onClick={() => setActiveIndex((prev) => Math.min(prev + 1, 2))}
              index={data.length - 1}
              text="Move to next slide"
              size="base"
              type="button"
              isRotated
              extraClasses={extraClasses + 'px-3'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
