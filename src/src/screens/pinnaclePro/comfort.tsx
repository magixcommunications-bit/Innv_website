import React, { useRef, useEffect } from 'react'
import pinnaclePro from 'assets/pinnaclePro/pinnacle_pro.png'

const pointer = [
  'Carbon fiber table top',
  'Maximum patient weight: 200 Kg',
  'Minimum table height: 800 mm',
  'Memory foam mattress for added comfort',
]

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Comfort() {
  const wrapperHeadRef = useRef<any>()

  useEffect(() => {
    gsap.to(wrapperHeadRef.current, {
      scrollTrigger: {
        trigger: wrapperHeadRef.current,
        start: 'top 60%',
        onEnter: () => {
          wrapperHeadRef?.current?.classList.add('comfort-active')
        },
      },
    })
  })
  return (
    <div
      ref={wrapperHeadRef}
      className="comfort-section-wrapper blade-top-padding blade-bottom-padding"
    >
      <section className="w-container flex flex-col-reverse lg:grid blade-top-padding-sm blade-bottom-padding-sm lg:grid-cols-2  gap-y-8 md:gap-y-20">
        <div>
          <h3 className="comfort-title-gradient font-regular pb-2 font-medium bg-clip-text text-transparent translate-y-4 opacity-0">
            Comfort & safety first
          </h3>
          <span className=" subtitle block text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[2rem] font-regular text-white translate-y-4 opacity-0">
            Patient-centric table design
          </span>
          <div className="  pt-5 md:pt-7 xl:pt-9 2xl:pt-14 pointers  translate-y-4 opacity-0 ">
            {pointer.map((elem, index: number) => {
              return (
                <>
                  <div className="flex items-center gap-3 py-1.5 md:py-0">
                    <svg
                      className={`fill-[#F69A4D]  transition-all duration-300`}
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
                    <span className="text-[#EFEFEF]  block text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-regular">
                      {elem}
                    </span>
                  </div>
                  <div className=" last-of-type:hidden pl-1.5  md:block hidden h-10 2xl:h-12">
                    <svg
                      width={2}
                      height={70}
                      viewBox="0 0 2 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="1.0249"
                        y1="0.169251"
                        x2="1.0249"
                        y2="69.421"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeDasharray="3 3"
                      />
                    </svg>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <div className="grid place-content-center place-items-center mx-auto max-w-xl xl:max-w-none  img-wrapper opacity-0">
          <img
            src={pinnaclePro}
            alt="pinnacle pro product view"
            className=" w-11/12 md:w-full h-full object-contain object-center"
          />
        </div>
      </section>
    </div>
  )
}
