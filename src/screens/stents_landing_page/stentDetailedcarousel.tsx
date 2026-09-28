import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import image from 'assets/stents/landingPage/detailed-stent.png'
import orangePlusIcon from 'assets/stents/landingPage/stentCarousal/plus-icon.svg'
import whitePlusIcon from 'assets/stents/landingPage/stentCarousal/plus-icon-white.svg'
import bluePlusIcon from 'assets/stents/landingPage/stentCarousal/plus-icon-blue.svg'
import topLineIcon from 'assets/stents/landingPage/stentCarousal/line-icon.svg'
import bottomLineIcon from 'assets/stents/landingPage/stentCarousal/bottom-line.svg'

import img1 from 'assets/stents/1.webp'
import img2 from 'assets/stents/2.webp'
import img3 from 'assets/stents/3.webp'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './style.css'

// import required modules
import { Autoplay, Pagination, EffectFade } from 'swiper'

export default function StentsDetailsCarousel() {
  const slide1 = [
    {
      classes:
        'flex items-start gap-3 absolute top-[18vh] left-[25vw] md:top-[25vh] md:left-[30vw] lg:top-[18vh] lg:left-[30vw] xl:top-[22vh] xl:left-[25vw] 2xl:top-[20vh] font-regular font-normal leading-snug',
      plusSvg: {
        icon: orangePlusIcon,
        classes: 'h-[20px] md:h-[30px] xl:h-[35px]',
      },
      lineSvg: {
        icon: topLineIcon,
        classes: 'mt-2 md:mt-3 lg:mt-4 h-[70px] md:h-[100px] xl:h-[168px]',
      },
      desc: {
        text: 'Open cell design with optimal free cell area to navigate with excellent flexibility.',
        classes:
          'text-white max-sm:text-[12px] max-sm:top-[-15%] absolute top-0 pt-10',
      },
    },
    {
      classes:
        'flex items-start gap-3 absolute bottom-[22vh] left-[5vw] md:bottom-[28vh] lg:bottom-[17vh] lg:left-[14vw] xl:bottom-[28vh] xl:left-[15vw] 2xl:bottom-[15vh] 2xl:left-[20vw] font-regular font-normal leading-snug',
      plusSvg: {
        icon: orangePlusIcon,
        classes:
          'mt-2 md:mt-6 lg:mt-6 xl:mt-9 h-[20px] md:h-[30px] xl:h-[35px]',
      },
      lineSvg: {
        icon: bottomLineIcon,
        classes: 'h-[20px] md:h-[40px] xl:h-[55px]',
      },
      desc: {
        text: 'Unique cell arrangement to accommodate the adjacent cells.',
        classes:
          'text-white max-sm:text-[12px] absolute bottom-[-270%] md:bottom-[-140%] pt-10 xl:top-10',
      },
    },
    {
      classes:
        'flex items-start gap-3 absolute bottom-[25vh] right-[15vw] md:right-[13vw] md:bottom-[34vh] lg:right-[17vw] lg:bottom-[30vh] xl:bottom[30vh] xl:bottom-[43vh] xl:right-[10vw] 2xl:right-[20vw] 2xl:bottom-[28vh] font-regular font-normal leading-snug',
      plusSvg: {
        icon: orangePlusIcon,
        classes: 'mt-2 md:mt-6 xl:mt-9 h-[20px] md:h-[30px] xl:h-[35px]',
      },
      lineSvg: {
        icon: bottomLineIcon,
        classes: 'h-[20px] md:h-[40px] xl:h-[55px]',
      },
      desc: {
        text: 'Peak-to-peak connection for stent conformability.',
        classes:
          'text-white max-sm:text-[12px] absolute max-sm:bottom-[-210%] bottom-[-90%]',
      },
    },
  ]

  const slide2 = [
    {
      classes:
        'flex items-start gap-3 absolute top-[16vh] left-[25vw] md:top-[25vh] md:left-[30vw] lg:top-[18vh] lg:left-[30vw] xl:top-[22vh] xl:left-[25vw] 2xl:top-[20vh] font-regular font-normal leading-snug',
      plusSvg: {
        icon: whitePlusIcon,
        classes: 'h-[20px] md:h-[30px] xl:h-[35px]',
      },
      lineSvg: {
        icon: topLineIcon,
        classes: 'mt-2 md:mt-3 lg:mt-4 h-[70px] md:h-[100px] xl:h-[168px]',
      },
      desc: {
        text: '60 µ Ultra-thin strut thickness for best-in-class acute & long-term clinical performance.',
        classes:
          'text-white max-sm:text-[12px] max-sm:top-[-15%] absolute top-0 pt-10 pr-1',
      },
    },
    {
      classes:
        'flex items-start gap-3 absolute bottom-[22vh] left-[5vw] md:bottom-[28vh] lg:bottom-[17vh] lg:left-[14vw] xl:bottom-[28vh] xl:left-[15vw] 2xl:bottom-[15vh] 2xl:left-[20vw] font-regular font-normal leading-snug',
      plusSvg: {
        icon: whitePlusIcon,
        classes:
          'mt-2 md:mt-6 lg:mt-6 xl:mt-9 h-[20px] md:h-[30px] xl:h-[35px]',
      },
      lineSvg: {
        icon: bottomLineIcon,
        classes: 'h-[20px] md:h-[40px] xl:h-[55px]',
      },
      desc: {
        text: 'Straight connectors ensure zero foreshortening.',
        classes:
          'text-white max-sm:text-[12px] absolute bottom-[-200%] md:bottom-[-100%] xl:bottom-[-90%]',
      },
    },
    {
      classes:
        'flex items-start gap-3 absolute bottom-[25vh] right-[15vw] md:right-[13vw] md:bottom-[34vh] lg:right-[17vw] lg:bottom-[30vh] xl:bottom-[30vh] xl:bottom-[43vh] xl:right-[10vw] 2xl:right-[20vw] 2xl:bottom-[28vh] font-regular font-normal leading-snug',
      plusSvg: {
        icon: whitePlusIcon,
        classes: 'mt-2 md:mt-6 xl:mt-9 h-[20px] md:h-[30px] xl:h-[35px]',
      },
      lineSvg: {
        icon: bottomLineIcon,
        classes: 'h-[20px] md:h-[40px] xl:h-[55px]',
      },
      desc: {
        text: 'MCUSA: 0.920 MM2 (3.00 mm diameter): Optimum MCUSA offers uniform scaffolding & side branch accessibility.',
        classes:
          'text-white max-sm:text-[12px] absolute max-sm:bottom-[-400%] bottom-[-180%]',
      },
    },
  ]

  const slide3 = [
    {
      classes:
        'flex items-start gap-3 absolute top-[18vh] left-[25vw] md:top-[25vh] md:left-[30vw] lg:top-[18vh] lg:left-[30vw] xl:top-[22vh] xl:left-[25vw] 2xl:top-[20vh] font-regular font-normal leading-snug ',
      plusSvg: {
        icon: bluePlusIcon,
        classes: 'h-[20px] md:h-[30px] xl:h-[35px]',
      },
      lineSvg: {
        icon: topLineIcon,
        classes: 'mt-2 md:mt-3 lg:mt-4 h-[70px] md:h-[100px] xl:h-[168px]',
      },
      desc: {
        text: '0.95 mm low crossing profile contributes to excellent stent deliverability.',
        classes:
          'text-white max-sm:text-[12px] max-sm:top-[-15%] absolute top-0 pt-10 font-regular font-normal leading-snug',
      },
    },
    {
      classes:
        'flex items-start gap-3 absolute bottom-[22vh] left-[5vw] md:bottom-[28vh] lg:bottom-[17vh] lg:left-[14vw] xl:bottom-[28vh] xl:left-[15vw] 2xl:bottom-[15vh] 2xl:left-[20vw] font-regular font-normal leading-snug',
      plusSvg: {
        icon: bluePlusIcon,
        classes:
          'mt-2 md:mt-6 lg:mt-6 xl:mt-9 h-[20px] md:h-[30px] xl:h-[35px]',
      },
      lineSvg: {
        icon: bottomLineIcon,
        classes: 'h-[20px] md:h-[40px] xl:h-[55px]',
      },
      desc: {
        text: 'Proprietary stent design and cell size for effortless side branch access.',
        classes:
          'text-white max-sm:text-[12px] absolute bottom-[-270%] md:bottom-[-140%] xl:bottom-[-130%] font-regular font-normal leading-snug font-regular font-normal leading-snug ',
      },
    },
    {
      classes:
        'flex items-start gap-3 absolute bottom-[25vh] right-[15vw] md:right-[13vw] md:bottom-[34vh] lg:right-[17vw] lg:bottom-[30vh] xl:bottom-[30vh] xl:bottom-[43vh] xl:right-[10vw] 2xl:right-[20vw] 2xl:bottom-[28vh] font-regular font-normal leading-snug',
      plusSvg: {
        icon: bluePlusIcon,
        classes: 'mt-2 md:mt-6 xl:mt-9 h-[20px] md:h-[30px] xl:h-[35px]',
      },
      lineSvg: {
        icon: bottomLineIcon,
        classes: 'h-[20px] md:h-[40px] xl:h-[55px]',
      },
      desc: {
        text: 'Prominent Radiopacity for precise placement.',
        classes:
          'text-white max-sm:text-[12px] absolute max-sm:bottom-[-150%] bottom-[-90%] font-regular font-normal leading-snug',
      },
    },
  ]

  return (
    <>
      <div className="dark-background-gradient blade-top-padding blade-bottom-padding">
        <h3 className="w-container text-center text-white text-2xl lg:text-3xl 2xl:text-4xl font-medium">
          PRECISION designed for optimal HEALING
        </h3>
        {/* Desktop View */}
        <Swiper
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper cursor-grab stents-swiper h-full hidden md:block w-container-lg"
        >
          {/* Old code */}
          <SwiperSlide>
            <img
              src={img1}
              alt="Slide 1"
              className="mx-auto blade-top-padding select-none blade-bottom-padding xl:max-w-5xl 2xl:max-w-7xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt="Slide 2"
              className="mx-auto blade-top-padding select-none blade-bottom-padding xl:max-w-5xl 2xl:max-w-7xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt="Slide 3"
              className="mx-auto blade-top-padding select-none blade-bottom-padding xl:max-w-5xl 2xl:max-w-7xl"
            />
          </SwiperSlide>
        </Swiper>

        {/* Mobile View  */}
        <div className="scale-[.8] blade-top-margin-lg blade-bottom-margin-lg block md:hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={image}
            alt="Stent Image"
          />
        </div>
        <Swiper
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper stents-swiper min-h-[30vh] w-full block md:hidden text-white blade-bottom-padding"
        >
          <SwiperSlide>
            <div>
              {slide1.map((data, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex gap-4 w-container-sm items-start blade-bottom-margin"
                  >
                    <img className="h-4 mt-[5px]" src={orangePlusIcon} alt="" />
                    <h6 className="font-normal font-regular">
                      {data.desc.text}
                    </h6>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {slide2.map((data, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex gap-4 w-container-sm items-start blade-bottom-margin"
                  >
                    <img className="h-4 mt-[5px]" src={whitePlusIcon} alt="" />
                    <h6 className="font-normal font-regular">
                      {data.desc.text}
                    </h6>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {slide3.map((data, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex gap-4 w-container-sm items-start blade-bottom-margin"
                  >
                    <img className="h-4 mt-[5px]" src={bluePlusIcon} alt="" />
                    <h6 className="font-normal font-regular">
                      {data.desc.text}
                    </h6>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
