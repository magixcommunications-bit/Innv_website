import React, { useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import img01 from 'assets/careers/life/01.webp'
import img02 from 'assets/careers/life/02.webp'
import img03 from 'assets/careers/life/03.webp'
import img04 from 'assets/careers/life/04.webp'
import img05 from 'assets/careers/life/05.webp'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'

const data = [
  {
    title: 'Make your mark',
    desc: 'You have the chance to leave a lasting legacy in the world of cardiovascular care, helping to shape a healthier, and more equitable future for all.',
    image: img01,
  },
  {
    title: 'Learn and grow',
    desc: 'Life at Innvolution is a constant opportunity to learn and evolve with access to cutting-edge knowledge, mentorship, and resources.',
    image: img02,
  },
  {
    title: 'Speak your mind',
    desc: "We value diversity of thought, and we believe that innovation thrives when everyone's perspective is heard.",
    image: img03,
  },
  {
    title: 'Collaborate with visionaries',
    desc: 'Innvolution is an opportunity to engage in cross-functional partnerships, brainstorm with experts, and be part of projects that revolutionize cardiovascular care.',
    image: img04,
  },
  {
    title: 'Be a part of a global movement',
    desc: 'We’re on a mission to conquer the inequality in access to cardiovascular care around the world. ',
    image: img05,
  },
]

const Life = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <>
      <section className="md:blade-bottom-padding-sm bg-[url(assets/bg-overlay/orange_gradient_bg.webp)] bg-cover bg-center">
        <section className="blade-bottom-padding-lg">
          <div className="px-3 md:w-11/12 xl:w-container-lg 2xl:w-[80%] mx-auto blade-top-padding-sm">
            <div className="blade-top-padding grid gap-2 md:gap-3 lg:gap-4 relative">
              <div className="flex justify-between items-center">
                <h2 className="gsap-opacity-trans-appear font-medium">
                  Life at <span className="text-orange">Innvolution</span>
                </h2>
                <div className="gsap-opacity-trans-appear gap-4 self-start hidden md:flex">
                  <CarouselBtn
                    activeIndex={activeSlide}
                    color="orange"
                    onClick={() => {}}
                    index={0}
                    text="Move to previous slide"
                    size="base"
                    type="button"
                    extraClasses={extraClasses + ' swiper-prev'}
                  />
                  <CarouselBtn
                    activeIndex={activeSlide}
                    color="orange"
                    onClick={() => {}}
                    index={data.length - 1}
                    text="Move to next slide"
                    size="base"
                    type="button"
                    isRotated
                    extraClasses={extraClasses + ' swiper-next'}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="gsap-opacity md:pl-[4.5%] 2xl:pl-[10%] blade-top-padding">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  pagination: false,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 60,
                  pagination: false,
                },
                1280: {
                  slidesPerView: 2.5,
                  spaceBetween: 60,
                  pagination: false,
                },
                1600: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                  pagination: false,
                },
              }}
              // loop
              autoplay={{
                delay: 2000,
              }}
              pagination={{
                bulletActiveClass: '!opacity-100 !bg-orange',
              }}
              speed={1000}
              onSlideChange={(e: any) => {
                setActiveSlide(+e.progress)
              }}
              modules={[Pagination, Navigation, Autoplay]}
              navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
              className="mx-3 pb-10 h-full cursor-grab"
            >
              {data.map((elem, index) => {
                const key = `${index}`
                return (
                  <SwiperSlide key={index}>
                    <div
                      className={`!bg-no-repeat !bg-cover h-[27rem] !w-full flex items-end rounded-md max-w-md xl:h-[30rem] xl:max-w-none mb-4 md:mb-0`}
                      style={{ background: `url(${elem.image})` }}
                    >
                      <div className="flex rounded-md bg-white sm:h-48 w-11/12 sm:max-w-[28rem] m-4 px-4 py-6">
                        <div className="flex items-center ">
                          <svg
                            viewBox="0 0 15 123"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-28"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.92743 1.77157C8.92743 0.793026 8.13416 -0.000244141 7.15561 -0.000244141C6.17706 -0.000244141 5.38379 0.793025 5.38379 1.77157V2.6943C5.38379 4.18099 4.17859 5.3862 2.69189 5.3862H1.77182C0.79327 5.3862 0 6.17947 0 7.15802C0 8.13656 0.79327 8.92983 1.77182 8.92983H2.69189C4.17859 8.92983 5.38379 10.135 5.38379 11.6217V12.5443C5.38379 13.5229 6.17706 14.3162 7.15561 14.3162C8.13416 14.3162 8.92743 13.5229 8.92743 12.5443V11.623C8.92743 10.1356 10.1332 8.92983 11.6206 8.92983H12.5446C13.5231 8.92983 14.3164 8.13656 14.3164 7.15801C14.3164 6.17947 13.5231 5.3862 12.5446 5.3862H11.6206C10.1332 5.3862 8.92743 4.1804 8.92743 2.69298V1.77157Z"
                              fill="#F69A4D"
                            />
                            <line
                              x1="7.25781"
                              y1="17.9998"
                              x2="7.25781"
                              y2="122.346"
                              stroke="url(#paint0_linear_3190_2552)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_3190_2552"
                                x1="5.75766"
                                y1="20.5986"
                                x2="5.75766"
                                y2="124.079"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#F69A4D" />
                                <stop
                                  offset="1"
                                  stopColor="#F69A4D"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="ml-4 select-none">
                          <h5 className="font-medium font-regular pb-3">
                            {elem.title}
                          </h5>
                          <p className="font-medium font-regular sm:pr-16 text-sm lg:text-base">
                            {elem.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </section>
      </section>
    </>
  )
}

export default Life
