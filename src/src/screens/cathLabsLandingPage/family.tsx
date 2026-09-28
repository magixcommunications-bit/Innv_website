import React, { useRef, useEffect, useState } from 'react'
import { TextAnchor } from 'atoms/links'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// tabs
import pinnacle_Small from 'assets/cathLabsLandingPage/products/tabs/Pinnacle.png'
import elite_Sharp_Small from 'assets/cathLabsLandingPage/products/tabs/elite-sharp-tab.png'
import Pinnacle_Agile_Small from 'assets/cathLabsLandingPage/products/tabs/Pinnacle_Agile.png'
import Pinnacle_Pro_Small from 'assets/cathLabsLandingPage/products/tabs/Pinnacle_Pro.png'
import Premier_Elite_Small from 'assets/cathLabsLandingPage/products/tabs/Premier_Elite.png'
import Premier_Select_Small from 'assets/cathLabsLandingPage/products/tabs/Premier_Select.png'

// Products
import pinnacle from 'assets/cathLabsLandingPage/products/pinnacle.png'
import Pinnacle_Agile from 'assets/cathLabsLandingPage/products/agile.png'
import Pinnacle_Pro from 'assets/cathLabsLandingPage/products/pro.png'
import Premier_Elite from 'assets/cathLabsLandingPage/products/elite.png'
import Premier_Elite_sharp from 'assets/cathLabsLandingPage/products/elite-sharp.png'
import Premier_Select from 'assets/cathLabsLandingPage/products/select.png'

