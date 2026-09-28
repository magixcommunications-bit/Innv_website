import React from 'react'
import StatsDesignFeatures from 'organisms/designFeatures'
import { useAdmin } from 'store/store'

export default function Stats() {
  const { eliteData } = useAdmin()
  return (
    <StatsDesignFeatures
      headings={
        <>
          <h3 className="gsap-opacity-trans-appear font-medium w-11/12 md:text-left leading-snug pb-2 text-center ml-auto md:ml-0 mr-auto">
            Optimized ergonomic design <br className="sm:block hidden" />
            assures safety during procedures
          </h3>
          <h5 className="gsap-opacity-trans-appear font-light tracking-wider leading-snug max-w-md lg:max-w-2xl md:block hidden 2xl:max-w-3xl">
            The detector movement has non-touch anti-collision sensors to ensure
            patient safety while conducting a procedure.
          </h5>
          <span className="gsap-opacity-trans-appear font-light tracking-wider mx-auto text-center md:hidden block text-base leading-tight w-11/12  max-w-lg">
            The detector movement has non-touch anti-collision sensors to ensure
            patient safety while conducting a procedure.
          </span>
        </>
      }
      featuresData={eliteData.SECTION_6}
    />
  )
}
