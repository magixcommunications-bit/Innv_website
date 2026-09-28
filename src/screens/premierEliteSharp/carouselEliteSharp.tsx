import React, { useState } from 'react'
// import heart_in_hand from 'assets/innvolution/carousel/heart-in-hand.png'
import image_01 from 'assets/innvolution/carousel/AInstaQCA.png'

import image_02 from 'assets/innvolution/carousel/AI-mag.png'

import image_02_a from 'assets/innvolution/carousel/ai-mag/a.png'
import image_02_b from 'assets/innvolution/carousel/ai-mag/b.png'
import image_02_c from 'assets/innvolution/carousel/ai-mag/c.png'
import image_02_1 from 'assets/innvolution/carousel/ai-mag/1.svg'
import image_02_2 from 'assets/innvolution/carousel/ai-mag/2.svg'
import image_02_3 from 'assets/innvolution/carousel/ai-mag/3.svg'
import image_02_4 from 'assets/innvolution/carousel/ai-mag/4.svg'
import image_02_5 from 'assets/innvolution/carousel/ai-mag/5.svg'

import image_03 from 'assets/innvolution/carousel/image-03.png'
import image_04 from 'assets/innvolution/carousel/IV-Linq.png'
import image_05 from 'assets/innvolution/carousel/Stent-Enhancement.png'
import image_06 from 'assets/innvolution/carousel/image-05.png'
import image_07 from 'assets/innvolution/carousel/image-06.png'
import star_line from 'assets/innvolution/pointing-style.svg'

import FDA_510 from 'assets/innvolution/carousel/logos/FDA Cleared 510.svg'
import FDA from 'assets/innvolution/carousel/logos/FDA Cleared.svg'
import CE_0123 from 'assets/innvolution/carousel/logos/CE 0123.svg'

import { CSSTransition, SwitchTransition } from 'react-transition-group'
import 'styles/carousel.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'

const data = [
  {
    keyword: 'AInsta QCA',
    heading:
      'World’s first AI – enabled vessel segmentation analysis, delivering results in just <b class="font-bold">2</b> seconds.',
    image: image_01,
    points_left: [
      {
        desc: 'AInsta QCA stands as an advanced solution, utilizing artificial intelligence for Quantitative Coronary Analysis(QCA).',
      },
      {
        desc: 'Classification accuracy = <b>0.99</b> Segmentation F1 Score = <b>0.92</b>​​',
      },
    ],
    points_right: [
      {
        desc: 'AInsta QCA employs artificial intelligence for fully automated, <span class="whitespace-nowrap">real-time</span> morphological assessment of coronary arteries.',
      },
    ],
    list: [image_02_1, image_02_2, image_02_3, image_02_4, image_02_5],
    // logo: [FDA_510],
  },
  {
    keyword: 'AI – MAG',
    heading:
      'AI guided advanced magnification and <b> superior resolution </b> with <b>zero additional radiation exposure</b>.​',
    image: image_02,
    points_left: [
      {
        icon: image_02_a,
        desc: '<b>Image Enhancement:</b> AI algorithms reconstruct high-resolution images from low-resolution input, enhancing image quality.​',
      },
      {
        icon: image_02_b,
        desc: '<b>Magnification:</b> Magnification functions allow healthcare professionals to zoom in on specific regions of interest within the fluoroscopy images, enabling detailed examination.​​',
      },
    ],
    points_right: [
      {
        icon: image_02_c,
        desc: '<b>Improved ROI* visualization:</b> Powerful ROI* enhancement with AIMAG, ensuring crystal-clear and artifact-free images.',
      },
    ],
  },
  // {
  //   keyword: 'vFFR',
  //   heading: 'vFFR - angio-derived FFR measurement',
  //   image: image_03,
  //   points_left: [
  //     {
  //       desc: 'A software-only solution that calculates the pressure drop in the coronary arteries.',
  //     },
  //     {
  //       desc: 'Supported by a number of clinical studies such as FAST I, FAST II, and FAST III.',
  //     },
  //     { desc: 'Automatic 3D reconstruction from two 2D angiograms.' },
  //   ],
  //   points_right: [
  //     { desc: 'Less invasive angio-derived FFR calculation method.' },
  //     {
  //       desc: 'Anatomical & functional lesion information based on two angiograms only.',
  //     },
  //   ],
  // },
  // {
  //   keyword: 'IV - LINQ',
  //   heading: 'IV - LINQ',
  //   image: image_04,
  //   points_left: [
  //     { desc: 'Real-time co-registration of angiography with IVUS and OCT.' },
  //     { desc: 'Compatible with almost every X-ray, IVUS, and OCT system.' },
  //   ],
  //   points_right: [
  //     {
  //       desc: 'Stent landing zone planned on IVUS/OCT pullback visualized on angiogram.',
  //     },
  //     {
  //       desc: 'Bookmarks indicated on IVUS/OCT pullbacks are visualized on the angiogram.',
  //     },
  //   ],
  // },
  // {
  //   keyword: 'Stent Enhancement',
  //   heading: 'Stent Enhancement',
  //   image: image_05,
  //   points_left: [
  //     { desc: 'Quick assessment of the expansion of the stent.' },
  //     { desc: 'Verification of correct stent placement.' },
  //     { desc: 'Assessment of stent-in-stent placement.' },
  //   ],
  //   points_right: [],
  // },
  // {
  //   keyword: 'LVA & RVA',
  //   heading:
  //     'Left Ventricular Analysis (LVA) & Right Ventricular Analysis (RVA)',
  //   image: image_06,
  //   points_left: [
  //     {
  //       desc: 'Patient’s left and right ventricular function analysis with the LVA and RVA workflow.',
  //     },
  //     {
  //       desc: 'Enable calibration and automate ventricular contour detection.',
  //     },
  //     {
  //       desc: 'Ejection fraction, volume calculation, and wall motion analysis.',
  //     },
  //   ],
  //   points_right: [],
  // },
  // {
  //   keyword: 'QVA',
  //   heading: 'Quantitative Vascular Analysis QVA',
  //   image: image_07,
  //   points_left: [
  //     {
  //       desc: 'Fast and intuitive peripheral vessel analysis, including the abdominal aorta, carotid, renal, iliac, and femoral arteries.',
  //     },
  //     {
  //       desc: 'Single vessel analysis including calibration, contour detection, and quantification of severity of stenosis.',
  //     },
  //   ],
  //   points_right: [],
  // },
]

