import React from 'react'
import pagelogo from 'assets/premier_Select/logo.svg'
import PremierBanner from 'organisms/premierBanner'

export default function Banner() {
  return (
    <PremierBanner
      title="Premier Select"
      logo={pagelogo}
      
      bgClasses="bg-[#853D00] bg-[url(assets/premier_Select/banner_mobile.png)] sm:bg-[url(assets/premier_Select/banner.webp)] "
      bgGrad="linear-gradient(186deg, #FFF -96.64%, #F69A4D 109.37%)"
      logoAlt="Premier Select's logo"
      subDesc={
        <div className="flex-1 flex-col flex justify-center gap-y-2 pb-4 text-appear-anim">
          <h4 className="font-regular hidden sm:block text-white leading-snug sm:text-xl lg:text-2xl xl:text-[28px]">
            Versatility reimagined through flexible{' '}
            <br className="sm:hidden min-[780px]:block" />
            <span className="font-medium">Operating Space</span> and{' '}
            <span className="font-medium">Deepest Angles</span>.
          </h4>
          <h6 className="font-regular sm:hidden text-white leading-snug">
            Versatility reimagined through flexible{' '}
            <br className="hidden min-[380px]:block sm:hidden min-[780px]:block" />
            <span className="font-medium">Operating Space</span> and{' '}
            <span className="font-medium">Deepest Angles</span>.
          </h6>
          <p className="text-white font-light text-sm lg:text-base xl:text-lg pt-1">
            65 kW X-ray generator | 16-bit dynamic range detector | 1.5 MHU tube
          </p>
        </div>
      }
    />
  )
}
