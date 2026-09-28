import React from 'react'
import quoteIcon from 'assets/about/founderVision/quotes-icon.svg'
import { useAdmin } from 'store/store'

export default function FoundersVision() {
  const { aboutData } = useAdmin()

  return (
    <>
      {!aboutData.SECTION_6?.quote ? null : (
        <>
          <section
            className={`min-h-[450px] sm:h-[500px] md:h-[600px] xl:h-screen 2xl:h-[850px] blade-bottom-padding founder-wrapper
          bg-cover bg-center text-black bg-no-repeat md:block hidden bg[#F1F5F6] relative `}
          >
            <img
              src={aboutData.SECTION_6?.deskImage}
              alt={aboutData.SECTION_6?.alt}
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
            <div className="h-full flex items-end blade-top-padding 2xl:blade-bottom-padding-lg  w-full justify-end md:w-[96%]   ">
              <div className="  relative max-w-md lg:max-w-2xl">
                <div className="absolute inset-0 gsap-opacity-trans-appear">
                  <img
                    className="-translate-x-[85%]  md:h-12 lg:h-16 2xl:h-auto -translate-y-[80%]"
                    src={quoteIcon}
                    alt="quote"
                    aria-hidden
                  />
                </div>
                <h4 className="gsap-opacity-trans-appear text-white text-base  relative lg:text-2xl font-light leading-snug  z-[100]">
                  {aboutData.SECTION_6?.quote}
                </h4>
                <h6 className="gsap-opacity-trans-appear text-white text-lg md:text-[1.6rem] font-regular font-medium pt-4 ml-4">
                  - {aboutData.SECTION_6?.quoter}
                </h6>
              </div>
            </div>
          </section>
          <section className="md:hidden block blade-bottom-padding-lg  blade-top-padding-sm">
            <div className="min-h-[300px]">
              <img
                src={aboutData.SECTION_6?.mobImage}
                className="gsap-opacity-trans-appear h-full min-h-[300px] w-full object-cover object-top"
                alt="Portrait of founder of Innvolution imaging, Gaurav Agarwal"
              />
            </div>

            <div className="pl-3 pr-4  pt-6 pb-3 md:pb-0 ">
              <h5 className="gsap-opacity-trans-appear text-black text-base font-regular leading-snug">
                {aboutData.SECTION_6?.quote}
              </h5>
              <h6 className="gsap-opacity-trans-appear text-black text-lg md:text-[1.6rem] font-regular font-medium pt-3 ">
                - {aboutData.SECTION_6?.quoter}
              </h6>
            </div>
          </section>
        </>
      )}
    </>
  )
}
