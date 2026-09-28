import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import { CarouselBtn } from 'atoms/buttons'
import { extraClasses } from 'organisms/carousel'
import { StatCard } from 'molecules/statCard'
import { StatsListType } from 'utils/homeTypes'
// import { StatsListType } from 'screens/home/stats'

import image1 from 'assets/about/carousal/image-1.jpg'
import image2 from 'assets/about/carousal/image-2.jpg'
import image3 from 'assets/about/carousal/image-3.jpg'
import image4 from 'assets/about/carousal/image-4.jpg'
import image5 from 'assets/about/carousal/image-5.jpg'
import image6 from 'assets/about/carousal/image-6.jpg'
import image7 from 'assets/about/carousal/image-7.jpg'
import image8 from 'assets/about/carousal/image-8.jpg'
import image9 from 'assets/about/carousal/image-9.jpg'
import image10 from 'assets/about/carousal/image-10.jpg'
import image01 from 'assets/about/carousal/01.jpg'
import image02 from 'assets/about/carousal/02.jpg'
import image12 from 'assets/about/carousal/12.jpg'
import image13 from 'assets/about/carousal/13.png'
import image14 from 'assets/about/carousal/14.png'

export default function Carousal() {
  const featuresData: any = [
    {
      stat: `World's Best Emerging Brand & World's Leading Leader by WCRC Leaders 2023 `,
      coverImage: image01,
    },

    {
      stat: 'Part of delegation in India European free trade association',
      coverImage: image1,
    },
    {
      stat: 'Leadership excellence award',
      coverImage: image3,
    },
    {
      stat: 'Govt of India initiatives on Pharma Med',
      coverImage: image2,
    },

    {
      stat: 'Rajaya Sabha standing committee on medical devices rules and regulations petition',
      coverImage: image4,
    },
    {
      stat: 'Medical Device regulations Meeting With Health Minister Dr Mansukh Mandaviya',
      coverImage: image5,
    },
    {
      stat: 'Key Handover Ceremony of new facility at AMTZ',
      coverImage: image6,
    },
    {
      stat: '400th Cath lab celebration',
      coverImage: image7,
    },
    {
      stat: 'PHDCCI Annual Excellence Award in the esteemed category of Distinguished Entrepreneurship.',
      coverImage: image8,
    },
    {
      stat: 'New Facility Inauguration of stent delivery system by Atul Sharma and  Sachin Garg in Vizag',
      coverImage: image9,
    },
    {
      stat: 'Welcoming team at our Jaipur plant',
      coverImage: image10,
    },
    {
      stat: 'Premier Elite Cath Lab Inauguration at Apollo Hospitals, Karaikudi, Tamil Nadu',
      coverImage: image12,
    },
    {
      stat: 'Karnataka Best Employer Award ',
      coverImage: image13,
    },
    {
      stat: 'Most Promising Company of the Year in Radiology & Imaging Devices',
      coverImage: image14,
    },
  ]

  return (
    <section>
      {featuresData.length === 0 ? null : (
        <>
          <section className="blade-top-padding blade-bottom-padding-lg overflow-hidden bg-lightgray">
            <h2 className="font-medium pl-4 md:pl-[4%] xl:pl-[6%] 2xl:pl-[10%]">
              Events
            </h2>
            <section className="">
              <div className="px-3 md:w-11/12 xl:w-[90%] 2xl:w-[80%] mx-auto">
                <div className="grid gap-2 md:gap-3 lg:gap-4 relative">
                  {/* {headings} */}

                  {/* Carousel buttons */}
                  <div className="md:flex gap-2.5 hidden absolute top-auto bottom-2 right-0 gsap-opacity-trans-appear">
                    <CarouselBtn
                      activeIndex={-1}
                      color="orange"
                      onClick={() => {}}
                      index={0}
                      text="Move to previous slide"
                      size="base"
                      type="button"
                      extraClasses={
                        extraClasses +
                        'swiper-prev !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black hover:!fill-orange hover:!bg-white hover:!border-white !rounded-xl'
                      }
                    />
                    <CarouselBtn
                      activeIndex={-1}
                      color="orange"
                      onClick={() => {}}
                      index={featuresData.length - 1}
                      text="Move to next slide"
                      size="base"
                      type="button"
                      isRotated
                      extraClasses={
                        extraClasses +
                        'swiper-next !border-1 !border-opacity-25 !p-4 2xl:!p-5 !fill-black !bg-transparent backdrop-blur-sm !border-black hover:!fill-orange hover:!bg-white hover:!border-white !rounded-xl'
                      }
                    />
                  </div>
                </div>
              </div>
              <div className=" md:pl-[4%] xl:pl-[5%] 2xl:pl-[10%] 2xl:pt-8 pt-5">
                <Swiper
                  slidesPerView={1.075}
                  spaceBetween={60}
                  centeredSlides
                  breakpoints={{
                    475: {
                      slidesPerView: 1.3,
                      centeredSlides: false,
                    },
                    640: {
                      slidesPerView: 1.8,
                    },
                    768: {
                      slidesPerView: 1.8,
                      pagination: false,
                      centeredSlides: false,
                    },
                    900: {
                      slidesPerView: 2,
                      pagination: false,
                      centeredSlides: false,
                    },
                    1024: {
                      spaceBetween: 60,
                      slidesPerView: 2.5,
                      pagination: false,
                      centeredSlides: false,
                    },
                    1280: {
                      pagination: false,
                      slidesPerView: 2.8,
                      centeredSlides: false,
                    },
                    1440: {
                      pagination: false,
                      slidesPerView: 3.1,
                      centeredSlides: false,
                    },
                  }}
                  pagination={{
                    bulletActiveClass: 'bg-orange opacity-100',
                    clickable: true,
                  }}
                  loop
                  // autoplay={{
                  //   delay: 2000,
                  // }}
                  speed={1000}
                  modules={[Pagination, Autoplay, Navigation, A11y]}
                  navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                  }}
                  className="pr-3 pb-16 md:pb-6 h-full select-none cursor-grab min-[475px]:pr-0 min-[475px]:ml-3"
                >
                  {featuresData.map((elem: StatsListType, index: number) => {
                    const key = `${index}`
                    return (
                      <SwiperSlide key={key} className="min-h-full h-full">
                        <article className="h-full min-h-full p-2 md:p-3 blur-gradient-home border border-white borderopacity-30 rounded-md">
                          <div className="rounded-md overflow-hidden relative z-10 2xl:h-80 xl:h-60  sm:h-60 h-52">
                            <img
                              src={elem.coverImage as string}
                              className="h-full w-full object-cover object-center"
                              alt={elem.stat}
                              aria-hidden
                            />
                          </div>

                          <div className="p-2 md:p-3 z-10">
                            <div className="flex gap-2 py-4">
                              <span className="w-5 h-[2px] bg-orange" />
                              <span className="w-16 h-[2px] bg-orange" />
                            </div>

                            {/* <h4 className="text-black font-medium tracking-wide leading-tight pb-2">
                                {elem.stat}
                                </h4> */}
                            <h6 className="text-black font-medium leading-tight pb-3 tracking-[0.5px] 2xl:min-h-[100px] xlg:min-h-[80px] min-h-[80px]">
                              {elem.stat}
                            </h6>
                          </div>
                          <div className="absolute h-full w-full top-4 left-4 z-[-1] border rounded-md bg-white bg-opacity-10 border-orange " />
                        </article>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </section>
          </section>
        </>
      )}
    </section>
  )
}