const CarouselEliteSharp = () => {
  const [index, setindex] = useState(0)

  return (
    <section
      className="innovation-wrapper"
      style={{
        backgroundImage:
          'linear-gradient(136deg, #E9E9E9 33.82%, #E9E9E9 135.84%)',
      }}
    >
      <div className="mih-screen blade-top-padding-lg blade-bottom-padding-lg">
        <div className="flex items-end justify-between w-container">
          <div>
            <h3 className="font-medium gsap-opacity-trans-appear appear-anim-gsap">
              Our innovative solutions
            </h3>
            <h6 className="max-w-xl mt-4 gsap-opacity-trans-appear font-regular opacity-70 appear-anim-gsap">
              Innvolution’s purpose – To empower healthcare practices with
              intelligent software integration. We continuously enhance our
              cardiovascular solutions to ensure seamless compatibility with
              evolving technology in patient care.
            </h6>
          </div>
          <div className="hidden gsap-opacity-trans-appear xl:flex">
            <CarouselBtn
              activeIndex={index}
              color="orange"
              onClick={() => setindex(index - 1)}
              index={0}
              text="Move to previous slide"
              size="base"
              type="button"
              // isDisabled={index === 0 ? true : false}
              extraClasses={
                extraClasses +
                'swiper-prev !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black enabled:hover:!fill-orange enabled:hover:!bg-white enabled:hover:!border-white !rounded-xl !rounded-r-none'
              }
            />
            <CarouselBtn
              activeIndex={index}
              color="orange"
              onClick={() => setindex(index + 1)}
              index={data.length - 1}
              text="Move to next slide"
              size="base"
              type="button"
              isRotated
              // isDisabled={index === data.length - 1 ? true : false}
              extraClasses={
                extraClasses +
                'swiper-next !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black enabled:hover:!fill-orange enabled:hover:!bg-white enabled:hover:!border-white !rounded-xl !rounded-r-none'
              }
            />
          </div>
        </div>
        <div className="hidden gsap-opacity-trans-appear blade-top-margin-lg lg:px-12 2xl:px-32 xl:flex 2xl:gap-24 xl:gap-16 feature-motion-wrapper">
          <div className="flex flex-col lg:gap-6 2xl:gap-9 w-fit 2xl:blade-top-padding-sm appear-anim-gsap">
            {data.map((elem, idx) => {
              return (
                <p
                  key={idx}
                  onClick={() => setindex(idx)}
                  className={`${
                    index === idx
                      ? 'opacity-100 text-orange bg-white !border-opacity-80 !bg-opacity-80'
                      : 'text-[#4D4D4D]'
                  } grid items-center text-center rounded-lg px-2 py-2 border-1 border-orange border-opacity-0 hover:border-opacity-80 hover:bg-opacity-80 bg-white bg-opacity-0 outline-white focus-visible:text-white focus-visible:bg-orange xl:max-w-[100px] 2xl:max-w-none font-medium cursor-pointer transition-all duration-300 whitespace-nowrap`}
                >
                  {elem.keyword}
                </p>
              )
            })}
          </div>
          <SwitchTransition>
            <CSSTransition key={index} timeout={0}>
              <div className="left opacity-0 h-full w-full 2xl:max-w-[40%] max-w-[40%]">
                <img
                  className="object-contain w-full h-full"
                  src={data[index].image}
                  alt={data[index].heading}
                />
              </div>
            </CSSTransition>
          </SwitchTransition>

          <SwitchTransition>
            <CSSTransition key={index} timeout={0}>
              <div
                className={`max-w-[650px] lg:w-[850px] relative appear-anim-gsap`}
              >
                <h4
                  className="opacity-0"
                  dangerouslySetInnerHTML={{ __html: data[index].heading }}
                />
                <div className="flex gap-4 blade-top-margin-sm 2xl:gap-8">
                  <div className="flex flex-col gap-3">
                    {data[index].points_left.map((elem: any, idx) => {
                      return (
                        <div
                          key={idx}
                          className={`flex items-start gap-2 max-w-xs h-fit left opacity-0 ${
                            index === 0 && idx === 2 ? 'xl:mt-6 2xl:mt-0' : ''
                          }`}
                        >
                          {elem.icon ? (
                            <img
                              className="w-8 2xl:w-10"
                              src={elem.icon}
                              aria-hidden
                              alt="White plus with orange line"
                            />
                          ) : (
                            <img
                              src={star_line}
                              aria-hidden
                              alt="White plus with orange line"
                            />
                          )}
                          <p
                            className="-mt-1 font-regular"
                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                          />
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex flex-col gap-3">
                    {data[index].points_right?.map((elem: any, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex items-start max-w-xs gap-2 opacity-0 h-fit left"
                        >
                          {elem.icon ? (
                            <img
                              className="w-8 2xl:w-10"
                              src={elem.icon}
                              aria-hidden
                              alt="White plus with orange line"
                            />
                          ) : (
                            <img
                              src={star_line}
                              aria-hidden
                              alt="White plus with orange line"
                            />
                          )}
                          <p
                            className="-mt-1 font-regular"
                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* {data[index].logo && (
                  <div
                    key={index}
                    className="flex justify-center h-10 gap-6 -mt-5 duration-300 xl:h-12 2xl:gap-10"
                  >
                    {data[index].logo!.map((item) => {
                      return (
                        <img
                          className="w-auto h-full"
                          src={item}
                          alt="Slide logo"
                        />
                      )
                    })}
                  </div>
                )} */}
                {data[index].list && (
                  <div className="flex flex-wrap justify-center gap-3 mt-5">
                    {data[index].list?.map((item, index) => {
                      const keyVal = `${index}-icon`
                      return (
                        <img
                          className="w-auto h-10"
                          key={keyVal}
                          src={item}
                          aria-hidden
                          alt="White plus with orange line"
                        />
                      )
                    })}
                  </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        {/* {Mobile view} */}
        <div className="block mobile-view-carousel xl:hidden md:pt-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoHeight={true}
            centeredSlides
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 60,
              },
              768: {
                slidesPerView: 1.8,
                spaceBetween: 60,
              },
              1024: {
                spaceBetween: 60,
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 2.8,
              },
              1440: {
                slidesPerView: 3.1,
              },
            }}
            loop
            speed={1000}
            modules={[Pagination, Navigation, A11y]}
            pagination={{
              bulletActiveClass: 'bg-white opacity-100',
            }}
            navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
            className="px-4 pb-8 cursor-pointer sm:px-10 hfit min-hfull stent-system-carousel appear-anim-gsap"
          >
            {data.map((elem: any, index: number) => {
              const key = `${index}`
              return (
                <SwiperSlide key={key} className="grid ">
                  <div className="flex flex-col items-center justify-center py-3 mt-4">
                    <img src={elem.image} alt={elem.keyword} />
                  </div>
                  <div className="blade-top-margin-sm blade-bottom-margin-sm">
                    <h4
                      className="mb-3 font-medium"
                      dangerouslySetInnerHTML={{ __html: elem.heading }}
                    />
                    <ol className="flex flex-col gap-5 px-5 list-disc">
                      {elem.points_left.map((data: any, idx: number) => {
                        return (
                          <li
                            key={idx}
                            dangerouslySetInnerHTML={{ __html: data.desc }}
                          />
                        )
                      })}
                      {elem.points_right.map((data: any, idx: number) => {
                        return (
                          <li
                            key={idx}
                            dangerouslySetInnerHTML={{ __html: data.desc }}
                          />
                        )
                      })}
                    </ol>

                    {/* {data[index].logo && (
                      <div
                        key={index}
                        className="flex justify-center h-10 gap-6 mt-3 duration-300 xl:h-12 2xl:gap-10"
                      >
                        {data[index].logo!.map((item) => {
                          return (
                            <img
                              className="w-auto h-full"
                              src={item}
                              alt="Slide logo"
                            />
                          )
                        })}
                      </div>
                    )} */}
                    {elem.list && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {elem.list.map((item: any, index: number) => {
                          const keyVal = `${index}-icon`
                          return (
                            <img
                              className="w-auto h-6"
                              key={keyVal}
                              src={item}
                              aria-hidden
                              alt="White plus with orange line"
                            />
                          )
                        })}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default CarouselEliteSharp
