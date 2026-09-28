import React from 'react'

import product from 'assets/finalElite/userExperience/user.png'
import logo01 from 'assets/finalElite/userExperience/logo01.svg'
import logo02 from 'assets/finalElite/userExperience/logo02.svg'
import logo03 from 'assets/finalElite/userExperience/logo03.svg'
import mobilescreenmobile from 'assets/finalElite/Mobile.png'

const experienceList = [
  {
    logo: logo01,
    text: '6-foot radius spring arm',
    textJSX: <>6-foot radius spring arm</>,
  },
  {
    logo: logo02,
    text: 'Single 43" live monitor display mounting and rotational flexibility',
    textJSX: (
      <>Single 43" medical-grade monitor mounting and rotational flexibility</>
    ),
  },
  {
    logo: logo03,
    text: 'Height adjustment range of 500 mm',
    textJSX: (
      <>
        Height adjustment <br className="hidden lg:block" /> range of 500 mm
      </>
    ),
  },
]

export default function UserExperience() {
  return (
    <div className="user-experience-wrapper blade-top-padding md:blade-bottom-padding-sm blade-bottom-paddin flex items-center flex-col md:pb-0">
      <h3 className="gsap-opacity-trans-appear text-white font-medium text-center  pt-3 px-2 pb-3 md:pb-6 max-w-sm lg:pt-1 sm:max-w-xl lg:max-w-3xl ">
        Unmatched user experience
      </h3>
      <h5 className="gsap-opacity-trans-appear text-white text-opacity-90 md:block hidden pb-4 font-light max-w-xs sm:max-w-md lg:max-w-xl 2xl:max-w-2xl text-center">
        Premier Cath Lab's adjustable monitor stand provides outstanding tools
        healthcare professionals need to perform a wide range of complex
        cardiovascular interventions.
      </h5>
      <span className="gsap-opacity-trans-appear  block text-sm md:hidden  w-11/12 leading-snug text-white text-opacity-90 pb-4 font-light max-w-xs sm:max-w-md lg:max-w-xl 2xl:max-w-2xl text-center">
        Premier Cath Lab's adjustable monitor stand provides outstanding tools
        healthcare professionals need to perform a wide range of complex
        cardiovascular interventions.
      </span>
      <div className="relative image-wrapper blade-bottom-padding-sm">
        <img
          src={product}
          alt="Cath Lab's adjustable monitor"
          className="gsap-opacity-trans-appear monitor-image  object-contain pt-12 px-6 lg:px-0 w-11/12 mx-auto max-h-[80vh] lg:block hidden "
        />
        <img
          src={mobilescreenmobile}
          alt="Cath Lab's adjustable monitor"
          className="gsap-opacity-trans-appear monitor-image py-7 lg:hidden block max-w-sm mx-auto w-11/12 px-6 lg:px-0"
        />
        <div className="monitor-grad absolute top-0 left-0 h-full w-full"></div>
      </div>
      <div className="gsap-stagger-parent grid grid-cols-1 blade-bottom-margin-lg blade-top-padding-sm md:grid-cols-2 lg:grid-cols-3  w-container-lg xl:w-container  max-w-[1440px] blade-bottom-padding-sm xl:pb-0 2xl:blade-bottom-padding gap-y-8 md:gap-y-16 gap-x-6">
        {experienceList.map((item, index) => {
          return (
            <ExperienceList
              key={index}
              logo={item.logo}
              text={item.text}
              textJSX={item.textJSX}
            />
          )
        })}
      </div>
    </div>
  )
}

function ExperienceList({
  logo,
  text,
  textJSX,
}: {
  logo: string
  text: string
  textJSX: JSX.Element
}) {
  return (
    <article className="gsap-stagger self-stretch relative md:pl-6 lg:pl-8 lg:max-w-xl max-w-sm">
      <div className="absolute 2xl:h-[23rem] lg:h-[19rem] w-1 left-0 hidden lg:block">
        <svg
          width="2"
          viewBox="0 0 2 367"
          className="h-full w-auto object-contain"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            opacity="0.5"
            x1="0.625"
            y1="2.18557e-08"
            x2="0.62497"
            y2="690"
            stroke="url(#paint0_linear_1156_13501)"
            strokeDasharray="10 10"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1156_13501"
              x1="-0.87256"
              y1="4.38347e-09"
              x2="-0.872568"
              y2="683.128"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="bg-white mx-auto p-7 w-11/12 lg:p-8 xl:p-10 rounded-md min-h-full md:w-full">
        <img src={logo} alt={text} className="pb-8 md:pb-10" />
        <p className=" text-base lg:text-lg block sm:pr-16 md:pr-0  pb-3 2xl:text-2xl font-medium">
          {textJSX}{' '}
        </p>
      </div>
    </article>
  )
}
