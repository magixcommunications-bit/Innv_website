import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

import { Autoplay, Navigation, Pagination } from 'swiper'
import { enhancementData } from './enhancements'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from './carousel'

export default function EnhancementsMobile(data: enhancementData) {
  const [currentIndex, setCurrent] = useState(0)
  const { title, enhancements, subTitle, extraText } = data

  return (
    <>
      {enhancements.length === 0 ? null : (
        <>
          <section className="blade-bottom-padding-sm bg-blue-light-gradient">
            <section className="blade-bottom-padding-lg">
              <div className="px-3 md:w-11/12 xl:w-[90%] 2xl:w-[80%] mx-auto blade-top-padding-sm">
                <div className="blade-top-padding grid gap-2 md:gap-3 lg:gap-4 relative">
                  <h3 className=" font-medium  w-11/12 md:text-left leading-snug pb-2 text-center ml-auto md:ml-0 mr-auto">
                    {title}
                  </h3>
                  <h6 className="w-11/12 max-w-lg text-center mx-auto">
                    {subTitle}
                  </h6>
                </div>
              </div>

              <div className="md:pl-[10%] blade-top-padding design-feature-carousel md:hidden block">
                <Swiper
                  slidesPerView={1.05}
                  centeredSlides
                  spaceBetween={60}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                  }}
                  loop
                  onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
                  speed={1000}
                  modules={[Pagination, Navigation, Autoplay]}
                  autoplay={{
                    delay: 3500,
                  }}
                  navigation={{
                    prevEl: '.enhancements-mobile-prev',
                    nextEl: '.enhancements-mobile-next',
                  }}
                  className=" min-h-full cursor-pointer"
                >
                  {enhancements.map((elem: any, index: number) => {
                    const key = `${index}`
                    return (
                      <SwiperSlide key={key} className="min-h-full h-full">
                        <Slide
                          title={elem.title}
                          coverImage={elem.coverImage}
                          desc={elem.desc}
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>

                <div className="lg:hidden flex justify-center px-6">
                  <div className="flex pt-5 xl:pt-10 gap-4 xl:gap-6 2xl:gap-8">
                    <CarouselBtn
                      activeIndex={currentIndex}
                      color="white"
                      onClick={() => {}}
                      index={0}
                      text="Move to previous slide"
                      size="base"
                      type="button"
                      extraClasses={extraClasses + ' enhancements-mobile-prev '}
                    />

                    <div className="flex gap-1 items-center">
                      <span className="text-orange font-medium  text-xl ">
                        0{currentIndex + 1}
                      </span>
                      <span className="text-white font-medium  text-xl ">
                        &ndash;
                      </span>
                      <span className="text-white font-medium text-xl ">
                        0{enhancements.length}
                      </span>
                    </div>
                    <CarouselBtn
                      activeIndex={currentIndex}
                      color="white"
                      onClick={() => {}}
                      index={enhancements.length - 1}
                      text="Move to next slide"
                      size="base"
                      type="button"
                      isRotated
                      extraClasses={extraClasses + ' enhancements-mobile-next '}
                    />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </>
      )}
    </>
  )
}

function Slide({
  coverImage,
  title,
  desc,
}: {
  title: string
  coverImage: string
  desc: string
}) {
  return (
    <article className="h-full">
      <div className="grid place-content-start pb-3 place-items-start">
        <img
          src={coverImage}
          alt={title}
          className=" w-full xl:w-11/12  object-contain rounded-md"
        />
      </div>
      <div>
        <span className="px-3 text-lg text-center text-white md:text-black font-regular leading-tight xl:leading-snug w-11/12 pt-3.5 pb-2.5 block">
          {title}
        </span>
        <span className="px-3 text-base text-center font-light text-white text-opacity-90 md:text-black font-regular leading-tight w-11/12 block">
          {desc}
        </span>
      </div>
    </article>
  )
}
