import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import enhanced_product from 'assets/premier_Select/enhanced/enhanced-product.png'

import 'swiper/css'
import 'swiper/css/pagination'

import { A11y, Pagination } from 'swiper'

const Enhanced = () => {
  const data = [
    {
      number: 1,
      title: 'Ensure safety throughout extended interventions',
      desc: 'An ergonomic design and user-friendly controls for safety assurance during complex interventions that demand extended durations.',
    },
    {
      number: 2,
      title: 'Enhance safety for patient mobility',
      desc: 'The innovative design enhances patient mobility, eliminating the necessity for stretchers.',
    },
    {
      number: 3,
      title: 'Minimize physician fatigue and strain',
      desc: 'Adaptable operator workstations and user-friendly equipment positioning controls help alleviate the physical strain on healthcare professionals.',
    },
    {
      number: 4,
      title: 'Cutting-edge anti-collision safety measures',
      desc: 'Anti-collision sensors offer a secure environment for both patients and healthcare professionals.',
    },
  ]

  return (
    <div className="min-h-scree bg-lightorange bg-cover bg-center">
      <div className="h-full max-md:max-w-xl w-container-lg flex flex-col-reverse lg:flex-row items-center justify-between lg:items-end xl:gap-7">
        <Swiper
          spaceBetween={8}
          pagination={{
            // dynamicBullets: true,
            bulletActiveClass: 'bg-white opacity-100',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, A11y]}
          className="mySwipe cursor-pointer premier-swipe w-full lg:hidden blade-bottom-margin pb-10 -mt-10 md:-mt-20"
        >
          {data.map((elem, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="w-full bg-white px-5 pt-5 pb-7 md:px-8 md:py-8 flex flex-col gap-3 h-[260px] rounded-md">
                  <h6 className="text-[#FF9015] text-base md:text-lg font-medium">
                    {elem.number}/<span className="text-[#FFCE97]">4</span>
                  </h6>
                  <h1 className="text-xl font-medium md:text-xl">
                    {elem.title}
                  </h1>
                  <p className="text-base  font-normal md:text-lg font-regular leading-snug">
                    {elem.desc}
                  </p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className="mt-10 lg:mt-0 h-fit w-full xl:w-1/2 flex flex-col justify-center xsl:justify-end">
          <img
            className="h-fit w-full object-fill lg:pr-6"
            src={enhanced_product}
            alt="side view of man on a cath lab"
          />
        </div>

        <div className="relative mt-8 md:mt-10 lg:mt-0 xl:w-1/2 lg:h-fit lg:blade-top-padding overflow-y-hidden">
          <h3 className="leading-8 text-center lg:text-left xl:leading-snug font-medium">
            Ergonomic design for enhanced
            <br className="hidden min-[400px]:block" /> safety in procedures
          </h3>
          <h6 className="text-center lg:text-left font-regular leading-snug xl:w-[75%] 2xl:w-[70%] mt-4 md:mt-[1.5vmax] mb-2 ">
            The detector movement is equipped with non-touch anti-collision{' '}
            <br className="hidden min-[550px]:block lg:hidden" />
            sensors to guarantee patient safety during procedures.
          </h6>
          <div
            className="hidden lg:block mt-[2vmax] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] scroll-smooth overflow-y-auto enhanced-page-scroll pr-3"
            style={{
              overscrollBehavior: 'none',
            }}
          >
            {data.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className=" bg-white mb-5 px-10 py-6 flex flex-col gap-3 last:mb-0 rounded-md"
                >
                  <h6 className="text-[#FF9015] lg:text-base 2xl:text-xl font-medium">
                    {elem.number}/<span className="text-[#FFCE97]">4</span>
                  </h6>
                  <h1 className="lg:text-xl 2xl:text-[28px] font-medium w-[80%]">
                    {elem.title}
                  </h1>
                  <p className="xl:text-base 2xl:text-xl font-regular leading-snug font-normal w-[80%]">
                    {elem.desc}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="h-8 hidden lg:block w-full bg-gradient-to-b from-transparent to-lightorange absolute bottom-0 right-[1.1rem]"></div>
        </div>
      </div>
    </div>
  )
}

export default Enhanced
