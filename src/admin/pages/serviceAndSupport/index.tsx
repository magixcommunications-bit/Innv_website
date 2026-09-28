import React from 'react'

import AuthWrapperHOC from 'layouts/authWrapperHOC'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'

const ServiceAndSupport = () => {
  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3">Service and support</h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <div className="flex flex-col gap-10">
        <SectionTitleWithBtn
          title="Section 3 (Contact us)"
          subTitle="You can change it from Home page (data will be taken from there)."
        />
      </div>
    </AuthWrapperHOC>
  )
}

export default ServiceAndSupport
