import React, { useEffect, useRef, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import plusIcon from 'assets/finalElite/capacityCarousel/plus_orange.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Controller, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import './carousel.css'
import { CarouselBtn, MasterBtn } from 'atoms/buttons'
import { useNavigate } from 'react-router-dom'

export type CarouselData = {
  title: string
  tab: string
  tag?: string
  logo: string
  heading: string
  mainHeading?: string
  desc: string | JSX.Element
  subHeading?: string
  features: string[]
}

export const extraClasses =
  'bg-white fill-orange border-orange enabled:hover:border-white enabled:hover:bg-orange enabled:hover:fill-white enabled:focus-visible:border-white enabled:focus-visible:bg-orange enabled:focus-visible:fill-white focus-visible:outline-white '

export default function CapacityCarousel({
  title,
  subTitle,
  carouselList,
  isFeatureCard,
  showAccessoryBtn,
}: {
  title?: string | JSX.Element
  subTitle?: string
  isFeatureCard?: boolean
  carouselList: CarouselData[]
  showAccessoryBtn?: boolean
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperCardInstance, setSwiperCardInstance] = useState<any>(null)
  const [swiperButtonInstance, setSwiperButtonInstance] = useState<any>(null)
  const navigate = useNavigate()

  const moveNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselList.length)
  }
  const movePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleTabClick = (update: number) => {
    setActiveIndex(update)
  }

  const imageRef = useRef<any>()
  const textRef = useRef<any>()
  const swiperCardRef = useRef<any>()
  const swiperButtonRef = useRef<any>()

  useEffect(() => {
    if (swiperButtonRef?.current && swiperCardRef?.current) {
      setSwiperButtonInstance(swiperButtonRef.current.swiper)
      setSwiperCardInstance(swiperCardRef.current.swiper)
    }
  }, [])

  return (
    <section className=" pinnacle-pages ">
      <div
        className={`products-tab-carousel blade-top-padding-lg blade-bottom-padding lg:blade-bottom-padding-lg lg:blade-top-padding bg-[url(assets/pinnacleShared/orangeGrad.svg)] bg-no-repeat bg-contain bg-[0px_300px] lg:bg-[0px_200px] bg-[#F1F5F6] ${
          title && 'lg:bg-[0px_300px] xl:bg-[0px_350px]'
        }`}
      >
        {title && (
          <div className="xl:max-w-3xl max-w-xl mx-auto px-4 blade-bottom-padding-sm">
            <h3 className="gsap-opacity-trans-appear font-medium text-center leading-tight md:-mt-2 2xl:-mt-3">
              {title}
            </h3>
            {subTitle && (
              <h6 className="gsap-opacity-trans-appear text-center text-opacity-60 mt-2 mb-2 xl:mt-4 px-3">
                {subTitle}
              </h6>
            )}
          </div>
        )}
        <div className="lg:block hidden">
          <div className="mx-auto w-fit mb-12">
            <div className="gsap-opacity-trans-appear 2xl:gap-4 gap-3 lg:flex hidden">
              {carouselList.map((elem, index: number) => {
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
                            ? 'fill-[#F69A4D]'
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

          <div
            className={`gsap-opacity-trans-appear grid grid-cols-8 lg:!px-0 relative rounded-[5px] ${
              isFeatureCard
                ? 'w-container-lg 2xl:w-container xl:max-w-6xl'
                : ' w-container-sm 2xl:max-w-[1336px] xsl:max-w-5xl'
            }`}
          >
            <div
              className={`rounded-l-md col-start-1 col-end-4 orange-gradient flex items-center justify-center 
              ${
                isFeatureCard
                  ? 'h-[30rem] xl:h-[33rem] 2xl:h-[35rem]'
                  : 'h-[24rem] xl:h-[28rem] 2xl:h-[30.5rem]'
              }
            `}
            >
              <div className="h-full w-full relative flex flex-col items-center justify-center gap-2 p-10 xl:px-14 xsl:px-20 ">
                <SwitchTransition>
                  <CSSTransition
                    key={activeIndex}
                    nodeRef={imageRef}
                    timeout={500}
                    classNames="capacity-carousel-image"
                  >
                    <img
                      ref={imageRef}
                      src={carouselList[activeIndex].logo}
                      alt="Icon"
                      className={`object-contain ${
                        carouselList[activeIndex].title === 'Spotlight'
                          ? 'absolute !h-auto w-[80%] right-0 top-1/2 -translate-y-1/2'
                          : 'w-full h-auto 2xl:h-72'
                      }`}
                    />
                  </CSSTransition>
                </SwitchTransition>
              </div>

              {/* Carousel buttons */}
              <div className="lg:flex justify-between hidden absolute z-10 inset-0  items-center w-full h-full">
                <CarouselBtn
                  activeIndex={activeIndex}
                  color="orange"
                  onClick={movePrev}
                  index={0}
                  text="Move to previous slide"
                  size="base"
                  type="button"
                  extraClasses={extraClasses + ' -translate-x-1/2 '}
                />
                <CarouselBtn
                  activeIndex={activeIndex}
                  color="orange"
                  onClick={moveNext}
                  index={carouselList.length - 1}
                  text="Move to next slide"
                  size="base"
                  type="button"
                  isRotated
                  extraClasses={extraClasses + ' translate-x-1/2 '}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center rounded-r-md col-start-4 pl-10 relative col-end-9 blade-top-padding-sm blade-bottom-padding-sm  capacity-text-wrapper bg-white">
              <div
                className={`w-11/12 mx-auto max-w-screen-sm 
                 ${isFeatureCard ? '2xl:w-full 2xl:max-w-none 2xl:ml-24' : ''}
              `}
              >
                <SwitchTransition>
                  <CSSTransition
                    key={activeIndex}
                    nodeRef={textRef}
                    timeout={200}
                    classNames="capacity-carousel"
                  >
                    <div
                      ref={textRef}
                      className={`pr-6 transition-text-wrapper 
                        ${isFeatureCard ? '' : 'py-5 xl:px-8 '}
                      `}
                    >
                      <div className="translate-y-4 opacity-0 font-medium lg:max-w-md 2xl:max-w-lg">
                        {carouselList[activeIndex].tag && (
                          <h2>{carouselList[activeIndex].tag}</h2>
                        )}
                      </div>

                      <div className="translate-y-4 opacity-0 font-medium lg:max-w-md 2xl:max-w-lg">
                        {carouselList[activeIndex].mainHeading && (
                          <h3>{carouselList[activeIndex].mainHeading}</h3>
                        )}
                        <h4>{carouselList[activeIndex].heading}</h4>
                      </div>

                      {carouselList[activeIndex].subHeading && (
                        <div className="mt-2 translate-y-4 opacity-0 font-regular lg:max-w-md 2xl:max-w-[28rem] text-opacity-60 text-black">
                          <h6>{carouselList[activeIndex].subHeading}</h6>
                        </div>
                      )}

                      {carouselList[activeIndex].desc && (
                        <div className="mt-5 translate-y-4 opacity-0 font-regular lg:max-w-md 2xl:max-w-[28rem]">
                          <h6>{carouselList[activeIndex].desc}</h6>
                        </div>
                      )}

                      {carouselList[activeIndex].features.length > 0 && (
                        <ul className="text-black leading-tight font-regular flex flex-col md:gap-5 gap-3 pt-3 md:pt-6 lg:pt-8 xl:max-w-lg">
                          {carouselList[activeIndex].features?.map(
                            (elem, index: number) => {
                              const key = `${index}`
                              return (
                                <li
                                  key={key}
                                  className="flex items-center gap-3 translate-y-4 opacity-0"
                                >
                                  <img
                                    src={plusIcon}
                                    alt="plus icon"
                                    aria-hidden
                                    className="h-5 2xl:h-6 w-auto"
                                  />
                                  <span className="text-base xl:text-lg">
                                    {elem}
                                  </span>
                                </li>
                              )
                            },
                          )}
                        </ul>
                      )}
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="mobile-view-carousel lg:hidden block bg-[#F1F5F6] pt-2">
          {/* Tab controls */}
          <Swiper
            slidesPerView={1.7}
            modules={[Controller, A11y]}
            centeredSlides
            slideToClickedSlide
            speed={1000}
            breakpoints={{
              500: {
                spaceBetween: 30,
              },
            }}
            spaceBetween={15}
            loop
            ref={swiperCardRef}
            onSwiper={swiperCardInstance}
            controller={{
              control: swiperButtonInstance,
            }}
            onSlideChange={(swiper) => {
              if (swiper) {
                setActiveIndex(swiper.realIndex % carouselList.length)
              }
            }}
            className="lg:hidden block pb-5"
          >
            {carouselList.map((elem, index: number) => {
              const key = `${index}`
              return (
                <SwiperSlide
                  key={key}
                  className="text-center flex items-center justify-center"
                >
                  <button
                    aria-label={elem.tab}
                    type="button"
                    className={`${
                      index === activeIndex
                        ? 'text-orange border-orange border-opacity-100'
                        : 'text-black border-black'
                    }  block font-regular w-full self-stretch py-2 px-3 border-2 rounded-md border-opacity-40 bg-white`}
                  >
                    {elem && elem.tab}
                  </button>
                </SwiperSlide>
              )
            })}
          </Swiper>
          {/* Card controls */}
          <Swiper
            slidesPerView={1.05}
            spaceBetween={15}
            breakpoints={{
              500: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1.7,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1.8,
                autoHeight: false,
                centeredSlides: true,
              },
            }}
            autoplay={{
              delay: 3000,
            }}
            speed={1000}
            ref={swiperButtonRef}
            modules={[Pagination, Autoplay, Controller, A11y]}
            onSwiper={swiperButtonInstance}
            controller={{
              control: swiperCardInstance,
            }}
            pagination={{
              bulletActiveClass: 'bg-orange opacity-100',
            }}
            onSlideChange={(swiper) => {
              if (swiper) {
                setActiveIndex(swiper.realIndex % carouselList.length)
              }
            }}
            centeredSlides
            loop
            // navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
            className="pb-10 cursor-pointer sm:px-10 px-4 stent-system-carouse sm:max-w-none md:h-full h-full "
          >
            {carouselList.map((elem: any, index: number) => {
              const key = `${index}`
              return (
                <SwiperSlide
                  key={key}
                  className="h-auto self-stretc bg-white w-fit sm:max-w-sm md:max-w-none rounded-md 
                  overflow-hidden !pb-2 "
                >
                  <div
                    ref={imageRef}
                    className="h-fit pb-4 max-w-md md:max-w-none bg-white"
                  >
                    <div
                      className="flex flex-col items-center justify-center py-4 bg-lightorange"
                      // style={{
                      //   background:
                      //     'linear-gradient(132deg, #F69A4D 54.75%, #FF7400 108.01%), linear-gradient(180deg, #F0F4F5 23.59%, #FFF 100%), #FFF',
                      // }}
                    >
                      <img
                        src={elem.logo}
                        alt="Icon"
                        className="h-52 xl:h-64 2xl:h-72 px-3 py-4"
                      />
                    </div>
                    <div className="blade-top-margin-sm blade-bottom-margin-s px-3">
                      <h4 className="font-medium mb-3">{elem.heading}</h4>

                      {elem.subHeading && (
                        <div className="-mt-1 font-regular lg:max-w-md 2xl:max-w-[28rem] text-opacity-60 text-black">
                          <span>{elem.subHeading}</span>
                        </div>
                      )}

                      {elem.desc && (
                        <span className=" text-base md:text-lg block font-regular font-normal pr-5">
                          {elem.desc}
                        </span>
                      )}

                      {elem.features.length > 0 && (
                        <ul className="text-black leading-tight font-regular flex flex-col md:gap-5 gap-3 pt-3 md:pt-6 lg:pt-8 ">
                          {elem.features?.map(
                            (listItem: string, index: number) => {
                              const key = `${index}`
                              return (
                                <li
                                  key={key}
                                  className="flex items-center gap-3"
                                >
                                  <img
                                    src={plusIcon}
                                    alt="plus icon"
                                    aria-hidden
                                    className="h-5 2xl:h-6 w-auto"
                                  />
                                  <span className="text-base xl:text-lg">
                                    {listItem}
                                  </span>
                                </li>
                              )
                            },
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {showAccessoryBtn && (
          <div className="mx-auto w-container flex justify-center lg:mt-14 mt-5 mb-5 lg:-mb-1">
            <MasterBtn
              type="button"
              color="orange"
              text="Request an accessory"
              size="large"
              onClick={() => {
                navigate('/contact-us')
              }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
