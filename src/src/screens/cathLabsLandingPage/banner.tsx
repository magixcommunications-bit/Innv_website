import React from 'react'
import balloon from 'assets/cathLabsLandingPage/cath-lab-device.png'
import CE from 'assets/innvolution/carousel/logos/CE-2265.svg'

export default function Banner() {
  return (
    <section
      className=" bg-orange bg-[url(assets/bg-overlay/banner.webp)] bg-cover
      min-h-[560px] max-h-[650px] lg:h-[700px] lg:max-h-[700px] xl:max-h-[920px] h-screen 2xl:min-h-[800px] 2xl:h-screen min-h-none lg:pt-5 pt-14 bg-bottom bg-no-repeat 
    flex items-end"
    >
      <div className="balloon-banner-wrapper overflow-hidden flex flex-col 2xl:gap-10 gap-0 2xl:pt-28 lg:pt-28 pt-16 2xl:max-w-4xl max-w-2xl w-container h-full">
        <h3 className="text-appear-anim basis-auto text-center font-medium">
          Leverage the power of advanced cardiovascular imaging
        </h3>

        <div className="flex-1 w-fit mt-7 mx-auto flex items-end relative">
          <img
            className="h-10 opacity-40 absolute md:bottom-[24%] bottom-[2%] z-10 right-0 text-appear-anim-delayed w-auto object-contain object-bottom"
            src={CE}
            alt="CE logo"
          />
          <img
            className="text-appear-anim-delayed w-auto object-contain object-bottom"
            src={balloon}
            alt="Schematics of a cath lab showing all the part and components as manufactured by Innvolution labs- Cath labbs are a flagship product of Innvolution"
          />
        </div>
      </div>
    </section>
  )
}
