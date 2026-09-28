import React from 'react'
import product from 'assets/sapphire3-1.5mm/banner/product.png'
import shadows from 'assets/sapphire3085mm/banner/shadow.svg'
import logo from 'assets/sapphire3-1.5mm/banner/logo.svg'
import BalloonBanner from 'organisms/balloonBanner'

const Banner = () => {
  return (
    <BalloonBanner
      productImg={product}
      shadowImg={shadows}
      logo={logo}
      logoSize='h-20 md:h-24 lg:h-28 2xl:h-28'
      bgClasses="bg-[#DDF4FE] !bg-[50%_60%] bg-cover bg-[url('assets/sapphire3-1.5mm/banner/banner-bg.webp')] "
      title="Sapphire 3 0.85 mm"
      desc={
        <>
          <div>
            <h2 className="text-appear-anim font-bold whitespace-nowrap text-center lg:text-left lg:hidden md:-mt-2">
              Sapphire 3 <br className='block md:hidden' /> (1.5mm - 4.0mm)
            </h2>
            <h3 className="text-appear-anim font-bold whitespace-nowrap text-center md:text-left hidden lg:block leading-tight md:-mt-2 2xl:-mt-3">
              Sapphire 3 (1.5mm - 4.0mm)
            </h3>
            <h6 className="text-appear-anim font-medium text-[#333] text-opacity-80 text-center md:text-left">
              Coronary Dilatation Catheter
            </h6>
          </div>
          <h5 className="text-appear-anim text-center font-medium md:text-left leading-snug max-w-sm lg:max-w-md 2xl:max-w-lg">
            Supreme design for <span className='font-bold'>Crossability</span> <br /> and <span className='font-bold'>Deliverability</span>
          </h5>
        </>
      }
    />
  )
}

export default Banner
