import React from 'react'
import pagelogo from 'assets/finalElite/banner/logo.svg'
import PremierBanner from 'organisms/premierBanner'

export default function Banner() {
  return (
    <PremierBanner
      title="Premier Elite"
      logo={pagelogo}
      bgClasses='bg-[#371101] bg-[url("assets/finalElite/banner/elite-mobile.jpg")] md:bg-[url("assets/finalElite/banner/elite-desktop.jpg")]'
      logoAlt="Premier Elite's logo"
      bgGrad="linear-gradient(186deg, #FFF -96.64%, #F69A4D 109.37%)"
      subDesc={
        <div className="flex items-center w-fit pb-4 text-appear-anim">
          <h4 className="font-regular text-white leading-snug hidden sm:block">
            Elevating imaging precision <br className="sm:block hidden" />
            with flexible Operating <br className="sm:block hidden" /> Space and
            Deepest Angles.{' '}
          </h4>
          <h6 className="max-w-sm text-white sm:hidden">
            Elevating imaging precision with flexible Operating Space and
            Deepest Angles.{' '}
          </h6>
        </div>
      }
    />
  )
}