// logos
import pinnacle_logo from 'assets/home/product_section/vaiants/cath/cath-logo-03.svg'
import Pinnacle_Agile_logo from 'assets/home/product_section/vaiants/cath/cath-logo-04.svg'
import Pinnacle_Pro_logo from 'assets/home/product_section/vaiants/cath/cath-logo-05.svg'
import Premier_Elite_logo from 'assets/home/product_section/vaiants/cath/cath-logo-01.svg'
import Premier_Elite_sharp_logo from 'assets/home/product_section/vaiants/cath/cath-logo.svg'
import Premier_Select_logo from 'assets/home/product_section/vaiants/cath/cath-logo-02.svg'
import { useNavigate } from 'react-router-dom'
import { CarouselBtn, MasterBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'

const data = [
  {
    variantTitle: 'Family of <b>Cath Labs</b>',
    target: '/products/cath-labs/premier-elite-sharp',
    title: 'Premier Elite Sharp',
    subtitle:
      'Driven by AI Excellence, harnessing our proprietary AI Algorithms for enhanced image precision.',
    tab: Premier_Elite_sharp,
    cover: Premier_Elite_sharp,
    logo: Premier_Elite_sharp_logo,
  },
  {
    variantTitle: 'Family of <b>Cath Labs</b>',
    target: '/products/cath-labs/premier-elite',
    title: 'Premier Elite',
    subtitle:
      'Experience versatility like never before. A floor-mounted Cath Lab that offers expanded operating space and deeper angles.',
    tab: Premier_Elite,
    cover: Premier_Elite,
    logo: Premier_Elite_logo,
  },
  {
    variantTitle: 'Premier Select',
    target: '/products/cath-labs/premier-select',
    title: 'Premier Select',
    subtitle:
      'Setting new standards of performance. A floor-mounted Cath Lab engineered for higher imaging accuracy.',
    tab: Premier_Select,
    cover: Premier_Select,
    logo: Premier_Select_logo,
  },
  {
    variantTitle: 'Pinnacle Agile',
    target: '/products/cath-labs/pinnacle-agile',
    title: 'Pinnacle Agile',
    subtitle:
      'Designed to adapt to your evolving needs. The most agile Cath Lab in the market.',
    tab: Pinnacle_Agile,
    cover: Pinnacle_Agile,
    logo: Pinnacle_Agile_logo,
  },
  {
    variantTitle: '',
    target: '/products/cath-labs/pinnacle',
    title: 'Pinnacle',
    subtitle:
      'At the core of cardiovascular care – A reliable, fixed, flat panel, fully digital Cath Lab.',
    tab: pinnacle,
    cover: pinnacle,
    logo: pinnacle_logo,
  },
  {
    variantTitle: '',
    target: '/products/cath-labs/pinnacle-pro',
    title: 'Pinnacle Pro',
    subtitle: `Bridging the pinnacle of cardiac care with affordability. The world's most affordable fixed flat panel Cath Lab.`,
    tab: Pinnacle_Pro,
    cover: Pinnacle_Pro,
    logo: Pinnacle_Pro_logo,
  },
]

export default function Products() {
  const [progresscls, setProgressCls] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const imgRef = useRef<any>()
  const descWrapper = useRef<any>()
  const wrapper = useRef<any>()
  const navigate = useNavigate()

  const moveNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length)
  }
  const movePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    const progressClass = `active-tab tab-01`
    setProgressCls(progressClass)
  }, [activeIndex, progresscls])

  return (
    <section className="products-wrapper md:blade-top-padding blade-top-padding blade-bottom-padding-lg ">
      <div
        className="grid place-content-center place-items-center text-center gap-4 product-section-wrapper w-container"
        ref={wrapper}
      >
        <h3 className="gsap-opacity-trans-appear font-medium ">
          Innvolution’s Family of Cath Labs
        </h3>
        <h6 className="gsap-opacity-trans-appear font-medium  max-w-xl">
          Combine your clinical expertise with our technological innovation to
          deliver cardiac care with precision.
        </h6>
      </div>

      <div className="blade-bottom-padding-sm pt-1 md:pt-8 max-w-4xl mx-auto lg:block hidden">
        <div className="w-full pt-4 2xl:pt-3 px-2 mx-auto flex h-full gap-1 mt-3 sm:mt-0 xl:gap-4 2xl:gap-6 mb-4">
          {data.map((elem, index: number) => {
            const key = `${index}`
            return (
              <Tab
                handleTabChange={() => setActiveIndex(index)}
                key={key}
                text={elem.title}
                coverImage={elem.tab}
                activeIndex={activeIndex}
                index={index}
              />
            )
          })}
        </div>
        <div className="tabs-progress-wrapper h-[2px] w-full bg-slate-300 rounded-md">
          <div
            className={`tab tab-0${activeIndex} w-[16%] h-[3px] bg-orange rounded-md transition-all duration-500`}
          />
        </div>
      </div>
      <div className="w-container">
        <div className="flex lg:flex-row flex-col relative justify-center xl:gap-3 gap-2 lg:pb-0 pb-4">
          <div className="h-full lg:w-8/12 blade-bottom-paddding">
            <div className="flex h-full overflow-hidden mx-auto ">
              <div className="flex lg:static absolut right-12 bottom-0 items-center">
                <CarouselBtn
                  activeIndex={activeIndex}
                  color="orange"
                  onClick={movePrev}
                  index={0}
                  text="Move to previous slide"
                  size="base"
                  type="button"
                  extraClasses={extraClasses + ' -translate-x-1/ '}
                />
              </div>
              <SwitchTransition>
                <CSSTransition
                  key={activeIndex}
                  nodeRef={imgRef}
                  timeout={500}
                  classNames="imgwrapper"
                  unmountOnExit
                >
                  <div
                    ref={imgRef}
                    className="w-full max-w-xl 2xl:max-w-none mx-auto mt-4"
                  >
                    <img
                      src={data[activeIndex].cover}
                      alt={data[activeIndex].title}
                      className="xl:h-[25rem] 2xl:h-[30rem] md:h-[18rem] h-[12rem] mx-auto w-auto object-contain object-center"
                    />
                  </div>
                </CSSTransition>
              </SwitchTransition>
              <div className="lg:hidden flex items-center">
                <CarouselBtn
                  activeIndex={activeIndex}
                  color="orange"
                  onClick={moveNext}
                  index={data.length - 1}
                  text="Move to next slide"
                  size="base"
                  type="button"
                  isRotated
                  extraClasses={extraClasses}
                />
              </div>
            </div>
          </div>
          <div className="desc-wrapper flex lg:w-4/12 flex-col items-start justify-center gap-1 mx-auto">
            <SwitchTransition>
              <CSSTransition
                key={activeIndex}
                nodeRef={descWrapper}
                timeout={150}
                classNames="description"
                unmountOnExit
              >
                <div ref={descWrapper}>
                  <div className="w-full max-w-none mx-auto md:mb-3 mb-2">
                    <img
                      src={data[activeIndex].logo}
                      alt={data[activeIndex].title}
                      className="lg:h-20 h-14 object-contain object-center"
                    />
                  </div>
                  <h4 className=" leading-[1.15] w-11/12 font-medium  translate-y-4 opacity-0 md:block hidden">
                    {data[activeIndex].title}
                  </h4>
                  <h3 className="leading-[1.15] w-11/12 font-medium  translate-y-4 opacity-0 md:hidden block">
                    {data[activeIndex].title}
                  </h3>

                  <h6 className="text-black text-opacity-60 leading-snug md:pt-5 pt-2 font-regular translate-y-4 opacity-0 2xl:pr-10 ">
                    {data[activeIndex].subtitle}
                  </h6>

                  <div className="md:pt-8 pt-4 2xl:pt-12 flex items-center gap-5">
                    <MasterBtn
                      type="button"
                      color="orange"
                      text="Know more"
                      size="base"
                      onClick={() => {
                        navigate(data[activeIndex].target)
                      }}
                      aria-label={data[activeIndex].title}
                    />
                    <TextAnchor
                      className="translate-y-4 opacity-0"
                      href="/contact-us"
                      text="Get quote"
                    />
                  </div>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="lg:flex hidden items-center">
            <CarouselBtn
              activeIndex={activeIndex}
              color="orange"
              onClick={moveNext}
              index={data.length - 1}
              text="Move to next slide"
              size="base"
              type="button"
              isRotated
              extraClasses={extraClasses}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Tab({
  coverImage,
  text,
  index,
  activeIndex,
  handleTabChange,
}: {
  handleTabChange: () => void
  coverImage: string
  text: string
  index: number
  activeIndex: number
}) {
  return (
    <button
      onClick={handleTabChange}
      aria-label={text}
      className={` ${
        index === activeIndex
          ? ' border-opacity-80 text-orange bg-opacity-80 font-medium'
          : 'border-opacity-0 bg-opacity-0'
      } w-[16%] flex flex-col justify-center outline-orange md:justify-start items-center xl:gap-4 gap-3 2xl:p-2 px-3 py-3 md:p-1 transition-all duration-300 ease-in-out`}
    >
      <div className="md:block hidden h-16">
        <img
          className="w-full h-full object-contain"
          src={coverImage}
          alt={text}
        />
      </div>
      <h6 className="font-medium text-base  whitespace-nowrap">{text}</h6>
    </button>
  )
}
