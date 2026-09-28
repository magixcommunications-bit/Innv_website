import React, { useState } from 'react'
import product from 'assets/sapphireIINC/product/product.png'
import lineChart from 'assets/sapphireIINC/product/lineChart.svg'
import barChart from 'assets/sapphireIINC/product/barChart.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper'

const chartData = [
  { image: barChart, title: 'Crossing Profile (Ø3.0 mm)' },
  { image: lineChart, title: 'Minimal Balloon Growth and Sizing Accuracy' },
]

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="blade-top-padding blade-bottom-padding-lg bg-[url(assets/sapphireIINC/product/bg.png)] bg-cover bg-center">
      <h4 className="gsap-opacity-trans-appear text-center max-w-lg lg:max-w-xl 2xl:max-w-2xl mx-auto font-medium font-regular text-darkgray">
        <span className="text-orange"> Enhanced distal Z-Tip</span> with
        advanced laser welding technology for “
        <strong className="text-orange font-bold">ZERO</strong>” transition with
        conventional steerable guidewires
      </h4>

      <div className="gsap-opacity-trans-appear relative font-regular text-darkgray w-fit pt-12 lg:blade-top-padding-sm px-3 max-w-2xl mx-auto lg:max-w-3xl xl:max-w-4xl 2xl:max-w-none mt-6">
        <img src={product} alt="Sapphire II NC" className="mx-auto" />
        <h6 className="text-[12px] font-medium absolute top-[60%] sm:top-[55%] sm:text-sm lg:text-base xl:text-xl">
          <span className="text-orange font-bold lg:text-lg">"ZERO"</span>{' '}
          transition between <br /> distal leading tip and <br /> conventional
          0.014" guidewire
        </h6>
        <h6 className="text-[12px] font-medium absolute top-[8%] left-[40% right-3 min-[400px]:top-[15%] sm:text-sm lg:text-base lg:top-[10%] xl:max-w-[17rem] xl:text-xl xl:top-[33%] xl:-right-32 2xl:-right-52 2xl:text-xl">
          Special proprietary balloon processing <br className="xl:hidden" />{' '}
          resulting in super crossing profile for <br className="xl:hidden" />{' '}
          primary and repeated lesion entry
        </h6>
      </div>

      {/* Separator */}
      <div className="blade-top-padding-sm blade-bottom-padding-sm"></div>

      {/* Charts */}
      <section>
        <div className="gsap-opacity-trans-appear 2xl:gap-7 gap-6 md:flex hidden items-center max-w-5xl mx-auto justify-center blade-bottom-padding">
          <button
            aria-label="Crossing Profile (Ø3.0 mm)"
            type="button"
            // onClick={() => handleTabClick(index)}
            className={`swiper-prev-chart flex max-w-fit 2xl:text-xl text-lg border-[1.5px] transition-all px-3 duration-300 border-solid rounded-md font-medium 2xl:px-5 py-2 focus:outline-orange place-content-center flex-1 items-center gap-3 ${
              activeIndex === 0
                ? 'text-orange !border-orange bg-white'
                : 'text-[#4D4D4D] !border-transparent bg-transparent'
            }`}
          >
            <svg
              className={`${
                activeIndex === 0 ? 'fill-[#F69A4D]' : 'fill-[#4D4D4D] h-0 w-0'
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
            Crossing Profile (Ø3.0 mm)
          </button>

          <svg
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

          <button
            aria-label="Minimal Balloon Growth and Sizing Accuracy"
            type="button"
            // onClick={() => handleTabClick(index)}
            className={`swiper-next-chart flex max-w-fit 2xl:text-xl text-lg border-[1.5px] transition-all px-3 duration-300 border-solid rounded-md font-medium 2xl:px-5 py-2 focus:outline-orange place-content-center flex-1 items-center gap-3 ${
              activeIndex === 1
                ? 'text-orange !border-orange bg-white'
                : 'text-[#4D4D4D] !border-transparent bg-transparent'
            }`}
          >
            <svg
              className={`${
                activeIndex === 1 ? 'fill-[#F69A4D]' : 'fill-[#4D4D4D] h-0 w-0'
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
            Minimal Balloon Growth and Sizing Accuracy
          </button>
        </div>
        <div className="gsap-opacity-trans-appear">
          <Swiper
            modules={[Pagination, Navigation, EffectFade]}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides
            autoHeight
            effect="fade"
            breakpoints={{
              768: {
                pagination: false,
              },
            }}
            fadeEffect={{
              crossFade: true,
            }}
            speed={1000}
            pagination={{
              bulletActiveClass: '!bg-[#F69A4D] !opacity-100',
            }}
            onSlideChange={(e) => {
              setActiveIndex(e.realIndex)
            }}
            navigation={{
              nextEl: '.swiper-next-chart',
              prevEl: '.swiper-prev-chart',
            }}
            className="cursor-grab w-container max-w-6xl"
          >
            {chartData.map((elem, index) => {
              return (
                <SwiperSlide key={index} className="">
                  <img
                    src={elem.image}
                    alt={elem.title}
                    className="h-auto product-chart bar-chart w-full pb-8 select-none border-gray md:border-1 md:p-6 rounded-md border-opacity-70"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </section>
  )
}

export default Product
