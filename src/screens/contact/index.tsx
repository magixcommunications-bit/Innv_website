import React from 'react'
import { Banner } from './banner'
import { JoinUs } from './joinUs'
import SubFooter from 'organisms/subFooter'

import Address from 'organisms/address'
import useFetchContact from 'hooks/useFetchContact'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

export default function Pagecontact() {
  useFetchContact()
  useFetchMail()

  useGSAP('.contact-master')

  return (
    <div className="contact-master contact-wrapper ">
      <Banner />
      <SubFooter />
      <Address
        // alt={contactData.SECTION_3_Image.alt}
        // image={contactData.SECTION_3_Image.imageSrc}
        isImageStreched={false}
        bgClasses="bg[url(assets/contact/address-bg.png)]"
      />
      <JoinUs />
    </div>
  )
}
