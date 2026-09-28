import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { features } from './featureCarousal'
import { useState } from 'react'
import { A11y, Navigation } from 'swiper'
import { number } from 'zod'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'

export function FeatureCarousalMobile() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div
      className="blade-top-padding blade-bottom-padding"
      // style={{
      //   background:
      //     'linear-gradient(to right bottom, #FEC89A 54.75%, #FEC89A 108.01%), #EFF3F4',
      // }}
    >
      <div className="w-container">
        <Swiper
          navigation={{
            prevEl: '.enhancements-mobile-prev',
            nextEl: '.enhancements-mobile-next',
          }}
          modules={[Navigation, A11y]}
          className="cursor-grab"
        >
          {features.map((item: any, key: number) => (
            <SwiperSlide className="flex flex-col" key={key}>
              <div>
                <h3 className="font-medium text-center  ">{item.title}</h3>
                <img
                  src={item.image}
                  className="mt-4 h-auto rounded-[6px] sm:h-[320px] mx-auto"
                />
                <h6 className="font-regular mx-auto text-center mt-4  text-opacity-100 tracking-wider max-w-lg">
                  {item.des}
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center pt-10  gap-4 xl:gap-6  2xl:gap-8">
          <CarouselBtn
            activeIndex={activeIndex}
            color="orange"
            onClick={() =>
              activeIndex > 0 && setActiveIndex((prev) => prev - 1)
            }
            index={0}
            text="Move to previous slide"
            size="base"
            type="button"
            extraClasses={
              extraClasses + ' enhancements-mobile-prev !border-1 !p-3.5'
            }
          />
          <div className="flex h-fit gap-1 items-center">
            <span className=" font-medium  text-xl ">0{activeIndex + 1}</span>
            <span className=" font-medium  text-xl ">&ndash;</span>
            <span className=" font-medium text-xl ">02</span>
          </div>

          <CarouselBtn
            activeIndex={activeIndex}
            color="orange"
            onClick={() =>
              activeIndex < 1 && setActiveIndex((prev) => prev + 1)
            }
            index={2}
            text="Move to next slide"
            size="base"
            type="button"
            isRotated
            extraClasses={
              extraClasses + ' enhancements-mobile-next !border-1 !p-3.5'
            }
          />
        </div>
      </div>
    </div>
  )
}
