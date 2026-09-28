import React, { useState, useRef, useEffect } from 'react'
import { Navigation } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { extraClasses } from 'organisms/carousel'
import { CarouselBtn } from 'atoms/buttons'

type featureGridData = {
  title: string
  subtitle: string
  description: string
  videoCover: string
}

export type FeatureGridList = {
  title: string
  data: featureGridData[]
}

export default function FeatureGrid({ list }: { list: FeatureGridList[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className=" blade-top-padding-sm md:blade-top-padding  blade-bottom-padding-sm md:blade-bottom-padding border-b-2 border-gray bg-lightgray bg-cover bg-no-repeat">
      <div className="grid grid-cols-12 sm:pl-10 2xl:pl-12">
        <div className="grid grid-cols-2 md:flex gap-3 md:gap-3 lg:gap-4 xl:gap-4 col-span-12 px-3 max-w-2xl mx-auto my-2 md:-my-3 lg:my-0">
          <button
            aria-label={list[0].title}
            type="button"
            className={`rounded-md feature-carousel-prev-btn grid text-sm md:text-base xl:text-xl font-medium px-3 md:px-5 lg:px-7 py-2 items-center text-center md:text-left place-content-center md:place-content-start gap-3 border-2 border-orange border-opacity-0 hover:border-opacity-80 hover:bg-opacity-80 bg-white bg-opacity-0 outline-white focus-visible:text-white focus-visible:bg-orange transition-all ${
              activeIndex === 0
                ? 'text-orange bg-white !border-opacity-80 !bg-opacity-80'
                : 'text-[#4D4D4D] '
            }`}
          >
            {list[0].title}
          </button>
          <button
            aria-label={list[1].title}
            type="button"
            className={`rounded-md feature-carousel-next-btn grid text-sm md:text-base xl:text-xl font-medium px-3 md:px-5 lg:px-7 py-2 items-center text-center md:text-left place-content-center md:place-content-start gap-3 border-2 border-orange border-opacity-0 hover:border-opacity-80 hover:bg-opacity-80 bg-white bg-opacity-0 outline-white focus-visible:text-white focus-visible:bg-orange transition-all ${
              activeIndex === 1
                ? 'text-orange bg-white !border-opacity-80 !bg-opacity-80'
                : 'text-[#4D4D4D]'
            }`}
          >
            {list[1].title}
          </button>
        </div>
      </div>
      <div className="blade-top-padding-sm md:blade-top-padding">
        <Swiper
          autoHeight
          modules={[Navigation]}
          navigation={{
            nextEl: '.feature-carousel-next-btn',
            prevEl: '.feature-carousel-prev-btn',
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          draggable={false}
          noSwiping
          speed={600}
          allowTouchMove={false}
          className=""
        >
          {list.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Tab list={item.data} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

function Tab({ list }: { list: featureGridData[] }) {
  const [active, setActive] = useState(0)
  const imgRef = useRef<any>()
  const videoRef = useRef<any>()
  const [instance, setInstance] = useState<any>(null)
  const swiperRef = useRef<any>(null)

  const getSwiperInstance = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      return swiperRef.current.swiper
    }
    return null
  }

  useEffect(() => {
    const ins = getSwiperInstance()
    setInstance(ins)
  }, [])

  const handleSlideChange = (isNext: boolean) => {
    if (instance) {
      if (isNext) instance.slideNext()
      else instance.slidePrev()
    }
  }

  return (
    <div className=" flex flex-col-reverse lg:grid grid-cols-12 feature-motion-wrapper ">
      <div className="xl:pl-10 pl-0 col-start-1 2xl:col-start-2 col-end-6">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            512: {
              slidesPerView: 3,
            },
          }}
          centeredSlides
          slideToClickedSlide
          spaceBetween={10}
          loop
          ref={swiperRef}
          onSlideChange={(swiper) => {
            if (swiper) {
              setActive(swiper.realIndex % 3)
            }
          }}
          className="lg:hidden block"
        >
          {list.map((elem, index: number) => {
            const key = `${index}`
            return (
              <SwiperSlide
                key={key}
                className="text-center flex items-center justify-center"
              >
                <button
                  aria-label={elem.title}
                  type="button"
                  className={`${
                    index === active
                      ? 'text-orange !border-opacity-80'
                      : 'text-black'
                  }  block font-regular py-2 px-3 transition-all bg-white mt-6 mb-3 rounded-md border-2 border-orange border-opacity-60 md:my-8`}
                >
                  {elem && elem.title}
                </button>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <SwitchTransition>
          <CSSTransition
            key={active}
            nodeRef={imgRef}
            timeout={100}
            unmountOnExit
          >
            <div
              ref={imgRef}
              className="px-3 pb-10 md:pb-0 lg:pt-0 flex flex-col items-start h-full gap-3 justify-between sm:pl-10 w-11/12 md:w-10/12 max-w-lg  "
            >
              <div className="">
                <h2 className="font-medium text-orange  lg:hidden block translate-y-4 opacity-0">
                  {list[active].title}
                </h2>
                <h4 className="font-medium lg:block hidden text-orange translate-y-4 opacity-0 -mt-2.5">
                  {list[active].title}
                </h4>
                <h6 className="font-medium pb-3 translate-y-4 opacity-0">
                  {list[active].subtitle}
                </h6>
                <span className="text-[#333] font-regular leading-normal text-sm md:text-lg xl:text-xl translate-y-4 opacity-0">
                  {list[active].description}
                </span>
              </div>
              <div className="flex-col  blade-top-padding lg:flex hidden gap-y-2">
                {list.map((elem, index: number) => {
                  return (
                    <button
                      key={index}
                      aria-label={elem.title}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`${
                        index === active
                          ? 'text-orange !bg-opacity-80 !border-opacity-80'
                          : 'text-black'
                      }  block font-regular py-2 text-left px-5 bg-white bg-opacity-0 rounded-md border-2 border-orange border-opacity-0 hover:border-opacity-80 hover:bg-opacity-80 outline-white focus-visible:text-white focus-visible:bg-orange transition-all`}
                    >
                      {elem && elem.title}
                    </button>
                  )
                })}
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      {/* large devices */}
      <div className="col-start-6 col-end-7 flex-col items-center gap-3 justify-center lg:flex hidden">
        <CarouselBtn
          activeIndex={active}
          color="orange"
          onClick={() => {
            setActive((prev) => Math.max(prev - 1, 0))
            handleSlideChange(false)
          }}
          index={0}
          text="Move to previous slide"
          size="base"
          type="button"
          extraClasses={
            extraClasses + 'rotate-90 !py-4 xl:!px-3.5 xl:!py-[1.1rem]'
          }
        />
        <CarouselBtn
          activeIndex={active}
          color="orange"
          onClick={() => {
            setActive((prev) => Math.min(prev + 1, 2))
            handleSlideChange(true)
          }}
          index={list.length - 1}
          text="Move to next slide"
          size="base"
          type="button"
          isRotated
          extraClasses={
            extraClasses + ' -rotate-90 !py-4 xl:!px-3.5 xl:!py-[1.1rem]'
          }
        />
      </div>

      {/* Mobile devices */}
      <div className="col-start-7 grid grid-cols-9 px-3 lg:px-0 gap-2 rounded-md col-end-13 bg-white">
        <div className="col-start-1 col-end-2 lg:hidden grid place-content-center place-items-center ">
          <CarouselBtn
            activeIndex={active}
            color="orange"
            onClick={() => {
              setActive((prev) => Math.max(prev - 1, 0))
              handleSlideChange(false)
            }}
            index={0}
            text="Move to previous slide"
            size="base"
            type="button"
            extraClasses={extraClasses}
          />
        </div>
        <div className="col-start-2 rounded-md col-end-9 lg:col-start-1 lg:col-end-10 h-60 sm:h-[24rem] lg:h-[24rem] xl:h-[26rem] lg:my-auto 2xl:h-[32rem] place-content-center overflow-hidden">
          <SwitchTransition>
            <CSSTransition
              key={active}
              nodeRef={videoRef}
              classNames="video-wrapper"
              timeout={500}
              unmountOnExit
            >
              <video
                ref={videoRef}
                playsInline
                muted
                loop
                autoPlay
                className="bg-white h-60 sm:h-[24rem] lg:h-[24rem] xl:h-[26rem] lg:my-auto 2xl:h-[32rem] w-full object-cover object-center"
              >
                <source src={list[active].videoCover} type="video/mp4" />
              </video>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="lg:hidden col-start-9 col-end-10 grid place-content-center place-items-center ">
          <CarouselBtn
            activeIndex={active}
            color="orange"
            onClick={() => {
              setActive((prev) => Math.min(prev + 1, 2))
              handleSlideChange(true)
            }}
            index={list.length - 1}
            text="Move to next slide"
            size="base"
            type="button"
            isRotated
            extraClasses={extraClasses}
          />
        </div>
      </div>
    </div>
  )
}
