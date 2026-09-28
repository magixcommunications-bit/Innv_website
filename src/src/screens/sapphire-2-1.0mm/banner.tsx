import React from 'react'
import product from 'assets/sapphire-2-1.0mm/banner/product.png'
import shadows from 'assets/sapphire3085mm/banner/shadow.svg'
import logo from 'assets/sapphire-2-1.0mm/banner/logo.png'
import BalloonBanner from 'organisms/balloonBanner'

const Banner = () => {
  return (
    <BalloonBanner
      productImg={product}
      shadowImg={shadows}
      logo={logo}
      logoSize="h-10 md:h-10 lg:h-14 2xl:h-16"
      bgClasses="bg-[#DDF4FE] !bg-[50%_60%] bg-cover bg-[url(assets/sapphire-2-1.0mm/banner/banner-bg.jpg)]"
      title="Sapphire 2 1.0 mm"
      desc={
        <>
          <div>
            {/* <h2 className="text-appear-anim font-bold whitespace-nowrap text-center lg:text-left lg:hidden md:-mt-2">
              Sapphire II PRO 1.0 mm
            </h2> */}
            <h3 className="text-appear-anim font-bold whitespace-nowrap text-center md:text-left idden lg:block leading-tight pt-3 md:pt-0 md:-mt-2 2xl:-mt-3">
              Sapphire II PRO 1.0 mm
            </h3>
            <h6 className="text-appear-anim font-medium text-[#333] text-opacity-80 text-center md:text-left">
              Coronary Dilatation Catheter
            </h6>
          </div>
          <h5
            className="text-appear-anim text-center font-medium md:text-left leading-snug max-w-sm 
          lg:max-w-md 2xl:max-w-lg"
          >
            Cross with Confidence <span className="font-bold">Every Time</span>
          </h5>
        </>
      }
    />
  )
}

export default Banner
