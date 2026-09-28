import React from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import slideImage from 'assets/resources/carousel-slide-image.jpg'

import './index.css'

const data = [
  {
    image: slideImage,
    title: 'default',
  },
  {
    image: slideImage,
    title: 'default',
  },
  {
    image: slideImage,
    title: 'default',
  },
  {
    image: slideImage,
    title: 'default',
  },
]

const Carousel = () => {
  return (
    <section className="bg-[url(assets/resources/carousel-background.png)] bg-cover bg-bottom">
      <div className="blade-top-padding blade-bottom-padding-lg ">
        <div className="flex justify-center w-container">
          <h3
            className="max-w-xs sm:max-w-lg lg:max-w-2xl 2xl:max-w-5xl text-center bg-red-50 bg-clip-text text-transparent font-medium"
            style={{
              backgroundImage:
                'linear-gradient(180deg, #0F73BA 0%, #0036D6 130.12%)',
            }}
          >
            Take a closer look at our interventions and get insights from our
            leadership, experts, and healthcare professionals
          </h3>
        </div>
        <div className="blade-top-margin resource-page-carousel">
          <Swiper
            effect={'coverflow'}
            autoHeight={true}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={1.2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2,
                pagination: false,
                spaceBetween: 60,
              },
              768: {
                slidesPerView: 2,
                pagination: false,
                spaceBetween: 100,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={30}
            pagination={{
              bulletActiveClass: '!bg-orange !opacity-100',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="h-fit pb-12 sm:pb-0 sm:px-3"
          >
            {data.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="select-none cursor-pointer">
                  <img
                    className="h-full w-full rounded-md"
                    src={slide.image}
                    alt={slide.title}
                  />
                </SwiperSlide>
              )
            })}

            {/* Buttons for sm 640px and above screens */}
            <div className="sm:flex absolute hidden left-0 sm:left-1/4 2xl:-translate-x-3 xl:-translate-x-1 top-1/2 -translate-y-1/2 z-30 items-center">
              <button
                aria-label="Move to previous slide"
                className="2xl:w-16 w-10 2xl:h-16 h-10 xl:h-12 xl:w-12 rounded-md flex justify-center items-center bg-white group transition-all duration-200 swiper-button-prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-4 2xl:h-6 w-auto xl:h-5 md:h-4 h-3 group-hover:scale-[1.2] fill-[#0B64C0] transition-all duration-200"
                  viewBox="0 0 25 21"
                >
                  <path d="M9.52058 1.08151L10.6028 -0.000732422L12.7672 2.16374L11.685 3.24597L9.52058 1.08151ZM2.56763 10.1989L1.48541 11.2811L0.403183 10.1989L1.48541 9.11669L2.56763 10.1989ZM11.685 17.1519L12.7672 18.2341L10.6028 20.3985L9.52058 19.3163L11.685 17.1519ZM23.2295 8.6684H24.76V11.7294H23.2295V8.6684ZM11.685 3.24597L3.64985 11.2811L1.48541 9.11669L9.52058 1.08151L11.685 3.24597ZM3.64985 9.11669L11.685 17.1519L9.52058 19.3163L1.48541 11.2811L3.64985 9.11669ZM2.56763 8.6684H23.2295V11.7294H2.56763V8.6684Z" />
                </svg>
              </button>
            </div>

            <div className="sm:flex absolute hidden sm:right-1/4 2xl:translate-x-3 xl:translate-x-1 top-1/2 -translate-y-1/2 z-30 items-center">
              <button
                aria-label="Move to previous slide"
                className="2xl:w-16 w-10 2xl:h-16 h-10 xl:h-12 xl:w-12 rounded-md flex justify-center items-center bg-white group transition-all duration-200 rotate-180 swiper-button-next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-4 2xl:h-6 w-auto xl:h-5 md:h-4 h-3 group-hover:scale-[1.2] fill-[#0B64C0] transition-all duration-200"
                  viewBox="0 0 25 21"
                >
                  <path d="M9.52058 1.08151L10.6028 -0.000732422L12.7672 2.16374L11.685 3.24597L9.52058 1.08151ZM2.56763 10.1989L1.48541 11.2811L0.403183 10.1989L1.48541 9.11669L2.56763 10.1989ZM11.685 17.1519L12.7672 18.2341L10.6028 20.3985L9.52058 19.3163L11.685 17.1519ZM23.2295 8.6684H24.76V11.7294H23.2295V8.6684ZM11.685 3.24597L3.64985 11.2811L1.48541 9.11669L9.52058 1.08151L11.685 3.24597ZM3.64985 9.11669L11.685 17.1519L9.52058 19.3163L1.48541 11.2811L3.64985 9.11669ZM2.56763 8.6684H23.2295V11.7294H2.56763V8.6684Z" />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Carousel
