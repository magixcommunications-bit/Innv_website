import React, { useRef, useReducer, useEffect } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import plusIcon from 'assets/home/product_section/plus.svg'
import './products-wrapper.css'

import cathVariant00 from 'assets/home/product_section/vaiants/cath/cath-logo.svg'
import cathVariant01 from 'assets/home/product_section/vaiants/cath/cath-logo-01.svg'
import cathVariant02 from 'assets/home/product_section/vaiants/cath/cath-logo-02.svg'
import cathVariant03 from 'assets/home/product_section/vaiants/cath/cath-logo-03.svg'
import cathVariant04 from 'assets/home/product_section/vaiants/cath/cath-logo-04.svg'
import cathVariant05 from 'assets/home/product_section/vaiants/cath/cath-logo-05.svg'

import stentVariant01 from 'assets/home/product_section/vaiants/stent/Stent-logo-01.svg'
import stentVariant02 from 'assets/home/product_section/vaiants/stent/Stent-logo-02.svg'
import stentVariant03 from 'assets/home/product_section/vaiants/stent/Stent-logo-03.svg'
import stentVariant04 from 'assets/home/product_section/vaiants/stent/Stent-logo-04.svg'
import stentVariant05 from 'assets/home/product_section/vaiants/stent/Stent-logo-05.svg'

import ballonVariant01 from 'assets/home/product_section/vaiants/balloon/balloon-logo-01.svg'
import ballonVariant02 from 'assets/home/product_section/vaiants/balloon/balloon-logo-02.svg'
import ballonVariant03 from 'assets/home/product_section/vaiants/balloon/balloon-logo-03.svg'
import ballonVariant04 from 'assets/home/product_section/vaiants/balloon/balloon-logo-04.svg'
import ballonVariant05 from 'assets/home/product_section/vaiants/balloon/balloon-logo-05.svg'

import cathVarianMobile01 from 'assets/home/product_section/vaiants/cath_mobile/01 (2).svg'
import cathVarianMobile02 from 'assets/home/product_section/vaiants/cath_mobile/02 (2).svg'
import cathVarianMobile03 from 'assets/home/product_section/vaiants/cath_mobile/03 (2).svg'
import cathVarianMobile04 from 'assets/home/product_section/vaiants/cath_mobile/04 (2).svg'
import cathVarianMobile05 from 'assets/home/product_section/vaiants/cath_mobile/05 (2).svg'

import stentvarientMobile01 from 'assets/home/product_section/vaiants/stent_mobile/01 (1).svg'
import stentvarientMobile02 from 'assets/home/product_section/vaiants/stent_mobile/02 (1).svg'
import stentvarientMobile03 from 'assets/home/product_section/vaiants/stent_mobile/03 (1).svg'
import stentvarientMobile04 from 'assets/home/product_section/vaiants/stent_mobile/04 (1).svg'
import stentvarientMobile05 from 'assets/home/product_section/vaiants/stent_mobile/05 (1).svg'

import ballonVariantMobile01 from 'assets/home/product_section/vaiants/ballon_mobile/01.svg'
import ballonVariantMobile02 from 'assets/home/product_section/vaiants/ballon_mobile/02.svg'
import ballonVariantMobile03 from 'assets/home/product_section/vaiants/ballon_mobile/03.svg'
import ballonVariantMobile04 from 'assets/home/product_section/vaiants/ballon_mobile/04.svg'
import ballonVariantMobile05 from 'assets/home/product_section/vaiants/ballon_mobile/05.svg'

import { useNavigate } from 'react-router-dom'
import { MasterBtn } from 'atoms/buttons'
import { ProductLogos } from 'utils/homeTypes'
import { useAdmin } from 'store/store'
import { NavLink } from 'react-router-dom'
// import { MasterBtn } from 'atoms/buttons'

