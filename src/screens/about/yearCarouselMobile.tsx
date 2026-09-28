import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Navigation, Pagination } from 'swiper'

import year2010 from 'assets/about/sliders/2010.png'
import year2011 from 'assets/about/sliders/2011.png'
import year2016 from 'assets/about/sliders/2016.png'
import year2018 from 'assets/about/sliders/2018.png'
import year2019 from 'assets/about/sliders/2019.png'
import year2020 from 'assets/about/sliders/2020.png'
import year2021 from 'assets/about/sliders/2021.png'
import year2022 from 'assets/about/sliders/2022.png'
import year2023 from 'assets/about/sliders/2023.png'
import year2024 from 'assets/about/sliders/2024.png'
import year2025 from 'assets/about/sliders/2025.png'

// 2024 icons
import CathLab from 'assets/about/sliders/Icons2024/Cath_Lab_Sold.png'
import Neurovascular from 'assets/about/sliders/Icons2024/Neurovascular.png'
import Cardiac from 'assets/about/sliders/Icons2024/Cardiac.png'

import GreatePlaceIcon from 'assets/about/sliders/Icons2025/GreatPlaceIcon.png'
import DesignAwardIcon from 'assets/about/sliders/Icons2025/DesignAwardIcon.png'
// 2025 icons
import Company from 'assets/about/sliders/Icons2025/Company.png'
import MapIcon from 'assets/about/sliders/Icons2025/MapIcon.png'
import Icon3 from 'assets/about/sliders/Icons2025/Icon3.png'

export const carousels = [
  {
    year: 2010,
    title:
      'Founded & got exclusive distributorship of Sapphire from OrbusNeich',
    coverImage: year2010,
  },
  {
    year: 2011,
    title: 'Launch of our proprietary stent brand',
    coverImage: year2011,
  },
  {
    year: 2016,
    title: 'Founded Innovation Imaging Technologies Private Limited (IITPL)',
    coverImage: year2016,
  },
  {
    year: 2018,
    title:
      'Launch of the Pinnacle Cath Lab prototype, securing the prestigious Red Dot Award',
    coverImage: year2018,
  },
  {
    year: 2019,
    title:
      "Became India's fastest growing and most awarded Cath Lab Company, and the launch of 'Pinnacle Agile'",
    coverImage: year2019,
  },
  {
    year: 2020,
    title:
      "USD 12 million in net sales, acknowledged by the Indian Government's Medical Device Company Award",
    coverImage: year2020,
  },
  {
    year: 2021,
    title: 'Celebrated the Installation of the 100th Cath Lab in India',
    coverImage: year2021,
  },
  {
    year: 2022,
    title:
      "USD 24 million in net sales, 200th Cath Lab Installation, and the launch of the most advanced 'Premier' Cath Lab",
    coverImage: year2022,
  },
  {
    year: 2023,
    title: 'Series A funding by OrbiMed',
    coverImage: year2023,
  },
  {
    year: 2024,
    title: 'Certified by Great place to work',
    titles: [
      '400 Cath Lab Sold',
      'Neurovascular Accessories launched',
      'Cardiac Accessories launched',
    ],
    coverImage: year2024,
    details: [
      {
        title: 'Cath Lab Sold',
        icon: CathLab,
      },
      {
        title: 'Neurovascular Accessories launched',
        icon: Neurovascular,
      },
      {
        title: 'Cardiac Accessories launched',
        icon: Cardiac,
      },
    ],
    mainCoverDetails: [
      {
        mainTitle: 'Certified by Great place to work',
        icon: GreatePlaceIcon,
      },
    ],
    bgImg: '',
  },
  {
    year: 2025,
    title: 'Certified by Great place to work',
    titles: [
      'Cath Lab Manufacturing unit opened at Vizag',
      "Asia's Largest Cath Lab Manufacturing unit opened at Bangalore",
      'Innvolution partners with FUJIFILM for Global Sales Collaboration',
      'Our Premier Cath Lab wins the prestigious iF DESIGN AWARD 2025',
    ],
    coverImage: year2025,
    details: [
      {
        title: 'Cath Lab Manufacturing unit opened at Vizag',
        icon: Company,
      },
      {
        title: "Asia's Largest Cath Lab Manufacturing unit opened at Bangalore",
        icon: MapIcon,
      },
      {
        title:
          'Innvolution partners with FUJIFILM for Global Sales Collaboration',
        icon: Icon3,
      },
    ],
    mainCoverDetails: [
      {
        mainTitle: 'Certified by<br/> Great place to work <br/>(2nd Time)',
        icon: GreatePlaceIcon,
      },
      {
        mainTitle:
          'Our Premier<br/> Cath Lab wins iF DESIGN<br/> AWARD 2025',
        icon: DesignAwardIcon,
      },
    ],
    bgImg: '',
  },
]

export const YearsCarousalMobile = () => {
  const [activeSlide, setActiveSlide] = useState(1)

  return (
    <section className="bg-[##EFF3F4]  block xl:hidden blade-bottom-padding blade-top-padding border-y-1 border-gray">
      <h3 className="px-3 pb-2 font-medium text-center gsap-opacity-trans-appear">
        Leaving a trail of success behind
      </h3>

      <div>
        <Swiper
          slidesPerView={1.2}
          centeredSlides
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={10}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.timeline-mobile-next-btn',
            prevEl: '.timeline-mobile-prev-btn',
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex)
          }}
          className=""
        >
          {carousels.map((elem, index) => {
            const key = `${index}`
            return (
              <SwiperSlide key={key} className="h-full pb-4">
                <div className="flex flex-col h-full">
                  <div className="overflow-hidden basis-56 grow-0 shrink">
                    <img
                      src={elem.coverImage as string}
                      className="object-contain w-full h-full"
                      alt={elem.title}
                    />
                  </div>
                  <div className="flex-0 pb-10 px-3 mx-auto max-w-[20rem] text-center">
                    <h5 className="font-medium">{elem.title}</h5>
                    {elem.titles &&
                      elem.titles.map((val, index) => {
                        return (
                          <h5 key={index} className="font-medium">
                            {val}
                          </h5>
                        )
                      })}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="grid place-content-center "></div>
    </section>
  )
}
