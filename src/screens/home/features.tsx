import React from 'react'

import Features from 'organisms/features'
import { useAdmin } from 'store/store'
// import { FeaturesType } from 'utils/homeTypes'

export default function FeaturesHome() {
  const { homeData } = useAdmin()
  return (
    <>
      {homeData.SECTION_7.length === 0 ? null : (
        <>
          <Features
            title={
              <>
                <span className="md:block hidden ">
                  Advancing cardiovascular <br className="md:block hidden" />
                  solution delivery everywhere
                </span>
                <span className="md:hidden">
                  Advancing cardiovascular <br />
                  solution delivery everywhere
                </span>
              </>
            }
            featuresData={homeData.SECTION_7}
            toShowBtn
          />
        </>
      )}
    </>
  )
}
