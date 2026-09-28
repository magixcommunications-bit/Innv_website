import React from 'react'
import EterniaSVG from 'assets/stents/landingPage/logos/Vector.svg'
import NexaSVG from 'assets/stents/landingPage/logos/nexa.svg'
import BrioWebp from 'assets/stents/landingPage/logos/eterniabrio_logo.webp'
import SelectSVG from 'assets/stents/landingPage/logos/select.svg'
import product_1 from 'assets/stents/landingPage/product/product-1.png'
import product_2 from 'assets/stents/landingPage/product/product-2.png'
import product_3 from 'assets/stents/landingPage/product/product-3.png'
import product_4 from 'assets/stents/landingPage/product/product-4.png'
import { useNavigate } from 'react-router-dom'

const productDetails = [
  {
    title: 'Eternia',
    target: '/products/stents/eternia',
    logo: {
      svg: EterniaSVG,
      classes: 'h-4 2xl:h-7',
    },
    product: {
      image: product_1,
      classes: 'scale-[1.4] xl:scale-[1.4]',
    },
  },
  {
    target: '/products/stents/eternia-nexa',

    title: 'Eternia Nexa',
    logo: {
      svg: NexaSVG,
      classes: 'h-5 2xl:h-8',
    },
    product: {
      image: product_2,
      classes: 'scale-[1.3] 2xl:scale-[1.4]',
    },
  },
  {
    title: 'Eternia Brio',
    target: '/products/stents/eternia-brio',
    logo: {
      svg: BrioWebp,
      classes: 'h-5 2xl:h-8',
    },
    product: {
      image: product_3,
      classes:
        'max-[280px]:-mt-3 mt-6 xl:mt-[22px] 2xl:mt-10 xl:scale-[1.3] 2xl:scale-[1]',
    },
  },
  {
    title: 'Eternia select',
    target: '/products/stents/eternia-select',

    logo: {
      svg: SelectSVG,
      classes: 'h-5 2xl:h-8',
    },
    product: {
      image: product_4,
      classes: 'scale-[1.2] xl:scale-[1.6]',
    },
  },
]

const StentSystem = () => {
  const navigate = useNavigate()

  return (
    <div className="w-container-xl overflow-x-hidden">
      <h1 className="gsap-opacity-trans-appear pt-[70px] text-[22px] text-center font-medium xl:text-3xl 2xl:text-4xl mxl:mt-4">
        <span className="text-orange">EVEROLIMUS</span> Eluting Coronary{' '}
        <br className="max-sm:block hidden" /> Stent System
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 xl:gap-16 blade-top-margin-lg blade-bottom-margin-lg xl:gap-x-48 xl:gap-y-24 2xl:gap-x-48 2xl:gap-y-36 xl:px-12 xl:mr-10">
        {productDetails.map((elem, idx) => {
          const { target = '/coming-soon' } = elem
          return (
            <div
              key={idx}
              className="gsap-opacity-trans-appear rounded-md w-container-lg w-[300px] h-[350px] pt-5 2xl:pb-5 2xl:w-[21vmax] 2xl:h-[22vmax] card-white-linear flex flex-col items-start gap-y-10 xl:gap-y-7 2xl:gap-y-10 text-[#333333] transition-all ease-linear duration-300 hover:text-[#F98F38] hover:shadow-[5px_9px_10px_0px_#FFD5B2]"
            >
              <img
                className={elem.logo.classes}
                src={elem.logo.svg}
                alt={elem.title}
              />
              <div className="rounded-md bg-lightorange bg-cover bg-center w-full h-[60%] xl:odd:translate-x-0 xl:translate-x-28 flex items-center justify-center">
                <img
                  className={`${elem.product.classes} pointer-events-none`}
                  src={elem.product.image}
                  alt={elem.title}
                />
              </div>
              <button
                aria-label={`Know more about ${elem.title}`}
                onClick={() => {
                  navigate(target)
                }}
                className="flex items-center gap-x-1 outline-none font-medium stroke-[#F98F38] 2xl:text-xl font-regular font-normal"
              >
                Know More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="inherit"
                  className="w-5 h-5 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StentSystem
