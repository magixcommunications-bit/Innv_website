import React from 'react'
import product from 'assets/scoreflex/banner/product.png'
import shadows from 'assets/scoreflex/banner/shadow.png'
import BalloonBanner from 'organisms/balloonBanner'
import logo from 'assets/scoreflex/banner/logo.svg'

const Banner = () => {
  return (
    <BalloonBanner
      productImg={product}
      shadowImg={shadows}
      logo={logo}
      bgClasses="bg-[#b391c3] bg-opacity-20 bg-[url(assets/scoreflex/banner/bg.png)] "
      title="Scoreflex"
      desc={
        <>
          <div>
            <h2 className="text-appear-anim font-bold whitespace-nowrap text-center md:text-left lg:hidden md:-mt-2">
              Scoreflex
            </h2>
            <h3 className="text-appear-anim font-bold whitespace-nowrap text-center md:text-left hidden lg:block leading-tight md:-mt-2 2xl:-mt-3">
              Scoreflex
            </h3>
            <h6 className="text-appear-anim font-medium text-[#333] text-opacity-80">
              Coronary Dilatation Catheter
            </h6>
          </div>
          <h5 className="text-appear-anim font-regular text-center md:text-left leading-snug max-w-sm lg:max-w-md 2xl:max-w-lg">
            Focused Force Angioplasty for <br />
            <strong>Controlled Lesion Preparation</strong>
          </h5>
        </>
      }
    />
  )
}

export default Banner
