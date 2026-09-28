import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import { CarouselBtn } from 'atoms/buttons'
import { IBlog } from 'utils/homeTypes'
import { useAdmin } from 'store/store'
import useFetchNews from 'hooks/useFetchNews'

export default function News({
  title,
  desc,
  margin,
  bgGrad,
  gridClasses,
  extraClasses,
  isBlog,
  isGrid,
}: {
  title: string
  desc: string
  margin?: string
  bgGrad?: string
  gridClasses?: string
  extraClasses?: string
  isBlog?: boolean
  isGrid?: boolean
}) {
  const wrapper = useRef<any>()
  const { newsData } = useAdmin()
  useFetchNews()
  return (
    <>
      {newsData.SECTION_2.length === 0 ? null : (
        <>
          <section
            ref={wrapper}
            className={`overflow-x-hidden relative blade-top-padding pb-2 ${extraClasses}`}
            style={{
              background: bgGrad || 'none',
            }}
          >
            <section
              className={`w-container-lg blade-bottom-padding text-center ${margin}`}
            >
              <h3 className="pb-2 font-medium gsap-opacity-trans-appear ">
                {title}
              </h3>
              <h5 className="max-w-md mx-auto leading-tight text-center gsap-opacity-trans-appear opacity-80 font-regular xl:max-w-lg">
                {desc}
              </h5>
              {isGrid ? (
                <div className="pb-2 text-left blade-top-padding">
                  <div className={gridClasses}>
                    {newsData.SECTION_2.map((elem: IBlog, index: number) => {
                      return (
                        <NewsCard data={elem} key={index} isBlog={isBlog} />
                      )
                    })}
                  </div>
                </div>
              ) : null}

              {!isGrid ? (
                <div className="blade-top-padding">
                  <Swiper
                    slidesPerView={1}
                    centeredSlides
                    // loop
                    pagination={{
                      bulletActiveClass: 'bg-orange opacity-100',
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1.5,
                        spaceBetween: 60,
                        pagination: {
                          bulletActiveClass: 'bg-orange opacity-100',
                        },
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        pagination: false,
                        centeredSlides: false,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        pagination: false,
                        centeredSlides: false,
                      },
                      1280: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        pagination: false,
                        centeredSlides: false,
                        loop: false,
                      },
                      1536: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        pagination: false,
                        centeredSlides: false,
                        loop: false,
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
                    className="pb-4 select-none cursor-grab md:pb-0 "
                  >
                    {newsData.SECTION_2.map((elem: IBlog, index: number) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className="h-full blade-bottom-padding md:pb-0"
                          style={{ height: 'auto' }}
                        >
                          <NewsCard data={elem} isBlog={isBlog} />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                  {/* Carousel buttons */}
                  <div className="justify-center hidden px-6 md:flex pt3">
                    <div className="flex gap-3 pt-5 xl:pt-10">
                      <CarouselBtn
                        activeIndex={-1}
                        color="orange"
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
              ) : null}
            </section>
          </section>
        </>
      )}
    </>
  )
}

export function NewsCard({
  data,
  isBlog,
  extraClasses,
}: {
  data: IBlog
  isBlog?: boolean
  extraClasses?: string
}) {
  const { cover, title, target, tag } = data
  return (
    <article
      className={`gsap-opacity self-stretch text-left h-full max-w-md mx-auto flex flex-col rounded-md overflow-hidden  ${extraClasses} newsHover`}
    >
      <div className="overflow-hidden h-fit rounded-xl border-1 border-gray border-opacity-60">
        <img
          src={cover}
          className="object-contain object-top w-full h-auto object-cove "
          loading="lazy"
          alt={title}
        />
      </div>
      <div className="flex flex-col flex-1 gap-1 p-4 pt-4 pb-3 pr-4 2xl:pt-4">
        <span
          className={`font-bold uppercase tracking-wider text-base ${
            isBlog ? 'text-white' : 'text-blue'
          }`}
        >
          {tag}
        </span>
        <span className="pt-2 text-base leading-tight sm:flex-1 md:text-xl font-regular">
          {title}
        </span>
        <a
          className="flex items-center gap-2 py-3 mr-auto text-base font-medium transition-all duration-300 ease-in-out rounded-full outline-none hover:stroke-orange fill-black focus-visible:stroke-orange group focus:text-orange hover:text-orange hover:underline focus-visible:underline decoration-from-font underline-offset-4 flex-0 sm:mt-2 "
          href={target}
          target="_blank"
          rel="noreferrer"
          aria-label={title}
        >
          Know more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 12l-6-6m6 6l-6 6m6-6H5"
            />
          </svg>
        </a>
      </div>
    </article>
  )
}
