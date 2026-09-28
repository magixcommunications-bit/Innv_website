import React, { useRef, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import NylonBalloonMaterial from 'assets/sapphire-2-1.0mm/carousal/nylon-balloon-material.png'
import SingleMaterialTip from 'assets/sapphire-2-1.0mm/carousal/single-material-tip.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import './index.css'

const tabs = [
  {
    tab: 'Nylon balloon material',
    title: 'Nylon balloon material',
    subtitle: 'More robust balloon material for a higher rated burst pressure.',
    image: NylonBalloonMaterial,
  },
  {
    tab: 'Single material tip tailored for CTO',
    title: 'Single material tip tailored for CTO',
    subtitle:
      'The small size Sapphire II PRO has a single-material tip for a simpler construction. The shorter tip facilitate better tracking and the low tip entry profile is engineered for very tight lesions.',
    image: SingleMaterialTip,
  },
]

type TabsWrapperProps = {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

const TabsWrapper = ({ activeIndex, setActiveIndex }: TabsWrapperProps) => {
  const handleTabClick = (index: number) => {
    setActiveIndex(index)
  }
  return (
    <section className="gsap-opacity-trans-appear mx-auto w-fit lg:block hidden mb-20">
      <div className="2xl:gap-4 gap-3 flex">
        {tabs.map((elem, index: number) => {
          const key = `${index}`
          return (
            <React.Fragment key={key}>
              <button
                aria-label={elem.title}
                type="button"
                onClick={() => handleTabClick(index)}
                className={`flex 2xl:text-xl whitespace-nowrap text-base xl:text-lg border-[2px]
                      transition-all px-3 duration-300 border-solid rounded-md font-medium 2xl:px-5 py-2 
                      focus:outline-orange place-content-center flex-1 items-center gap-3 ${
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
    </section>
  )
}

export function Carousal() {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageRef = useRef<any>()
  const textRef = useRef<any>()

  return (
    <div className="blade-top-padding-lg  px-4 blade-bottom-padding sapphire-201-carousal">
      <TabsWrapper activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      <div className="gsap-opacity-trans-appear hidden lg:flex flex-row justify-center items-center gap-x-12 xl:gap-x-32 2xl:gap-x-40">
        <SwitchTransition>
          <CSSTransition
            key={activeIndex}
            nodeRef={textRef}
            timeout={300}
            classNames="carousal-image"
          >
            <div
              ref={textRef}
              className="flex md:max-w-[320px] lg:max-w-xl flex-col items-center md:items-start"
            >
              <h3 className="font-medium text-center md:text-left max-w-[280px] sm:max-w-[520px] ">
                {tabs[activeIndex].title}
              </h3>
              <p
                className="font-medium text-center text-[#4D4D4D] max-w-md md:text-left mt-4 lg:mt-6 text-lg 
                lg:text-xl"
              >
                {tabs[activeIndex].subtitle}
              </p>
            </div>
          </CSSTransition>
        </SwitchTransition>

        <SwitchTransition>
          <CSSTransition
            key={activeIndex}
            nodeRef={imageRef}
            timeout={300}
            classNames="carousal-image"
          >
            <div
              ref={imageRef}
              className="w-[280px] lg:w-[350px] xl:w-[440px] 2xl:w-[540px]"
            >
              <img
                src={tabs[activeIndex].image}
                alt={tabs[activeIndex].tab}
                className=""
              />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>

      {/* mobie view  */}
      <div className="gsap-opacity-trans-appear lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
          }}
          speed={1000}
          modules={[Pagination, Autoplay]}
          pagination={{
            bulletActiveClass: '!bg-[#F69A4D] !opacity-100',
          }}
          centeredSlides
          loop
          className="pb-10"
        >
          {tabs.map((tab, index) => (
            <SwiperSlide key={index} className="h-auto self-stretch">
              <div
                ref={textRef}
                className="flex mx-auto max-w-[360px] sm:max-w-xl flex-col items-center lg:items-start"
              >
                <h5 className="font-medium text-center max-w-[520px] text-[24px] lg:text-[32px] xl:text-4xl">
                  {tab.title}
                </h5>
                <div
                  ref={imageRef}
                  className="w-[280px] mt-10 lg:w-[350px] xl:w-[440px] 2xl:w-[540px]"
                >
                  <img src={tab.image} alt={tab.tab} className="" />
                </div>
                <p
                  className="font-medium text-center max-w-md mt-8 text-lg 
                  lg:text-xl text-[#4D4D4D]"
                >
                  {tab.subtitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
