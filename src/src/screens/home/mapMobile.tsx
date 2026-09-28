import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import { A11y, Pagination } from 'swiper'
import india from 'assets/home/mapMobile/india.png'
import asia from 'assets/home/mapMobile/asia.png'
import indonesia from 'assets/home/mapMobile/indonesia.png'

const cards = [
  {
    text: 'Manufacturing in Asia and Europe',
    id: 'three',
    coverImage: india,
  },
  {
    text: 'Export to 20 countries in Southeast Asia, Western Europe, Latin America, Africa, Middle East',
    id: 'one',
    coverImage: asia,
  },
  {
    text: 'Subsidiaries in Indonesia, Brazil, Russia, and Singapore',
    id: 'two',
    coverImage: indonesia,
  },
]

type ICard = (typeof cards)[0]
export default function MapMobile() {
  return (
    <section className="map-wrapper pt-8 pb-4  px-2.5">
      <h3 className="gsap-opacity-trans-appear  font-medium text-black lg:text-left  pb-3  text-center md:pb-6">
        Made in india for the world
      </h3>
      <h6 className="gsap-opacity-trans-appear text-black text-opacity-80 font-regular max-w-full xl:max-w-xl leading-tight text-center pb-4 ">
        A step towards global footprint <br /> of excellence
      </h6>
      <h5 className="gsap-opacity-trans-appear text-[#f69a4d] font-regular text-center  font-medium lg:text-left pb-3">
        Vision 2023-30
      </h5>
      <Swiper
        autoHeight
        pagination={true}
        modules={[Pagination, A11y]}
        className="mb-3 cursor-pointer"
      >
        {cards.map((elem) => {
          const { id } = elem
          return (
            <SwiperSlide key={id} className="px-2">
              <Card data={elem} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
function Card({ data }: { data: ICard }) {
  const { text, coverImage } = data
  return (
    <article className="w-full m-auto max-w-lg px-3 pt-7 pb-8">
      <div>
        <img
          src={coverImage}
          alt={text}
          className="h-72 w-full object-contain object-center"
        />
      </div>
      <div className="flex items-start justify-end flex-col pt-5 pb-6 px-3">
        <span className=" block leading-snug text-black w-full text-lg md:text-xl font-regular tracking-wide text-center">
          {text}
        </span>
      </div>
    </article>
  )
}
