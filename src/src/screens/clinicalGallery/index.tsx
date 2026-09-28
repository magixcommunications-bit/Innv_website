import { ResourceBanner } from 'organisms/resourceBanner'
import React from 'react'
import Carasouel from './carasouel'
import CarasouelNew from './carouselNew'

const ClinicalGallery = () => {
  return (
    <main>
      <ResourceBanner
        bgClasses="bg-[url(assets/innvolution/banner-mobile.webp)] max-md:bg-center md:bg-[url(assets/innvolution/banner.webp)]"
        title="Clinical gallery"
        subTitleClasses="max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-xl "
      />
      <Carasouel />
      {/* <CarasouelNew /> */}
    </main>
  )
}

export default ClinicalGallery