export const productLogos: ProductLogos[] = [
  {
    variantLogos: [
      { logo: cathVariant00, link: '/products/cath-labs/premier-elite-sharp' },
      { logo: cathVariant01, link: '/products/cath-labs/premier-elite' },
      { logo: cathVariant02, link: '/products/cath-labs/premier-select' },
      { logo: cathVariant04, link: '/products/cath-labs/pinnacle-agile' },
      { logo: cathVariant03, link: '/products/cath-labs/pinnacle' },
      { logo: cathVariant05, link: '/products/cath-labs/pinnacle-pro' },
    ],
    variantLogosMobile: [
      { logo: cathVariant00, link: '/products/cath-labs/premier-elite-sharp' },
      { logo: cathVarianMobile01, link: '/products/cath-labs/premier-elite' },
      { logo: cathVarianMobile02, link: '/products/cath-labs/premier-select' },
      { logo: cathVarianMobile04, link: '/products/cath-labs/pinnacle-agile' },
      { logo: cathVarianMobile03, link: '/products/cath-labs/pinnacle' },
      { logo: cathVarianMobile05, link: '/products/cath-labs/pinnacle-pro' },
    ],
  },
  {
    variantLogos: [
      { logo: stentVariant01, link: '/products/stents/eternia' },
      { logo: stentVariant02, link: '/products/stents/eternia-nexa' },
      { logo: stentVariant03, link: '/products/stents/eternia-select' },
      { logo: stentVariant04, link: '/products/stents/siroflex-curve' },
      { logo: stentVariant05, link: '/products/stents/siroflex-plus' },
    ],
    variantLogosMobile: [
      { logo: stentvarientMobile01, link: '/products/stents/eternia' },
      { logo: stentvarientMobile02, link: '/products/stents/eternia-nexa' },
      { logo: stentvarientMobile03, link: '/products/stents/eternia-select' },
      { logo: stentvarientMobile04, link: '/products/stents/siroflex-curve' },
      { logo: stentvarientMobile05, link: '/products/stents/siroflex-plus' },
    ],
  },
  {
    variantLogos: [
      {
        logo: ballonVariant01,
        link: '/products/balloon-catheters/scoreflex-nc',
      },
      {
        logo: ballonVariant02,
        link: '/products/balloon-catheters/sapphire-ii-nc',
      },
      {
        logo: ballonVariant03,
        link: '/products/balloon-catheters/sapphire-2-pro-1.75mm-4mm',
      },
      {
        logo: ballonVariant04,
        link: '/products/balloon-catheters/sapphire-3-1.5mm-4mm',
      },
      {
        logo: ballonVariant05,
        link: '/products/balloon-catheters/sapphire-nc-24',
      },
    ],
    variantLogosMobile: [
      {
        logo: ballonVariantMobile01,
        link: '/products/balloon-catheters/scoreflex-nc',
      },
      {
        logo: ballonVariantMobile02,
        link: '/products/balloon-catheters/sapphire-ii-nc',
      },
      {
        logo: ballonVariantMobile03,
        link: '/products/balloon-catheters/sapphire-2-pro-1.75mm-4mm',
      },
      {
        logo: ballonVariantMobile04,
        link: '/products/balloon-catheters/sapphire-3-1.5mm-4mm',
      },
      {
        logo: ballonVariantMobile05,
        link: '/products/balloon-catheters/sapphire-nc-24',
      },
    ],
  },
]

