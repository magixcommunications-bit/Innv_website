import React, { useEffect, useRef, useState } from 'react'

import awardLogo from 'assets/home/awards/awardLogo.webp'

import { useNavigate } from 'react-router-dom'
import { MasterBtn } from 'atoms/buttons'

import './awards.css'
import { useAdmin } from 'store/store'
import useFetchAward from 'hooks/useFetchAward'

export default function Awards({ bgClass }: { bgClass: string }) {
  const wrapper = useRef<any>()
  const navigate = useNavigate()
  const { awardsData } = useAdmin()
  useFetchAward()
  const [logoList, setLogoList] = useState(awardsData.SECTION_2)

  useEffect(() => {
    resizeHandler() // to set it once page is loaded

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  useEffect(() => {
    setLogoList(awardsData.SECTION_2)
  }, [awardsData.SECTION_2])

  function resizeHandler() {
    const logoListTemp = JSON.parse(JSON.stringify(logoList))
    if (logoListTemp.length % 3 !== 0 && window.innerWidth < 1024) {
      const remaining = 3 - (logoListTemp.length % 3)
      for (let i = 0; i < remaining; i++) {
        logoListTemp.push({
          logo: '',
          title: '',
          desc: '',
          _id: Math.random().toString(),
        })
      }
    }
    if (logoListTemp.length % 4 !== 0 && window.innerWidth >= 1024) {
      const remaining = 4 - (logoListTemp.length % 4)
      for (let i = 0; i < remaining; i++) {
        logoListTemp.push({
          logo: '',
          title: '',
          desc: '',
          _id: Math.random().toString(),
        })
      }
    }
  }

  return (
    <>
      {awardsData.SECTION_2.length === 0 ? null : (
        <>
          <section
            className={`${bgClass} md:blade-top-padding blade-bottom-padding `}
          >
            <div
              className="flex flex-col justify-center h-full md:pb-0 gap-y-6 md:grid md:grid-cols-5"
              ref={wrapper}
            >
              <div className="col-start-1 col-end-3">
                <div className="flex flex-col items-center justify-center w-10/12 h-full ml-auto mr-auto left-wrapper md:items-start md:mr-0 md:pr-5 xl:pr-10 md:pb-8 lg:pb-0">
                  <div className="pt-12 number-wrapper fill-orange md:pt-0">
                    <img
                      src={awardLogo}
                      alt="Innvolution has won 14 awards"
                      className="gsap-opacity-trans-appear lg:max-w-[250px]  max-w-[200px] 2xl:max-w-[250px] "
                    />
                  </div>
                  <h3
                    className={`gsap-opacity-trans-appear font-medium sm:py-2 text-black text-center pb-2 md:text-left`}
                  >
                    Awards & recognition
                  </h3>
                  <h6
                    className={`gsap-opacity-trans-appear sm:hidden font-regular md:text-left text-center leading-snug text-[#333333B3]`}
                  >
                    A leading name in Cath Lab{' '}
                    <br className="hidden min-[300px]:block md:hidden min-[800px]:block" />{' '}
                    manufacturing across Asia, recipient{' '}
                    <br className="hidden min-[300px]:block md:hidden min-[800px]:block" />{' '}
                    of{' '}
                    <span className="text-[#F69A4D] font-bold">
                      {awardsData.SECTION_2.length} prestigious awards
                    </span>
                  </h6>
                  <h5
                    className={`gsap-opacity-trans-appear hidden sm:block font-regular md:text-left text-center leading-snug text-[#333333B3]`}
                  >
                    A leading name in Cath Lab{' '}
                    <br className="hidden min-[300px]:block md:hidden min-[800px]:block" />{' '}
                    manufacturing across Asia, recipient{' '}
                    <br className="hidden min-[300px]:block md:hidden min-[800px]:block" />{' '}
                    of{' '}
                    <span className="text-[#F69A4D] font-bold">
                      {awardsData.SECTION_2.length} prestigious awards
                    </span>
                  </h5>

                  <div className="pt-5 pb-2 btn-wrapper md:pt-6 lg:pt-8 md:pb-0 ">
                    <MasterBtn
                      type="button"
                      color="orange"
                      extraClasses="gsap-opacity-trans-appear"
                      text="See all awards"
                      size="base"
                      onClick={() => {
                        navigate('/awards-and-recognitions')
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="bgwhite md:w-full h-fit my-auto w-[95%] mx-auto col-start-3 col-end-6 rounded-md md:rounded-r-none overflow-hidden max-w-lg md:max-w-none
          "
              >
                <div
                  className=" bgwhite md:w-full bg-[url(assets/home/awards/wave.png) bg-cover h-fit my-auto w[95%] mx-auto col-start-3 col-end-6 rounded-md overflow-hidden py-4 sm:p-6 lg:px-10 xl:py-10 2xl:py-12 2xl:px-14
            "
                >
                  <div className="awards-grad-y">
                    <div className="grid h-auto grid-cols-3 gsap-stagger-parent awards-grad-x place-content-center lg:grid-cols-4">
                      {[...logoList].reverse().map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="relative grid border-t-0 border-r-0 border-black border-dashed place-content-center border-1 border-opacity-20 "
                          >
                            {item.logo && (
                              <img
                                src={item.logo as string}
                                alt={item.title}
                                className="w-auto h-auto p-4 gsap-stagger xl:p-5 2xl:p-6 max-h-24 lg:max-h-28 2xl:max-h-32 "
                              />
                            )}

                            {!item.logo && <div></div>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
