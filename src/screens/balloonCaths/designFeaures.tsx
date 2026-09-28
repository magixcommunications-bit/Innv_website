import React, { useState, useRef } from 'react'
import ExemplarySafety from 'assets/balloon/designFeatures/ExemplarySafety.png'
import IntuitiveTechnology from 'assets/balloon/designFeatures/IntuitiveTechnology.png'
import PerformanceEfficiency from 'assets/balloon/designFeatures/PerformanceEfficiency.png'
import UnmatchedDesign from 'assets/balloon/designFeatures/UnmatchedDesign.png'

import './styles/designFeature.css'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

const data = [
  {
    title: 'Unmatched design',
    productImg: UnmatchedDesign,
    description: [
      'Designed for a wide spectrum of vessel sizes and complexities',
      'Ensuring durability in even the most demanding clinical scenarios',
    ],
  },
  {
    title: 'Intuitive technology',
    productImg: IntuitiveTechnology,
    description: [
      'Advanced balloon memory technology',
      'Redefined crossability and deliverability excellence',
    ],
  },
  {
    title: 'Performance efficiency',
    productImg: PerformanceEfficiency,
    description: [
      'Navigation through challenging anatomies with ease',
      'Controlled and consistent dilation with every use',
    ],
  },
  {
    title: 'Exemplary safety',
    productImg: ExemplarySafety,
    description: [
      'Paramount safety to facilitate accurate interventions',
      'Minimal friction for smoother procedures',
    ],
  },
]
export default function DesignFeaures() {
  let userExeperienceRef = useRef<HTMLDivElement>(null)
  let userExeperienceRefText = useRef<HTMLDivElement>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const moveNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length)
  }
  const movePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="bg-dark-gradient blade-bottom-padding-lg lg:pb-0">
      <div
        className="grid lg:grid-cols-5 lg:gap-10 w-container-sm lg:px-16 balloon-design-features 
      blade-top-padding blade-bottom-padding items-center flex-col"
      >
        <div className="gsap-opacity-trans-appear lg:col-span-3">
          <SwitchTransition>
            <CSSTransition
              nodeRef={userExeperienceRef}
              key={activeIndex}
              timeout={500}
              classNames="designFeatures-image"
            >
              <div
                className="2xl:h-[32rem] xl:h-[26rem] sm:h-[20rem] h-[14rem] lg:mx-auto"
                ref={userExeperienceRef}
              >
                <img
                  className="h-full w-auto object-cover object-left lg:object-center"
                  src={data[activeIndex].productImg}
                  alt={data[activeIndex].title}
                />
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="gsap-opacity-trans-appear col-span-2">
          <div className="lg:flex hidden gap-4 lg:mb-8 mb-5">
            {data.map((_, index) => {
              return (
                <span
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`lg:h-[3px] h-[2px] lg:w-14 w-6 bg-opacity-50 cursor-pointer ${
                    activeIndex === index
                      ? 'bg-orange bg-opacity-100'
                      : 'bg-white'
                  }`}
                ></span>
              )
            })}
          </div>
          <SwitchTransition>
            <CSSTransition
              nodeRef={userExeperienceRefText}
              key={activeIndex}
              timeout={500}
              classNames="designFeatures"
            >
              <div
                ref={userExeperienceRefText}
                className="grid md:gap-4 gap-2 max-w-sm transition-text-wrapper pb-4 md:pb-0"
              >
                <h4 className=" text-white opacity-0 translate-y-4 font-regular">
                  {data[activeIndex].title}
                </h4>

                {data[activeIndex].description.map((ele, index) => {
                  return (
                    <h6
                      key={index}
                      className="text-white opacity-0 translate-y-4 font-light"
                    >
                      {ele}
                    </h6>
                  )
                })}
              </div>
            </CSSTransition>
          </SwitchTransition>

          <div className="flex gap-4 items-center font-light lg:mt-8 mt-5">
            <button
              aria-label="Move to previous slide"
              className="border-2 hover:border-orange transition-all group grid place-content-center text-white lg:w-14  w-10 h-10 md:w-12 lg:h-14 md:h-12 rounded-full"
              onClick={movePrev}
            >
              <svg
                className="w-2.5 md:w-3 fill-white group-hover:fill-orange transition-all stroke-transparent mr-1"
                viewBox="0 0 14 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.2087 17.1652L5.84017 9.79665L13.2087 2.42808L10.7817 0.0010643L0.986154 9.79665L10.7817 19.5922L13.2087 17.1652Z" />
              </svg>
            </button>
            <h5 className="text-white">
              <span className="text-orange"> 0{activeIndex + 1} </span>/ 0
              {data.length}
            </h5>
            <button
              aria-label="Move to next slide"
              className="border-2 hover:border-orange transition-all group grid place-content-center text-white lg:w-14  w-10 h-10 md:w-12 lg:h-14 md:h-12 rounded-full"
              onClick={moveNext}
            >
              <svg
                className="w-2.5 md:w-3 fill-white group-hover:fill-orange transition-all stroke-transparent"
                viewBox="0 0 13 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.686768 17.1652L8.05534 9.79665L0.686768 2.42808L3.11378 0.0010643L12.9094 9.79665L3.11378 19.5922L0.686768 17.1652Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
