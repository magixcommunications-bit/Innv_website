import React from 'react'

import Features from 'organisms/features'
import { useAdmin } from 'store/store'

export default function FeaturesCath() {
  const { cathLabsData } = useAdmin()
  return (
    <>
      {cathLabsData.SECTION_5.length === 0 ? null : (
        <>
          <Features
            title={
              <>
                Transforming heart care, <br className="lg:block hidde" /> one
                milestone at a time!
              </>
            }
            featuresData={cathLabsData.SECTION_5}
          />
        </>
      )}
    </>
  )
}