export default function Products() {
  const [viewIndex, update] = useReducer((s: number, u: number) => u, 0)
  const variantsRef = useRef<any>()
  const imgRef = useRef<any>()
  const variantText = useRef<any>()
  const descWrapper = useRef<any>()
  const navigate = useNavigate()

  const { homeData } = useAdmin()

  return (
    <>
      {homeData.SECTION_2.length === 0 ? null : (
        <>
          <section className="products-wrapper blade-top-padding blade-bottom-padding md:blade-bottom-padding-sm ">
            <div className="grid place-content-center place-items-center text-center gap-4 product-section-wrapper  ">
              <h3 className="gsap-opacity-trans-appear font-medium ">
                Embrace a new era of <br className="md:hidden block" />{' '}
                cardiovascular health
              </h3>
              <h6 className="gsap-opacity-trans-appear font-medium">
                Interventional solutions
              </h6>
            </div>

            <div className="gsap-opacity-trans-appear">
              <div className="tab-wrapper-tab blade-bottom-padding-sm pt-1 md:pt-0">
                <div className=" px-4 max-w-4xl pt-4 2xl:pt-3 w-full md:w-10/12  mx-auto flex items-center justify-between h-full  gap-1 mt-3 sm:mt-0 md:gap-x-6  xl:gap-4 2xl:gap-6 ">
                  {homeData.SECTION_2.map((elem, index: number) => {
                    const key = `${index}`

                    // console.log(homeData.SECTION_2)
                    return (
                      <Tab
                        handleTabChange={() => update(index)}
                        key={key}
                        text={elem.title}
                        coverImage={elem.tab}
                        activeIndex={viewIndex}
                        index={index}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="gsap-opacity-trans-appear wrapper 2xl:w-11/12 px-2 2xl:px-3 lg:px-0 md:px-8 lg:w-[95%]  flex flex-col gap-3 md:grid max-w-[1600px] mx-auto">
              <div className="tab-wrapper hidden">
                <div className="xxl:-mt-3 2xl:-mt-8 flex-col flex items-center justify-center h-full gap-3  xl:gap-4 2xl:gap-6 w-11/12 ">
                  {homeData.SECTION_2.map((elem, index: number) => {
                    const key = `${index}`
                    return (
                      <Tab
                        handleTabChange={() => update(index)}
                        key={key}
                        text={elem.title}
                        coverImage={elem.tab}
                        activeIndex={viewIndex}
                        index={index}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="h-full xxl:blade-top-padding-sm blade-bottom-paddding">
                <div className="grid h-full place-content-center place-items-center overflow-hidden px-2  md:w-11/12 mx-auto">
                  <SwitchTransition>
                    <CSSTransition
                      key={viewIndex}
                      nodeRef={imgRef}
                      timeout={500}
                      classNames="imgwrapper"
                      unmountOnExit
                    >
                      <div
                        ref={imgRef}
                        className="grid place-content-center place-items-center  w-full max-w-xl 2xl:max-w-none"
                      >
                        {!homeData.SECTION_2[viewIndex]?.video && (
                          <img
                            src={homeData.SECTION_2[viewIndex]?.cover}
                            alt={homeData.SECTION_2[viewIndex]?.title}
                            className="xl:h-[20rem] 2xl:h-[26rem] md:h-[18rem] h-[16rem] w-auto object-contain object-center"
                          />
                        )}
                        {homeData.SECTION_2[viewIndex]?.video && (
                          <video
                            className=" xl:h-[20rem] 2xl:h-[26rem] md:h-[18rem] h-[16rem] border-1 border-solid border-gray rounded-2xl w-full object-cover object-center"
                            autoPlay
                            playsInline
                            muted
                            loop
                            poster={homeData.SECTION_2[viewIndex]?.cover}
                          >
                            <source
                              src={homeData.SECTION_2[viewIndex]?.video}
                              type="video/mp4"
                            />
                          </video>
                        )}
                      </div>
                    </CSSTransition>
                  </SwitchTransition>
                </div>
              </div>
              <div className=" desc-wrapper flex flex-col items-start justify-center gap-1 pt-4 md:pt-0 w-11/12 mx-auto">
                <SwitchTransition>
                  <CSSTransition
                    key={viewIndex}
                    nodeRef={descWrapper}
                    timeout={150}
                    classNames="description"
                    unmountOnExit
                  >
                    <div ref={descWrapper}>
                      <h4 className="text-orange xl:-mt-4 xxl:mt-4 2xl:-mt-8 leading-[1.15] w-11/12 font-medium  translate-y-4 opacity-0 md:block hidden">
                        {homeData.SECTION_2[viewIndex]?.title}
                      </h4>
                      <h3 className="text-orange leading-[1.15] w-11/12 font-medium  translate-y-4 opacity-0 md:hidden block">
                        {homeData.SECTION_2[viewIndex]?.title}
                      </h3>

                      <h6 className="text-black text-opacity-60 leading-tight pt-5 font-regular translate-y-4 opacity-0">
                        {homeData.SECTION_2[viewIndex]?.subTitle}
                      </h6>
                      <ul className="text-black leading-tight font-regular  flex flex-col gap-6 pt-8 2xl:pt-10  ">
                        {homeData.SECTION_2[viewIndex]?.points
                          ?.replaceAll('\n', '')
                          ?.split('.')
                          ?.filter((p) => p)
                          ?.map((elem, index: number) => {
                            const key = `${index}`
                            return (
                              <li
                                key={key}
                                className="flex items-center gap-3 translate-y-4 opacity-0"
                              >
                                <img
                                  src={plusIcon}
                                  alt="plus icon"
                                  aria-hidden
                                  className="h-4"
                                />
                                <span className="text-base md:text-lg ">
                                  {elem}
                                </span>
                              </li>
                            )
                          })}
                      </ul>
                      <div className="pt-8 2xl:pt-12 ">
                        <MasterBtn
                          type="button"
                          color="orange"
                          text="Explore More"
                          size="base"
                          extraClasses="translate-y-4 opacity-0"
                          onClick={() => {
                            navigate(homeData.SECTION_2[viewIndex]?.target)
                          }}
                        />
                      </div>
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
            <div className="gsap-opacity-trans-appear text-center blade-top-padding-sm pb-3  mt-4 md:mt-0 ">
              <SwitchTransition>
                <CSSTransition
                  key={viewIndex}
                  nodeRef={variantText}
                  timeout={150}
                  unmountOnExit
                >
                  <h6
                    ref={variantText}
                    dangerouslySetInnerHTML={{
                      __html: homeData.SECTION_2[viewIndex]?.variantTitle,
                    }}
                    className="text-black text-opacity-60 font-medium variant-text translate-y-4 opacity-0 md:mb-3 lg:mb-0"
                  />
                </CSSTransition>
              </SwitchTransition>

              <div className=" lg:h-28 2xl:h-32 logo-wrapper px-4">
                <SwitchTransition>
                  <CSSTransition
                    key={viewIndex}
                    nodeRef={variantsRef}
                    timeout={150}
                    classNames="variantLogos"
                    unmountOnExit
                  >
                    <div className="">
                      <div
                        ref={variantsRef}
                        className=" lg:flex-nowrap flex-wrap md:gap-6 gap-4 md:gap-y-0 justify-center max-w-screen-lg 2xl:max-w-screen-xl mx-auto md:w-11/12 h-full md:flex grid sm:grid-cols-3 grid-cols-2 mt-4"
                      >
                        {productLogos[viewIndex].variantLogos.map(
                          (elem: any, index: number) => {
                            const key = `${index}`
                            return (
                              <article
                                className="grid px-4 md:py-2 place-content-center place-items-center translate-y-4 opacity-0 md:bg-transparent bg-white rounded-lg"
                                key={key}
                              >
                                <NavLink to={elem.link}>
                                  <img
                                    src={elem.logo}
                                    aria-hidden
                                    alt="Logo"
                                    className={`w-full h-16 2xl:h-20 object-contain object-center `}
                                  />
                                </NavLink>
                              </article>
                            )
                          },
                        )}
                      </div>
                      {/* <div
                        ref={variantsRef}
                        className="grid grid-cols-2 gap-3 pt-4 px-3 max-w-screen-xl mx-auto md:w-11/12 h-full md:hidden  "
                      >
                        {productLogos[viewIndex].variantLogosMobile.map(
                          (elem, index: number) => {
                            const key = `${index}`
                            return (
                              <article
                                className="md:grid h-fit md:px-4 md:py-2 place-content-center place-items-center translate-y-4 opacity-0"
                                key={key}
                              >
                                <img
                                  aria-hidden
                                  src={elem}
                                  alt={'logo'}
                                  className="w-full max-h-24 object-contain object-center rounded-xl overflow-hidden"
                                />
                              </article>
                            )
                          },
                        )}
                      </div> */}
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
          </section>
        </>
      )}
    </>
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
      aria-label={text}
      onClick={handleTabChange}
      className={` ${
        index === activeIndex
          ? 'shadow-activeTab bg-opacity-80 border-[#F69A4D]'
          : 'bg-opacity-0 border-[#c3c3c3] hover:bg-white'
      }  w-full self-stretch flex justify-center md:justify-start focus-visible:outline-orange focus-visible:bg-opacity-80 items-center bg-white gap-5 2xl:p-2  px-3 py-2  md:p-1 transition-all duration-300 ease-in-out rounded-xl   border-solid  border-1 `}
    >
      <div className="md:block hidden">
        <img
          className={`${
            index === activeIndex ? 'grayscale-0' : 'grayscale'
          } transition-all duration-300`}
          src={coverImage}
          alt={text + ' tab'}
        />
      </div>
      <h6 className="font-regular text-base ">{text}</h6>
    </button>
  )
}
