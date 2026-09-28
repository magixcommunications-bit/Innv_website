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
      icon: icon04,
      text: (
        <>
          Reduced radiation <br className="hidden lg:block" />
          exposure
        </>
      ),
      textStr: 'Reduced radiation exposure',
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
      icon: icon06,
      text: (
        <>
          Advanced visualization <br className="hidden lg:block" /> techniques
        </>
      ),
      textStr: 'Advanced visualization techniques',
    },
  ],
]

export default function SalientFeatures() {
  return (
    <section className="blade-top-padding blade-bottom-padding bg-[url('assets/bg-overlay/orange_gradient_bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
        {/* <h2 className="font-medium text-center text-[1.8rem] pt-3 px-2 pb-8 lg:pt-1 sm:max-w-xl lg:text-[3rem] lg:max-w-3xl leading-tight md:block hidden">
          An interventional imaging solution for cardiovascular procedures
        </h2> */}
        <h3 className="gsap-opacity-trans-appear font-medium text-center pt-3 px-3 pb-4 sm:max-w-xl lg:max-w-3xl leading-tight">
          An interventional imaging solution for cardiovascular procedures
        </h3>
        <h6 className="gsap-opacity-trans-appear text-center px-4 text-[#4D4D4D] font-regular sm:max-w-xl sm:m-auto lg:max-w-2xl">
          Our floor-mounted single-plane Cath Lab improves patient care by
          simplifying the workflow of Cardiovascular, Peripheral Vascular, and
          Neurovascular diagnostic and interventional procedures.
        </h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-container-lg xl:w-container pt-4 sm:blade-top-padding-lg lg:pb-6">
        {solutionsList.map((list, index) => {
          return (
            <div
              key={index}
              className={`border-transparent lg:border-[#C3C3C3] w-full justify-center items-center sm:border-b-1 sm:max-w-2xl self-stretch flex  flex-col sm:flex-row md:flex-col mx-auto lg:m-0 lg:border-b-0 ${
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
}: {
  icon: string
  text: JSX.Element
  textStr: string
  index: number
}) {
  return (
    <article
      className={`gsap-opacity-trans-appear mx-auto md:pl-3 py-7 md:py-8 lg:py-12 flex flex-1  w-full flex-col  self-stretch items-center md:items-start justify-center lg:items-start m-auto md:m-0 max-w-[17rem] lg:m-auto  border-transparent lg:border-[#C3C3C3] 
      ${index === 0 && 'lg:border-b-1'}
      `}
    >
      <img
        src={icon}
        alt={textStr}
        className="pb-3 h-20 2xl:h-24 2xl:pb-5 flex-0"
      />
      <span className="pr-3 text-base md:text-[1.2rem] lg:text-[1.4rem]  flex-1 font-medium 2xl:text-[1.7rem] text-center md:text-left">
        {text}
      </span>
    </article>
  )
}
