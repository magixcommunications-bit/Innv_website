import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'
import { StatCard } from 'molecules/statCard'
import { StatsListType } from 'utils/homeTypes'
// import { StatsListType } from 'screens/home/stats'

export default function StatsDesignFeatures({
  featuresData,
  headings,
}: {
  featuresData: StatsListType[]
  headings: React.ReactNode
}) {
  return (
    <>
      {featuresData.length === 0 ? null : (
        <>
          <section className="blade-top-padding md:pb-8 bg-lightgray">
            <section className="blade-bottom-padding-lg">
              <div className="px-3 md:w-11/12 xl:w-[90%] 2xl:w-[80%] mx-auto">
                <div className="grid gap-2 md:gap-3 lg:gap-4 relative">
                  {headings}

                  {/* Carousel buttons */}
                  <div className="md:flex gap-2.5 hidden absolute top-auto bottom-2 right-0 gsap-opacity-trans-appear">
                    <CarouselBtn
                      activeIndex={-1}
                      color="orange"
                      onClick={() => {}}
                      index={0}
                      text="Move to previous slide"
                      size="base"
                      type="button"
                      extraClasses={
                        extraClasses +
                        'swiper-prev !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black hover:!fill-orange hover:!bg-white hover:!border-white !rounded-xl'
                      }
                    />
                    <CarouselBtn
                      activeIndex={-1}
                      color="orange"
                      onClick={() => {}}
                      index={featuresData.length - 1}
                      text="Move to next slide"
                      size="base"
                      type="button"
                      isRotated
                      extraClasses={
                        extraClasses +
                        'swiper-next !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black hover:!fill-orange hover:!bg-white hover:!border-white !rounded-xl'
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="md:pl-[4%] xl:pl-[5%] 2xl:pl-[10%] blade-top-padding">
                <Swiper
                  slidesPerView={1.075}
                  spaceBetween={60}
                  centeredSlides
                  breakpoints={{
                    475: {
                      slidesPerView: 1.3,
                      centeredSlides: false,
                    },
                    640: {
                      slidesPerView: 1.8,
                    },
                    768: {
                      slidesPerView: 1.8,
                      pagination: false,
                      centeredSlides: false,
                    },
                    900: {
                      slidesPerView: 2,
                      pagination: false,
                      centeredSlides: false,
                    },
                    1024: {
                      spaceBetween: 60,
                      slidesPerView: 2.5,
                      pagination: false,
                      centeredSlides: false,
                    },
                    1280: {
                      pagination: false,
                      slidesPerView: 2.8,
                      centeredSlides: false,
                    },
                    1440: {
                      pagination: false,
                      slidesPerView: 3.1,
                      centeredSlides: false,
                    },
                  }}
                  pagination={{
                    bulletActiveClass: 'bg-orange opacity-100',
                    clickable: true,
                  }}
                  loop
                  // autoplay={{
                  //   delay: 2000,
                  // }}
                  speed={1000}
                  modules={[Pagination, Autoplay, Navigation, A11y]}
                  navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                  }}
                  className="pr-3 pb-16 md:pb-6 h-full select-none cursor-grab min-[475px]:pr-0 min-[475px]:ml-3"
                >
                  {featuresData.map((elem: StatsListType, index: number) => {
                    const key = `${index}`
                    return (
                      <SwiperSlide key={key} className="min-h-full h-full ">
                        <StatCard data={elem} />
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
