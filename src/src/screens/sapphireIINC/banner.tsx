import React from 'react'
import product from 'assets/sapphireIINC/banner/product.png'
import shadows from 'assets/sapphireIINC/banner/shadow.png'
import logo from 'assets/sapphireIINC/banner/logo.svg'
import BalloonBanner from 'organisms/balloonBanner'

const Banner = () => {
  return (
    <BalloonBanner
      productImg={product}
      shadowImg={shadows}
      logo={logo}
      bgClasses="bg-[#A9E3B0] bg-[url(assets/sapphireIINC/banner/bg.jpg)] "
      title="Sapphire II NC"
      desc={
        <>
          <div>
            <h2 className="text-appear-anim font-bold whitespace-nowrap pr-8 lg:hidden md:-mt-2">
              Sapphire II NC
            </h2>
            <h3 className="text-appear-anim font-bold whitespace-nowrap pr-8 hidden lg:block leading-tight md:-mt-2 2xl:-mt-3">
              Sapphire II NC
            </h3>
            <h6 className="text-appear-anim font-medium text-[#333] text-opacity-80">
              Coronary Dilatation Catheter
            </h6>
          </div>
          <h5 className="text-appear-anim font-regular text-center md:text-left leading-snug max-w-sm lg:max-w-md 2xl:max-w-lg">
            True controlled compliance and ultimate crossability for a{' '}
            <strong className="font-bold">Wide Spectrum of Vessels</strong>{' '}
          </h5>
        </>
      }
    />
  )
}

export default Banner
