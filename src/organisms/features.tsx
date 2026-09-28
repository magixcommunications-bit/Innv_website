import React, { useEffect, useRef } from 'react'

import bgBlurOverlay from 'assets/bg-overlay/orange_bg_ellipse.svg'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, A11y } from 'swiper'

import './features.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { MasterBtn } from 'atoms/buttons'
import { useNavigate } from 'react-router-dom'
import { FeaturesType } from 'utils/homeTypes'

gsap.registerPlugin(ScrollTrigger)

export default function Features({
  title,
  featuresData,
  toShowBtn,
}: {
  title: JSX.Element
  featuresData: FeaturesType[]
  toShowBtn?: boolean
}) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const cardWrapper = useRef<any>()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const featureCardsWrapper = document.querySelectorAll('.cards-wrapper')
      featureCardsWrapper.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.5 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 95%',
              end: 'top 50%',
              markers: false,
              scrub: 1,
            },
          },
        )
      })
    }, wrapperRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-lightgray border-gray border-b-1">
      <div className="features-wrapper" ref={wrapperRef}>
        <div className="md:block hidden relative">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div
                className="h-screen  sticky top-0 left-0"
                style={{ width: 'calc(100vw - 17px)' }}
              >
                <div className="h-full top-0 flex z-20 text-black text-4xl md:ml-10 xl:ml-0">
                  <div className="w-container-lg xl:w-container-lg 2xl:w-container w-full mx-auto 2xl:pt-44 pt-32">
                    <h3 className="gsap-opacity text-black font-medium leading-tight px-3 md:px-0 ">
                      {title}
                    </h3>

                    {toShowBtn && (
                      <div className="mt-5 ">
                        <MasterBtn
                          onClick={() => {
                            navigate('/who-we-are')
                          }}
                          color="black"
                          extraClasses="gsap-opacity"
                          type="submit"
                          text="Who we are"
                          size="base"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="h-full absolute inset-0 z-[-1]"
                  style={{
                    background: `url(${bgBlurOverlay})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
            </div>

            <div>
              <div
                className="cards-wrapper 2xl:pt-48 pt-32 lg:pl-24 min-[1800px]:pl-40 lg:border-l-2 border-[#dadada]"
                ref={cardWrapper}
              >
                <div className="md:pb-[20vh]">
                  {featuresData.map((item, index) => {
                    return (
                      <FeatureCard
                        alt={item.alt}
                        key={index}
                        imgSrc={item.imgSrc as string}
                        title={item.title}
                        desc={item.desc}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 md:pt-0">
        <div className=" md:hidden block">
          <h3
            className={`gsap-opacity-trans-appear text-black font-regular text-center leading-tight ${
              toShowBtn && 'blade-bottom-padding-sm '
            }`}
          >
            {title}
          </h3>
          {toShowBtn && (
            <div className="grid place-content-center ">
              <MasterBtn
                color="black"
                type="submit"
                text="Who we are"
                extraClasses="gsap-opacity-trans-appear"
                size="small"
              />
            </div>
          )}

          <div className="md:hidden block blade-top-padding blade-bottom-padding">
            <Swiper
              slidesPerView={1}
              centeredSlides
              loop
              pagination={{
                bulletActiveClass: 'bg-orange opacity-100',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
              }}
              spaceBetween={15}
              speed={800}
              // autoplay={{
              //   delay: 2000,
              // }}
              className="cursor-grab"
              modules={[Pagination, Autoplay, A11y]}
            >
              {featuresData.map((item, index) => {
                return (
                  <SwiperSlide
                    className="pb-10 flex itemscenter justify-center"
                    key={index}
                  >
                    <FeatureCard
                      alt={item.alt}
                      imgSrc={item.imgSrc as string}
                      title={item.title}
                      desc={item.desc}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  tab,
  title,
  imgSrc,
  desc,
  alt,
}: {
  tab?: string
  title: string
  alt: string
  desc: string
  imgSrc: string
}) {
  return (
    <article className="h-full min-h-full p-2 md:p-3 blur-gradient-feature border relative border-white rounded-md w-11/12 xl:w-9/12 2xl:w-8/12 2xl:mb-32 mb-20">
      <div className="rounded-md overflow-hidden relative z-10 ">
        <img
          src={imgSrc}
          className="h-full w-full object-cover object-top"
          alt={alt}
          aria-hidden
        />
      </div>

      <div className="p-2 md:p-3 z-10 relative">
        <div className="flex gap-2 py-4">
          <span className="w-5 h-[2px] bg-orange" />
          <span className="w-16 h-[2px] bg-orange" />
        </div>

        <h4 className="text-black font-medium tracking-wide leading-tight">
          {title}
        </h4>
        <h6 className="text-black font-light leading-tight md:pb-8 pb-3 tracking-[0.5px] ">
          {desc}
        </h6>
      </div>
    </article>
  )
}
