import './index.css'
import React, { useState, useRef, useCallback } from 'react'
import CrownTechnicalSpecification from 'assets/diamondBack360/crown-technical-specifications/cts.webp'
import ViperwireAdvance from 'assets/diamondBack360/crown-technical-specifications/vw-advance.webp'
import Viperwire from 'assets/diamondBack360/crown-technical-specifications/ViperWire.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper'

const data = [
  {
    tab: 'ViperWire™',
    image: Viperwire,
  },
  {
    tab: 'ViperWire Advance with Flex Tip ',
    image: ViperwireAdvance,
  },
]

export function CrownTechnicalSpecifications() {
  const [activeIndex, setActiveIndex] = useState(0)

  const swiperRef = useRef<any>(null)

  const slideChange = useCallback(
    (index: number) => {
      setActiveIndex(index)
      if (swiperRef.current) {
        swiperRef?.current?.swiper?.slideTo(index)
      }
    },
    [swiperRef],
  )

  return (
    <div className="crown-technical-specification blade-bottom-padding-lg">
      <div className="blade-top-padding">
        <h3 className="gsap-opacity-trans-appear font-medium text-black text-center">
          CROWN TECHNICAL SPECIFICATIONS
        </h3>
        <div className="mt-8 lg:mt-10 xl:mt-14 w-container 2xl:w-container-sm  xl:max-w-[1336px]">
          <div className="xl:w-[80%] h-auto mx-auto">
            <img
              src={CrownTechnicalSpecification}
              alt="Technical specifications of crown"
              className="gsap-opacity-trans-appear w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="gsap-opacity-trans-appear 2xl:gap-7 gap-6 md:flex hidden items-center max-w-5xl mx-auto justify-center blade-bottom-padding md:pt-16 lg:pt-20 xl:pt-28">
          {data.map((elem, index) => {
            return (
              <React.Fragment key={index}>
                <button
                  aria-label={elem.tab}
                  type="button"
                  onClick={() => slideChange(index)}
                  className={`flex max-w-fit 2xl:text-xl text-lg border-[1.5px] transition-all px-3 duration-300 border-solid rounded-md font-medium 2xl:px-5 py-2 focus:outline-orange place-content-center flex-1 items-center gap-3 ${
                    activeIndex === index
                      ? 'text-orange !border-orange bg-white'
                      : 'text-[#4D4D4D] !border-transparent bg-transparent'
                  }`}
                >
                  <svg
                    className={`${
                      activeIndex === index
                        ? 'fill-[#F69A4D]'
                        : 'fill-[#4D4D4D] h-0 w-0'
                    } transition-all duration-300`}
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
                <svg
                  className="last:hidden"
                  width="2"
                  height="33"
                  viewBox="0 0 2 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.02969"
                    y1="0.693848"
                    x2="1.02969"
                    y2="32.3062"
                    stroke="#CCCCCC"
                    strokeWidth="1.2"
                  />
                </svg>
              </React.Fragment>
            )
          })}
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Navigation, A11y]}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides
          autoHeight
          breakpoints={{
            768: {
              pagination: false,
            },
          }}
          speed={1000}
          pagination={{
            bulletActiveClass: 'bg-orange opacity-100',
          }}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex)
          }}
          navigation={{
            nextEl: '.swiper-next-chart',
            prevEl: '.swiper-prev-chart',
          }}
          className="cursor-pointer w-container max-w-6xl pb-8 md:pb-4 blade-top-padding-lg md:pt-0"
        >
          {data.map((elem, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`${
                  activeIndex === index
                    ? 'swiper-slide-visible swiper-slide-active'
                    : ''
                } h-full`}
              >
                <p className="font-medium md:hidden text-xl text-center pb-6">
                  {elem.tab}
                </p>
                <img
                  src={elem.image}
                  alt={elem.tab}
                  className={`h-auto product-chart bar-chart w-full pb-5 md:pb-0 select-none xl:max-w-3xl mx-auto xsl:max-w-4xl 2xl:max-w-6xl`}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
