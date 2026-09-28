import React from 'react'

import listIcon from 'assets/pinnacle/versitality/listIcon.svg'
import listIconMob from 'assets/pinnacle/versitality/listIconMob.svg'
import listBg from 'assets/pinnacle/versitality/listBg.svg'
import image1 from 'assets/pinnacle/versitality/01.jpg'
import image2 from 'assets/pinnacle/versitality/02.jpg'
// import image3 from 'assets/pinnacle/versitality/03.jpg'
import image4 from 'assets/pinnacle/versitality/04.jpg'

const versatilityTextList = [
  'Proprietary image processing chain ensures sharper images at lower radiation leading to enhanced patient and physician safety',
  'Powerful Heat Exchanger - Peace of mind for longer complex procedures',
  'Low dose mode',
]

const versatilityImageList = [
  {
    image: image1,
    text: 'Coronary',
  },
  {
    image: image2,
    text: 'Peripheral Vascular',
  },
  // {
  //   image: image3,
  //   text: 'Coronary',
  // },
  {
    image: image4,
    text: 'DSA Neuro',
  },
]

export default function Versatility() {
  return (
    <section
      className="font-regular text-white blade-top-padding blade-bottom-padding-lg 
      bg-[url(assets/pinnacle/versitality/bg.jpg)] overflow-hidden"
    >
      <div className="w-container-lg 2xl:w-container ">
        <div className="blade-bottom-padding-lg">
          <h3 className="gsap-opacity-trans-appear font-medium leading-tight ">
            Versatility at its best
          </h3>

          <h5 className="gsap-opacity-trans-appear max-w-md pt-4 lg:pt-6 lg:max-w-[35rem] 2xl:max-w-2xl font-light">
            A variety of cardiac, peripheral vascular, and neurovascular
            diagnostic and interventional procedures can be easily performed
            using Pinnacle Agile.
          </h5>
        </div>

        <section
          className="flex flex-col font-light md:flex-row gap-y-8 items-start gap-x-9 lg:gap-x-12 xl:gap-x-20 
        2xl:gap-x-28 -mt-2 xl:-mt-6"
        >
          {versatilityTextList.map((listItem, index) => {
            return (
              <article
                className="gsap-opacity-trans-appear flex h-auto self-stretch gap-3 items-start xl:gap-4"
                key={index}
              >
                <img
                  src={listIcon}
                  alt={'List ' + (index + 1)}
                  className="hidden md:block"
                />
                <img
                  src={listIconMob}
                  alt={'List ' + (index + 1)}
                  className="md:hidden h-3.5 mt-1.5"
                />

                <h6 className="max-w-sm font-regular md:max-w-[14rem] lg:max-w-[16rem] xl:max-w-[28rem] 2xl:max-w-xs">
                  {listItem}
                </h6>
              </article>
            )
          })}
        </section>

        <section
          className="blade-top-padding-lg grid place-content-start gap-y-12 sm:grid-cols-2 md:grid-cols-3 lggrid-cols-4 md:gap-x-8  relative gap-x-auto 
            lg:gap-x-20 xl:w-11/12 min-[1800px]:w-10/12 
          "
        >
          {versatilityImageList.map((item, index) => {
            return (
              <article
                key={index}
                className="gsap-opacity-trans-appear flex flex-col items-center justify-center gap-y-4 sm:items-start sm:ml-2 md:gap-y-5 xl:gap-y-6 relative"
              >
                <div className="relative h-fit w-fit">
                  <div
                    className="pinnacle-versatility w-[98%] h-[98%] p-10 border-[3px] border-opacity-30 
                  rounded-lg border-[#D9D9D9] absolute -top-1.5 -left-1.5"
                  ></div>
                  <img
                    src={listBg}
                    alt="Background element"
                    className="absolute top-[50%] left-[50%]"
                  />
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-[98%] h-[98%] rounded-md relative translate-x-1.5 translate-y-1 md:translate-x-2.5 md:translate-y-2 xl:translate-x-3.5 xl:translate-y-3"
                  />
                </div>

                <div
                  style={{
                    background:
                      'linear-gradient(151deg, rgba(217, 217, 217, 0.30) -33.66%, rgba(217, 217, 217, 0.00) 122.81%)',
                  }}
                  className="whitespace-nowrap self-start ml-3 sm:ml-2 md:ml-3 xl:ml-3.5 px-6 py-2 pinnacle-versatility border border-opacity-30 rounded-[5px] border-[#D9D9D9]"
                >
                  {item.text}
                </div>
              </article>
            )
          })}
        </section>
      </div>
    </section>
  )
}
