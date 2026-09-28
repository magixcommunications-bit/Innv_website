import React from 'react'
import product from 'assets/sapphire2-4.0mm/banner/product.png'
import shadows from 'assets/sapphire3085mm/banner/shadow.svg'
import logo from 'assets/sapphire2-4.0mm/banner/logo.svg'
import BalloonBanner from 'organisms/balloonBanner'

const Banner = () => {
  return (
    <BalloonBanner
      productImg={product}
      shadowImg={shadows}
      logo={logo}
      logoSize="h-10 md:h-10 lg:h-14 2xl:h-16"
      bgClasses="bg-[#DDF4FE] !bg-[50%_60%] bg-cover bg-[url(assets/sapphire2-4.0mm/banner/banner-bg.jpg)] "
      title="Sapphire 2 4.0 mm"
      desc={
        <>
          <div>
            <h2 className="text-appear-anim font-bold whitespace-nowrap text-center lg:text-left lg:hidden md:-mt-2">
              Sapphire II Pro
            </h2>
            <h3 className="text-appear-anim font-bold whitespace-nowrap text-center md:text-left hidden lg:block leading-tight md:-mt-2 2xl:-mt-3">
              Sapphire II Pro
            </h3>
            <h6 className="text-appear-anim font-medium text-[#333] text-opacity-80 text-center md:text-left">
              Coronary Dilatation Catheter
            </h6>
          </div>
          <h5
            className="text-appear-anim text-center font-regular md:text-left leading-snug max-w-sm 
          lg:max-w-md 2xl:max-w-lg"
          >
            Redefining the standard of <br />
            <span className="font-bold">Balloon Angioplasty</span>
          </h5>
        </>
      }
    />
  )
}

export default Banner
