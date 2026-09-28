import React from 'react'
import ClinicalCases from './clinicalCases'
import { ResourceBanner } from 'organisms/resourceBanner'

export default function ClinicalPage() {
  return (
    <div>
      <ResourceBanner
        bgClasses="bg-[url(assets/about/banner_mobile.png)] max-sm:bg-center sm:bg-[url(assets/about/banner.jpg)]"
        // bgClasses="bg-[url(assets/innvolution/banner-mobile.webp)] max-md:bg-center md:bg-[url(assets/innvolution/banner.webp)]"
        title="Clinical Cases"
        // subTitle="Towards a more accessible and sustainable future in cardiovascular care"
        subTitleClasses="max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-xl "
      />
      <ClinicalCases />
    </div>
  )
}
