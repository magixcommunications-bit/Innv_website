import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import year2010 from 'assets/about/sliders/2010.png'
import year2011 from 'assets/about/sliders/2011.png'
import year2016 from 'assets/about/sliders/2016.png'
import year2018 from 'assets/about/sliders/2018.png'
import year2019 from 'assets/about/sliders/2019.png'
import year2020 from 'assets/about/sliders/2020.png'
import year2021 from 'assets/about/sliders/2021.png'
import year2022 from 'assets/about/sliders/2022.png'
import year2023 from 'assets/about/sliders/2023.png'
import year2024 from 'assets/about/sliders/Icons2024/2024.png'
import year2025 from 'assets/about/sliders/Icons2025/2025.png'

// 2024 icons
import CathLab from 'assets/about/sliders/Icons2024/Cath_Lab_Sold.png'
import Neurovascular from 'assets/about/sliders/Icons2024/Neurovascular.png'
import Cardiac from 'assets/about/sliders/Icons2024/Cardiac.png'

import GreatePlaceIcon from 'assets/about/sliders/Icons2025/GreatPlaceIcon.png'
import DesignAwardIcon from 'assets/about/sliders/Icons2025/DesignAwardIcon.png'
// 2025 icons
import Company from 'assets/about/sliders/Icons2025/Cath Lab Vizag.png'
import MapIcon from 'assets/about/sliders/Icons2025/Cath Lab Bangalore.png'
import Icon3 from 'assets/about/sliders/Icons2025/Icon3.png'
import { A11y, Navigation, Pagination } from 'swiper'
// import { carousels } from './yearCarouselMobile'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({})

let lastScrollTop = 0

