import React from 'react'
import InformedUs, { FeatureCardsList } from 'organisms/informedUs'
import balloon from 'assets/globals/balloon.svg'

const actionCardsList = {
  showReadMore: false,
  showDownload: true,
  showContact: true,
  showFindMore: true,
}

const featureCardsList: FeatureCardsList[] = [
  {
    title: '',
    desc: '',
  },
]

export default function InformedUsIINC() {
  return (
    <InformedUs
      title={
        <>
          Want to get informed about <br className="min-[320px]:block hidden" />
          our <span className="text-orange">Sapphire II NC</span>?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-3 xl:max-w-7xl"
      bgGrad="linear-gradient(180deg, #0B161F 0%, #272D36 100%)"
      fileLink="/brochures/Sapphire-II-NC-Brochure.pdf"
      fileName="Sapphire II NC Brochure"
      productsIcon={balloon}
      productTarget="/products/balloon-catheters"
    />
  )
}
