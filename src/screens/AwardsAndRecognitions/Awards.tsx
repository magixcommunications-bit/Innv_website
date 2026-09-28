import React, { useEffect } from 'react'
import './index.css'

import awardLogo from 'assets/home/awards/awardLogo.webp'
import { useAdmin } from 'store/store'
import useFetchAward from 'hooks/useFetchAward'

const Awards = () => {
  const { awardsData } = useAdmin()
  useFetchAward()

  return (
    <>
      {awardsData.SECTION_2.length === 0 ? null : (
        <>
          <section>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-5 lg:gap-x-0 blade-bottom-padding">
              <div className="bg-[url(assets/bg-overlay/home_awards_bg.webp)] bg-cover div1">
                <div className="w-container blade-top-padding-sm blade-bottom-padding-lg">
                  <img
                    className="gsap-opacity-trans-appear h-[150px] w-auto"
                    src={awardLogo}
                    alt="Awards"
                    aria-hidden
                  />
                  <h3 className="pt-3 font-medium gsap-opacity-trans-appear">
                    Excellence recognized <br /> in the industry
                  </h3>
                  <div className="max-w-sm pt-3 lg:max-w-md 2xl:max-w-lg">
                    <h6
                      className={`gsap-opacity-trans-appear sm:hidden font-regular leading-snug text-[#333333B3]`}
                    >
                      A leading name in Cath Lab manufacturing across Asia,
                      recipient of{' '}
                      <span className="font-bold text-orange">
                        {awardsData.SECTION_2.length} prestigious awards
                      </span>
                    </h6>
                    <h5
                      className={`gsap-opacity-trans-appear hidden sm:block font-regular leading-snug text-[#333333B3]`}
                    >
                      A leading name in Cath Lab manufacturing across Asia,
                      recipient of{' '}
                      <span className="font-bold text-orange">
                        {awardsData.SECTION_2.length} prestigious awards
                      </span>
                    </h5>
                  </div>
                </div>
              </div>

              {[...awardsData.SECTION_2]?.reverse().map((elem, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center w-full h-full gsap-opacity-trans-appear lg:pt-12 xl:py-6 blade-top-margin lg:mt-0"
                  >
                    <div
                      className={`group relative border border-solid rounded-md overflow-hidden border-black border-opacity-30 ${
                        idx === 0 ? 'div2' : ''
                      } h-[350px] lg:h-80 xl:h-[22rem] 2xl:h-[25rem] pl-5 w-[90%] py-10 bg-[url("assets/bg-overlay/orange_gradient_bg.webp")] bg-cover flex flex-col items-start justify-between`}
                    >
                      <img
                        className={`group-hover:opacity-0 transition-opacity duration-700 h-auto max-w-[9rem] md:max-w-[11rem] 2xl:max-w-[14rem] max-h-24 w-auto `}
                        src={elem.logo as string}
                        alt={elem.title}
                      />
                      <h6 className="font-medium max-w-[270px] xl:max-w-xs group-hover:opacity-0 transition-opacity duration-700 2xl:text-2xl">
                        {elem.title}
                      </h6>

                      <div className="absolute">
                        <h5 className="group-hover:opacity-100 font-medium text-orange max-w-[300px] 2xl:max-w-sm blade-bottom-margin-sm xl:mb-5 opacity-0 transition-opacity duration-700">
                          {elem.title}
                        </h5>
                        <p className="group-hover:opacity-100 font-regular opacity-0 transition-opacity duration-700 max-w-[300px] lg:max-w-sm xl:max-w-xs 2xl:max-w-md 2xl:text-xl">
                          {elem.desc}
                        </p>
                      </div>

                      <div className="absolute bottom-0 right-0 bg-[#C9CBCF]">
                        <svg
                          className="transition-transform duration-700 transform group-hover:-rotate-45"
                          xmlns="http://www.w3.org/2000/svg"
                          width="37"
                          height="37"
                          viewBox="0 0 37 37"
                          fill="none"
                        >
                          <path
                            d="M28.7112 16.5757H19.7303V7.59485H16.7367V16.5757H7.75586V19.5693H16.7367V28.5502H19.7303V19.5693H28.7112V16.5757Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default Awards
