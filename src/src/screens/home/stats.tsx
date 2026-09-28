import React from 'react'

import StatsDesignFeatures from 'organisms/designFeatures'
import { useAdmin } from 'store/store'

export default function Stats() {
  const { homeData } = useAdmin()
  return (
    <StatsDesignFeatures
      headings={
        <>
          <h3 className="gsap-opacity-trans-appear font-medium text-black">
            Acting with a purpose
          </h3>
          <h5 className="gsap-opacity-trans-appear text-[#333] font-regular tracking-wider max-w-md lg:max-w-lg md:block hidden 2xl:max-w-xl">
            We’re on a mission to democratize access to advanced cardiovascular
            care, bringing hope, and healing to countless lives.
          </h5>
          <span className="gsap-opacity-trans-appear text-[#333] font-regular tracking-wider xl:max-w-xl md:hidden block text-sm leading-tight w-11/12  max-w-lg">
            We’re on a mission to democratize access to advanced cardiovascular
            care, bringing hope, and healing to countless lives.
          </span>
        </>
      }
      featuresData={homeData.SECTION_4}
    />
  )
}
