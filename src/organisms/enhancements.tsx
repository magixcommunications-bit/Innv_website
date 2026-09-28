import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

import { EffectCreative, Navigation } from 'swiper'
import EnhancementsSlide from 'molecules/enhancementsSlide'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from './carousel'
import { EnhancementsType } from 'utils/eliteTypes'

export type enhancementData = {
  enhancements: EnhancementsType[]
  title: string
  subTitle: string
  extraText?: string
}

const Enhancements = (data: enhancementData) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const { title, enhancements, subTitle, extraText } = data

  return (
    <>
      {enhancements.length === 0 ? null : (
        <>
          <section className="enhancement-carousel">
            <div className="grid grid-cols-10 gap-x-3 xl:gap-x-10">
              <div
                className="blade-top-padding-sm blade-bottom-padding-sm col-start-1 col-end-6 lg:col-end-5 xl:col-end-6"
                style={{
                  backgroundImage:
                    'linear-gradient( to right, #F1F5F6 , #F1F5F6 55% , white 55%, white )',
                }}
              >
                <div className="blade-top-padding blade-bottom-padding">
                  <div className="pl-14 xl:pl-[10.5%] 2xl:pl-24 pr-6 2xl:pr-20">
                    <div className="bg-lightgray px-3 md:px-6 xl:px-10 2xl:px-20 grid gap-6 py-10 xl:py-16 2xl:py-28 rounded-md">
                      <h3 className="font-medium ">{title}</h3>
                      <h5 className="font-regular   max-w-md 2xl:pt-4">
                        {subTitle}
                      </h5>
                      <h5 className="font-regular  text-opacity-80  max-w-md">
                        {enhancements[activeIndex].title}
                      </h5>

                      {extraText && (
                        <h5 className="font-regular  text-opacity-80 max-w-md">
                          {extraText}
                        </h5>
                      )}
                      <div className="flex  pt-5 xl:pt-10  gap-4 xl:gap-6">
                        <CarouselBtn
                          activeIndex={activeIndex}
                          color="black"
                          onClick={() => {}}
                          index={0}
                          text="Move to previous slide"
                          size="base"
                          type="button"
                          extraClasses={
                            extraClasses +
                            ' enhancements-swiper-prev !border-1 !p-4'
                          }
                        />
                        <div className="flex gap-1 items-center">
                          <span className="text-orange font-medium  text-xl ">
                            0{activeIndex + 1}
                          </span>
                          <span className=" font-medium  text-xl ">
                            &ndash;
                          </span>
                          <span className=" font-medium text-xl ">
                            0{enhancements.length}
                          </span>
                        </div>
                        <CarouselBtn
                          activeIndex={activeIndex}
                          color="black"
                          onClick={() => {}}
                          index={enhancements.length - 1}
                          text="Move to next slide"
                          size="base"
                          type="button"
                          isRotated
                          extraClasses={
                            extraClasses +
                            ' enhancements-swiper-next !border-1 !p-4'
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blade-top-padding blade-bottom-padding col-start-6 lg:col-start-5 xl:col-start-6 col-end-11 pr-0 lg:pr-0">
                <div className="blade-top-padding blade-bottom-padding h-full">
                  <div className="h-full flex items-center xl:pl-10 2xl:pl-14">
                    <Swiper
                      initialSlide={0}
                      slidesPerGroup={1}
                      grabCursor={true}
                      speed={500}
                      loop={true}
                      effect={'creative'}
                      preloadImages={true}
                      slidesPerView={1}
                      breakpoints={{
                        768: {
                          slidesPerView: 1.2,
                        },
                        976: {
                          slidesPerView: 1.4,
                        },
                        1024: {
                          slidesPerView: 1.3,
                        },

                        1280: {
                          slidesPerView: 1.5,
                        },
                      }}
                      onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex)
                      }}
                      creativeEffect={{
                        limitProgress: 3,
                        prev: {
                          shadow: false,
                          translate: [0, 0, -300],
                          opacity: 0,
                        },

                        next: {
                          translate: ['110%', 0, 0],
                          opacity: 0.3,
                        },
                      }}
                      modules={[EffectCreative, Navigation]}
                      navigation={{
                        nextEl: '.enhancements-swiper-next',
                        prevEl: '.enhancements-swiper-prev',
                      }}
                      className="cursor-pointer"
                    >
                      {enhancements.map((elem, index: number) => {
                        const key = `${index}`
                        const { title, coverImage, desc } = elem
                        return (
                          <SwiperSlide key={key}>
                            <EnhancementsSlide
                              title={title}
                              coverImage={coverImage}
                              desc={desc}
                            />
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default Enhancements
