import React from 'react'

import AuthWrapperHOC from 'layouts/authWrapperHOC'
import DesignFeatures from './designFeatures'
import Enhancements from './enhancements'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'
import useFetchElite from 'hooks/useFetchElite'

const PremierElite = () => {
  useFetchElite()
  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3">Premier Elite</h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <div className="flex flex-col gap-10">
        <SectionTitleWithBtn
          title="Section 2 (Awards)"
          subTitle="You can change it from the 'Awards and recognitions' page."
        />
        <DesignFeatures />
        <Enhancements />
      </div>
    </AuthWrapperHOC>
  )
}

export default PremierElite
