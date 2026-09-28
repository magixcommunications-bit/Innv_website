import React from 'react'
import Awards from './Awards'
import SubFooter from 'organisms/subFooter'

import { ResourceBanner } from 'organisms/resourceBanner'
import useFetchMail from 'hooks/useFetchMail'
import useGSAP from 'hooks/useGSAP'

const index = () => {
  useFetchMail()
  useGSAP('.award-master')

  return (
    <main className="award-master">
      <ResourceBanner
        bgClasses="bg-[url(assets/awardsAndrecognitions/awards-banner-mobile.webp)] max-md:bg-center md:bg-[url(assets/awardsAndrecognitions/awards-banner.webp)]"
        title="Awards & recognitions"
        subTitle="Our dedication to excellence and groundbreaking solutions has been acknowledged through numerous awards and recognitions, reinforcing our position as a leader in cardiovascular innovation."
        subTitleClasses="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg 2xl:max-w-xl "
      />
      <Awards />
      <SubFooter />
    </main>
  )
}

export default index
