import React, { useRef, useState } from 'react'

import RenderMarkdown from 'organisms/markdown'
import SpecificationModal from 'organisms/speficationModal'
import { Link } from 'react-router-dom'
import { useAdmin } from 'store/store'
import { JDICard } from 'utils/careerTypes'
import { CarouselBtn } from 'atoms/buttons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'

export default function JoinUs({ formIntoView }: { formIntoView: () => void }) {
  const wrapper = useRef<any>()

  const { careersData } = useAdmin()

  return (
    // Styles coming from home.css

    <>
      {careersData.SECTION_4.length === 0 ? null : (
        <>
          <section className="blade-bottom-padding-lg lg:pt-0 overflow-x-hidden bg-[url(assets/home/backgrounds/innovating_gradients.svg)] bg-cover bg-lightorange bg-center">
            <section
              className="blade-top-padding-lg md:pb-5 px-3 md:pl-5 w-container-lg 2xl:w-container"
              ref={wrapper}
            >
              <section className="blade-bottom-padding-sm flex items-start flex-col gap-3 lg:gap-3 mx-auto text-black">
                <h1 className="gsap-opacity-trans-appear hidden lg:block font-medium leading-tight">
                  Join us
                </h1>
                <h2 className="lg:hidden font-medium leading-tight">Join us</h2>
                <h3 className="gsap-opacity-trans-appear hidden lg:block font-regular">
                  Unleash your full potential
                </h3>
                <h4 className="gsap-opacity-trans-appear lg:hidden font-regular">
                  Unleash your full potential
                </h4>
              </section>

              {/* Old code */}
              {/* 
                  <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
                    {careersData.SECTION_4.map((elem, index) => {
                      const key = `${index}`
                      return <JDCard data={elem} key={key} formIntoView={formIntoView} />
                    })}
                  </section> 
              */}
              <div className="gsap-opacity block">
                <Swiper
                  slidesPerView={1}
                  // centeredSlides
                  // loop
                  pagination={{
                    bulletActiveClass: 'bg-white opacity-100',
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1.5,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      pagination: false,
                      centeredSlides: false,
                    },
                    1024: {
                      slidesPerView: 2.5,
                      spaceBetween: 30,
                      pagination: false,
                      centeredSlides: false,
                    },
                    1175: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                      pagination: false,
                      centeredSlides: false,
                    },
                  }}
                  // autoplay={{
                  //   delay: 3000,
                  // }}
                  navigation={{
                    prevEl: '.news-swiper-prev',
                    nextEl: '.news-swiper-next',
                  }}
                  speed={1000}
                  modules={[Pagination, Autoplay, Navigation, A11y]}
                  spaceBetween={10}
                  className="cursor-grab select-none pb-4 md:pb-0 flex flex-col"
                >
                  {careersData.SECTION_4.map((elem, index) => {
                    return (
                      <SwiperSlide
                        key={index}
                        className="blade-bottom-padding md:pb-0  h-full self-stretch"
                        style={{ height: 'auto' }}
                      >
                        <JDCard data={elem} formIntoView={formIntoView} />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                {/* Carousel buttons */}
                <div className="hidden md:flex justify-center px-6 pt-4 2xl:pt-6">
                  <div className="flex  pt-5 xl:pt-10 gap-3">
                    <CarouselBtn
                      activeIndex={-1}
                      color="white"
                      onClick={() => {}}
                      index={0}
                      text="Move to previous slide"
                      size="base"
                      type="button"
                      extraClasses={
                        'news-swiper-prev !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black enabled:hover:!fill-orange enabled:hover:!bg-white enabled:hover:!border-white !rounded-xl disabled:!opacity-30'
                      }
                    />
                    <CarouselBtn
                      activeIndex={-1}
                      color="orange"
                      onClick={() => {}}
                      index={100}
                      text="Move to next slide"
                      size="base"
                      type="button"
                      isRotated
                      extraClasses={
                        'news-swiper-next !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black enabled:hover:!fill-orange enabled:hover:!bg-white enabled:hover:!border-white !rounded-xl disabled:!opacity-30'
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </>
      )}
    </>
  )
}

export function JDCard({
  data,
  formIntoView,
}: {
  data: JDICard
  formIntoView: () => void
}) {
  const { position, location, desc } = data
  const [isModal, setModal] = useState(false)

  return (
    <article className=" relative rounded-xl h-full bg-white border-1 flex flex-col justify-between max-w-md w-full gap-10 lg:gap-16 2xl:gap-20 border-gray border-solid  p-5 xl:p-6 2xl:p-10 ">
      <div className="pb-2 z-10">
        <h5 className=" lg:w-10/12  md:max-w-[280px] font-regular font-medium">
          {position}
        </h5>
        <h5 className=" lg:w-10/12  md:max-w-[280px] font-regular">
          {location}
        </h5>

        <button
          onClick={() => setModal(true)}
          className="group font-medium flex gap-1 items-center text-lg mt-4 hover:underline focus-visible:underline hover:text-orange underline-offset-2 transition-all duration-200 outline-none focus-visible:text-orange"
        >
          View job description
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"
            />
          </svg>
        </button>
      </div>
      <Link
        aria-label="Apply now"
        to=""
        onClick={formIntoView}
        className="border-1 w-fit h-fit hover:border-white  focus-visible:border-white border-solid border-orange px-5 2xl:px-7 py-3  rounded-md flex items-center justify-center gap-3 font-regular font-medium stroke-orange hover:stroke-white focus-visible:stroke-white focus-visible:outline-none outline-none hover:bg-orange bg-white focus-visible:bg-orange transition-all ease-in-out duration-300 hover:text-white focus-visible:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="inherit"
          className="w-6 h-6 -ml-2 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
        Apply now
      </Link>

      <SpecificationModal
        handleModalClose={() => setModal(false)}
        isActive={isModal}
        isJD
        title="Job description"
      >
        <div className="!px-0 md:px-4 pt-2 pb-5 overflow-auto markdown-wrapper -mt-8 sm:w-[88%]">
          <RenderMarkdown content={desc} />
        </div>
      </SpecificationModal>
    </article>
  )
}
