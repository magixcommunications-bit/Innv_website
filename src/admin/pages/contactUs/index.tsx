import React from 'react'

import AuthWrapperHOC from 'layouts/authWrapperHOC'
import Address from './address'

import { contactRequestURLs } from 'utils/constants'
import AddressImage from './addressImage'
import { useAdmin } from 'store/store'
import SectionTitleWithBtn from 'molecules/sectionTitleWithBtn'
import useFetchContact from 'hooks/useFetchContact'

const ContactUs = () => {
  const { contactData } = useAdmin()
  useFetchContact()

  return (
    <AuthWrapperHOC>
      <h4 className="font-regular leading-tight py-3">Contact us</h4>
      <hr className="mt-6 mb-8 opacity-25" />

      <SectionTitleWithBtn title="Section 3 (Address)" />
      <div className="flex flex-col gap-12">
        <AddressImage
          editTitle="Edit image"
          requestURL={contactRequestURLs.SECTION_3_Image}
        />
        <Address
          addressDetails={contactData.SECTION_3_muDetails}
          editTitle="Edit Manufacturing Unit details"
          requestURL={contactRequestURLs.SECTION_3_Manufacturing}
        />
        <Address
          addressDetails={contactData.SECTION_3_oDetails}
          editTitle="Edit Office details"
          requestURL={contactRequestURLs.SECTION_3_Office}
        />
        <Address
          addressDetails={contactData.SECTION_3_rdDetails}
          editTitle="Edit R&D Center details"
          requestURL={contactRequestURLs.SECTION_3_RD}
        />
      </div>
    </AuthWrapperHOC>
  )
}

export default ContactUs
