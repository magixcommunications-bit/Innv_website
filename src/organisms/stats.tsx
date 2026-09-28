import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'

import './stats.css'

import 'swiper/css'
import 'swiper/css/pagination'
import { StatsListType } from 'utils/agileTypes'

type StatsData = {
  title: string
  subTitle: string
  isCenterAligned: boolean
  toShowButton: boolean
  bgGrad: string
  bgClasses: string
  statsList: StatsListType[]
}

export default function Stats({
  title,
  subTitle,
  isCenterAligned,
  toShowButton,
  bgGrad,
  bgClasses,
  statsList,
}: StatsData) {
  const [progressSlide, setProgressSlide] = useState(0)

  return (
    <section
      style={{
        background: bgGrad ? bgGrad : 'none',
      }}
    >
      <section
        className={`blade-bottom-padding-lg blade-top-padding-lg ${bgClasses} bg-cover bg-center`}
      >
        <div className="w-container lg:w-container">
          <div
            className={`gap-2 md:gap-3 lg:gap-4 relative ${
              isCenterAligned &&
              'min-[1300px]:text-center min-[1300px]:flex min-[1300px]:flex-col min-[1300px]:items-center'
            }`}
          >
            <h3 className="gsap-opacity-trans-appear  font-medium text-center  md:text-left text-white">
              {title}
            </h3>
            <h6
              className={`gsap-opacity-trans-appear text-white text-center md:text-left font-light tracking-wider max-w-md lg:max-w-md 
              xl:max-w-lg 2xl:max-w-[48rem] mt-3 mx-auto md:mx-0 2xl:mt-6 ${
                !toShowButton && '!mt-1'
              }`}
            >
              {subTitle}
            </h6>
            <div
              className={`gsap-opacity-trans-appear md:flex hidden absolute gap-5 bottom-1 right-0 ${
                !toShowButton && 'min-[1300px]:hidden'
              }`}
            >
              <button
                aria-label="Previous button"
                className={`w-11 h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-[5px] swiper-prev-stat-pinnacle flex disabled:opacity-60
                  justify-center items-center group transition-all duration-200 ${
                    progressSlide === 0
                      ? 'bg-transparent border-2 border-white fill-white cursor-not-allowed'
                      : 'bg-white cursor-pointer fill-orange hover:bg-orange hover:fill-white'
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 2xl:h-5"
                  viewBox="0 0 25 21"
                >
                  <path d="M9.52058 1.08151L10.6028 -0.000732422L12.7672 2.16374L11.685 3.24597L9.52058 1.08151ZM2.56763 10.1989L1.48541 11.2811L0.403183 10.1989L1.48541 9.11669L2.56763 10.1989ZM11.685 17.1519L12.7672 18.2341L10.6028 20.3985L9.52058 19.3163L11.685 17.1519ZM23.2295 8.6684H24.76V11.7294H23.2295V8.6684ZM11.685 3.24597L3.64985 11.2811L1.48541 9.11669L9.52058 1.08151L11.685 3.24597ZM3.64985 9.11669L11.685 17.1519L9.52058 19.3163L1.48541 11.2811L3.64985 9.11669ZM2.56763 8.6684H23.2295V11.7294H2.56763V8.6684Z" />
                </svg>
              </button>
              <button
                aria-label="Next button"
                className={`w-11 h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-[5px] swiper-next-stat-pinnacle flex disabled:opacity-60
                justify-center items-center   group transition-all duration-200 rotate-180 ${
                  progressSlide === 1
                    ? 'bg-transparent border-2 border-white  fill-white cursor-not-allowed'
                    : 'bg-white cursor-pointer fill-orange hover:bg-orange hover:fill-white'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 2xl:h-5"
                  viewBox="0 0 25 21"
                >
                  <path d="M9.52058 1.08151L10.6028 -0.000732422L12.7672 2.16374L11.685 3.24597L9.52058 1.08151ZM2.56763 10.1989L1.48541 11.2811L0.403183 10.1989L1.48541 9.11669L2.56763 10.1989ZM11.685 17.1519L12.7672 18.2341L10.6028 20.3985L9.52058 19.3163L11.685 17.1519ZM23.2295 8.6684H24.76V11.7294H23.2295V8.6684ZM11.685 3.24597L3.64985 11.2811L1.48541 9.11669L9.52058 1.08151L11.685 3.24597ZM3.64985 9.11669L11.685 17.1519L9.52058 19.3163L1.48541 11.2811L3.64985 9.11669ZM2.56763 8.6684H23.2295V11.7294H2.56763V8.6684Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="gsap-opacity-trans-appear md:pl-[4.5%] lg:pl-[8.5%] 2xl:pl-[10%] pt-10 select-none lg:pt-14 2xl:pt-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={60}
            autoHeight
            centeredSlides
            draggable
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 1.8,
                centeredSlides: false,
                pagination: false,
              },
              1024: {
                spaceBetween: 60,
                slidesPerView: 2.2,
                centeredSlides: false,
                pagination: false,
              },
              1280: {
                slidesPerView: 2.5,
                centeredSlides: false,
                pagination: false,
              },
              1440: {
                centeredSlides: false,
                slidesPerView: 3.1,
                pagination: false,
              },
            }}
            onSlideChange={(e) => {
              setProgressSlide(+e.progress)
            }}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              bulletActiveClass: '!bg-white !opacity-100',
            }}
            speed={1000}
            modules={[Pagination, Autoplay, Navigation]}
            navigation={{
              nextEl: '.swiper-next-stat-pinnacle',
              prevEl: '.swiper-prev-stat-pinnacle',
            }}
            className="pl-3 pr-7 pb-16 md:pb-8 h-full min-h-full cursor-grab relative select-none"
          >
            {statsList.map((elem: StatsListType, index: number) => {
              return (
                <SwiperSlide key={index} className="min-h-full h-full ">
                  <Card withPadding data={elem} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </section>
  )
}

function Card({ data }: { data: StatsListType } & { withPadding?: boolean }) {
  const { stat, desc, coverImage, alt } = data
  return (
    <article className="h-full p-2 md:p-3 blur-gradient-stats rounded-md ">
      <div className="rounded-md overflow-hidden relative z-10 bg-white">
        <img
          src={coverImage as string}
          className="h-full w-full object-cover object-top"
          alt={alt || stat}
        />
      </div>

      <div className="p-2 md:p-3 z-10 pl-0 md:pl-0">
        <h4 className="text-white pt-3  font-medium tracking-wide leading-tight">
          {stat}
        </h4>
        <h6 className="text-white font-light leading-tight md:pb-1 pb-3 tracking-[0.5px] mt-2 lg:mt-5">
          {desc}
        </h6>
      </div>
      <div className="absolute h-full w-full top-4 left-4 z-[-1] border rounded-md bg-white bg-opacity-10 border-white border-opacity-20 " />
    </article>
  )
}
