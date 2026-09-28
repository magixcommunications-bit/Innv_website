import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation } from 'swiper'
import { useAdmin } from 'store/store'
import './awards.css'
import useFetchAward from 'hooks/useFetchAward'

export default function AwardsRecognition() {
  const wrapperHeadRef = useRef<any>()

  const { awardsData } = useAdmin()
  useFetchAward()

  return (
    <>
      {awardsData.SECTION_2.length === 0 ? null : (
        <>
          <section className="bg-[#fff] productswrapper border-b-1 border-gray">
            <section
              className="bg-white blade-top-padding blade-bottom-padding-lg"
              ref={wrapperHeadRef}
            >
              <h3 className="gsap-opacity-trans-appear font-medium text-center translate-y4 opacity0">
                Awards & recognition
              </h3>

              <h6 className="gsap-opacity-trans-appear text-center font-regular text-black text-opacity-60 mt-2 mb-6 translate-y4 opacity0 px-3 pb-2 pt-1 ">
                Asia's most awarded Cath lab manufacturing company
              </h6>

              {/* <div className="marquee-parent select-none w-full overflow-hidden blade-top-margin-sm flex gap-14 md:gap-16 lg:gap-20 xl:gap-24">
          <div className="marquee-cath shrink-0 d">
            <div className="flex gap-14 md:gap-16 lg:gap-20 xl:gap-24 shrink-0">
              {[...logos, ...logos].map((item, ind) => {
                return (
                  <img
                    key={ind}
                    src={item.logo}
                    alt={item.alt}
                    className="w-40 z-10 h-fit object-contain object-center max-h-16 lg:max-h-20 xsl:max-h-[5.25rem] 2xl:max-h-24 m-auto"
                  />
                )
              })}
            </div>
          </div>
        </div> */}
              <div className="carousel-swiper marquee-parent blade-top-margin-sm">
                <Swiper
                  modules={[Autoplay, Navigation, FreeMode]}
                  slidesPerView={'auto'}
                  spaceBetween={60}
                  breakpoints={{
                    768: {
                      spaceBetween: 70,
                    },
                    1024: {
                      spaceBetween: 80,
                    },
                    1175: {
                      spaceBetween: 100,
                    },
                    1280: {
                      spaceBetween: 120,
                    },
                  }}
                  loop
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                  }}
                  lazy
                  speed={4000}
                  freeMode
                  className=""
                  preventInteractionOnTransition
                >
                  {awardsData.SECTION_2.map((item, index) => {
                    return (
                      <SwiperSlide
                        key={index}
                        className="flex justify-center items-center !w-fit select-none my-auto"
                      >
                        <img
                          // loading="lazy"
                          key={index}
                          src={item.logo as string}
                          alt={item.title}
                          className="w-auto self-center h-auto object-contain object-center max-h-16 md:max-h-[4.25rem] lg:max-h-20 xsl:max-h-[5.25rem] 2xl:max-h-24 m-auto"
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </section>
          </section>
        </>
      )}
    </>
  )
}
