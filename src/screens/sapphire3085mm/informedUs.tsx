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

export default function InformedUs3085() {
  return (
    <InformedUs
      title={
        <>
          Want to get informed about <br className="min-[360px]:block hidden" />
          our <span className="text-orange">Sapphire 3 0.85mm</span>?
        </>
      }
      actionCardsList={actionCardsList}
      featureCardsList={featureCardsList}
      columnClasses="xl:grid-cols-3 xl:max-w-7xl"
      bgGrad="linear-gradient(180deg, #0B161F 0%, #272D36 100%)"
      fileLink="/brochures/Sapphire 3 0_85 mm - 1_25 mm.pdf"
      fileName="Sapphire 3 0_85 mm - 1_25 mm brochures"
      productsIcon={balloon}
      productTarget="/products/balloon-catheters"
    />
  )
}
