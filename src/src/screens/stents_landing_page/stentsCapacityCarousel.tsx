import React, { useRef, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import Insignia from 'assets/stents/landingPage/capacityCarousal/insignia.png'
import Siroflex from 'assets/stents/landingPage/capacityCarousal/siroflex.png'
import Siroflex_Curve from 'assets/stents/landingPage/capacityCarousal/siroflex_curve.png'
import Siroflex_Plus from 'assets/stents/landingPage/capacityCarousal/siroflex_plus.png'

import log_02 from 'assets/productsNew/insignia/insignia-logo.png'
// D:\PROJECTS\iitpl\iitpl\src\assets\productsNew\siroflex\siroflex-logo.png
// import log_04 from 'assets/stents/landingPage/capacityCarousal/logo_3.svg'
import log_03 from 'assets/productsNew/siroflex/siroflex-logo.png'
import log_04 from 'assets/productsNew/siroflexCurve/siroflex-curve-logo.svg'
import log_05 from 'assets/productsNew/siroflexPlus/siroflex-plus.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import '../balloonCaths/styles/capacityCarousel.css'
import { useNavigate } from 'react-router-dom'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'

const data = [
  {
    title: 'Insignia',
    tab: 'Insignia',
    coverImage: Insignia,
    logo: log_02,
    link: '/products/stents/insignia',
  },

  {
    title: 'Siroflex',
    tab: 'Siroflex',
    logo: log_03,
    coverImage: Siroflex,
    link: '/products/stents/siroflex',
  },
  {
    title: 'Siroflex Curve',
    tab: 'Siroflex Curve',
    logo: log_04,
    coverImage: Siroflex_Curve,
    link: '/products/stents/siroflex-curve',
  },
  {
    title: 'Siroflex Plus ',
    tab: 'Siroflex Plus',
    logo: log_05,
    coverImage: Siroflex_Plus,
    link: '/products/stents/siroflex-plus',
  },
]

export default function CapacityCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()

  const moveNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length)
  }
  const movePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleTabClick = (update: number) => {
    setActiveIndex(update)
  }

  const imageRef = useRef<any>()
  const textRef = useRef<any>()
  return (
    <div className="products-tab-carousel bg-[#F1F5F6] blade-top-padding blade-bottom-padding-lg">
      <div className="xl:max-w-3xl max-w-xl mx-auto px-4 mb-4">
        <h3 className="gsap-opacity-trans-appear font-medium font-regular text-center">
          <span className="text-orange">SIROLIMUS</span> Eluting <br /> Coronary
          Stent System
        </h3>
      </div>
      <div className="blade-top-padding-sm lg:block hidden">
        <div className="gsap-opacity-trans-appear mx-auto w-container xl:w-[60%] 2xl:w-[50%] blade-bottom-padding">
          <div className="2xl:gap-4 gap-3 lg:flex hidden">
            {data.map((elem, index: number) => {
              const key = `${index}`
              return (
                <React.Fragment key={key}>
                  <button
                    aria-label={elem.tab}
                    type="button"
                    onClick={() => handleTabClick(index)}
                    className={`flex 2xl:text-xl whitespace-nowrap text-base xl:text-lg border-[2px]
                        transition-all px-3 duration-300 border-solid rounded-md font-medium 2xl:px-5 py-2 
                        focus:outline-orange place-content-center flex-1 items-center gap-3
                        focus-visible:bg-white hover:!border-orange hover:bg-white
                        ${
                          activeIndex === index
                            ? 'text-orange !border-orange bg-white'
                            : 'text-[#4D4D4D] !border-transparent bg-transparent'
                        }`}
                  >
                    <svg
                      className={`${
                        activeIndex === index
                          ? 'fill-orange'
                          : 'fill-[#4D4D4D] h-0 w-0'
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
                    {elem.tab}
                  </button>
                  <div className="min-h-full w-[2px] bg-[#CCC] last-of-type:hidden"></div>
                </React.Fragment>
              )
            })}
          </div>
        </div>

        <div className="gsap-opacity-trans-appear grid grid-cols-8 w-container-sm max-w-[1336px] px-0 relative">
          <div className="col-start-1 rounded-l-md pl-10 col-end-4 blade-top-padding-sm blade-bottom-padding-sm h-[32rem] capacity-text-wrapper bg-white">
            <div className="w-11/12 mx-auto max-w-screen-sm ">
              <SwitchTransition>
                <CSSTransition
                  key={activeIndex}
                  nodeRef={textRef}
                  timeout={200}
                  classNames="capacity-carousel"
                >
                  <div
                    ref={textRef}
                    className="py-28 pr-8 transition-text-wrapper"
                  >
                    <div className="2xl:h-20 h-16 translate-y-4 opacity-0 max-w-[280px] w-fit">
                      <img
                        className="h-full object-contain"
                        src={data[activeIndex].logo}
                        alt={data[activeIndex].title}
                      />
                    </div>

                    <div className="mt-10 translate-y-4 opacity-0">
                      <button
                        aria-label={`Explore more about ${data[activeIndex].title}`}
                        type="button"
                        className={` disabled:opacity-60 disabled:cursor-not-allowed rounded-md border-1 border-orange font-regular font-medium tracking-wider stroke-orange hover:stroke-white focus-visible:stroke-white focus:outline-none focus-visible:text-white hover:fill-white focus-visible:fill-white active:outline-none fill-orange  bg-white border-solid hover:text-white outline-none px-5 py-3 flex items-center gap-3 hover:bg-orange focus-visible:bg-orange  hover:border-orange focus-visible:border-orange transition-colors duration-300 ease-in-out text-base`}
                        onClick={() => {
                          navigate(data[activeIndex].link)
                        }}
                      >
                        Explore more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="inherit"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
          <div className="col-start-4 col-end-9 rounded-r-md  bg-lightorange bg-[url('assets/balloon/bgellipsePattern.webp')]">
            <SwitchTransition>
              <CSSTransition
                key={activeIndex}
                nodeRef={imageRef}
                timeout={500}
                classNames="capacity-carousel-image"
              >
                <div ref={imageRef} className="h-[32rem] ">
                  <img
                    src={data[activeIndex].coverImage}
                    alt={data[activeIndex].title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </CSSTransition>
            </SwitchTransition>

            <div className="lg:flex  hidden w-full ">
              <CarouselBtn
                activeIndex={activeIndex}
                color="orange"
                onClick={movePrev}
                index={0}
                text="Move to previous slide"
                size="base"
                type="button"
                extraClasses={
                  extraClasses +
                  ' -translate-x-1/2 absolute top-1/2 -translate-y-1/2 left-0'
                }
              />
              <CarouselBtn
                activeIndex={activeIndex}
                color="orange"
                onClick={moveNext}
                index={data.length - 1}
                text="Move to next slide"
                size="base"
                type="button"
                isRotated
                extraClasses={
                  extraClasses +
                  ' translate-x-1/2 absolute top-1/2 -translate-y-1/2 right-0'
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-view-carousel lg:hidden block bg-white mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 60,
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 2.8,
            },
            1440: {
              slidesPerView: 3.1,
            },
          }}
          loop
          autoplay={{
            delay: 2000,
          }}
          speed={1000}
          modules={[Pagination, Autoplay, Navigation, A11y]}
          pagination={{
            bulletActiveClass: 'bg-orange opacity-100',
          }}
          navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
          className="pb-10 -mb-3 cursor-pointer sm:px-10 px-4 h-full min-h-full bg-[#F1F5F6] stent-system-carousel"
        >
          {data.map((elem: any, index: number) => {
            const key = `${index}`
            return (
              <SwiperSlide
                key={key}
                className="min-h-full h-full grid bg-[#F1F5F6] rounded-md overflow-hidden"
              >
                <div className=" bg-white pl-3 rounded-t-md">
                  <img
                    className="h-20 w-auto py-4"
                    src={elem.logo}
                    alt={elem.title}
                  />
                </div>
                {/* <h2 className="text-black w-11/12 font-medium">
                    {elem.title}
                  </h2> */}

                <div
                  ref={imageRef}
                  className="sm:h-[20rem] rounded-b-md h-[18rem] bg-lightorange bg-[url('assets/balloon/bgellipsePattern.webp')"
                >
                  <img
                    src={elem.coverImage}
                    alt={elem.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