export const YearsCarousal = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const swiperRef = useRef<any>(null)
  const [instance, setInstance] = useState<any>(null)
  const [scrollController, setScrollController] = useState<any>(null)
  const [refreshGsap, setRefreshGsap] = useState(false)
  const [scrollingBottom, setScrollingBottom] = useState(true)
  const yearCarouselRef = useRef<any>(null)

  setTimeout(() => {
    setRefreshGsap(true)
  }, 100)

  useEffect(() => {
    document.addEventListener('scroll', scrollSideGetter)

    return () => {
      document.removeEventListener('scroll', scrollSideGetter)
    }
  }, [])

  function scrollSideGetter(e: any) {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      setScrollingBottom(true)
    } else {
      // Scrolling up
      setScrollingBottom(false)
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const anim = gsap.from(yearCarouselRef.current, {})
      const controller = ScrollTrigger.create({
        animation: anim,
        trigger: yearCarouselRef.current,
        start: 'top top',
        end: 'bottom -500%',
        scrub: true,
        pin: true,
        onUpdate: (e: any) => {
          const progress: number = +(e.progress * 100).toFixed(2) ?? 0
          // console.log(progress)
          progressHandler(progress)
        },
      })
      setScrollController(controller)
    })

    return () => {
      ctx.revert()
    }
  }, [refreshGsap])

  useEffect(() => {
    setInstance(() => {
      if (swiperRef?.current && swiperRef.current?.swiper) {
        return swiperRef.current.swiper
      }
      return null
    })
  }, [])

  const setPosition = (update: number) => {
    scrollController?.scroll(
      scrollController.start +
        (update / carousels.length) *
          (scrollController.end - scrollController.start),
    )
  }

  const slidePosHandler = useCallback(
    (update: number) => {
      if (window.location.pathname === '/who-we-are') {
        instance?.slideTo(update)
        setActiveSlide(update)
      }
    },
    [instance],
  )

  const scrollPosHandler = (type: string) => {
    const onePartOfWholeProgress = +(100 / carousels.length).toFixed(2)
    switch (type) {
      case '-':
        scrollController?.scroll(
          scrollController.start +
            (scrollController.progress - onePartOfWholeProgress / 100) *
              (scrollController.end - scrollController.start),
        )
        break

      case '+':
        scrollController?.scroll(
          scrollController.start +
            (scrollController.progress + onePartOfWholeProgress / 100) *
              (scrollController.end - scrollController.start),
        )
        break

      default:
        break
    }
  }

  const progressHandler = useCallback(
    (progress: number) => {
      const onePartOfWholeProgress = +(100 / carousels.length).toFixed(2)
      const progressIndex = Math.round(progress / onePartOfWholeProgress)
      if (progressIndex === carousels.length) {
        return
      }
      slidePosHandler(progressIndex)
    },
    [instance, slidePosHandler],
  )

  function skipCarouselHandler() {
    if (scrollingBottom) {
      scrollController?.scroll(
        scrollController.start +
          window.innerHeight +
          (scrollController.end - scrollController.start),
      )
    } else {
      scrollController?.scroll(scrollController.start - window.innerHeight)
    }
  }

  const carousels = [
    {
      year: 2010,
      title:
        'Founded & got exclusive distributorship of Sapphire from OrbusNeich',
      coverImage: year2010,
    },
    {
      year: 2011,
      title: 'Launch of our proprietary stent brand',
      coverImage: year2011,
    },
    {
      year: 2016,
      title: 'Founded Innovation Imaging Technologies Private Limited (IITPL)',
      coverImage: year2016,
    },
    {
      year: 2018,
      title:
        'Launch of the Pinnacle Cath Lab prototype, securing the prestigious Red Dot Award',
      coverImage: year2018,
    },
    {
      year: 2019,
      title:
        "Became India's fastest growing and most awarded Cath Lab Company, and the launch of 'Pinnacle Agile'",
      coverImage: year2019,
    },
    {
      year: 2020,
      title:
        "USD 12 million in net sales, acknowledged by the Indian Government's Medical Device Company Award",
      coverImage: year2020,
    },
    {
      year: 2021,
      title: 'Celebrated the Installation of the 100th Cath Lab in India',
      coverImage: year2021,
    },
    {
      year: 2022,
      title:
        "USD 24 million in net sales, 200th Cath Lab Installation, and the launch of the most advanced 'Premier' Cath Lab",
      coverImage: year2022,
    },
    {
      year: 2023,
      title: 'Series A funding by OrbiMed',
      coverImage: year2023,
    },
    {
      year: 2024,
      // title: 'Certified by Great place to work',
      titles: [
        '400 Cath Lab Sold',
        'Neurovascular Accessories launched',
        'Cardiac Accessories launched',
      ],
      // coverImage: year2024,
      details: [
        {
          title: 'Cath Lab Sold',
          icon: CathLab,
          directImg: '',
        },
        {
          title: 'Neurovascular Accessories launched',
          icon: Neurovascular,
          directImg: '',
        },
        {
          title: 'Cardiac Accessories launched',
          icon: Cardiac,
          directImg: '',
        },
      ],
      mainCoverDetails: [
        {
          mainTitle: 'Certified by Great place to work',
          icon: GreatePlaceIcon,
        },
      ],
      bgImg: year2024,
    },
    {
      year: 2025,
      // title: 'Certified by Great place to work',
      titles: [
        'Cath Lab Manufacturing unit opened at Vizag',
        "Asia's Largest Cath Lab Manufacturing unit opened at Bangalore",
        'Innvolution partners with FUJIFILM for Global Sales Collaboration',
        'Our Premier Cath Lab wins the prestigious iF DESIGN AWARD 2025',
      ],
      // coverImage: year2025,
      details: [
        {
          title: 'Cath Lab Manufacturing unit opened at Vizag',
          icon: '',
          directImg: Company,
        },
        {
          title:
            "Asia's Largest Cath Lab Manufacturing unit opened at Bangalore",
          icon: '',
          directImg: MapIcon,
        },
        {
          title:
            'Innvolution partners with FUJIFILM for Global Sales Collaboration',
          icon: '',
          directImg: Icon3,
        },
      ],
      mainCoverDetails: [
        {
          mainTitle: 'Certified by<br/> Great place to work<br/> (2nd Time)',
          icon: GreatePlaceIcon,
        },
        {
          mainTitle: 'Our Premier<br/> Cath Lab wins iF DESIGN<br/> AWARD 2025',
          icon: DesignAwardIcon,
        },
      ],
      bgImg: year2025,
    },
  ]

  return (
    <div>
      <section
        ref={yearCarouselRef}
        className="hidden xl:block bg-[##EFF3F4]  min-h-screen relative border-b-2 border-gray"
      >
        <div className="absolute top-0 left-0 h-screen border-r-2 box-top border-gray"></div>
        <h3 className="px-3 py-6 font-medium text-center xsl:py-7 2xl:py-12">
          Leaving a trail of success behind
        </h3>

        <section className="hidden border-t-2 border-solid timeline-wrapper md:grid border-gray ">
          {/* timeline */}
          <div className="flex flex-col gap-3 border-r-2 border-solid 2xl:gap-5 border-gray blade-top-padding-sm blade-bottom-padding- ">
            {carousels.map((elem, index) => {
              const key = `${index}`
              return (
                <div className="relative" key={key}>
                  <div
                    className={`absolute -right-[7px] h-3 w-3 rounded-full bg-orange top-0 bottom-0 my-auto left-auto ${
                      index === activeSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <button
                    onClick={() => setPosition(index)}
                    aria-label={elem.title}
                    className={`flex justify-end w-full pr-7 transition-all duration-[250] ease-in-out focus-visible:outline-orange ${
                      index === activeSlide
                        ? 'text-orange'
                        : 'text-black hover:text-opacity-60 text-opacity-40 focus-visible:text-opacity-60'
                    }`}
                  >
                    <span
                      className={`font-medium transition-all  ${
                        index === activeSlide
                          ? 'text-2xl 2xl:text-3xl'
                          : 'text-xl 2xl:text-2xl'
                      }`}
                    >
                      {elem.year}
                    </span>
                  </button>
                </div>
              )
            })}
          </div>

          {/* main content - desktop */}
          <div className="2xl:blade-top-padding 2xl:blade-bottom-padding">
            <Swiper
              ref={swiperRef}
              direction={'vertical'}
              modules={[Navigation, Pagination, A11y]}
              draggable={false}
              allowTouchMove={false}
              speed={600}
              className="max-h-[30rem] sm:max-h-[40rem] bg-[url('assets/about/mobile_bg.png')] bg-center bg-contain bg-no-repeat px-10 bg-origin-content"
            >
              {carousels.map((elem, index) => {
                const key = `${index}`
                return (
                  <SwiperSlide key={key} className="h-full">
                    <div className="relative flex flex-col h-full">
                      {elem.coverImage && (
                        <div className="overflow-hidden basis-80 grow-0 shrink-0">
                          <img
                            src={elem.coverImage}
                            className="object-contain w-full h-full"
                            alt={elem.title}
                          />
                        </div>
                      )}
                      {elem.mainCoverDetails && (
                        <div
                          className={`flex justify-center grow-0 shrink-0 relative`}
                        >
                          <img
                            src={elem.bgImg}
                            className="absolute bg-center bg-contain h-[330px] top-[-40px]"
                            alt=""
                          />
                          {elem.mainCoverDetails.map(
                            (mainDetail, mainDetailIndex) => {
                              return (
                                <div className="flex flex-col w-[300px] relative z-10 mt-[80px] gap-[16px]">
                                  <div className="h-[160px]">
                                    <img
                                      key={mainDetailIndex}
                                      src={mainDetail.icon}
                                      className="object-contain w-full h-full"
                                      alt={mainDetail.mainTitle}
                                    />
                                  </div>
                                  <div className="text-center">
                                    {/* <h4 className="block max-w-md mx-auto text-xl font-medium 2xl:hidden">
                                      {mainDetail.mainTitle}
                                    </h4>
                                    <h5 className="hidden max-w-lg mx-auto text-xl font-medium 2xl:block">
                                      {mainDetail.mainTitle}
                                    </h5> */}
                                    <h4
                                      className="block max-w-md mx-auto text-xl font-medium 2xl:hidden"
                                      dangerouslySetInnerHTML={{
                                        __html: mainDetail.mainTitle,
                                      }}
                                    />
                                    <h5
                                      className="hidden max-w-lg mx-auto text-xl font-medium 2xl:block"
                                      dangerouslySetInnerHTML={{
                                        __html: mainDetail.mainTitle,
                                      }}
                                    />
                                  </div>
                                </div>
                              )
                            },
                          )}
                        </div>
                      )}
                      <div className="px-4 text-center flex-0 ">
                        {elem.title && (
                          <>
                            <h4 className="block max-w-md mx-auto font-medium 2xl:hidden">
                              {elem.title}
                            </h4>
                            <h5 className="hidden max-w-lg mx-auto font-medium 2xl:block">
                              {elem.title}
                            </h5>
                          </>
                        )}
                        <div className="flex justify-center gap-5">
                          {elem.details &&
                            elem.details.map((val, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex flex-col items-center justify-center w-[300px] gap-2"
                                >
                                  {/* <div
                                    className={`w-full h-full ${
                                      index === 0
                                        ? 'max-w-[200px]'
                                        : ' max-w-[250px]'
                                    }  h-[200px]`}
                                  >
                                    <img
                                      src={val.icon}
                                      className="object-contain w-full h-full"
                                      alt=""
                                    />
                                  </div> */}

                                  {val.icon ? (
                                    <div
                                      className={`w-full h-full ${
                                        index === 0
                                          ? 'max-w-[170px]'
                                          : ' max-w-[250px]'
                                      }  h-[200px]`}
                                    >
                                      <img
                                        src={val.icon}
                                        className="object-contain w-full h-full"
                                        alt=""
                                      />
                                    </div>
                                  ) : (
                                    <div
                                      className={`w-full h-full ${
                                        index === 0
                                          ? 'max-w-[130px]'
                                          : ' max-w-[150px]'
                                      }  h-[150px]`}
                                    >
                                      <img
                                        src={val.directImg}
                                        className="object-contain w-full h-full"
                                        alt=""
                                      />
                                    </div>
                                  )}

                                  <div className="w-full h-10 max-w-[247px]">
                                    <h4 className="block text-xl font-medium 2xl:hidden">
                                      {val.title}
                                    </h4>
                                    <h5 className="hidden text-xl font-medium 2xl:block">
                                      {val.title}
                                    </h5>
                                  </div>
                                </div>
                              )
                            })}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          {/* buttons */}
          <div>
            <div className="max-w-[200px] grid place-content-center h-full ">
              <div className="rounded-full flex flex-col self-center justify-between gap-10 border border-[#3C7BD6] m-auto px-2 py-2 sm:max-w-max mt-8">
                <button
                  aria-label="Previous slide"
                  disabled={activeSlide === 0}
                  onClick={() => {
                    scrollPosHandler('-')
                  }}
                  className="disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-[#3C7BD6] rounded-full outline-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                    className={`h-9 w-9 lg:h-8 xl:h-10 xl:w-10 lg:w-8 p-1.5 rotate-90 ${
                      activeSlide === 0
                        ? 'bg-none'
                        : 'bg-[#3C7BD6] hover:bg-[#69a4f7] active:bg-[#3C7BD6] rounded-full'
                    }`}
                  >
                    <path
                      fill="none"
                      stroke={`${activeSlide === 0 ? '#3C7BD6' : '#fff'}`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="48"
                      d="M244 400L100 256l144-144M120 256h292"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  disabled={activeSlide === carousels.length - 1}
                  onClick={() => {
                    scrollPosHandler('+')
                  }}
                  className="disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-[#3C7BD6] rounded-full outline-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                    className={`h-9 w-9 lg:h-8 xl:h-10 xl:w-10 lg:w-8 rounded-full  -rotate-90 p-1.5  ${
                      activeSlide === carousels.length - 1
                        ? 'bg-none'
                        : 'bg-[#3C7BD6] hover:bg-[#69a4f7] active:bg-[#3C7BD6]'
                    }`}
                  >
                    <path
                      fill="none"
                      stroke={`${
                        activeSlide === carousels.length - 1
                          ? '#3C7BD6'
                          : '#fff'
                      }`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="48"
                      d="M244 400L100 256l144-144M120 256h292"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* timeline skip button */}
        <button
          aria-label="Skip timeline"
          className="text-orange px-1 z-10 bottom-8 right-32 font-regular absolute text-2xl after:content-[''] after:h-[2px] after:w-20 after:bg-orange after:absolute after:left-[105%] after:top-1/2 outline-none opacity-80 hover:opacity-100 transition-all duration-200 focus-visible:opacity-100 focus-visible:outline-orange rounded-md"
          onClick={skipCarouselHandler}
        >
          Skip timeline
        </button>
      </section>
    </div>
  )
}
