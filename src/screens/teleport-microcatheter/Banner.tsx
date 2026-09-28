import React from 'react'
import product from 'assets/teleportMicroCatheter/banner/product.png'
import shadows from 'assets/sapphire3085mm/banner/shadow.svg'
import logo from 'assets/teleportMicroCatheter/banner/banner-logo.svg'
import BalloonBanner from 'organisms/balloonBanner'

const Banner = () => {
  return (
    <BalloonBanner
      productImg={product}
      shadowImg={shadows}
      logo={logo}
      bgClasses="bg-[#D4CEF1] bg-cover bg-top pt-10 bg-[url(assets/teleportMicroCatheter/banner/bg.jpg)] lg:min-h-[700px] 2xl:min-h-[800px]"
      title="Sapphire 3 0.85 mm"
      productSize="md:max-w-2xl lg:max-w-[53rem] md:-mb-4 md:w-full xl:max-w-[56rem] xl:-mb-8 md:pt-5 xl:pt-0 2xl:max-w-5xl min-[1800px]:max-w-7xl"
      desc={
        <>
          <div>
            <h2 className="text-appear-anim text-2xl font-bold whitespace-nowrap text-center lg:text-left lg:hidden md:-mt-2">
              Teleport Microcatheter
            </h2>
            <h3 className="text-appear-anim font-bold text-black whitespace-nowrap text-center md:text-left hidden lg:block leading-tight md:-mt-2 2xl:-mt-3">
              Teleport Microcatheter
            </h3>
            <h6 className="text-appear-anim font-regular text-[#000] text-opacity-80 text-center md:text-left">
              <span className="font-bold">
                Ultimate control and trackability
              </span>{' '}
              <br /> for guidewire support and exchange
            </h6>
          </div>
        </>
      }
    />
  )
}

export default Banner
