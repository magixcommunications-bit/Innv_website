import React from 'react'
import product from 'assets/scoreflexNC/banner/product.png'
import shadows from 'assets/scoreflexNC/banner/shadow.png'
import logo from 'assets/scoreflexNC/banner/logo.svg'
import BalloonBanner from 'organisms/balloonBanner'

const Banner = () => {
  return (
    <BalloonBanner
      productImg={product}
      shadowImg={shadows}
      logo={logo}
      bgClasses="bg-[#b391c3] bg-opacity-20 bg-[url('assets/scoreflexNC/banner/bg.png')]"
      title="Scoreflex NC"
      desc={
        <>
          <div>
            <h2 className="text-appear-anim font-bold whitespace-nowrap text-center lg:text-left lg:hidden md:-mt-2">
              Scoreflex NC
            </h2>
            <h3 className="text-appear-anim font-bold whitespace-nowrap text-center lg:text-left hidden lg:block leading-tight md:-mt-2 2xl:-mt-3">
              Scoreflex NC
            </h3>
            <h6 className="text-appear-anim font-medium text-[#333] text-opacity-80">
              Coronary Dilatation Catheter
            </h6>
          </div>
          <h5 className="text-appear-anim font-regular text-center md:text-left leading-snug max-w-sm lg:max-w-md 2xl:max-w-lg">
            Dual wire scoring for <br />
            effective plaque modification
          </h5>
        </>
      }
    />
  )
}

export default Banner
