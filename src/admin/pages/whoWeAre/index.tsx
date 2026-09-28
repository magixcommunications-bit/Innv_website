import React from 'react'

import AuthWrapperHOC from 'layouts/authWrapperHOC'
import Leaders from './leaders'
import Vision from './vision'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'
import useFetchAbout from 'hooks/useFetchAbout'
import useFetchAward from 'hooks/useFetchAward'
import useFetchNews from 'hooks/useFetchNews'

const WhoWeAre = () => {
  useFetchAbout()
  useFetchAward()
  useFetchNews()

  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3">Who We Are page</h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <div className="flex flex-col gap-10">
        <Leaders />
        <Vision />
        <SectionTitleWithBtn
          title="Section 7 (Awards)"
          subTitle="You can change it from the 'Awards and recognitions' page."
        />
        <SectionTitleWithBtn
          title="Section 8 (Address)"
          subTitle="You can change it from 'Contact us' page."
        />
        {/* If client wants separate images for address in who we are and Contact us page then enable this and links */}
        {/* <div className="bg-orange py-4 px-3 rounded-md flex justify-between items-center">
        <h5 className="font-medium leading-tight text-white">
          Section 8 (Address)
        </h5>
      </div>
      <AddressImage
        editTitle="Edit image"
        requestURL={aboutRequestURLs.SECTION_8_Image}
      />
      Rest of the details can be added from 'Contact Us' page */}
      </div>
    </AuthWrapperHOC>
  )
}

export default WhoWeAre
