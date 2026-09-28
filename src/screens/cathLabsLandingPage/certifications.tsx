import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import { useAdmin } from 'store/store'

export default function Certifications() {
  const { cathLabsData } = useAdmin()
  return (
    <>
      {cathLabsData.SECTION_6.length === 0 ? null : (
        <>
          <section
            className={`bg-[#F0F4F5] bg-[url(assets/bg-overlay/orange_gradient_bg.webp)] bg-cover bg-no-repeat blade-top-padding-lg lg:blade-top-padding lg:pb-0 blade-bottom-padding lg:blade-bottom-padding-lg`}
          >
            <div className="w-container-lg">
              <h3 className="gsap-opacity-trans-appear font-regular font-medium text-center">
                Certified by authorized bodies
              </h3>

              <div className="gsap-stagger-parent lg:grid lg:grid-cols-3 xl:grid-cols-4 hidden xl:flex-nowrap flex-wrap gap-8 xl:justify-between justify-center blade-top-margin-sm ">
                {cathLabsData.SECTION_6.map((item, ind) => {
                  return (
                    <div
                      key={`${ind}-certificates`}
                      className="gsap-stagger relative lg:blade-bottom-padding-lg "
                    >
                      <div className="absolute h-full w-1 lg:block hidden">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 2 645"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            opacity="0.2"
                            x1="0.605469"
                            y1="2.18557e-08"
                            x2="0.605439"
                            y2="690"
                            stroke="url(#paint0_linear_1099_11752)"
                            strokeDasharray="10 10"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1099_11752"
                              x1="-0.892091"
                              y1="4.38347e-09"
                              x2="-0.892099"
                              y2="683.128"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop />
                              <stop offset="1" stopOpacity="0.76" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <img
                        className="h-full w-full object-cover object-center lg:pl-8 pl-0 "
                        src={item.imgSrc as string}
                        alt={item.alt}
                      />
                    </div>
                  )
                })}
              </div>

              <div className="lg:hidden flex blade-top-margin-sm ">
                <Swiper
                  className="pb-10"
                  modules={[Pagination]}
                  pagination
                  slidesPerView={1}
                  spaceBetween={20}
                  breakpoints={{
                    1200: {
                      slidesPerView: 2,
                    },
                    468: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                  }}
                  centeredSlides
                >
                  {cathLabsData.SECTION_6.map((item, index) => {
                    return (
                      <SwiperSlide key={`${index}-certificates`}>
                        <div className="">
                          <img
                            className="w-full h-full object-contain"
                            src={item.imgSrc as string}
                            alt={item.alt}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
