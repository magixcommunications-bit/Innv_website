import React from 'react'
import './style.css'
import screenImage from 'assets/premier_Select/stent_clarity/clarity-screen.png'

const StentClarity = () => {
  return (
    <div className="relative information_gradient bg-lightgray bg-[url(assets/bg-overlay/ellipse-bg-big.webp)] blade-bottom-padding-lg bg-cover bg-center overflow-y-hidden flex items-center justify-center blade-top-padding">
      <div className="h-full w-full lg:flex items-center justify-center">
        <div className="flex max-lg:flex-col-reverse xl:flex items-center lg:gap-[10vmax]">
          <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-[1rem]  mt-10  md:mt-12 lg:mt-16 xl:mt-20">
            <h2
              className="gsap-opacity-trans-appear bg-clip-text text-transparent font-bold"
              style={{
                backgroundImage:
                  'linear-gradient(113deg, #F69A4D 37.57%, #FFF 250.48%)',
              }}
            >
              Stent Clarity®
            </h2>
            <h3 className="gsap-opacity-trans-appear font-medium text-center lg:text-left px-3 md:px-0">
              Experience high-resolution <br /> stent imaging
            </h3>
            <h6 className="gsap-opacity-trans-appear font-medium leading-snug w-11/12 pt-2 md:w-[60vmin] text-center lg:text-left">
              Work with high-resolution visuals of the entire stent with our
              cutting-edge Stent Clarity® technology.
            </h6>
          </div>

          <div className="px-3 md:px-0">
            <img
              className="gsap-opacity-trans-appear h-[36vmax] md:h-[33vmax] lg:mt-[1vmax] 2xl:mt-[vmax]"
              src={screenImage}
              alt="display attached with cath lab showing UI for managing cath labs- HD images and cutting edge stent clarity"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StentClarity
