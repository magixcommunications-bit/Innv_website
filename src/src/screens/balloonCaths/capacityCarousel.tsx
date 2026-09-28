import React, { useRef, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import Sapphire_3 from 'assets/balloon/capacityCarousel/products/Sapphire_3.png'
import Sapphire_II from 'assets/balloon/capacityCarousel/products/Sapphire_II.png'
import Sapphire_II_NC from 'assets/balloon/capacityCarousel/products/Sapphire_II_NC.png'
import Sapphire_NC_24 from 'assets/balloon/capacityCarousel/products/Sapphire_NC_24.png'
import Scoreflex_NC from 'assets/balloon/capacityCarousel/products/Scoreflex_NC.png'
import Sapphire_II_Pro from 'assets/balloon/capacityCarousel/products/Sapphire_II_Pro.png'

import log_02 from 'assets/balloon/capacityCarousel/logos/log-02.svg'
import log_03 from 'assets/balloon/capacityCarousel/logos/log-03.svg'
import log_04 from 'assets/balloon/capacityCarousel/logos/log-04.svg'
import log_05 from 'assets/balloon/capacityCarousel/logos/log-05.svg'
import log_06 from 'assets/balloon/capacityCarousel/logos/log-06.svg'
import log_07 from 'assets/balloon/capacityCarousel/logos/log-07.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles/capacityCarousel.css'
import { useNavigate } from 'react-router-dom'
import { CarouselBtn, MasterBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'

const data = [
  {
    title: 'Scoreflex NC',
    subtitle: 'Safe and controlled dilation for focused force.',
    tab: 'Scoreflex NC',
    coverImage: Scoreflex_NC,
    logo: log_02,
    link: '/products/balloon-catheters/scoreflex-nc',
  },

  {
    title: 'Sapphire II NC',
    subtitle: 'Ultimate crossability and tip entry profile.',
    tab: 'Sapphire II NC',
    logo: log_03,
    coverImage: Sapphire_II_NC,
    link: '/products/balloon-catheters/sapphire-ii-nc',
  },
  {
    title: 'Sapphire II Pro',
    subtitle: 'Made for optimal pushability and kink resistance.',
    tab: 'Sapphire II Pro',
    logo: log_04,
    coverImage: Sapphire_II_Pro,
    link: '/products/balloon-catheters/sapphire-2-pro-1.75mm-4mm',
  },
  {
    title: 'JADE',
    subtitle: 'Simplicity of use with unparalleled crossability.  ',
    tab: 'JADE',
    logo: log_05,
    coverImage: Sapphire_II,
    link: '/products/balloon-catheters/jade',
  },
  {
    title: 'Sapphire 3',
    subtitle: 'Most competitive crossing and tip entry profile.',
    tab: 'Sapphire 3 ',
    coverImage: Sapphire_3,
    logo: log_06,
    link: '/products/balloon-catheters/sapphire-3-1.5mm-4mm',
  },
  {
    title: 'Sapphire NC 24',
    subtitle:
      'Engineered for truly controlled compliance, high-pressure tolerance, and re-crossability.',
    tab: 'Sapphire NC 24',
    coverImage: Sapphire_NC_24,
    logo: log_07,
    link: '/products/balloon-catheters/sapphire-nc-24',
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
    <div className="products-tab-carousel bg-[#F1F5F6] blade-top-padding-lg blade-bottom-padding lg:blade-top-padding lg:blade-bottom-padding-lg">
      <div className="lg:max-w-6xl max-w-xl mx-auto px-4 mb-8">
        <h3 className="gsap-opacity-trans-appear font-medium font-regular text-center">
          A comprehensive selection of <br className="sm:block hidden" />
          <span className="font-regular font-medium">
            {' '}
            state-of-the-art Balloon Catheters in{' '}
          </span>{' '}
          <br className="sm:block hidden" />
          partnership with{' '}
          <span className="font-regular font-medium text-[#0F4E8F]">
            OrbusNeich
          </span>
        </h3>
      </div>
      <div className="blade-top-padding-sm lg:block hidden">
        <div className="mx-auto w-container blade-bottom-padding">
          <div className="gsap-opacity-trans-appear 2xl:gap-4 xl:gap-3 gap-1 lg:flex hidden ">
            {data.map((elem, index: number) => {
              const key = `tab0${index}`
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

        {/* Desktop View */}
        <div className="gsap-opacity-trans-appear grid grid-cols-8 w-container-sm max-w-[1336px]">
          <div
            className="col-start-1 bg-white pl-20 col-end-5 blade-top-padding-sm blade-bottom-padding-sm 
          2xl:h-[32rem] xl:h-[28rem] h-[20rem] capacity-text-wrapper relative rounded-l-md"
          >
            <div className="lg:flex hidden absolute top-0 bottom-0 -left-[5%] right-auto items-center ">
              <CarouselBtn
                activeIndex={activeIndex}
                color="orange"
                onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
                index={0}
                text="Move to previous slide"
                size="base"
                type="button"
                extraClasses={extraClasses + ' z-10'}
              />
            </div>
            <div className="lg:w-11/12 max-w-screen-sm">
              <SwitchTransition>
                <CSSTransition
                  key={activeIndex}
                  nodeRef={textRef}
                  timeout={200}
                  classNames="capacity-carousel"
                >
                  <div
                    ref={textRef}
                    className="xl:py-6 xl:pr-8 pr-5 transition-text-wrapper"
                  >
                    <div className="xl:h-20 h-14 translate-y-4 opacity-0">
                      <img
                        className="h-full"
                        src={data[activeIndex].logo}
                        alt={data[activeIndex].title}
                      />
                    </div>
                    <h3 className="text-black leading-[1.15] w-11/12 font-regular md:block hidden translate-y-4 opacity-0 mt-2">
                      {data[activeIndex].title}
                    </h3>
                    <h3
                      className="text-black leading-[1.15] w-11/12 font-medium  md:hidden block 
                    translate-y-4 opacity-0"
                    >
                      {data[activeIndex].title}
                    </h3>

                    <h6 className="text-black text-opacity-60 leading-tight pt-5 font-regular  translate-y-4 opacity-0">
                      {data[activeIndex].subtitle}
                    </h6>

                    <div className="mt-6 translate-y-4 opacity-0">
                      <MasterBtn
                        type="button"
                        color="orange"
                        text="Explore more"
                        size="base"
                        onClick={() => {
                          navigate(data[activeIndex].link)
                        }}
                      />
                    </div>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>

          <div className="col-start-5 h-auto self-stretch col-end-9 relative bg-[#DCEFE1] rounded-md">
            <div className="lg:flex hidden absolute top-0 bottom-0 left-auto -right-[5%] items-center">
              <CarouselBtn
                activeIndex={activeIndex}
                color="orange"
                onClick={moveNext}
                index={data.length - 1}
                text="Move to next slide"
                size="base"
                type="button"
                isRotated
                extraClasses={extraClasses + ' z-10'}
              />
            </div>
            <SwitchTransition>
              <CSSTransition
                key={activeIndex}
                nodeRef={imageRef}
                timeout={500}
                classNames="capacity-carousel-image"
              >
                <div
                  ref={imageRef}
                  className=" 2xl:h-[32rem] xl:h-[25rem] h-[20rem]')]"
                >
                  <img
                    src={data[activeIndex].coverImage}
                    alt={data[activeIndex].title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-view-carousel lg:hidden block ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
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
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{
            bulletActiveClass: '!bg-[#acceb6] !opacity-100',
          }}
          navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
          className="pb-8 sm:px-10 px-4 h-full min-h-ful"
        >
          {data.map((elem: any, index: number) => {
            const key = `slide-${index}`
            return (
              <SwiperSlide key={key} className="min-h-full h-full grid pb-2">
                <div className="h-12">
                  <img className="h-full" src={elem.logo} alt={elem.title} />
                </div>
                <h4 className="text-black w-11/12 font-medium">{elem.title}</h4>
                <h6 className="text-black text-opacity-80 leading-tight font-regular">
                  {elem.subtitle}
                </h6>

                <div
                  ref={imageRef}
                  className="sm:h-[20rem] mt-2 bg-[#DCEFE1] rounded-md"
                >
                  <img
                    src={elem.coverImage}
                    alt={elem.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="py-3 opacity-60">
                  <MasterBtn
                    type="button"
                    color="black"
                    text="Explore more"
                    size="small"
                    onClick={() => {
                      navigate(data[index].link)
                    }}
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
