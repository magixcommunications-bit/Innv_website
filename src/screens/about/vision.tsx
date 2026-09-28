import React from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import Logo1 from 'assets/globals/logo.png'
import Logo2 from 'assets/about/vision/logo-02.png'
import Logo3 from 'assets/about/vision/logo03.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const data = [
  {
    id: 1,
    heading: 'Innvolution Healthcare Private Limited (IHPL),',
    para: 'co-founded by Ashvini Suthar, Atul Sharma, Sachin Garg, and Gaurav Agarwal, is known for manufacturing and distributing cardiac care consumables.',
    image: Logo1,
  },
  {
    id: 2,
    heading: 'Innovation Imaging Technologies Private Limited (IITPL),',
    para: 'co-founded by Vijay Alreja, Vikram Mordani, Naresh Alreja, and the IHPL founders, specializes in Cath Labs.',
    image: Logo2,
  },
  {
    id: 3,
    heading:
      'A recent merger has given rise to a singular force, a unified brand called Innvolution.',
    para: null,
    image: Logo3,
  },
]

type CardProps = {
  heading: string
  para: string | null
  image: string
}

export const Vision = () => {
  return (
    <div>
      <section className="blade-bottom-padding-lg blade-top-padding  bg-[#F0F4F5] overflow-x-hidden vision-wrapper bg-cover bg-center">
        <section className="blade-bottom-padding-sm blade-top-padding-sm">
          <section className="blade-bottom-padding-sm flex items-start flex-col gap-3  lg:gap-5 w-container-lg xl:w-container ">
            <h3 className="gsap-opacity-trans-appear text-center mx-auto md:text-left md:mx-0 font-medium leading-tight text-transparent bg-clip-text bg-black block ">
              Uniting together for a <br className="sm:block hidden" /> singular
              vision
            </h3>

            <h5 className="gsap-opacity-trans-appear text  font-regular  pb-3 md:pb-4 md:block hidden">
              The Innvolution Group stands as a synergy of two
              <br className="md:block hidden" /> exceptional entities:
            </h5>

            <h6 className="gsap-opacity-trans-appear text-center mx-auto md:text-left font-regular pb-3 md:pb-4 block md:hidden">
              The Innvolution Group stands as a synergy of two{' '}
              <br className="min-[390px]:block hidden" />
              exceptional entities:
            </h6>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-y-6 md:gap-4 xl:gap-6 2xl:gap-8  w-container-lg 2xl:w-container  card-wrapper ">
            {data.map((item, index) => (
              <Card
                key={index}
                heading={item.heading}
                para={item.para}
                image={item.image}
              />
            ))}
          </section>
        </section>
      </section>
    </div>
  )
}

const Card = ({ heading, para, image }: CardProps) => {
  return (
    <article className="gsap-scale px-3 py-7 h-full rounded-md flex flex-col shadow-vision-card gap-y-4 sm:gap-y-6  max-w-md xl:max-w-none   mx-auto 2xl:gap-y-8 md:py-8 sm:px-5 self-stretch md:px-7 bg-white w-full md:items-center">
      <div className="self-start pr-10 ">
        <img className="h-14 w-auto object-contain" src={image} alt={heading} />
      </div>
      <div className="flex flex-col max-w-md">
        <h5 className="font-medium  leading-snug text-xl xl:text-[24px] 2xl:text-[28px] ">
          {heading}
        </h5>
        {para && (
          <h6 className=" mt-2 md:mt-3 xl:mt-4 opacity-90 text-base  xl:text-lg 2xl:text-xl font-regular pb-4">
            {para}
          </h6>
        )}
      </div>
    </article>
  )
}
