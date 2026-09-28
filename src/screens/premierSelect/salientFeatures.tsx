import React from 'react'

import icon01 from 'assets/finalElite/solutions/icon01.svg'
import icon02 from 'assets/finalElite/solutions/icon02.svg'
import icon03 from 'assets/finalElite/solutions/icon03.svg'
import icon04 from 'assets/finalElite/solutions/icon04.svg'
import icon05 from 'assets/finalElite/solutions/icon05.svg'
import icon06 from 'assets/finalElite/solutions/icon06.svg'

const solutionsList = [
  [
    {
      icon: icon01,
      text: (
        <>
          Customizable <br className="hidden lg:block" /> angulation
        </>
      ),
      textStr: 'Customizable angulation',
    },
    {
      icon: icon05,
      text: (
        <>
          Minimized <br className="hidden lg:block" /> procedure time
        </>
      ),
      textStr: 'Minimized procedure time',
    },
  ],
  [
    {
      icon: icon02,
      text: (
        <>
          Dynamic <br className="hidden lg:block" /> imaging
        </>
      ),
      textStr: 'Dynamic imaging',
    },
    {
      icon: icon06,
      text: (
        <>
          Advanced visualization <br className="hidden lg:block" /> techniques
        </>
      ),
      textStr: 'Advanced visualization techniques',
    },
  ],
  [
    {
      icon: icon03,
      text: (
        <>
          Enhanced <br className="hidden lg:block" />
          precision
        </>
      ),
      textStr: 'Enhanced precision',
    },
    {
      icon: icon04,
      text: (
        <>
          Reduced radiation <br className="hidden lg:block" />
          exposure
        </>
      ),
      textStr: 'Reduced radiation exposure',
      hide: true,
    },
  ],
]

export default function SalientFeatures() {
  return (
    <section className="blade-top-padding md:blade-bottom-padding bg-[url('assets/bg-overlay/orange_gradient_bg.webp')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-center">
        <h2 className="gsap-opacity-trans-appear font-medium text-center text-[1.8rem] pt-3 px-2 pb-8 lg:pt-1 sm:max-w-xl lg:text-[3rem] lg:max-w-3xl leading-tight md:block hidden">
          Engineered for interventional cardiovascular imaging
        </h2>
        <h3 className="gsap-opacity-trans-appear  md:hidden block font-medium text-center text-[1.8rem] pt-3 px-2 pb-4 lg:pb-8 lg:pt-1 sm:max-w-xl lg:text-[3rem] lg:max-w-3xl leading-tight">
          Engineered for interventional cardiovascular imaging
        </h3>
        <h6 className="gsap-opacity-trans-appear text-center px-4  text-[#4D4D4D] font-regular sm:max-w-xl sm:m-auto lg:max-w-3xl text-base md:text-base lg:text-xl ">
          A floor-mounted single-plane Cath Lab that streamlines workflow and
          enhances patient care during diagnostic and interventional procedures
          related to Cardiovascular, Neurovascular, and Peripheral fields.
        </h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-container-lg  xl:w-container blade-top-padding-lg lg:pb-6">
        {solutionsList.map((list, index) => {
          return (
            <div
              key={index}
              className={` border-transparent lg:border-[#C3C3C3] w-full sm:border-b-1 sm:max-w-2xl self-stretch flex flex-col mx-auto  lg:m-0 lg:border-b-0 ${
                index % 2 === 1 && 'lg:border-x-1'
              }`}
            >
              {list.map((subList, index) => {
                return (
                  <Listcard
                    key={index + subList.textStr}
                    icon={subList.icon}
                    text={subList.text}
                    textStr={subList.textStr}
                    index={index}
                    hide={subList.hide}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Listcard({
  icon,
  text,
  textStr,
  index,
  hide,
}: {
  icon: string
  text: JSX.Element
  textStr: string
  index: number
  hide?: boolean
}) {
  return (
    <article
      className={`gsap-opacity-trans-appear md:pl-3 py-7 md:py-8 lg:py-12 flex flex-1 w-full flex-col self-stretch items-center md:items-start justify-center lg:items-start m-auto md:m-0 max-w-[17rem] lg:m-auto border-transparent lg:border-[#C3C3C3] 
      ${index === 0 && 'lg:border-b-1'}
      `}
    >
      <img
        src={icon}
        alt={textStr}
        className={`pb-3 h-20 2xl:h-24 2xl:pb-5 flex-0 ${
          hide === true ? 'hidden' : ''
        }`}
      />
      <span
        className={`pr-0 md:pr-3 text-base md:text-[1.2rem] lg:text-[1.4rem]  flex-1 font-regular 2xl:text-[1.5rem] text-center md:text-left ${
          hide === true ? 'hidden' : ''
        }`}
      >
        {text}
      </span>
    </article>
  )
}
