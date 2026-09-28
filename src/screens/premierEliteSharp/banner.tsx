import React from 'react'
import pagelogo from 'assets/premierEliteSharp/banner/premier-elite-sharp-logo.png'
import PremierBanner from 'organisms/premierBanner'

export default function Banner() {
  return (
    <PremierBanner
      title="Premier Elite Sharp"
      logo={pagelogo}
      logoClasses="2xl:h-[6rem] xl:h-[5.4rem]"
      bgClasses='!bg-[length:105%] bg-[#371101] bg-[url("assets/premierEliteSharp/banner/Mobile.png")] md:bg-[url("assets/premierEliteSharp/banner/Banner.png")]'
      logoAlt="Premier Elite's sharp logo"
      bgGrad="linear-gradient(186deg, #FFF -96.64%, #F69A4D 109.37%)"
      subDesc={
        <div className="flex items-center pb-4 w-fit text-appear-anim">
          <h4 className="hidden leading-snug text-white font-regular sm:block">
            Driven by AI Excellence, harnessing
            <br className="hidden sm:block" /> our proprietary AI Algorithms for
            <br className="hidden sm:block" />
            enhanced image precision.
          </h4>
          <h6 className="max-w-sm text-white sm:hidden">
            Driven by AI Excellence, harnessing our proprietary AI Algorithms
            for enhanced image precision.
          </h6>
        </div>
      }
    />
  )
}
