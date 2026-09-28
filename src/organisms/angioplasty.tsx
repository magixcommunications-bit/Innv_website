import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({})

type AngioplastyData = {
  image: string // Assuming image types are strings
  textJSX: JSX.Element
  text: string
}

const Angioplasty = ({
  angioplastyData,
  title,
  title2,
  subTitle,
  bgClasses,
}: {
  angioplastyData: AngioplastyData[]
  title: JSX.Element
  title2?: JSX.Element
  subTitle: string
  bgClasses: string
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': function () {
          gsap.to('.scoreflex-angioplasty', {
            scrollTrigger: {
              pin: true,
              trigger: '.scoreflex-angioplasty',
              start: 'top top',
              end: 'bottom -200%',
              scrub: 1,
              onUpdate: (e: any) => {
                const progress: number = +(e.progress * 100).toFixed(2) ?? 0
                // console.log(progress)
                progressHandler(progress)
              },
            },
          })
        },
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])

  function progressHandler(progress: number) {
    if (progress > 74.5) {
      setActiveIndex(4)
    } else if (progress > 49.5) {
      setActiveIndex(2)
    } else if (progress > 24.5) {
      setActiveIndex(1)
    } else {
      setActiveIndex(0)
    }
  }

  return (
    <section
      className={`scoreflex-angioplasty font-regular md:h-screen lg:min-h-[600px] ${bgClasses}`}
    >
      <div className="w-container blade-top-padding-lg h-full flex flex-col justify-between">
        {/* <h2 className="font-medium lg:hidden text-center md:-mt-2 max-w-lg mx-auto sm:max-w-none">
          {title}
        </h2> */}
        <h3 className="gsap-opacity-trans-appear font-medium hidde lg:block text-center leading-tight max-w-lg mx-auto lg:max-w-none md:-mt-2 2xl:-mt-3">
          {title}
        </h3>

        <p className="gsap-opacity-trans-appear text-center font-light pt-3 2xl:pt-5 px-3 max-w-md lg:max-w-lg mx-auto 2xl:max-w-[42.8rem] text-sm lg:text-base 2xl:text-xl">
          {subTitle}
        </p>

        <section className="blade-top-margin md:hidden blade-bottom-padding-lg">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              540: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 1.7,
              },
            }}
            loop
            // autoplay={{
            //   delay: 2500,
            // }}
            autoHeight
            centeredSlides
            speed={700}
            pagination={{
              bulletActiveClass: '!bg-orange !opacity-100',
            }}
            className="pb-12 sm:px-10 px-4 h-full"
          >
            {angioplastyData.map((elem, index) => {
              return (
                <SwiperSlide key={index} className="w-fit">
                  <img src={elem.image} alt={elem.text} className="mx-auto" />
                  <h6 className="text-center mx-auto pt-3 font-regular">
                    {elem.textJSX}
                  </h6>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </section>
        <div className="h-full grid place-content-center">
          <section className=" hidden md:flex md:py-24 w-fit mx-auto xl:pt-20 xl:pb-24 2xl:py-36">
            {angioplastyData.map((elem, index) => {
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ${
                    activeIndex >= index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img src={elem.image} alt={elem.text} />
                  <p
                    className={`absolute text-sm max-w-[10rem] lg:max-w-[12rem] xl:text-lg font-normal xl:max-w-[17rem] 2xl:text-xl w-full text-center left-1/2 -translate-x-1/2  ${
                      index % 2 !== 0
                        ? 'top-[130%] 2xl:top-[150%]'
                        : '-top-[120%] lg:-top-[90%] xl:-top-[80%] 2xl:-top-[110%]'
                    } ${'image-blade' + index}`}
                  >
                    {elem.textJSX}
                  </p>
                </div>
              )
            })}
          </section>
        </div>
      </div>
    </section>
  )
}

export default Angioplasty
